import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Working");
});

// get all quotes
app.get("/quotes", async(req, res) => {
    const result = await pool.query("SELECT * FROM quotes");
    res.json(result.rows);
});

app.delete("/quotes/:id", async (req, res) => {
    const {id} = req.params;

    await pool.query(
        "DELETE FROM quotes WHERE id = $1",
        [id]
    );

})

app.listen(5000,(req,res) => {
    console.log("http://localhost:5000");
});