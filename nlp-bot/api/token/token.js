const express = require("express");

const uuid = require("uuid/v4");
const key = require("../../keys/key");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  axios
    .post(
      "https://centralus.api.cognitive.microsoft.com/sts/v1.0/issuetoken",
      null,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": key.key,
          "Content-Length": 0,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .catch(e => res.status(200).json(""))
    .then(r => {
      if (r) res.status(200).json(r.data);
      else res.status(200).json("");
    });
});

module.exports = router;
