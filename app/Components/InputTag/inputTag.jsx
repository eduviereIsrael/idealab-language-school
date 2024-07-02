import React, {useState} from 'react'
import { FormInput } from './styles'

const InputTag = ({tagName, Label, placeHolder, type, onChangeHandler, value, error }) => {
  
  const [seePassword, setSeePassword] = useState(false)

  return (
    <FormInput>
        <label htmlFor={tagName} >{Label}</label>
        <div className="input">
            <input 
                type={seePassword? 'text' : type} 
                required 
                name={tagName} 
                placeholder={placeHolder} 
                onChange={onChangeHandler}
                value={value}
                style={{ borderColor: error? error.borderColor : '' }}
            />
            {error && <p style={{fontSize: "12px", color: "#F0263C"}} >{error.errMessage}</p>}
            <span 
              className="img" 
              // style={{ paddingTop: error?  }}
              onClick={() => setSeePassword(!seePassword)} 
              
               >
                {type === "password" && <img 
                src="/eye.svg" 
                alt="" 
                /> }
            {/* <img src="/eye.svg" alt="" /> */}
            </span>
        </div>
    </FormInput>
  )
}

export default InputTag