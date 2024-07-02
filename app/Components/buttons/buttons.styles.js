"use client"

import styled from "styled-components";
import Link from "next/link";

const white = '#fff'

export const PrimaryButton = styled(Link)`

    button{
        &:hover{
            cursor: pointer;
        }
        border: 1px solid #000;
        outline: none;
        height: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-size: ${({font}) => font? font : '16px' } ;
        padding: 0 10px ;
        /* padding: 11px 23px; */
        width: max-content;
        border-radius: 50px;
        color: ${white};
        background-color: #000;
        font-family: Poppins;

        @media (min-width: 768px){
            padding: 0 23px ;
            font-size: ${({font}) => font? font : '20px' } ;


        }
    }
`;

export const SecondaryButton = styled(Link)`
    button{
        &:hover{
            cursor: pointer;
        }
        height: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        outline: none;
        font-family: Poppins;
        border-radius: 20px;
        font-size: ${({font}) => font? font : '20px' } ;
        padding: 0px 23px ;
        width: max-content;
        border-radius: 50px;
        color: #000;
        background-color: ${white};
    }

`;

export const PrimaryBtn = styled.button`

        &:hover{
            cursor: pointer;
        }
        border: 1px solid #000;
        outline: none;
        height: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-size: 14px;
        padding: 0 10px ;
        /* padding: 11px 23px; */
        width: ${props => props.width? props.width : '100%'};
        border-radius: 50px;
        color: ${white};
        background-color: #000;
        font-family: Poppins;

        @media (min-width: 768px){
            padding: 0 23px ;
            font-size: 16px;


        }
`;

export const SecondaryBtn = styled.button`
        &:hover{
            cursor: pointer;
        }
        height: 45px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        outline: none;
        font-family: Poppins;
        border-radius: 20px;
        font-size: ${({font}) => font? font : '20px' } ;
        font-size: 14px;
        padding: 0px 23px ;
        width: 100%;
        border-radius: 50px;
        color: #000;
        background-color: ${white};
        gap: 12px;

        @media (min-width: 768px){
            padding: 0 23px ;
            font-size: 16px;


        }

`;

export const CardButtonStyle = styled(Link)`
    button{

        &:hover{
            cursor: pointer;
        }
        border: 1px solid #000;
        outline: none;
        border-radius: 20px;
        font-size: 15px ;
        font-family: Poppins;
        padding: 5px 15px ;
        width: max-content;
        border-radius: 50px;
        color: ${white};
        background-color: #000;
    }

`;