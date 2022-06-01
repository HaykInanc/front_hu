import React from 'react'
import s from './Author.module.sass'

export default function Author({name, lastname}) {
  return (
    <div className={s.card}>
        <p>{name}</p>
        <p>{lastname}</p>
        <hr />
    </div>
  )
}
