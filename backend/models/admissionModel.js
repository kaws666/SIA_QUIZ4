const mongoose = require('mongoose');


const admissionSchema = new mongoose.Schema({
  admissionDate: {
    type: Date,
    required: true
  },

  dischargeDate: {
    type: Date,
    required: true
  },

  diagnosis: {
    type: String,
    required: true
  }

}
);

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;