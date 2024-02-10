"use client"

import { useState } from 'react';


const Faq = () => {

    const [clickedCards, setClickedCards] = useState('')
    let newClickedCards;
  
  
    const toggleCard = (x) => {
        if(clickedCards === x){
            setClickedCards("")
            return
        }

        setClickedCards(x)
    }

  const faqData = [
    {
        question: "What if I don't think my tutor is a good fit?",
        answer: 'No problem! We can match you up with a new tutor. Some of our students change tutors every 3-6 months to get exposed to a variety of teaching styles and accents, so no need to feel guilty about changing!'
    },
    {
        question: "What do I get for referring someone?",
        answer: "Earn $15 in free lesson credit and the person you refer also gets 10% off their first set of lessons"
    },
    {
        question: "How long are the lessons?",
        answer: "We offer lessons at a minimum of 30 minutes up to 2 hours. As long as your selected time falls on a 30-min time frame, then your lesson can be as long or as short as you need!"
    },
 
    {
        question: "Can I take lessons in a group?",
        answer: "Yes. If you have a group of friends, colleagues or family members who are at a similar level to you and share the same language learning goals, then you can arrange group lessons by contacting us. Your friends, colleagues or family will get a 50% discount on the lessons too! So, if you pay the full price of an $11 lesson for example, then the other participants will only pay $5.50 to join the same lesson!"
    },
 

 
  ]

  const elementsAtOddIndices = (arr) => arr.filter((_, index) => index % 2 !== 0);
  const elementsAtEvenIndices = (arr) => arr.filter((_, index) => index % 2 === 0);



  return (
    
    <div className="faq-cont">

        <div className="left">
        {
            elementsAtOddIndices(faqData).map((item, i) => (
                <div className={clickedCards == item.question? "faq-card show": "faq-card"} key={i} onClick={() => {
                    toggleCard(item.question)
                }} >
                    <div className="f-c-header" onClick={() => {
                    toggleCard(item.question)
                }}  >
                        <span onClick={() => {
                    toggleCard(item.question)
                }}  >{item.question}</span>
                        <span className='toggle' >{ clickedCards !== item.question? '+' : '-'}</span>
                    
                    </div>
                    <p>{item.answer}</p>
                </div>
            ))
        }
        </div>
        <div className="right">
        {
            elementsAtEvenIndices(faqData).map((item, i) => (
                <div className={clickedCards == item.question? "faq-card show": "faq-card"} key={i} onClick={() => {
                    toggleCard(item.question)
                }} >
                    <div className="f-c-header" onClick={() => {
                    toggleCard(item.question)
                }}  >
                        <span onClick={() => {
                    toggleCard(item.question)
                }}  >{item.question}</span>
                        <span className='toggle' >{ clickedCards !== item.question? '+' : '-'}</span>
                    
                    </div>
                    <p>{item.answer}</p>
                </div>
            ))
        }
        </div>

        {/* {
            faqData.map((item, i) => (
                <div className={clickedCards.includes(i)? "faq-card show": "faq-card"} key={i} onClick={() => {
                    toggleCard(i)
                }} >
                    <div className="f-c-header">
                        <span>{item.question}</span>
                        <span className='toggle' >{ clickedCards.includes(i)? '+' : '-'}</span>
                    
                    </div>
                    <p>{item.answer}</p>
                </div>
            ))
        } */}
        
    </div>

  )
}

export default Faq