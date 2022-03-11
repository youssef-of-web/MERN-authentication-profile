const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProfile(data) {
  let errors = {};

  data.tel = !isEmpty(data.tel) ? data.tel : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.postalcode = !isEmpty(data.postalcode) ? data.postalcode : "";

  if (validator.isEmpty(data.tel)) {
    errors.tel = "Required tel";
  }
 
  if (validator.isEmpty(data.city)) {
    errors.city = "Required city";
  }
  if (validator.isEmpty(data.country)) {
    errors.country = "Required country";
  }
  
  if (validator.isEmpty(data.postalcode)) {
    errors.postalcode = "Required postalcode";
  }
  


  return {
      errors,
      isValid: isEmpty(errors)
  }
};
