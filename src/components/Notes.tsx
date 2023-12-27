import React, { useContext, useEffect, useRef, useState } from 'react'
import { NoteContext } from '../context/notes/NoteState'
import NoteItems from './NoteItems'
import { useNavigate } from 'react-router-dom'



const Notes = (props: any) => {
    const context = useContext(NoteContext)
    const { notes, fetchALLNotes, updateNote } = context

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchALLNotes()
        } else {
            navigate('/login')
        }
    }, [])

    const ref: any = useRef(null)

    const updateNotes = (note: any) => {
        ref.current.click()
        note && setnoteState({ id: note._id, title: note.title, description: note.description, tag: note.tag })
    }

    const [noteState, setnoteState] = useState({ id: '', title: '', description: '', tag: '' })
    const updateNotesbtn = (e: any) => {
        // e.preventDefault()
        updateNote(noteState.id, noteState.title, noteState.description, noteState.tag)
        // ref.current.close()
    }
    const onChange = (e: any) => {
        // ...noteState create a copy of noteState wo ensure it have exact same structure
        e && setnoteState({ ...noteState, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='max-w-screen-xl mx-auto p-4'>
                <div className='flex justify-center align-middle'>
                    <h1 className='text-xl text-center p-4'>My notes</h1>
                    <img src="https://static.vecteezy.com/system/resources/previews/029/722/382/original/notes-icon-in-trendy-flat-style-isolated-on-white-background-notes-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg" className='w-7 my-4' alt="" />
                </div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <div>
                    {notes.length === 0 && 'No notes to show'}
                    </div>
                    {notes && Array.isArray(notes) && notes.map((note: any) => {
                        return <NoteItems key={note._id} updateNotes={updateNotes} note={note}></NoteItems>
                    })}
                </div>
            </div>



            {/* <!-- Modal toggle --> */}
            <button ref={ref} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button>

            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Update my note
                            </h3>
                            <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div>
                            <form className="max-w-sm mx-auto p-4">
                                <div className="mb-5">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input value={noteState.title} type="text" id="title" name='title' onChange={onChange} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea value={noteState.title} id="description" name='description' onChange={onChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <div>
                                    <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                                    <input value={noteState.title} type="text" id="tag" name='tag' onChange={onChange} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                                </div>
                                <div className='flex justify-center'>
                                    <button type="submit" onClick={updateNotesbtn} className="m-4 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Update note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Notes
