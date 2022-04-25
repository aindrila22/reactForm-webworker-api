const Form = require("../model/formModel");

exports.createForm = async (req, res) => {
  const form = await Form.create(req.body);
  res.status(201).json({
    success: true,
    form,
  });
};
