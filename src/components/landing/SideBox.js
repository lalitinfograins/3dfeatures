import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap'
import side1 from "../../assets/image/landing/icon-1.png";
import side2 from "../../assets/image/landing/icon-2.png";
import side3 from "../../assets/image/landing/icon-3.png";
import side4 from "../../assets/image/landing/icon-5.png";
const SideBox = () => {
   const Sidebox = [
        {
            id: 1,
            h4: "Analysis of Clients’ Demands",
            text: "Our team carefully examines the project's needs. They also do a lot of research on the most recent technological developments that can be applied to the project. ",
            img: side1,
        },
        {
            id: 2,
            h4: "Designing",
            text: "Architecture is developed that will demonstrate the entire workflow of blockchain-based projects. The design of software affects not only how it appears, but also how it functions generally and how the user interacts with it. The copy of this architecture is then sent to the client for approval.",
            img: side2,
        },
        {
            id: 3,
            h4: "Development and Testing ",
            text: "When our team is certain of the specifications, they begin the development process. The code created is tested on operating systems and browsers as part of the development process. ",
            img: side3,
        },
        {
            id: 4,
            h4: "Deployment",
            text: "This action is taken only when there is approval regarding the establishment of the product's functionality and its stability. After taking the necessary measures, the software is deployed on servers and other platforms.",
            img: side4,
        },
    ]
  return (
    <>
     <section className='side_box_wrap'>
        <div className='side_box_title'>
            <h2 className='side_box_h2'>Blockchain Development Process</h2>
        </div>
        <Container>
           <Row>
            <Col sm={12} md={12} lg={6} xl={8} >
                <Row>
                {
                        Sidebox.map((item, index) => {
                            return(
                <Col sm={6} md={6} lg={6} xl={6} key={index} >
                                <div className='side_box_boxs'>
                                    <div className='side_box_content'>
                                        <Image src={item.img} className="side_box_img" alt='side_img' fluid/>
                                        <h4 className='side_box_h4'>{item.h4}</h4>
                                        <p className='side_box_text'>{item.text}</p>
                                    </div>
                                </div>
                </Col>
                )
                        })
                    }
                </Row>
            </Col>
            <Col sm={12} md={12} lg={6} xl={4} >
            <div className='side_box_images'>
              <h3 className='side_box_h3'>Blockchain Development Process</h3>
                </div>
            </Col>
           </Row>
        </Container>
     </section> 
    </>
  )
}

export default SideBox
