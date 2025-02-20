import React, { useState } from 'react'
import CourseSelector from './components/CourseSelector'
import HowToCalculate from './components/HowToCalculate'
import GradesTable from './components/GradesTable'

function Calculator({ course, onBack }) {
  const [gwa, setGwa] = useState("0.00");
  const [qualification, setQualification] = useState("Not Calculated");

  const courseNames = {
    bsit: 'Bachelor of Science in Information Technology',
    bsece: 'Bachelor of Science in Electronics Engineering',
    bsie: 'Bachelor of Science in Industrial Engineering',
    bsee: 'Bachelor of Science in Electrical Engineering',
    bsa: 'Bachelor of Science in Accountancy',
    bsentrep: 'Bachelor of Science in Entrepreneurship',
    bssped: 'Bachelor of Special Needs Education',
    bsis: 'Bachelor of Science in Information Systems',
    bscs: 'Bachelor of Science in Computer Science'
  }

  const handleRefresh = () => {
    setGwa("0.00");
    setQualification("Not Calculated");
  }

  const handleGwaChange = (newGwa) => {
    setGwa(newGwa);
    const g = parseFloat(newGwa);
    let qual;
    if (g === 0) {
      qual = "Not Calculated";
    } else if (g <= 1.25) {
      qual = "Summa Cum Laude";
    } else if (g <= 1.75) {
      qual = "Magna Cum Laude";
    } else if (g <= 2.25) {
      qual = "Cum Laude";
    } else {
      qual = "Not Qualified";
    }
    setQualification(qual);
  }

  return (
    <div className="flex flex-col gap-8">
      <button 
        onClick={onBack}
        className="bg-primary text-gray-800 py-2 px-4 rounded-md w-fit"
      >
        ← Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column Components */}
        <div className="flex flex-col gap-4">
          {/* Top Component - Course Title */}
          <div className="bg-background p-4 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary">{courseNames[course]}</h2>
          </div>
          
          {/* Middle Component - GWA Display */}
          <div className="bg-background p-6 rounded-lg flex-1 flex flex-col justify-between">
            <div>
              <p className="text-text">Your General Weight Average is:</p>
              <p className="text-5xl font-bold text-primary">{gwa}</p>
            </div>
            
            <div>
              <p className="text-text">You are qualified as:</p>
              <p className="text-5xl font-bold text-primary">{qualification}</p>
            </div>

            <button 
              onClick={handleRefresh}
              className="bg-primary text-gray-800 py-2 px-4 rounded-md w-fit mt-4"
            >
              Refresh
            </button>
          </div>

          {/* Bottom Component - Course Selector */}
          <div >
          <HowToCalculate />
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-background p-6 rounded-lg h-[500px] overflow-y-auto">
          <GradesTable course={course} onGwaChange={handleGwaChange} />
        </div>
      </div>
    </div>
  )
}

export default Calculator
