import React, { useContext, useState } from 'react'
import {NoteContext} from '../context/notes/NoteState'


const AddNote = (props:any) => {
    const context = useContext(NoteContext)
    const { addNote } = context

    const [noteState, setnoteState] = useState({title:'', description:'', tag:''})
    const addNotebtn = (e:any) =>{
        // e.preventDefault()
        addNote(noteState.title, noteState.description, noteState.tag)
    }
    const onChange = (e: any) =>{
        // ...noteState create a copy of noteState wo ensure it have exact same structure
        setnoteState({...noteState, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1 className='text-2xl text-center p-4'>Add a note</h1>
            <form className="max-w-sm mx-auto p-4">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" name='title' onChange={onChange} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" name='description' onChange={onChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div>
                    <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                    <input type="text" id="tag" name='tag' onChange={onChange} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" />
                </div>
                <div className='flex justify-center'>
                    <button type="submit" onClick={addNotebtn} className="m-4 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Add a note</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
