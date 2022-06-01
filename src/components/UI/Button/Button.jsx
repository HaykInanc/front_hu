import React from 'react'
import s from './Button.module.sass'

export default function Button({label, ...props}) {
  return (
    <button className={s.button} {...props}>{label}</button>
  )
}
