import React from 'react';
import {
    PrimaryButton,
    SecondaryButton,
    CardButtonStyle
} from './buttons.styles'

export const PriButton = ({text, link, width, padding, fontSize}) => {
  return (
    <PrimaryButton href={link} style={{width: width? width : ''}} >
        <button style={{width: width? width : '', padding: padding? padding : '', fontSize: fontSize? fontSize : ''}} >
            {text}
        </button>
    </PrimaryButton>
  )
}

export const SecButton = ({text, link}) => {
  return (
    <SecondaryButton href={link}>
        <button>
            {text}
        </button>
    </SecondaryButton>
  )
}

export const CardButton = ({text, link}) => {
  return (
    <CardButtonStyle href={link}>
        <button>
            {text}
        </button>
    </CardButtonStyle>
  )
}
