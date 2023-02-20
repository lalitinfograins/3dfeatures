import React from 'react'
import { Col, Container, Row , Image} from 'react-bootstrap';
import img1 from "../../assets/image/landing/home_blog1.png";
import img2 from "../../assets/image/landing/home_blog2.png";
import img3 from "../../assets/image/landing/home_blog3.png";
const HomeBlog = () => {
    const our_blog = [
        {
            id: 1,
            img: img1,
            heading: "Proof-of-Work Vs Proof-of-Stake: Which Consensus Mechanism is best for...",
            text: "The two most common methods for processing cryptocurrency transactions are Proof-of-Work and Proof-of-Stake. Proof-of-Stake and Proof-...",
        },
        {
            id: 2,
            img: img2,
            heading: "How is NFT Game Development Reshaping the Gaming Industry?",
            text: "NFTs have been a topic of discussion for the last two years. It began as an experiment and became a way for artists to take ownership of...",
        },
        {
            id: 3,
            img: img3,
            heading: "How will Blockchain affect the Insurance Sector?",
            text: "Blockchain offers a single source of the truth updated in real-time or very close to it due to its three core principles-trust, transparency,...",
        },
    ];
  return (
    <>
     <section className='home_blog_wrap'>
     <Container>
        <div className='home_blog_title'>
            <h2 className='home_blog_h2'>Our Blogs</h2>
            <p className='home_blog_p'> Explore Our Blogs on Latest Trends and Technologies</p>
        </div>
        <Row>
        {
            our_blog.map((event, index) => {
                return(
            <Col sm={6} md={6} lg={4} xl={4} key={index}>
                <div className='home_blog_card'>
                    <div className='home_blog_card_image'>
                        <Image src={event.img} alt="home_blog_card" className="home_blog_card_img" fluid />
                    </div>
                    <div className='home_blog_content'>
                        <h3 className='home_blog_card_h3'>{event.heading}</h3>
                        <p className='home_blog_card_p'>{event.text}</p>
                        <a href="/Blog" className='home_blog_card_btn' >Read More</a>
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

export default HomeBlog;