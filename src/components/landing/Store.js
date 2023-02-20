import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap';
import store from "../../assets/image/landing/store.png";
const Store = () => {
  return (
    <>
        <section className='store_wrap'>
        <Container>
            <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
                    <div className='store_image'>
                    <Image src={store} alt="tech" className="store_img" fluid/>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    <div className='store_details'>
                    <h4 className='store_heading_h4'>What We Do?</h4>
                        <h2 className='store_heading'>Your business needs us</h2>
                        <p className='store_text'>We respect your business vision and will provide you with top-notch software for it. We offer simple answers to challenging business problems. We work to advance your company through strategy, design, and cutting-edge technology.</p>
                        <a href='/about' className='store_link'>More Aboout Us</a>
                    </div>
                </Col>
            </Row>
        </Container>
     </section> 
    </>
  )
}

export default Store
