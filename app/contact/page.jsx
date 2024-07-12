'use client'


import { PrimaryBtn } from '../Components/buttons/buttons.styles' 
import InputTag from '../Components/InputTag/inputTag'
import { TextArea } from '../Components/InputTag/styles'
import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';


const Page = () => {
  

    const defaultDetails = {
      name: "",
      email: "",
      feedback: ""
    }
  
    const requestState = {
      notStarted: "notStarted",
      started: "started",
      done: "done"
    }
  
    const [userDetails, setUserDetails] = useState({...defaultDetails})
    const [requestStage, setrequestStage] = useState(requestState.notStarted)
    const [errBorder, setErrBorder] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
  
    const { name, email, feedback } = userDetails
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      
      setUserDetails({...userDetails, [name]: value})
    }
  
    const resetFormFields = () => {
      setUserDetails(defaultDetails);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setrequestStage(requestState.started)
      
      if(!name || !email || !feedback){
        setErrBorder(true)
        setErrorMessage("fill all the details, and try again")
      setrequestStage(requestState.notStarted)
  
        return
      }
  
      try {
        // console.log(userDetails)
        // resetFormFields();

        const details = { title: "New message from Study Abroad Website", ...userDetails }
        emailjs.send("service_6aky868", "template_wnrp3ul", details, "yMojghxWlfBMQqRu7")
          .then(function(response) {
            
            setrequestStage(requestState.done);
            resetFormFields()
          }, function(error) {
              // console.log('FAILED...', error);

              setErrorMessage("an error occured, try again later")
              setrequestStage(requestState.notStarted)
          });
  
      } catch (error) {
        // if (error.code === 'auth/email-already-in-use') {
        //   alert('Cannot create user, email already in use');
        // } else {
        //   console.log('user creation encountered an error', error);
        // }
        console.log(error)
        setErrBorder(true)
        setrequestStage(requestState.notStarted)

       
      }
    };

  
  
    useEffect(() => {
        const timeOut = setTimeout(() => {
          if(errBorder){
            setErrBorder(false)
          }
        }, 3000)
  
        return () => clearTimeout(timeOut)
      
    },[errBorder])
  
    return (
  
      <div className='contact-us' >
        <div className='container' >

            <div className="address">

                <div>
                    
                    <p>Office Adresss</p>
                    <span>Zone B, Block 2, Shop 8  OAU Central Market, Ile-Ife, Osun State</span>
                </div>
                <div>
                    
                    <p>Email</p>
                    <span>
                        <a href="mailto:info@idealabacademy.com">Info@idealabacademy.com</a>
                    </span>
                </div>

                <div>
                    
                    <p>Telephone</p>
                    <span>+2348136621141</span>
                </div>

            </div>
        </div>
        
        
      </div>
    )
}

export default Page