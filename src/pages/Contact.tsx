import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const onClick = () => {
    if ([email, phone, subject, message].every(field => field?.trim() !== "")) {
      alert(`בקשה נשלחה בהצלחה`)
      console.log({ email, phone, subject, message })
    }
  }

  return (
    <div className="contact">
      <h1>צרו קשר</h1>
      <br />
      <div className="contact-inputs">
        <div className="field-email"><span>אימייל:</span><input onChange={({ target: { value } }) => setEmail(value)} /></div>
        <div className="field-phone"><span>טלפון:</span><input onChange={({ target: { value } }) => setPhone(value)} /></div>
        <div className="field-subject"><span>נושא:</span><input onChange={({ target: { value } }) => setSubject(value)} /></div>
        <div className="field-message"><span>הערות:</span><textarea onChange={({ target: { value } }) => setMessage(value)} rows={7} maxLength={580} /></div>
      </div>
      <br />
      <button onClick={onClick}>שליחה</button>
    </div>
  )
}

export default Contact