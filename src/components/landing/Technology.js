import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap';
import technology from "../../assets/image/landing/technology.png";
const Technology = () => {
  return (
    <>
     <section className='technology_wrap'>
        <Container>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6}>
                    <div className='technology_details'>
                        <h2 className='technology_heading'>Principles that build our culture and trust</h2>
                        <p className='technology_text'>We value ideas that are inspired, intelligent, and creative. We are stronger when working as a unit. To provide future value, we look beyond the present. With speed, attention, and an open mind, we challenge conventional development methods.</p>
                        <a href='/about' className='technology_link'>More Aboout Us</a>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    <div className='technology_image'>
                    <Image src={technology} alt="tech" className="technology_img" fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
     </section> 
    </>
  )
}

export default Technology
