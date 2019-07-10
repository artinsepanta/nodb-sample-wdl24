const express = require("express");
const wishController = require("./controllers/wishController");
const app = express();

app.get("/api/wishes", wishController.getWishes);

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
