const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true
  },

  firstName: {
    type: String,
    required: true
  },

  speciality: {
    type: String,
    required: true
  },

  active: {
    type: Boolean,
    default: true
  }

}
);

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;