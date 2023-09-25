import mongoose from "mongoose";

export const currencySchema = new mongoose.Schema(
  {
    identifier: String,
    code: String,
    codein: String,
    name: String,
    high: String,
    low: String,
    varBid: String,
    pctChange: String,
    bid: String,
    ask: String,
    timestamp: String,
    create_date: String,
  }
);
