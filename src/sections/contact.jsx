import { EmailIcon } from "../../public/assets/contact/EmailIcon";
import { TelIcon } from "../../public/assets/contact/TelIcon";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__group">
          <EmailIcon />
          <a href="mailto:info@youremail.com" className="contact__link">
            info@youremail.com
          </a>
        </div>
        <div className="separator"></div>
        <div className="contact__group">
          <TelIcon />
          <a href="tel:+880 321 655 9985" className="contact__link">
            +880 321 655 9985
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
