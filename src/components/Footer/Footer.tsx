import youtubeIcon from "../../assets/images/youtube-icon.png"
import facebookIcon from "../../assets/images/facebook-icon.png"
import instagramIcon from "../../assets/images/instagram-icon.png"
// import googlePlusIcon from "../../assets/images/google-icon.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div className='social-media-section'>
          <ul className='social-media-links'>
            <li className='social-media-link'><a href="https://www.youtube.com" target="_blank"><img className="icon resized" src={youtubeIcon} /></a></li>
            <li className='social-media-link'><a href="https://www.facebook.com" target="_blank"><img className="icon resized" src={facebookIcon} /></a></li>
            <li className='social-media-link'><a href="https://www.instagram.com" target="_blank"><img className="icon resized" src={instagramIcon} /></a></li>
            {/* <li className='social-media-link'><a href="" target="_blank"><img className="icon" src={googlePlusIcon} /></a></li> */}
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
      {/* <div className='footer-credits'>@shay LTD</div> */}
    </div>
  )
};

export default Footer;