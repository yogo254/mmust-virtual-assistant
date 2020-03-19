const express = require("express");

const uuid = require("uuid/v4");

const router = express.Router();
const { dockStart } = require("@nlpjs/basic");
let nlp;
(async () => {
  const dock = await dockStart();
  nlp = dock.get("nlp");
  await nlp.train();

  // const response = await nlp.process("en", "tell me about you");
  return nlp;
})();

router.post("/", async (req, res) => {
  let { content, contentType } = req.body;
  let responce = await nlp.process("en", content);
  let msg = {
    id: uuid(),
    contentType,
    owner: "bot",
    content: responce.answer,
    topic: "livebot"
  };

  res.status(200).json(msg);
});

module.exports = router;
