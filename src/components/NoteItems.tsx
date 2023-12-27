import React, { useContext, useEffect } from 'react'
import {NoteContext} from '../context/notes/NoteState'

const NoteItems = (props: any) => {
    const { note, updateNotes } = props
    const context = useContext(NoteContext)
    const { deleteNote } = context
    return (
            <div className="min-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{note.description}</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                    {note.tag}
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>
                <div className='flex gap-4 justify-end items-center'>
                    <img onClick={()=> deleteNote(note._id)} className='w-6 cursor-pointer' src="https://www.shutterstock.com/image-vector/trash-can-icon-symbol-delete-600nw-1454137346.jpg" alt="" />
                    <img onClick={()=> updateNotes(note)} className='w-4 h-4 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3nJVhCFKSIsItXqZO7CN3ob9Qrpzr1GcTw&usqp=CAU" alt="" />
                </div>
            </div>
    )
}

export default NoteItems
