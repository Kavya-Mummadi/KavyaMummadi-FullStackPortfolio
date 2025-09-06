const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "portfolio.db");
let db = null;

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });
        app.listen(5000, () => {
            console.log("Server Running at http://localhost:5000/");
        });
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();

app.get("/", async (req, res) => {

    const headerItems = await db.all("SELECT* FROM header_items")
    const aboutmeRoles = await db.all("SELECT * FROM about_me_roles");
    const projects = await db.all("SELECT * FROM featured_projects");
    const experience = await db.all("SELECT * FROM experience");
    const skillCategories = await db.all("SELECT * FROM skill_categories");
    const skills = await db.all("SELECT * FROM skills");
    const contactInfo = await db.all("SELECT * FROM contact_info");
    const socialMediaIcons = await db.all("SELECT * FROM social_media_icons")

    res.json({ headerItems, aboutmeRoles, projects, experience, skills, skillCategories, getInTouch: { contactInfo, socialMedia: socialMediaIcons } });

});

