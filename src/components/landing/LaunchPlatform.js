import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import LaunchPlatform1 from "../../assets/image/landing/launch_platform_1.png";
import LaunchPlatform2 from "../../assets/image/landing/launch_platform_2.png";
import LaunchPlatform3 from "../../assets/image/landing/launch_platform_3.png";
import LaunchPlatform4 from "../../assets/image/landing/launch_platform_4.png";
import LaunchPlatform5 from "../../assets/image/landing/launch_platform_5.png";
import LaunchPlatform6 from "../../assets/image/landing/launch_platform_6.png";
const LaunchPlatform = () => {
    const flip = [
        {
            id: 1,
            img: LaunchPlatform1,
            h4: "DEFI",
            per: "With the help of our reliable Defi development services and solutions, benefit immensely from flourishing decentralized finance.",
        },
        {
            id: 2,
            img: LaunchPlatform2,
            h4: "DAPP",
            per: "Utilize the potential of cutting-edge dApp solutions to launch your project and achieve outstanding results.",
        },
        {
            id: 3,
            img: LaunchPlatform3,
            h4: "NFTS",
            per: "We deliver effective Whitelabel NFT marketplace development services developed by our team of blockchain professionals at budget-friendly prices.",
        },
        {
            id: 4,
            img: LaunchPlatform4,
            h4: "Metaverse Development",
            per: "With our wide range of solutions that can help you take advantage of the potential of the Metaverse, you can experience the future internet.",
        },
        {
            id: 5,
            img: LaunchPlatform5,
            h4: "Play & Earn",
            per: "We provide gaming platforms that allow players to earn coins for free and exchange them for real money, making them more than just a source of amusement.",
        },
        {
            id: 6,
            img: LaunchPlatform6,
            h4: "CRYPTO EXCHANGE",
            per: "Build the most traditional cryptocurrency exchange software by using the the potential of our in-depth domain knowledge.",
        },
    ]
  return (
    <>
     <section className='launch_platform_wrap'>
        <Container>
            <div className='launch_platform_title'>
                <h4 className='launch_platform_h4'>Professional Blockchain Development Company</h4>
                <h2 className='launch_platform_h2'>You Choose, We Deliver</h2>
            </div>
            <Row>
            {
                flip.map((event, index) => {
                    return(

                  
                <Col sm={6} md={6} lg={4} xl={4} key={index}>
                    <div className='flip_card'>
                        <div className='flip_card_inner'>
                            <div className='flip_card_front'>
                            <Image src={event.img} className="flip_card_img"/>
                                <div className='flip_title'>
                                    <h3 className='title_h3'>{event.h4}</h3>
                                </div>
                            </div>
                            <div className='flip_card_back'>
                            <Image src={event.img} className="flip_card_img"/>
                                <div className='flip_title'>
                                    <h3 className='title_h3'>{event.h4}</h3>
                                    <p className='flip_text'>{event.per}</p>
                                </div>
                            </div>
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

export default LaunchPlatform
