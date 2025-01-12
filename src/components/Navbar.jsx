import React from 'react'

function Navbar() {
  return (
    <div className="text-body py-6 flex justify-between">
      <a className="href" href="/">Home</a>
      <div className="flex">
        <a className="mr-4" href="/">LinkedIn</a>
        <a href="/">Github</a>
      </div>
    </div>
  )
}

export default Navbar
