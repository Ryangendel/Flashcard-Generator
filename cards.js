var inquirer = require('inquirer');

var c

var question = [
  {
    type: 'input',
    name: 'full',
    message: questions.full[1]
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  }
];

inquirer.prompt(question).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});