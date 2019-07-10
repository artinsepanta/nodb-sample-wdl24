const express = require("express");
const wishController = require("./controllers/wishController");
const app = express();

app.use(express.json());

app.get("/api/wishes", wishController.getWishes);
app.post("/api/wishes", wishController.addWish);
app.put("/api/wishes/:name", wishController.updateWish);

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
