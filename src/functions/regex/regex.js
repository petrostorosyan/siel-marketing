export const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const onlyNumberRegex =  /^\d+$/;
// export const phoneNumberRegex = /(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})/;
export const phoneNumberRegex = /^(?:(?:\+374|0)([1-9]{1})([0-9]{7}))$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;