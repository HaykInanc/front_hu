import React from 'react'
import s from './Field.module.sass'

export default function Field({horizontal, label, ...props}) {
  return (
    <label className={s.label} style={{"flexDirection": horizontal ? 'row': 'column'}}>
        <p>{label}</p>
        <input {...props} />
    </label>
  )
}
