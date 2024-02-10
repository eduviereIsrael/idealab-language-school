"use client"

import { styled } from "styled-components"

export const NavbarDiv = styled.div`
    width: 100%;
    padding: 00px 0px 0px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;

    @media (min-width: 768px){
        padding: 40px 70px 0px;
    }
`

export const NavbarContainer = styled.div`
    width: 100%;
    background-color: #fff;
    color: #000;
    max-width: 1400px;
    padding: 17px 43px;
    border-radius: 22px;

    display: none;

    align-items: center;
    justify-content: space-between;

    .menuitems{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
    }

    .logo{
        width: 30px;
        height: 30px;
    }

    @media (min-width: 768px){
        display: flex;
    }
`;

export const MobileContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 16px 20px;
    height: 80px;

    .logo{
        width: 30px;
        height: 30px;
        z-index: 5;

    }

    .hambuga {
        padding: 10px;
        padding-right: 0;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all .4s ease;
        z-index: 5;

        .ham {
            width: 25px;
            height: 2px;
            background-color: #100024;
            border-radius: 5px;
            margin: 2px 0;
            transition: all .5s ease;
            display: block;
            z-index: 3;

            @media screen and (min-width: 768px) {
                display: none;
            }

        }
    }

    .mob-menu-div {
    display: block;
    width: 100%;
    background-color: #fff;
    position: fixed;
    transform: translateX(-2000px);
    // top: -100px;
    transition: all .5s ease;
    z-index: 4;
    right: 0;
    top: 80px;

    .mob-menu-div-cont {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        // gap: 22px;

        padding: 36px 21px;

        a {
            color: #000;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            margin-bottom: 22px;
        }

    }

    @media screen and (min-width: 768px) {
        display: none;
        
    }
}

    .spin {
        transform: rotate(90deg);
    }
    .spin .dis{
        // display: none;
        opacity: 0;
    }

    .spin .spins{
        transform: rotate(45deg) translateY(4px);
    }
    .spin .spins-i{
        transform: rotate(-45deg) translateY(-4px);
    }

    .menu-show {
        transform: translateX(0px);
        // background-color: red;
    }


    @media (min-width: 768px){
        display: none;
    }
`