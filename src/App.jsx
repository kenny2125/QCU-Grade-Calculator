import './index.css'
import HomepageBg from './assets/Homepage.png'
import Navbar from './components/Navbar'
import Calculator from './Calculator'
import { useState } from 'react'
import CourseSelector from './components/CourseSelector'
import HowToCalculate from './components/HowToCalculate'

function App() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('bsit');

  return (
    <>  
    <div className="min-h-screen bg-gray-700 flex flex-col gap-8 px-4 md:px-32"> 
      <Navbar />
      
      {/* Title Section - Always visible */}
      <div className={`flex flex-col items-center text-center mt-32 ${showCalculator ? 'md:mt-2' : 'md:mt-48'}`}>
        <h1 className="text-4xl md:text-title font-bold text-primary">QCU GWA CALCULATOR</h1>
        <h2 className="text-body mt-4">A free general weighted average calculator for Quezon City University students</h2>
      </div>

      {!showCalculator ? (
        <>
          <CourseSelector 
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            onCalculate={() => setShowCalculator(true)}
          />
          <HowToCalculate />
        </>
      ) : (
        <Calculator 
          course={selectedCourse} 
          onBack={() => setShowCalculator(false)}
        />
      )}
    </div>
    </>
  )
}

export default App
