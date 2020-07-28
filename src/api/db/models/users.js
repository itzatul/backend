import mongoose from 'mongoose';

var user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  webId: {
    type: String,
    required: false
  },
  skills: [{
    type: String,
  }],
  verified: {
    type: Boolean,
    required: true
  }
},
{ 
  autoCreate: true
});

export const User = mongoose.model('User', user);

const mockUser = new User({ 
  name: 'Atul',
  email: 'atul@gmail.com',
  webId: 'https://atul.solid.community/profile/card#me',
  skills: ['js', 'java'],
  verified: true
});

mockUser.save(function (err) {
  if (err) return handleError(err);
  console.log('saved');
});
