import React from 'react'

function CourseSelector({ selectedCourse, setSelectedCourse, onCalculate }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <select 
        className="w-full max-w-md p-2 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        {/* CCS */}
        <option value="bsit">Bachelor of Science in Information Technology</option>
        {/* <option value="bsis">Bachelor of Science in Information Systems</option>
        <option value="bscs">Bachelor of Science in Computer Science</option> */}

        {/* CBAA */}
        {/* <option value="bsa">Bachelor of Science in Accountancy</option>
        <option value="bsentrep">Bachelor of Science in Entrepreneurship</option> */}

        {/* Educ */}
        {/* <option value="bssped">Bachelor of Early Childhood Education</option> */}

        {/* Engineering*/}

        {/* <option value="bsece">Bachelor of Science in Electronics Engineering</option> */}
        {/* <option value="bsie">Bachelor of Science in Industrial Engineering</option> */}
                
      </select>
      <button 
        onClick={onCalculate} 
        className="bg-primary text-gray-800 py-2 px-8 rounded-md"
      >
        Calculate
      </button>
    </div>
  )
}

export default CourseSelector
