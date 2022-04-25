const express = require("express");
const { createForm } = require("../controllers/formController");

const router = express.Router();

router.route("/formdata").post(createForm);

module.exports = router;
