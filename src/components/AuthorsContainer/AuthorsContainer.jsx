import React from 'react'
import Author from '../Author'
import s from './AuthorsContainer.module.sass'

export default function AuthorsContainer({authors, delAuthor}) {
  return (
    <div className={s.container}>
        {authors.map(author => <Author key={author.id} {...author} delAuthor={delAuthor}/>)}
    </div>
  )
}
