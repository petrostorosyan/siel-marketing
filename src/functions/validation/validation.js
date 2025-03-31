import { emailRegex, onlyNumberRegex, passwordRegex, phoneNumberRegex } from "../regex/regex";

export const requiredValidation = {
  required: "courseDetails.registration.required",
};

export const emailValidation = {
  pattern: {
    value: emailRegex,
    message: "courseDetails.registration.emailRequired",
  },
};

export const emailValidationRequired = {
  required: "courseDetails.registration.required",
  pattern: {
    value: emailRegex,
    message: "courseDetails.registration.emailRequired",
  },
};

export const onlyNumberValidation = {
  required: "Պարտադիր դաշտ*",
  pattern: {
    value: onlyNumberRegex,
    message: "Միայն թվեր*",
  },
};

export const telephoneValidation = {
  required: "courseDetails.registration.required",
  pattern: {
    // value: phoneNumberRegex,
    message: "courseDetails.registration.telephoneRequired",
  },
};

export const passwordValidation = {
  required: "courseDetails.registration.required",
  pattern: {
    value: passwordRegex,
    message: "signIn.errorMessage",
  },
};