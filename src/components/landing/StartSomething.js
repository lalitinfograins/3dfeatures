import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap';
import start_something from "../../assets/image/landing/start_something.png";
const StartSomething = () => {
  return (
    <>
       <section className='start_something_wrap'>
        <Container>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6}>
                    <div className='start_something_details'>
                        <h2 className='start_something_heading'>We Aim for Excellence in Blockchain Technology</h2>
                        <p className='start_something_text'>You will explore and comprehend the possibilities of tailored Blockchain solutions for your company with our combined industry experience, knowledge, and technological competence. High-end, technologically advanced solutions created by our blockchain experts can take your business to new heights.</p>
                        <a href='/about' className='start_something_link'>Lets Start</a>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    <div className='start_something_image'>
                    <Image src={start_something} alt="tech" className="start_something_img" fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
     </section> 
    </>
  )
}

export default StartSomething
