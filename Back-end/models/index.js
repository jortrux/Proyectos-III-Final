// Import all your model files here
const User = require('./mongodb/users');
const Post = require('./mongodb/post');
// Add more models as needed

// Export all the models as an object
module.exports = {
  usersModel: User,
  postModel: Post,
  // Add more models as needed
};