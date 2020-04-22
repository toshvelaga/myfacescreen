import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom'

// import { faFacebook } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (<>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">MyFaceScreen prints high quality personal protective masks with customized designs. All manufacturing and printing is done in the United States. </p>
          </div>

        </div>
        <hr />
      </div>
      <div class="container">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by MyFaceScreen.</p>
          </div>

            <ul class="social-icons">
              <li><Link to="#"><FontAwesomeIcon className="SocialMediaIcons" icon={faFacebook} /></Link></li>
              <li><Link to="#"><FontAwesomeIcon className="SocialMediaIcons" icon={faTwitter} /></Link></li>
              <li><Link to="#"><FontAwesomeIcon className="SocialMediaIcons" icon={faInstagram} /></Link></li>
              <li><Link to="#"><FontAwesomeIcon className="SocialMediaIcons" icon={faLinkedin} /></Link></li>   
            </ul>
      </div>
      </footer>
    </>);
}
 
export default Footer;