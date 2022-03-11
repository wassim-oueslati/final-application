// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the user schema
const userSchema = new Schema({
  name: { type: String,  },
  lastName: { type: String,  },
  email: { type: String, },
  password: { type: String,  },
  work: { type: String,   },
  // skills: { type: String },
  age: { type: Number,  },
  gender: { type: String,  }, 
  experience: { type: Number,  },
  description: { type: String,  },
  location: { type: String,  },
  date: { type: Date, default: Date.now },
  profilePic:{},
  uploadCv:{},
  resetToken: {type: String},
  // expireToken:Date
});

module.exports = User = mongoose.model('User', userSchema);