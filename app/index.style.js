"use client"

import { styled } from "styled-components"

export const Hero = styled.div`
    width: 100%;
    height: 100vh;
    background: url(/hero-img.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    /* backdrop-filter: 1000px 1000px 1000px #000; */

    box-shadow: inset 1000px 1000px 1000px rgba(0, 0, 0, 0.35);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        max-width: 1400px;
        padding: 0px 20px;
    }

    .cta{
        padding: 8px 27px;
        border-radius: 30px;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        background-color: #ffcc00;
        color: #000;
        /* margin-top: 15px; */
    }

    h1{
        font-size: 40px;
        width: 85%;
        text-align: center;
        margin-top: 80px;
    }

    p{
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        width: 90%;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    @media screen and (min-width: 768px) {
        
        .container{
            padding: 0px 70px;

        }
        
        h1{
            font-size: 60px;
        }

        p{
            font-size: 20px;
            margin-bottom: 45px;
            margin-top: 15px;


        }

        .cta{
            padding: 11px 32px;
            font-size: 18px;


        }
    }


    /* background-color: red; */
`;

export const SecondSection = styled.div`
    width: 100%;
    background-color: #fff;

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        max-width: 1400px;
        margin: 0 auto;

        padding: 100px 20px;


        h2{
            font-family: 'Roboto', sans-serif;
            font-size: 25px;
            color: #000;
            text-transform: uppercase;
            width: 100%;
            font-weight: 500;
            

            span{
                color: #ffcc00;
            }
        }

        .perk-div{
            width: 100%;
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            .section-tag{
               background-color : #E8EAF0;
               padding: 6px 10px;
               border-radius: 25px;
               font-size: 12px;
            }

            .perk-container{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;
                margin-top: 50px;
                gap: 40px;

                .vt{
                    height: 150px;
                    color: #E8EAF0;
                    background-color: #E8EAF0;
                    width: 2px;
                    margin: 0 30px;
                    display: none;
                }

                .perk-item{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;

                    span{
                        font-size: 18px;
                        color: #000;
                        margin-bottom: 12px;
                    }

                    p{
                        font-size: 16px;
                        color: #6F6969;
                        line-height: 150%;
                    }
                }
            }
        }

        @media screen and (min-width: 768px) {
            padding: 150px 70px;

            h2{
             font-size: 50px;

            }

            .perk-div{

                .section-tag{
                   font-size: 15px;

                }

                .perk-container{
                    flex-direction: row;
                    gap: 0px;

                    .vt{
                        display: unset;
                    }

                    .perk-item{
                        width: 33%;

                    }

                }
            }
        
        }
    }
`

export const ThirdSection = styled.div`
    width: 100%;
    height: 100vh;
    background: url(/bg-image-1.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    /* backdrop-filter: 1000px 1000px 1000px #000; */

    box-shadow: inset 1000px 1000px 1000px rgba(0, 0, 0, 0.49);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        color: #000;
        text-transform: uppercase;
        width: 100%;
        font-weight: 400;
        text-align: center;
        color: #fff;
        line-height: 130%;
        

        span{
            color: #ffcc00;
        }

        @media screen and (min-width: 768px) {
            font-size: 50px;

            
        }
    }

`

export const LanguageClasses = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #E9E8EE;

    .container{
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 100px 20px;
        gap: 60px;
        margin: 0 auto;


     

        .teens{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;

            .language-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 15px;

                .first{
                    display: grid;
                    width: 100%;
                    grid-template-columns: 1fr;
                    gap: 15px;
                    .lang-card{
                        background-color: #fff;
                        border-radius: 19px;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 6px;
                        p{
                            font-size: 20px;
                            margin-bottom: 7px;
                        }
                        span{
                            font-size: 14px;
                            color: #6F6969; 
                        }
                    }
                }

                .second{
                    display: grid;
                    width: 100%;
                    grid-template-columns: 1fr;
                    gap: 15px;
                    .lang-card{
                        background-color: #fff;
                        border-radius: 19px;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 6px;
                        p{
                            font-size: 20px;
                            margin-bottom: 7px;
                        }
                        span{
                            font-size: 14px;
                            color: #6F6969; 
                        }
                    }
                }
            }
        }

        @media screen and (min-width: 768px) {
            padding: 150px 70px;
            .teens{
                flex-direction: row;

                .language-container{
                    width: 65%;

                    .first{
                        grid-template-columns: 1fr 1fr;

                    }

                    .second{
                        grid-template-columns: 1fr 1fr 1fr;

                    }

                }
                
            }

            
        }

    }

    .heading{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        margin-bottom: 30px;

        .section-tag{
            background-color : #D8DBE4;
            padding: 6px 10px;
            border-radius: 25px;
            font-size: 15px;
        }

        h3{
            font-family: 'Roboto', sans-serif;
            font-size: 23px;
            width: 100%;
            text-align: leftt;
            text-transform: uppercase;
            font-weight: 400;
            margin-top: 30px;


        }

        @media screen and (min-width: 768px) {
            flex-direction: row;
            margin-bottom: 100px;


            h3{
                text-align: right;
                width: 65%;
                font-size: 38px;
                margin-top: 0;

            }
            
        }
    }
`
export const FaqDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
    background-color: #E9E8EE;

    .container{
        width: 100%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 100px 20px;
        margin: 0 auto;


        .heading{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: 100%;
            align-items: flex-start;
            margin-bottom: 100px;

            .section-tag{
                background-color : #D8DBE4;
                padding: 6px 10px;
                border-radius: 25px;
                font-size: 15px;
            }

            h3{
                font-family: 'Roboto', sans-serif;
                font-size: 23px;
                width: 100%;
                text-align: left;
                text-transform: uppercase;
                font-weight: 400;
                margin-top: 20px;

            }
        }

        .faq-cont{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            /* display: flex;
            flex-wrap: wrap; */
            gap: 25px;

            .left, .right{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                width: 100%;

                gap: 30px;
            }

            /* .left{
                background-color: red;
            } */

            .faq-card{

                width: 100%;
                p{
                    display: none;
                    opacity: 0;
                    height: 0;
                    line-height: 150%;
                    font-size: 14px;
                    padding-bottom: 12px;
                    height: 0;

                    /* transition: height 0.3s ease-in-out;
                    transition: opacity 0.3s ease-in-out 0.3s ; */
                    
                }

                border-bottom: 1px solid #000;
                &:hover{
                    cursor: pointer;
                }

           
            }

            .show{
                p{
                    opacity: 1;
                    height: 100%;
                    display: unset;
                }
            }

            .f-c-header{
                width: 100%;
                padding-bottom: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &:hover{
                    cursor: pointer;
                }





                .toggle{
                    font-size: 25px;
                    font-weight: 400;
                }
            }




        }

        @media screen and (min-width: 768px) {
            padding: 150px 70px;

            .heading{
                flex-direction: row;

                h3{
                    font-size: 38px;
                    width: 65%;
                    text-align: right;
                    margin-top: 0px;

                }

            }

            .faq-cont{
                grid-template-columns: 1fr 1fr;
                gap: 70px;

            }

        }
    }
`