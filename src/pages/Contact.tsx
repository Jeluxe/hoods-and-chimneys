import { ChangeEvent, MouseEvent, useState } from "react"
import {
  EMAIL_REGEX,
  PHONE_REGEX,
  inputProps,
  extList
} from "../contstants/contact";
import { InputProps, FieldsProps } from "../types/contact";
import "./Contact.css"

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
            {inputProps.map(({ title, name, ...props }: InputProps, idx: number) => {
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
                      {extList.map((ext: string, idx: number) => (
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