import React, {useState} from 'react'
import { Col, Container, Row, Image} from 'react-bootstrap';
import hero from "../../assets/image/landing/hero.png";

const Hero = () => {
  return (
    <>
      <section className='hero_wrap'>
        <Container>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <div className='hero_content'>
                    <p><span className='hero_span'>Slice wallet</span></p>
                    <h1 className='hero_heading'>Services That Are Synonymous With <span className='hero_span_h1'>Your Organization</span></h1>
                   <p className='hero_text'>Our easy-to-use client-side interface named Slice wallet is available for free. With our straightforward, open-source platform, you can accomplish a lot more.</p>
                   <a href='/about Us' className='hero_btn'>Read More</a>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <div className='hero-images'>
                        <Image src={hero} className="hero_img" alt="hero-img" fluid/>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
