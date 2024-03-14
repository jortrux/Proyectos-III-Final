// Import all your model files here
const User = require('./mongodb/users');
const Post = require('./mongodb/post');
const Tokens = require('./mongodb/token');
const communities = require('./mongodb/communities');
// Add more models as needed

// Export all the models as an object
module.exports = {
  usersModel: User,
  postModel: Post,
  tokenModel: Tokens,
  communityModel: communities,
  // Add more models as needed
};
