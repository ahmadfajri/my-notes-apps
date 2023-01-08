import React from 'react'
import NoteItem from './NoteItem'

function NoteList({notes, onDelete}) {
  if(notes.length > 0){
    return (
      <div className='notes-list'>
          {
              notes.map((note) => (
                  <NoteItem 
                      key={note.id}
                      id={note.id}
                      onDelete={onDelete}
                      {...note}
                  />
              ))
          }
      </div>
    )
  }else{
    return (
      <div className='notes-list__empty-message'>Tidak Ada Catatan</div>
    )
  }

}

export default NoteList