import React from 'react'
import s from './Author.module.sass'
import {deleteAuthor} from '../../requests'
import Button from '../UI/Button'



export default function Author({id, name, lastname, delAuthor}) {
  
  return (
    <div className={s.card} >
        <p>{name}</p>
        <p>{lastname}</p>
        <Button label={'Удалить!'} onClick={()=>deleteAuthor({id}, ({id})=>delAuthor(id))}/>
    </div>
  )
}
