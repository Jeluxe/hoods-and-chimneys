import { Youtube, Facebook, Instagram } from "../../assets/icons"
import './Footer.css'

const Footer = () => {
  const links = [
    { link: "https://www.youtube.com", icon: Youtube },
    { link: "https://www.facebook.com", icon: Facebook },
    { link: "https://www.instagram.com", icon: Instagram }
  ];

  return (
    <div className='footer'>
      <div className='footer-links'>
        <div className='social-media-section'>
          <ul className='social-media-links'>
            {
              links.map((item, idx) =>
                <li key={idx} className='social-media-link'>
                  <a href={item.link} target="_blank">
                    <img className="icon" src={item.icon} />
                  </a>
                </li>
              )
            }
          </ul>
          <p className="section-content">עקבו אחרנו ברשתות החברתיות</p>
        </div>
        <div className='company-information'>
          <ul>
            <li className="section-title">כתובת</li>
            <br />
            <li className="section-content">המעפילים 52, רמת גן</li>
          </ul>
          <ul>
            <li className="section-title">צור קשר</li>
            <br />
            <li className="section-content">טלפון: 058-434587274</li>
            <li className="section-content">פקס: 058-434585324</li>
            <li className="section-content" style={{ direction: "rtl" }}>מייל: fioa@hoods.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Footer;