import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { logo } from "../assets"

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="first">
          <div className="logo-info">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, mollitia in sequi cumque eligendi saepe.</p>
          </div>
          <div className="handles">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="second">
          <h3>Company</h3>
          <div>
            <a href="">Terms and conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Become a rider</a>
          </div>
        </div>
        <div className="third">
          <h3>Links</h3>
          <div>
            <a href="#">About</a>
            <a href="#">O-pilot</a>
            <a href="#">Testimonials</a>
          </div>
        </div>
        <div className="last">
          <h3>Contact</h3>
          <div>
            <p>Bethel Plaza, Okpara Avenue</p>
            <p>Enugu State</p>
            <p>hello@ogwugo.com</p>
            <p>+234 7938934 438</p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer