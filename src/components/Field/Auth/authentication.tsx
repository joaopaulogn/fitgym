// email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi,
// password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//           /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// companyName: /^[a-zA-Z ]{1,}$/,
// studentName: /^[a-zA-Z ]{1,}$/,
// phoneNumber: /\(\d{ 0, 2 } \) \d{ 5 }-\d{ 4 }/g

export const passwordAuth = (value: string) =>
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value);

export const phoneNumberAuth = (value: string) =>
  /\(\d{ 0, 2 } \) \d{ 5 }-\d{ 4 }/g.test(value);
