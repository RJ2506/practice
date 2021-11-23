const express = require("express");
const fs = require("fs").promises;
const PORT = process.env.PORT || 8007;
const app = express();

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("createcard");
});

app.get("/homepage", (req, res) => {
    res.render("homepage");
});

app.post("/createcard", async(req, res) => {
    const data = await req.body;
    const db = await fs
        .readFile("./database.json")
        .then(() => fs.writeFile(db, `${data}`))
        .catch((err) => console.log(err));
    res.render("homepage", { user: data });
});
app.get("/people/:id", (req, res) => {
    res.render("people");
});

app.get("/:id/photos", (req, res) => {
    const id = req.params.id;
});

// app.get("/createcard", (req, res) => {
//     res.render("createcard");
// });
app.listen(PORT, () => {
    console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});