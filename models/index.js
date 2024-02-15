// Import all your model files here
const UserModel = require('./UserModel');
const PostModel = require('./PostModel');
// Add more models as needed

// Export all the models as an object
module.exports = {
  User: UserModel,
  Post: PostModel,
  // Add more models as needed
};
