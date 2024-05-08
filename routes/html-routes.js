import express from 'express';
const router = express();

let route = router.get('/', (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

export { route };


