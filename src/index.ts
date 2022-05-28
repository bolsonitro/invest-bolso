import express from "express";
import axios from "axios";
import cors from "cors";
import { Ifinance, Iftx } from "./interfaces";
import { Request, Response } from "express";
import { RestClient } from "ftx-api";
require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.get("/mstr", (req: Request, res: Response) => {
  axios
    .get<Ifinance>(
      "https://query1.finance.yahoo.com/v7/finance/quote?symbols=MSTR"
    )
    .then(({ data }) => {
      res.status(200).json(data.quoteResponse.result[0]);
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) res.status(500).json(err.message);
      else res.status(500);
    });
});

app.get("/bolsonaro", (req: Request, res: Response) => {
  axios
    .get<Iftx>("https://ftx.com/api/markets/BOLSONARO2022")
    .then(({ data }) => {
      res.status(200).json(data.result);
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) res.status(500).json(err.message);
      else res.status(500);
    });
});

app.get("/bitcoin", (req: Request, res: Response) => {
  axios
    .get<Iftx>("https://ftx.com/api/markets/BTC/USD")
    .then(({ data }) => {
      res.status(200).json(data.result);
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) res.status(500).json(err.message);
      else res.status(500);
    });
});

app.get("/brz", (req: Request, res: Response) => {
  axios
    .get<Iftx>("https://ftx.com/api/markets/BRZ/USD")
    .then(({ data }) => {
      res.status(200).json(data.result);
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) res.status(500).json(err.message);
      else res.status(500);
    });
});

app.get("/position", async (req: Request, res: Response) => {
  if (!process.env.PUBLIC_API_KEY)
    return res.status(500).json({ message: "Missing API Key in Env" });
  const client = new RestClient(
    process.env.PUBLIC_API_KEY,
    process.env.PRIVATE_API_KEY
  );
  const positions = await client.getPositions(true);
  const bolsonaroPosition = positions.result.find((position) => {
    return position.future == "BOLSONARO2022";
  });
  res.status(200).json(bolsonaroPosition);
});

export default app;
