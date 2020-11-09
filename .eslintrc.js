module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
};
