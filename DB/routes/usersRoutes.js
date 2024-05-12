

const express = require("express");
const router = express.Router();
const controller = require('../controllers/usersController')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors');
router.use(cors());

router.get("/", async (req, res) => {
    res.send(await controller.getAll());
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await controller.getById(id);
    res.send(user)
});

router.post("/", async(req, res) => {
    const response=await controller.create(req.body.name, req.body.username, req.body.email, req.body.street, req.body.city, req.body.phone, req.body.password)
    res.send(await controller.getById(response.insertId));
});



router.put("/:id", async(req, res) => {
    const id = req.params.id;
    const response=await controller.update(id ,req.body.name, req.body.username, req.body.email, req.body.street, req.body.city, req.body.phone, req.body.password)
    res.send(await controller.getById(id));
});

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const response=await controller.deleteUser(id);
    res.send();
});

module.exports = router

