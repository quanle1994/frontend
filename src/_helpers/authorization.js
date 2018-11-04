import base64 from 'base-64';

const generateToken = (username, password) => {
  return `Basic ${base64.encode(`${username}:${password}`)}`
};

module.exports = {
  generateToken
};
