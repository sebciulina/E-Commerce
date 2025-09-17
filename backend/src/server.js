import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API działa 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend działa na http://localhost:${PORT}`));
