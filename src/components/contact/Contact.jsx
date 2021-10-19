import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <i class="fas fa-envelope "></i>
          <input type="text"  placeholder="Email"  /></div>
          <div><i class="fas fa-phone-square-alt "></i>
          <input type="number" placeholder="Phone No." /></div>
          <div><i class="fas fa-lightbulb"></i>
            <textarea placeholder="Message"></textarea></div>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP ♥ :)</span>}
        </form>
      </div>
      </div>
    
    
  );
}
