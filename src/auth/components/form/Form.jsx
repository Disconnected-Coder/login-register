import React from "react";
import { useState } from "react";
function Form ({type,onSubmit}){
  const [data,setData]=useState({
    usename:"",
    email:"",
    password:""
  })
  const handleChange=(event)=>{
    const {name,value}=event.target
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    onSubmit(data)

  }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            { type==="Login" ? "login here" : "Register"}
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
          { type==="Register"&&(
            <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    )
}
export default Form;
