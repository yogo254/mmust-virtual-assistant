const express = require("express");

const uuid = require("uuid/v4");

const router = express.Router();

router.post("/", (req, res) => {
  let { content, contentType } = req.body;
  let msg = {
    id: uuid(),
    contentType,
    owner: "bot",
    content: `You said \"${content}\"`,
    topic: "echo"
  };

  res.status(200).json(msg);
});

module.exports = router;
