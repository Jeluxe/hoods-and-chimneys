import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [notes, setNotes] = useState<string>("")

  const onClick = () => {
    if ([email, name].every(field => field?.trim() !== "")) {
      alert(`בקשה נשלחה בהצלחה`)
      console.log({ email, name, notes })
    }
  }

  return (
    <div className="contact">
      <h1>צרו קשר</h1>
      <br />
      <div className="contact-inputs">
        <div><span>אימייל:</span><input onChange={({ target: { value } }) => setEmail(value)} /></div>
        <div><span>שם מלא:</span><input onChange={({ target: { value } }) => setName(value)} /></div>
        <div><span>הערות:</span><textarea onChange={({ target: { value } }) => setNotes(value)} /></div>
      </div>
      <br />
      <button onClick={onClick}>שליחה</button>
    </div>
  )
}

export default Contact