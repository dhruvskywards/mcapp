/* eslint-disable no-useless-escape */
import validate from 'validate.js';
import Messages from '../utils/message';

let constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: Messages.emailBlank,
    },
    format: {
      pattern:
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message: Messages.emailInvalid,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: Messages.pwdBlank,
    },
    format: {
      pattern:
        /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,30}/,
      message: Messages.pwdInvalid,
    },
  },
  check: {
    presence: {
      message: Messages.check,
    },
    inclusion: {
      within: [true],
      message: Messages.check,
    },
  },
  loginPassword: {
    presence: {
      allowEmpty: false,
      message: Messages.pwdBlank,
    },
  },
  signupMobileNumber: {
    presence: {
      allowEmpty: false,
      message: Messages.mobileNoBlank,
    },
  },
  genderSelect: {
    presence: {
      allowEmpty: false,
      message: Messages.genderSelection,
    },
  },
  FullnameEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.firstNameBlank,
    },
  },
  UsernameEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.lastNameBlank,
    },
    length: {
      minimum: 5,
      message: Messages.usernamelength,
    },
  },
  birthDateEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.birthDateBlank,
    },
  },
  addressEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.addressBlank,
    },
  },
  stateEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.stateBlank,
    },
  },
  countryEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.countryBlank,
    },
  },
  otpEmpty: {
    presence: {
      allowEmpty: false,
      message: Messages.otpBlank,
    },
  },
};

export const validateAge = birthday => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default function validation(fieldName, value) {
  let formValues = {};
  formValues[fieldName] = value;

  let formFields = {};
  formFields[fieldName] = constraints[fieldName];

  let result = validate(formValues, formFields, {fullMessages: false});

  if (result) {
    return result[fieldName][0];
  }
  return null;
}

let PasswordConstraints = {
  password: {
    presence: {
      message: Messages.pwdBlank,
    },
    length: {
      minimum: 6,
      message: Messages.padLength,
    },
  },
  confirmPassword: {
    presence: {
      message: Messages.confirmPwdBlank,
    },
    equality: {
      attribute: 'password',
      message: Messages.pwdMisMatch,
    },
  },
};

/**
 * @return {null}
 */
export function PasswordValidate(password, confirmPassword) {
  let result1 = validate(
    {
      password: password,
      confirmPassword: confirmPassword,
    },
    PasswordConstraints,
    {fullMessages: false},
  );

  if (result1 !== undefined && result1.confirmPassword !== undefined) {
    return result1.confirmPassword[0];
  }
  return null;
}

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
