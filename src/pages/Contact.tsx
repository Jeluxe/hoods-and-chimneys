import { ChangeEvent, MouseEvent, useState } from "react"
import "./Contact.css"

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/g;
const PHONE_REGEX = /[0-9]{2,3}-[0-9]{7,8}/g;

type FieldsProps = {
  email: string;
  phone: string;
  subject: string;
  notes: string;
}

const inputProps = [
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

const Contact = () => {
  const [fields, setFields] = useState<FieldsProps>({
    email: "",
    phone: "",
    subject: "",
    notes: ""
  })

  const [phoneExt, setPhoneExt] = useState("053")

  const [error, setError] = useState({
    error: false,
    message: ""
  })

  const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newObject = Object.assign({}, fields)
    newObject.phone = phoneExt + "-" + newObject.phone;

    const entries = Object.entries(newObject);

    if (validation(entries)) {
      alert(`בקשה נשלחה בהצלחה`)

      setFields({
        email: "",
        phone: "",
        subject: "",
        notes: ""
      })
    }
  }

  const validation = (fields: string[][]) => {
    if (fields.every(field => field[1]?.trim() === "")) {
      setError({ error: true, message: "some fields are missing" })
      console.log("missing")
      return false;
    }

    if (fields[0][0] === "email") {
      const result = EMAIL_REGEX.test(fields[0][1])
      if (result === false) {
        setError({ error: true, message: "error: email not allowed" });
        return false;
      }
    }

    if (fields[1][0] === "phone") {
      const result = PHONE_REGEX.test(fields[1][1]);
      if (result === false) {
        setError({ error: true, message: "error: phone not allowed" });
        return false;
      }
    }

    return true
  }

  const onChange = (title: string) => (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    setError({ error: false, message: "" })

    if (title === "email" || title === "phone") {
      value = value.replace(/\s/g, "")
    }


    if (title === "phone") {
      value = value.replace(/[^0-9]/g, "")
    }

    setFields(prev => ({ ...prev, [title]: value }))
  }

  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h1>צרו קשר</h1>
        <br />
        <form onSubmit={onSubmit}>
          <div className="contact-inputs">
            {inputProps.map(({ title, name, ...props }, idx) => {
              const InputComponent = title === "notes" ? "textarea" : "input";
              return <label key={idx} className={`fields field-${title}`} htmlFor={title}>{name}:
                {
                  <InputComponent
                    id="notes"
                    value={fields[title as never] || ""}
                    onChange={onChange(title)}
                    {...props}
                    required
                  />
                }
                {title === "phone" && (
                  <>
                    <span>-</span>
                    <select
                      name="phone-extensions"
                      value={phoneExt}
                      onChange={({ target: { value } }) => setPhoneExt(value)}
                    >
                      {extList.map((ext, idx) => (
                        <option key={idx} value={ext}>{ext}</option>
                      ))}
                    </select>
                  </>
                )}
              </label>
            })}
          </div>
          <br />
          <input type="submit" value={"שליחה"} />
          {error.error ? <span className="error-field">{error.message}</span> : ""}
        </form>
      </div>
    </div >
  )
}

export default Contact