import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import {BsArrowRightShort} from "react-icons/bs";
import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter ,FiPhone } from "react-icons/fi";
import { FaSkype} from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
import cdn from "../../assets/image/landing/cdn.png";
import dmca from "../../assets/image/landing/dmca.png";
import clt from "../../assets/image/landing/clt.png";
import goodfirm from "../../assets/image/landing/goodfirm.png";
const Footer = () => {
  
  return (
    <>
     <section className='footer_section'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <div className='footer_head'>
              <div className='subscribe_field_div'>
                <h2 className='subscribe_h2'>Subscribe for Updates</h2>
                <div className='subscribe_email_field'>
                  <input type="email" placeholder='Email Address' className='subscribe_email'/>
                  <button className='subscribe_btn'><BsArrowRightShort className="subscribe_icon"/></button>
                </div>
              </div>
              <div className='social_media_links'>
                <a href='https://www.facebook.com/infograins/' className='social_media_link' target="_blank"><FiFacebook/></a>
                <a href='https://twitter.com/infograinssoft/' className='social_media_link' target="_blank"><FiTwitter/></a>
                <a href='https://www.instagram.com/infograins/' className='social_media_link' target="_blank"><FiInstagram/></a>
                <a href='https://www.linkedin.com/company/infograin-software-solutions/' className='social_media_link' target="_blank"><FiLinkedin/></a>
                <a href='https://join.skype.com/invite/NqBQ11qKBCxI' className='social_media_link' target="_blank"><FaSkype/></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
              <Col sm={6} md={3} lg={3} xl={3}>
                <div className='foot_sec'>
                  <h4 className='foot_sec_subhead'>Resources</h4>
                  <ul className='foot_sec_items'>
                    <li><a href="/how-can-we-help" className='foot_sec_link'>How Can We Help</a></li>
                    <li><a href="/grow-your-business-idea" className='foot_sec_link'>Grow Your Business Idea</a></li>
                    <li><a href="/business-communications" className='foot_sec_link'>Business Communications</a></li>
                    <li><a href="/quality-assurance" className='foot_sec_link'>Quality Assurance</a></li>
                    <li><a href="/our-work-process" className='foot_sec_link'>Our Work Process</a></li>
                  </ul>
                </div>
              </Col>
              <Col sm={6} md={3} lg={3} xl={3}>
                <div className='foot_sec'>
                  <h4 className='foot_sec_subhead'>Company</h4>
                  <ul className='foot_sec_items'>
                    <li><a href="/career" className='foot_sec_link'>Career</a></li>
                    <li><a href="/sitemap" className='foot_sec_link'>Sitemap</a></li>
                    <li><a href="/event" className='foot_sec_link'>Event</a></li>
                    <li><a href="/privacy-policy" className='foot_sec_link'>Privacy Policy</a></li>
                    <li><a href="/term-condition" className='foot_sec_link'>Term and Condition</a></li>
                  </ul>
                </div>
              </Col>
              <Col sm={6} md={3} lg={3} xl={3}>
                <div className='foot_sec'>
                  <h4 className='foot_sec_subhead'>Services</h4>
                  <ul className='foot_sec_items'>
                    <li><a href="/web3-development" className='foot_sec_link'>Web3 Development</a></li>
                    <li><a href="/metaverse-development" className='foot_sec_link'>Metaverse Development</a></li>
                    <li><a href="/public-blockchain-development" className='foot_sec_link'>Public Blockchain Development</a></li>
                    <li><a href="/private-blockchain-development" className='foot_sec_link'>Private Blockchain Development</a></li>
                    <li><a href="/poc-development" className='foot_sec_link'>POC Development</a></li>
                  </ul>
                </div>
              </Col>
              <Col sm={6} md={3} lg={3} xl={3}>
                <div className='foot_sec'>
                  <h4 className='foot_sec_subhead'>About</h4>
                  <ul className='foot_sec_items'>
                    <li><a href="/about-company" className='foot_sec_link'>About Company</a></li>
                    <li><a href="/vision-mission" className='foot_sec_link'>Vision & Mission</a></li>
                    <li><a href="/become-our-partner" className='foot_sec_link'>Become Our Partner</a></li>
                    <li><a href="/our-technology-partners" className='foot_sec_link'>Our Technology Partners</a></li>
                  </ul>
                </div>
              </Col>
        </Row>
      </Container>
        <div className='address_wrap'>
          <Container>
          <div className='footer_address'>
            <Row>
              <Col xl={6} lg={6} md={6} sm={12}>
                <div className='ind_address_wrap'>
                <div className='card_address'>
                  <div className='card_body_address'>
                    <h5 className='card_add_title_h5'>INDIA OFFICE</h5>
                    <p className='card_add_text'>407, Atulya IT Park, Bhawarkuan Main Rd, Indore, Madhya Pradesh 452010</p>
                    <p className='card_add_text'><FiPhone className="card_add_icon"/> +91 9770477239 | +91 9713406272</p>
                    <a href="mailto:info@infograins.com | hr@infograins.com" className='card_add_link'><AiOutlineMail className="card_add_icon"/> info@infograins.com | hr@infograins.com</a>
                  </div>
                </div>
                <div className='clt_and_gfr_img_wrap mt-5'>
                  <Image src={clt} className="clt_and_gfr_img" />
                  <Image src={goodfirm} className="goodfirm-widget_img" />
                </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12}>
                <div className='sub_address_wrap'>
                <Row>
                <Col xl={6} lg={6} md={6} sm={6}>
                <div className='card_address'>
                  <div className='card_body_address'>
                    <h5 className='card_add_title_h5'>UK OFFICE</h5>
                    <p className='card_add_text'>Apartment 4105, 25 Arena Tower Crossharbour Plaza, London E14 9YF</p>
                    <p className='card_add_text'><FiPhone className="card_add_icon"/>  +447401232155</p>
                  </div>
                </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6}>
                <div className='card_address'>
                  <div className='card_body_address'>
                    <h5 className='card_add_title_h5'>USA OFFICE</h5>
                    <p className='card_add_text'>135, 447 Broadway, 2nd Floor, New York, NY 10013, USA</p>
                    <p className='card_add_text'><FiPhone className="card_add_icon"/> +12025196167</p>
                  </div>
                </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6}>
                <div className='card_address'>
                  <div className='card_body_address'>
                    <h5 className='card_add_title_h5'>AUSTRALIA OFFICE</h5>
                    <p className='card_add_text'>264 George Street, Sydney 2000</p>
                    <p className='card_add_text'><FiPhone className="card_add_icon"/>+61480043472</p>
                  </div>
                </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6}>
                <div className='card_address'>
                  <div className='card_body_address'>
                    <h5 className='card_add_title_h5'>UAE OFFICE</h5>
                    <p className='card_add_text'>FDRK3822 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates</p>
                    <p className='card_add_text'><FiPhone className="card_add_icon"/> +971585596272</p>
                  </div>
                </div>
                </Col>
                </Row>
                </div>

              </Col>
            </Row>
            </div>
          </Container>
        </div>
     </section> 

     <section className='app_footer'>
      <Container>
        <Row>
          <Col lg={12}>
            <div className='bottom_footer my-2'>
              <a href="//www.dmca.com/Protection/Status.aspx?id=064d3eba-ec5d-411c-80de-5f48aa985d6e" className='bottom_footer_logo'><Image src={dmca} className="dmca_logo" /></a>
              <div className='cdn_class'>
                <h4 className='cdn_h4'>Part of <br/><p>CDN Solutions Group</p></h4>
                <a href="//www.dmca.com/Protection/Status.aspx?id=064d3eba-ec5d-411c-80de-5f48aa985d6e" className='bottom_footer_cdn'><Image src={cdn} className="cdn_logo" /></a>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <p className='bottom_copy_right'>Copyright©2022 | All right reserved</p>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Footer
