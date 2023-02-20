import React ,{useState }  from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Form, FloatingLabel, Button} from 'react-bootstrap';
import axios from 'axios';
const FormContact = () => {
    const [emailErr, setEmailErr] = useState("");

  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)


  // const [checkbox, setCheckbox] = useState(false);

  // ==============form validation==============

  const { register: register2, reset: reset2, formState: {errors: error2}, handleSubmit: handleSubmit2, } = useForm();
const onSubmitEmail = (data) => {
  // var check =document.getElementById("checkbox")
  // if (check.checked) {
  //   console.log("black color");
  // }else {
  //   console.log("red color")
  //   setCheckbox(true)
  // }

  axios.post(`${process.env.REACT_APP_BASE_URL}/api-auth/regoster/`, {
    name: data.name1,
    tel: data.tel1,
    email: data.email1,
    subject: data.subject1,
    message: data.message1,
    headers:{
      "Accept": "application/json, text/plain",
      'Contect-Type': 'application/json'
    },
  }).then(res => {
    reset2();
    console.log("res register", res.data);
    //===================sassion============
    var accessToken = res.data.token.access;
    var refreshToken =res.data.refresh;
    sessionStorage.setItem("accessTokenr", accessToken);
    sessionStorage.setItem("refreshTokenr", refreshToken);
    // console.log("accessToken", accessToken, "refreshToken", refreshToken);
    localStorage.setItem("registerdData",JSON.stringify(res.data))
    //============// sassion===============

    //=============== scroll stop popup ===============
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = 'fixed';
    setLoader(true)
    // ================// scroll stop popup ==================

    // ==================navigate page =========================
    setTimeout(() => {
      navigate("/")
      const body = document.body;
      const  scrollY = body.style.top;
      body.style.position = "relative";
      setLoader(false)
    }, 1000)
    // =================// navigate page ========================

    setEmailErr("")
  }).catch(err => {
    console.log(err)
    var apiError = err.response.status
    if (apiError === 400) {
      setEmailErr("Email address is already registered")
    } else {
      setEmailErr("")
    }
  })
}
  return (
    <>
     <section className='form_contact_wrap'>
        <Container>
            <div className='form_contact_title'>
                <h2 className='form_contact_h2'>Get In Touch</h2>
                <p className='form_contact_p'>We would love to hear from you, please fill in the form below or mail us your requirements on info@infograins.com</p>
            </div>
            <div className='form_contact_box'>
            <Row>
                <Col xl={5} lg={5} md={5} sm={12}>
                    <div className='form_contact_image'>
                    <h3 className='form_contact_h3'>Contact Information</h3>
                    <p className='form_contact_texts'>Infograins</p>
                    <h3 className='form_contact_h3'>Email</h3>
                    <p className='form_contact_texts'>info@infograins.com</p>
                    <h3 className='form_contact_h3'>Phone</h3>
                    <p className='form_contact_texts'>IND +91 9770477239</p>
                    <h3 className='form_contact_h3'>On The Skype</h3>
                    <p className='form_contact_texts'>point2solutions</p>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <div className='form_contact_form'>
                    <Form className='form sign-up' key={2} onSubmit={handleSubmit2(onSubmitEmail)}>
            <Row>
              <Col sm={12} md={12} lg={12} xl={12}  className='mb-4 '>
                <FloatingLabel controlId='floatingName' label="Name">
                <Form.Control type='text' placeholder='First Name' className='input_field '
                  {...register2("name1", {
                    required: "Name is Reqiuired",
                    minLength: {
                      value: 3,
                      message: "The minimum length for this field is 3 characters"
                    },
                    maxLength: {
                      value: 18,
                      message: "The maximum length for this field is 18 characters"
                    },
                  })}
                />
                </FloatingLabel>
                {error2.name1 && (<small className='text-danger'>{error2.name1.message}</small>)}
              </Col>
              <Col sm={12} md={12} lg={12} xl={12}  className='mb-4 '>
                <FloatingLabel controlId='floatingInput' label="Email address">
                  <Form.Control
                    type='email' placeholder='Enter Id' className='input_field ' {...register2("email1", {
                      required: "Email is Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                      
                    })}
                  />
                </FloatingLabel>
                <small className='text-danger'>{emailErr}</small>
                {error2.email1 && (<small className='text-danger'>{error2.email1.message}</small>)}
              </Col>
              <Col sm={12} md={12} lg={12} xl={12}   className='mb-4 '>
                <FloatingLabel controlId='floatingTel' label="Phone Number">
                  <Form.Control type='tel' placeholder='Phone Number' className='input_field '
                    {...register2("tel1", {
                      required: "Phone Number is Required",
                      minLength: {
                        value:8,
                        message: "Minimum Required Nuumber is 6 digit"
                      },
                      maxLength: {
                        value:12,
                        message: "maximum Required Number is 12 digit"
                      },
                      validate: (value) => {
                        return (
                          [/[0-9]/, /[^0-9]/].every((pattern) => 
                          pattern.test(value)
                          ) || "Must Include Number and Special Chars"
                        );
                      },
                    })}
                  />
                </FloatingLabel>
                {error2.tel1 && (<small className="text-danger">{error2.tel1.message}</small>)}
              </Col>
              <Col sm={12} md={12} lg={12} xl={12}  className='mb-4 '>
                <FloatingLabel controlId='floatingSubject' label="Subject">
                  <Form.Control type='text' placeholder='Subject' className='input_field '
                    {...register2("subject1", {
                      required: "Subject is Required",
                      minLength: {
                        value: 3,
                        message: "The minimum length for this field is 3 characters"
                      },
                      maxLength: {
                        value: 12,
                        message: "The maximum length for this field is 25 characters"
                      },
                    })}
                  />
                </FloatingLabel>
                {error2.subject1 && (<small className='text-danger'>{error2.subject1.message}</small>)}
              </Col>
              <Col sm={12} md={12} lg={12} xl={12}  className='mb-4 '>
                <FloatingLabel controlId='floatingMessage' label="Message">
                  <Form.Control as="textarea" rows={3} style={{minHeight: 150}} placeholder='Write your message' className='input_field '
                    {...register2("message1", {
                      required: "Message is Required",
                      minLength: {
                        value: 3,
                        message: "The minimum length for this field is 3 characters"
                      },
                    })}
                  />
                </FloatingLabel>
                {error2.message1 && (<small className='text-danger'>{error2.message1.message}</small>)}
              </Col>
            </Row>
            <div className='tnc'>
              <Button variant='primary' type='submit' className='s_btn'>
                Send
              </Button>
            </div>
           </Form>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
     </section> 
    </>
  )
}

export default FormContact
