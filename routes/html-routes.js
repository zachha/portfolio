import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

router.get('/projects', (req, res) => {
    try {
        res.render("projects");
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

router.get('/about', (req, res) => {
    try {
        res.render("aboutme");
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

router.get('/contact', (req, res) => {
    try {
        res.render("contact");
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

export default router;


