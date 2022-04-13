const phoneStr = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/

export const phone = (text: string) => {
  return phoneStr.test(text);
}
export const username = (text?: string) => {
  return text && text.length >=6 && text.length <=12
}

export const password = (text?: string) => {
  return text && text.length >=6 && text.length <=20
}

const validator = {
  phone,
  username,
  password,
}
export default validator;