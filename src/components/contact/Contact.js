import './contact.scss'
import { useState, useRef } from 'react'
import emailjs from 'emailjs-com';


export default function Contact() {

  // const [message, setMessage] = useState(false)
  const [done, setDone] = useState(false)

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ddah1ys', 'template_10ebyx9', formRef.current, 'user_Mujggk877bkjDoeWHkVM7')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="contact" id="contact">
      <div className="left">

      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name"/>
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {done && <span>Thanks, I will get back to you</span>}
        </form>
      </div>
    </div>
  )
}
