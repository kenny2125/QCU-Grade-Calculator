import React from 'react'

function CourseSelector({ selectedCourse, setSelectedCourse, onCalculate }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <select 
        className="w-full max-w-md p-2 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="bsit">Bachelor of Science in Information Technology</option>
        <option value="bsece">Bachelor of Science in Electronics Engineering</option>
        <option value="bsie">Bachelor of Science in Industrial Engineering</option>
        <option value="bsee">Bachelor of Science in Electrical Engineering</option>
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
