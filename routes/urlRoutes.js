import express from "express";
import Url from "../models/Url.js";
import { nanoid } from "nanoid";
import { validateUrl } from "../utils/validation.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const base = process.env.BASE_URL;
  const urlId = nanoid();
  
  if (validateUrl(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });
      if (url) {
        res.json(url);
      } else {
        const shortenUrl = `${base}/${urlId}`;

        url = new Url({
          originalUrl,
          shortenUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
});

router.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.originalUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

export default router;
