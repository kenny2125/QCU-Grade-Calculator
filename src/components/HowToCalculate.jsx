import React from 'react'

function HowToCalculate() {
  return (
    <div className="text-body ">
      <h1 className="text-xl md:text-1xl mb-4">How to Calculate your GWA?</h1>
      
    
      <p className="text-white-700 mb-1">
        This GWA Calculator is designed to reflect the original subjects offered
        in the curriculum of Quezon City University (QCU), as detailed on their
        official website.
      </p>
      <p className="text-white-700 mb-1">
        It computes your General Weighted Average by considering the credit
        units and corresponding grades for each course, ensuring alignment with
        the academic policies and grading system of QCU.
      </p>
      <p className="text-white-700 mb-1">
        Whether you are enrolled in core subjects such as Purposive
        Communication, Mathematics in the Modern World, or Science, Technology,
        and Society—or in specialized courses across programs like Information
        Technology, Industrial Engineering, or Early Childhood Education—this
        tool provides a reliable method to track your academic performance.
      </p>

      <a
        href="https://qcu.edu.ph"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Source: Official website of Quezon City University
      </a>
    
    </div>
  )
}

export default HowToCalculate
