import 'whatwg-fetch';
validate.validators.custom = function (value, options, key, attributes) {
  console.log(value);
  console.log(options);
  console.log(key);
  console.log(attributes);

  return 'is totally wrong';
};

const data = {
  name: 'John',
  email: 'johndoe@gmail.com',
  age: 28
};

const rules = {
  name: 'required',
  email: 'required|email',
  address: 'required',
  businessCity: 'required',
  zip: 'required|zip',
};


const validation = new Validator(data, rules);

validation.passes(); // true
validation.fails(); // false

validation.errors.first('email'); // 'The email format is invalid.'
validation.errors.get('email'); // returns an array of all email error messages
