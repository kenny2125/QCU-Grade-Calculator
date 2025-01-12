import React, { useState, useEffect } from 'react'

function GradesTable({ course }) {
  // Sample available subjects - replace with your actual subjects list
  const availableSubjects = [
    { code: "GE 1", name: "Understanding the Self", units: 3 },
    { code: "GE 2", name: "Mathematics in the Modern World", units: 3 },
    { code: "GE 3", name: "Science, Technology and Society", units: 3 },
    { code: "GE 4", name: "Purposive Communication", units: 3 },
    // Add more subjects as needed
  ];

  const [selectedSubject, setSelectedSubject] = useState('');
  const [semester, setSemester] = useState({
    name: "First Semester",
    subjects: []
  });

  const [gwa, setGwa] = useState(0);

  const handleGradeChange = (index, value) => {
    const updatedSubjects = [...semester.subjects];
    updatedSubjects[index] = { ...updatedSubjects[index], grade: value };
    setSemester({ ...semester, subjects: updatedSubjects });
  };

  const handleAddSubject = () => {
    if (selectedSubject) {
      const subjectToAdd = availableSubjects.find(s => s.code === selectedSubject);
      if (subjectToAdd && !semester.subjects.some(s => s.code === selectedSubject)) {
        setSemester({
          ...semester,
          subjects: [...semester.subjects, { ...subjectToAdd, grade: '' }]
        });
        setSelectedSubject('');
      }
    }
  };

  const handleDeleteSubject = (index) => {
    const updatedSubjects = semester.subjects.filter((_, i) => i !== index);
    setSemester({ ...semester, subjects: updatedSubjects });
  };

  const calculateGWA = () => {
    const gradedSubjects = semester.subjects.filter(subject => subject.grade);
    if (gradedSubjects.length === 0) return 0;

    const totalUnits = gradedSubjects.reduce((sum, subject) => sum + subject.units, 0);
    const weightedSum = gradedSubjects.reduce((sum, subject) => 
      sum + (parseFloat(subject.grade) * subject.units), 0);

    return totalUnits ? (weightedSum / totalUnits).toFixed(2) : 0;
  };

  // Recalculate GWA whenever grades change
  useEffect(() => {
    const newGwa = calculateGWA();
    setGwa(newGwa);
  }, [semester.subjects]);

  return (
    <div className="bg-gray-900 p-2 sm:p-4 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div className="flex items-center gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary">{semester.name}</h3>
          <span className="text-lg font-bold text-primary">GWA: {gwa}</span>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <select
            className="bg-gray-800 text-white p-1 rounded flex-1 sm:w-48"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {availableSubjects
              .filter(subject => !semester.subjects.some(s => s.code === subject.code))
              .map(subject => (
                <option key={subject.code} value={subject.code}>
                  {subject.code} - {subject.name} ({subject.units} units)
                </option>
              ))}
          </select>
          <button 
            onClick={handleAddSubject}
            className="bg-primary text-gray-800 px-2 py-1 rounded text-sm"
          >
            Add
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="p-1 sm:p-2">Code</th>
              <th className="p-1 sm:p-2">Subject</th>
              <th className="p-1 sm:p-2">Units</th>
              <th className="p-1 sm:p-2">Grade</th>
              <th className="p-1 sm:p-2"></th>
            </tr>
          </thead>
          <tbody>
            {semester.subjects.map((subject, index) => (
              <tr key={subject.code} className="border-t border-gray-800 text-sm">
                <td className="p-1 sm:p-2">{subject.code}</td>
                <td className="p-1 sm:p-2">{subject.name}</td>
                <td className="p-1 sm:p-2">{subject.units}</td>
                <td className="p-1 sm:p-2">
                  <select 
                    value={subject.grade}
                    onChange={(e) => handleGradeChange(index, e.target.value)}
                    className="bg-gray-800 text-white p-1 rounded w-16"
                  >
                    <option value="">Select</option>
                    <option value="1.00">1.00</option>
                    <option value="1.25">1.25</option>
                    <option value="1.50">1.50</option>
                    <option value="1.75">1.75</option>
                    <option value="2.00">2.00</option>
                    <option value="2.25">2.25</option>
                    <option value="2.50">2.50</option>
                    <option value="2.75">2.75</option>
                    <option value="3.00">3.00</option>
                    <option value="5.00">5.00</option>
                  </select>
                </td>
                <td className="p-1 sm:p-2">
                  <button
                    onClick={() => handleDeleteSubject(index)}
                    className="text-red-500 hover:text-red-400 text-sm"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-gray-400 text-sm">
          Total Units: {semester.subjects.reduce((sum, subj) => sum + subj.units, 0)}
        </span>
      </div>
    </div>
  )
}

export default GradesTable
