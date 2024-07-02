import styled from "styled-components";



export const FormInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    label{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        margin-bottom: 6px;
    }
    .input{
        width: 100%;
        position: relative;

        input{
            width: 100%;
            padding: 10px 14px;
            border-radius: 50px;
            border: 1px solid #D0D5DD;
            overflow: hidden;

            &:focus{
                border: 1px solid #D0D5DD;
                outline: none;
                background: none;
            }

            
        }

        .img{
            position: absolute;
            top: 0px;
            right: 0px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 12px;
            border-radius: 50%;
            /* background-color: red; */

   
        }
    }
`;

export const TextArea = styled.div`
    width: 100%;

    textarea{
        width: 100%;
        padding: 10px 14px;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        margin-bottom: 6px;
        &:focus{
            border: 1px solid #D0D5DD;
            outline: none;
        }
    }
`;