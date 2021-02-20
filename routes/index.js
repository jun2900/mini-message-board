var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi There!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "Message Form" });
});

router.post("/new", (req, res, next) => {
  const { author, text } = req.body;
  messages.push({ text: text, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
