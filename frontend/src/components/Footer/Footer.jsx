
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Build Full Stack Food Ordering Website using React JS, MongoDB, Express, Node JS & Strip | Full Stack Project for students 2024</p>
                 <div className="footer-social-icons">
                     <img src={assets.facebook_icon}  />
                     <img src={assets.twitter_icon}  />
                     <img src={assets.linkedin_icon}  />
                 </div>
            </div>
            <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                  </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div> 
        <hr />
        <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
