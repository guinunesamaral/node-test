import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
    res.send("Hello");
});

app.listen(8080, () => {
    console.log("Listening on port 8080.");
});
