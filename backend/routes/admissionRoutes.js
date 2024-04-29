const express = require('express');
const router = express.Router();
const Admission = require('../models/admissionModel');

// CREATE ADMI
router.post('/', async (req, res) => {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json(admission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
);

// READ ALL ADMI
router.get('/', async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
);

// UPDATE ADMI
router.patch('/:id', async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(admission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
);

// DELETE ADMI
router.delete('/:id', async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.json({ message: 'Admission deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
);

module.exports = router;