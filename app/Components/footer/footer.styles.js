"use client"

import { styled } from "styled-components"

import Link from 'next/link';


export const FooterContainer = styled.div`
    width: 100%;
    background-color: #fff;
    z-index: 2;

    h1{
        color: #000;
    }

    h3{
        color: #000;
    }

    p{
        color: #000;
        font-size: 15px;
    }
            
    /* @media screen and (min-width: 768px){
      padding: 0px 100px 100px;

    } */

`;

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1400px;
    padding: 150px 70px 100px;
    margin: 0 auto;


`

export const FooterIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h1{
        margin-bottom: 15px;
        text-decoration: none;
    }

    .footer-text{
        font-size: 25px;
        width: 100%;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

        .footer-text{
            font-size: 55px;
            width: 50%;
            margin-bottom: 0;
        }
        
        
    }
`;

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

                
    @media screen and (min-width: 768px){
      flex-direction: row;
      justify-content: space-between;
      width: 40%;


    }
`

export const FooterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    /* padding-top: 40px; */

    input, textarea{
        width: 100%;
        padding: 12px;
        border: none;
        border-bottom: 1px solid #000;
        margin-bottom: 35px;

        &:focus {
            outline: none;
        }
    }

    button{
        font-size: 15px;
        padding: 8px 40px;
        background-color: #000;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 50px;
    }

    @media screen and (min-width: 768px){
        width: 100%;
    }
`;



export const Button = styled.div`
    height: 151px;
    width: 151px;
    background-color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 4.5px;
    top: 4.5px;
    z-index: 2;
`;

export const FooterLink = styled(Link)`
    color: #000;
    text-decoration: none;
    transition: all .5s ease;
    font-size: 14px;

    &:hover{
        text-decoration: underline;
    }
`;

export const FooterLinksDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: fs;
    align-items: flex-end;
    padding-top: 80px;

    h3{
        justify-self: flex-start;
    }

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        border-bottom: 1px solid #000;
        padding-bottom: 40px;

        @media screen and (min-width: 768px){
            /* width: 30%; */
            align-items: center;
            flex-direction: row;
            justify-content: center;
            gap: 20px;

            h3{
                margin-right: auto;
            }
        }
    }
`
