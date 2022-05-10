import express from "express";
import axios from "axios";
import { Ifinance, IBolsonaro } from "./interfaces";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.get("/mstr", (req, res) => {
  axios
    .get<Ifinance>(
      "https://query1.finance.yahoo.com/v7/finance/quote?symbols=MSTR"
    )
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) res.status(500).json(err.message);
      else res.status(500);
    });
});

app.get("/bolsonaro", (req, res) => {
  axios
    .get<IBolsonaro>("https://ftx.com/api/markets/BOLSONARO2022")
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) res.status(500).json(err.message);
      else res.status(500);
    });
});

export default app;
