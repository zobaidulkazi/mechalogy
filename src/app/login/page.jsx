'use client'

import React from 'react'
import { useState } from 'react'
import { Axios } from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LogInPage() {


    const [user, setUser] = useState({
        email: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
      
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-6">Sign Up Page</h1>
    <form onSubmit={handleSubmit} className="max-w-sm">
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Sign Up
      </button>
    </form>

    <Link href='/signup'>Go to Login Page</Link>
  </div>
  )
}

