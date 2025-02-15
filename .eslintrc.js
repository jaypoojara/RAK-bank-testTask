module.exports = {
  
    "env": {
      "browser": true,
      "es2022": true
    },
    "extends": ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier"],
    "plugins": ["react", "react-native"],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
  //you can turn off warning by making it "off"
      "react/function-component-definition": "off",
      "no-param-reassign": "off",
  
      // allow .js files to contain JSX code
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  
      // prevent eslint to complain about the "styles" variable being used before it was defined
      "no-use-before-define": ["error", { "variables": false }],
  
      // ignore errors for the react-navigation package
      "react/prop-types": ["error", { "ignore": ["navigation", "navigation.navigate"] }],
  
      // enforce a maximum of two styles for inline styles
      "react-native/no-inline-styles": "error", // Add this line
  
      // enforce a maximum file length of 500 lines
      "max-lines": ["error", { "max": 500 }],
      "react-hooks/exhaustive-deps": 'warn'
    }
  
};
