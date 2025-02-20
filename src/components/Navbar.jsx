import React from 'react'

function Navbar() {
  return (
    <div className="text-body py-6 flex justify-between">
      <a className="href" href="/">Home</a>
      <div className="flex">
        <a className="mr-4" href="https://www.linkedin.com/in/john-kenny-reyes-611248220/">LinkedIn</a>
        <a href="https://github.com/kenny2125">Github</a>
      </div>
    </div>
  )
}

export default Navbar
