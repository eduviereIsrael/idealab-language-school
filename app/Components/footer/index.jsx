"use client"

import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { THEME } from '@/app/theme';
// import { THEME } from '../../styles/theme/theme';
import { 
  
  ContactDiv, 
  FooterContainer, 
  FooterDiv, 
  FooterForm, 
  FooterIntro, 
  FooterLink,
  FooterLinksDiv } from './footer.styles';



const Footer = () => {
  const buttonText = {
    SEND: "Send",
    SENDING: "Sending",
    SENT: "Sent"
  }

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    feedback: ""
  });
  const {name, email, feedback} = formValues;
  const [sending, setSending] = useState(false);
  const [buttonCta, setButtonCta] = useState(buttonText.SEND)
  const clearForm = () => {
    setFormValues({
      name: "",
      email: "",
      feedback: ""
    })
  }

  // const [sending, setSending] = useState(false)


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name && !email && !feedback){
      toast.error("Please check the fields and try again", {
        style: {
          background: THEME.colors.dark1,
          color: THEME.colors.light1,
          fontSize: THEME.font.text,
          fontFamily: "Calibri"
        }
      })
      return
    }
    try{
        setSending(true);
        setButtonCta(buttonText.SENDING);
        const details = { title: "New message from language school Website", ...formValues }
        emailjs.send("service_6aky868", "template_wnrp3ul", details, "yMojghxWlfBMQqRu7")
        .then(function(response) {
            // setSending(false)
            toast.success("We will contact you shortly", {
              style: {
                background: THEME.colors.dark1,
                color: THEME.colors.light1,
                fontSize: THEME.font.text,
                fontFamily: "Calibri"
              }
            })
            setSending(false);
            setButtonCta(buttonText.SENT);
            setTimeout(() => {
              setButtonCta(buttonText.SEND)
              clearForm()
            }, 1500)
        }, function(error) {
            console.log('FAILED...', error);
            toast.error("Oops, please check your internet and try again", {
              style: {
                background: THEME.colors.dark1,
                color: THEME.colors.light1,
                fontSize: THEME.font.text,
                fontFamily: "Calibri"
              }
            })
            setSending(false);
            setButtonCta(buttonText.SEND)

           

        });

    }catch(e){
      console.log("error while trying to sending email", e);
      toast.error("Please check the fields and try again", {
        style: {
          background: THEME.colors.dark1,
          color: THEME.colors.light1,
          fontSize: THEME.font.text,
          fontFamily: "Calibri"
        }
      })
      setSending(false);
      setButtonCta(buttonText.SEND)

    }
  }

  return (
    <FooterContainer>
        <FooterDiv>
            <FooterIntro id='contact'>
                <p className='footer-text' >LEAVE US A MESSAGE, <br/> WE WOULD LOVE TO GET IN TOUCH WITH YOU</p>
                <ContactDiv>
                    <FooterForm action="#">
                        <input 
                        type="text" 
                        name="name" 
                        id="" 
                        value={name} 
                        placeholder='Your Name' 
                        onChange={handleInputChange}
                        required
                        />
                        <input 
                        type="email" 
                        name="email" 
                        id="" 
                        value={email} 
                        placeholder='Enter your email' 
                        onChange={handleInputChange}
                        required
                        />
                        <textarea 
                        type="text" 
                        name="feedback" 
                        value={feedback} 
                        id="" 
                        cols={30} 
                        rows={5} 
                        placeholder='Enter your feedback' 
                        onChange={handleInputChange}
                        required
                        />
                        
                        <button onClick={handleSubmit} >{ sending? 'Sending' : 'Submit'}</button>
                    </FooterForm>
                </ContactDiv>
            </FooterIntro>
            <FooterLinksDiv>
              <div>
                <h3>Find us on</h3>
                <FooterLink target="_blank" href={'https://wa.me/feedback/IMBN57OCXNFTF1'} >WHATSAPP</FooterLink>
                <FooterLink target="_blank" href={'https://instagram.com/eduviere_israel?igshid=NTc4MTIwNjQ2YQ=='} >INSTAGRAM</FooterLink>
                <FooterLink target="_blank" href={'https://www.facebook.com/profile.php?id=61555747124227&mibextid=ZbWKwL'} >FACEBOOK</FooterLink>
                <FooterLink target="_blank" href={'https://www.linkedin.com/company/idealab-language-academy/'} >LINKEDIN</FooterLink>
              </div>
            </FooterLinksDiv>
        </FooterDiv>
        <Toaster />
    </FooterContainer>
  )
}

export default Footer