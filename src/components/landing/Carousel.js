import React from 'react'
import { Container , Image} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1  from '../../assets/image/landing/team/team-2.jpg';
import carousel2  from '../../assets/image/landing/team/team-1.jpg';
import carousel3  from '../../assets/image/landing/team/team-4.jpg';
import carousel4  from '../../assets/image/landing/team/team-3.jpg';
import carousel5  from '../../assets/image/landing/team/team-6.jpg';
import carousel6  from '../../assets/image/landing/team/team-5.jpg';
const Carousel = () => {
  var settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    
  };
  return (
    <>
      <section className='carousel_wrap'>
        <Container>
            <div className='carousel_title'>
                <h2 className='carousel_h2'>Testimonial</h2>
                <p className='carousel_p'>View the opinions of our clientele regarding us and our work.</p>
            </div>
            <div className='carousel_slider'>
        <Slider {...settings}>
          <div className='carousel_slide'>
          <figure className='carousel_team_img'>
            <Image src={carousel1} className="carousel_img" alt="team_img"/>
          </figure>
            <h4 className='carousel_h4'>Darlina</h4>
            <p className='carousel_text col-8'>Infograins is one of the leading offshore software development companies routed from Portland, Oregon USA and has its delivery centre in Indore, India.</p>
          </div>
          <div className='carousel_slide'>
          <figure className='carousel_team_img'>
            <Image src={carousel2} className="carousel_img" alt="team_img"/>
          </figure>
            <h4 className='carousel_h4'>Darlina</h4>
            <p className='carousel_text col-8'>Infograins is one of the leading offshore software development companies routed from Portland, Oregon USA and has its delivery centre in Indore, India.</p>
          </div>
          <div className='carousel_slide'>
          <figure className='carousel_team_img'>
            <Image src={carousel3} className="carousel_img" alt="team_img"/>
          </figure>
            <h4 className='carousel_h4'>Darlina</h4>
            <p className='carousel_text col-8'>Infograins is one of the leading offshore software development companies routed from Portland, Oregon USA and has its delivery centre in Indore, India.</p>
          </div>
          <div className='carousel_slide'>
          <figure className='carousel_team_img'>
            <Image src={carousel4} className="carousel_img" alt="team_img"/>
          </figure>
            <h4 className='carousel_h4'>Darlina</h4>
            <p className='carousel_text col-8'>Infograins is one of the leading offshore software development companies routed from Portland, Oregon USA and has its delivery centre in Indore, India.</p>
          </div>
          <div className='carousel_slide'>
          <figure className='carousel_team_img'>
            <Image src={carousel5} className="carousel_img" alt="team_img"/>
          </figure>
            <h4 className='carousel_h4'>Darlina</h4>
            <p className='carousel_text col-8'>Infograins is one of the leading offshore software development companies routed from Portland, Oregon USA and has its delivery centre in Indore, India.</p>
          </div>
          <div className='carousel_slide'>
          <figure className='carousel_team_img'>
            <Image src={carousel6} className="carousel_img" alt="team_img"/>
          </figure>
            <h4 className='carousel_h4'>Darlina</h4>
            <p className='carousel_text col-8'>Infograins is one of the leading offshore software development companies routed from Portland, Oregon USA and has its delivery centre in Indore, India.</p>
          </div>
        </Slider>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Carousel
