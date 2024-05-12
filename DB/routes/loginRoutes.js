const express = require("express");
const router = express.Router();
const controller = require('../controllers/loginController')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const cors = require('cors');
router.use(cors());

router.get("/", async(req, res) => {
    console.log('req q:',req.query)
    const response=await controller.getByQuery(req.query)
    console.log("username: ", req.body.username)
    console.log("password: ", req.body.password)
    console.log("response:", response);
    console.log( controller.getById(response));
    res.send(response)
});

module.exports = router
