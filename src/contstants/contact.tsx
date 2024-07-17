import { InputProps } from "../types/contact";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/g;
const PHONE_REGEX = /[0-9]{2,3}-[0-9]{7,8}/g;


const inputProps: InputProps[] = [
  {
    title: "email",
    name: "אימייל",
  },
  {
    title: "phone",
    name: "טלפון",
    minLength: 7,
    maxLength: 8
  },
  {
    title: "subject",
    name: "נושא"
  },
  {
    title: "notes",
    name: "הערות",
    rows: 7,
    maxLength: 580
  }
]

const extList = ["053", "052", "051", "050", "03", "02"];

export {
  EMAIL_REGEX,
  PHONE_REGEX,
  inputProps,
  extList
}