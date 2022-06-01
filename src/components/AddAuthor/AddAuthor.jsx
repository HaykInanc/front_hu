import React from 'react'
import { addAuthor } from '../../requests'
import Button from '../UI/Button/Button'
import Field from '../UI/Field'
import s from './AddAuthor.module.sass'

export default function AddAuthor({addAuthorState}) {

  const onSubmit = e =>{
    e.preventDefault();
    const {name, lastname} = e.target;
    const data = {name: name.value, lastname: lastname.value};
    addAuthor(data, addAuthorState, console.log);
  }
  
  return (
    <form className={s.form} onSubmit={onSubmit}>
        <Field horizontal={true} label="Имя:" name="name"  />
        <Field horizontal={true} label="Фамилия:" name="lastname"  />
        <Button label='Добавить' />
    </form>
  )
}
