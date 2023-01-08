import React from 'react'

function NoteItemCreatedAt({createdAt}) {
  return (
    <div className='note-item__date'>
        {createdAt}
    </div>
  )
}

export default NoteItemCreatedAt