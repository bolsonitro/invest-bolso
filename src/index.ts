import express from "express";
import axios from "axios";
import cors from "cors";
import { Ifinance, Iftx } from "./interfaces";
const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.get("/mstr", (req, res) => {
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

app.get("/bolsonaro", (req, res) => {
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

app.get("/bitcoin", (req, res) => {
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

export default app;
