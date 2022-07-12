const cleverbot = require("cleverbot-free"),
  express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8000;

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const response = await cleverbot(message);
  res.json({
    response: response,
  });
});
app.listen(port, () => console.log('Server running at http://localhost:'+port));

