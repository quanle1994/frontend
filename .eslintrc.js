module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "global-require": 0,
    "linebreak-style": 0,
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "document": false
  }
};
