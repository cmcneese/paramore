import 'whatwg-fetch';
validate.validators.custom = function(value, options, key,attributes) {
    console.log(value);
    console.log(options);
    console.log(key);
    console.log(attributes);
    return "is totally wrong";
// }

var constraints = {
    companyname: {
        presence: true,
        exclusion: {
            within: ["Apple"],
            message: "'%{value}' is not allowed"
        }
    }
};

// validate({from: null}, constraints);
