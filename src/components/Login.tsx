import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = (props: any) => {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    let history = useNavigate()
    const onChange = (e: any) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e: any) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NjdiNjJhN2U3ODUxZWYyYjg1ZTU5In0sImlhdCI6MTcwMzMxMjM3N30.RL496rJ6OLFQVVWMUKolY-x-LjVezZZPOvpaQ--BkTQ"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            history('/about')
        } else {
            alert('noob, try again, lol!')
        }
    }
    return (
        <div className="max-w-sm mx-auto p-4">
            <h1 className="text-center p-4 text-xl leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6 p-4" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={onChange} value={credentials.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input onChange={onChange} value={credentials.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Log in</button>
                </div>
                <p className='text-center'>Dont't have a account? <Link to="/signup" className='text-teal-700 underline'> Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
