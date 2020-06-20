const express = require("express");

const uuid = require("uuid/v4");
const serverAddress = "http://localhost:8080";
const axios = require("axios");

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

  switch (responce.intent) {
    case "fee.bank.accounts": {
      axios
        .get(`${serverAddress}/api/faq/intent/${responce.intent}`)
        .then(r => {
          let question = r.data[0];
          msg.responceObject = question.answerObjects;

          res.status(200).json(msg);
        });

      break;
    }

    default: {
      msg.responceObject = [];
      res.status(200).json(msg);
      break;
    }
  }
});

module.exports = router;
