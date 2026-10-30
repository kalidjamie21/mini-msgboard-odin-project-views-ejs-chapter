const express = require("express");

const router = express.Router();

// this would otherwise be the database which belongs to the model section of the MVC
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

// GET /
router.get("/", (req, res) => {
  res.render("index", { messages: messages, title: "Mini Message Board Game" });
});

// GET /new
router.get("/new", (req, res) => {
  res.render("form");
});

// POST /new
router.post('/new', (req, res) => {
  const { messageText, authorName } = req.body;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.redirect('/');
});

// GET /messages/:id
router.get("/messages/:id", (req, res) => {
  const id = Number(req.params.id);
  const message = messages[id];

  if (!Number.isInteger(id) || id < 0 || !message) {
    return res.status(404).send("Message not found");
  }

  res.render("messageDetails", { message });
});

module.exports = router;