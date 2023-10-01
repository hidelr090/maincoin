import mongoose from "mongoose";

export const apiKeySchema = new mongoose.Schema(
  {
    name: String,
    apiKey: String,
    description: String,
    uniqueIdentifier: String,
    createdAt: Date,
    updatedAt: Date,
    isActive: Boolean,
    owner: String,
    useLimits: {
      requestsByMinute: Number,
      requestsByDay: Number
    }
  }
);
