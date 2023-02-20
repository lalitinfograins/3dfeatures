import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap'
import why_choose1 from "../../assets/image/landing/icon-3.png";
import why_choose2 from "../../assets/image/landing/icon-6.png";
import why_choose3 from "../../assets/image/landing/icon-2.png";
import why_choose4 from "../../assets/image/landing/icon-7.png";
import why_choose5 from "../../assets/image/landing/icon-5.png";
import why_choose6 from "../../assets/image/landing/icon-1.png";
const WhyChoose = () => {
    const Box = [
        {
            Id: 1,
            why_choose: why_choose3,
            h3: "Timely Service",
            pre: "We take pride in developing digital surprises and delivering them to you in timely manner. ",
        },
        {
            Id: 2,
            why_choose: why_choose4,
            h3: "Quality and Security",
            pre: "Infograins follow standards for information security management. All of the custom blockchain development projects we complete adhere to these requirements. ",
        },
        {
            Id: 3,
            why_choose: why_choose5,
            h3: "In depth Testing",
            pre: "To ensure that every software module performs as expected, each component of a software system is separately tested. We leave no errors with our end to end testing method. ",
        },
        {
            Id: 4,
            why_choose: why_choose6,
            h3: "Qualified Team",
            pre: "We have blockchain developers on our team who can create customized software based on requirements.",
        },
        {
          Id: 5,
          why_choose: why_choose1,
          h3: "Advanced Solutions",
          pre: "The Infograins team combines technology with techniques utilized, thoroughly examined, and audited solutions.",
      },
      {
        Id: 4,
        why_choose: why_choose2,
        h3: "Market Experience",
        pre: "You get access to both our in-depth consulting experience and our unique blockchain services.",
    },
    ];
   
  return (
    <>
     <section className='why_choose_wrap'>
        <Container>
                    <div className='why_choose_title'>
                    <h5 className='why_choose_title_p'>What We Offer</h5>
                            <h2 className='why_choose_title_h2'>We Provide 3D Design Course For You</h2>
                    </div>
                    <Row>
            {
                    Box.map((item, index) => {
                        return (
                <Col xl={6} lg={6} md={6} sm={6} key={index}>
                    <div className='why_choose_box '>
                        <figure className='why_choose_box_image'>
                            <Image src={item.why_choose} alt="box_img" className="why_choose_box_img"/>
                        </figure>
                        <div className='why_choose_box_content'>
                            <h3 className='why_choose_box_h3'>{item.h3}</h3>
                            <p className='why_choose_box_p'>{item.pre}</p>
                        </div>
                    </div>
                </Col>
                    )
                    })
                }
            </Row>
        </Container>
     </section> 
    
    </>
  )
}

export default WhyChoose;
