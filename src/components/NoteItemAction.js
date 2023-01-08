import React from 'react'
import NoteItemDeleteButton from './NoteItemDeleteButton'

function NoteItemAction({id, onDelete}) {
  return (
    <div className='note-item__action'>
        <NoteItemDeleteButton id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NoteItemAction