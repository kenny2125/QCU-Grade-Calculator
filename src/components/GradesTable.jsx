import React, { useState, useEffect } from "react";

function GradesTable({ course, onGwaChange }) {
  // Sample available subjects - replace with your actual subjects list
  const availableSubjects = [
    //first year first semester
    { code: "CC102", name: "Fundamentals of Programming", units: 3 },
    { code: "GEE1", name: "Gender and Society", units: 3 },
    { code: "CC101", name: "Introduction to Computing", units: 3 },
    { code: "MATH1", name: "Mathematics in the Modern World", units: 3 },
    { code: "NSTP1", name: "National Service Training Program 1", units: 3 },
    { code: "GEE2", name: "People and the Earth's Ecosystems", units: 3 },
    { code: "PE1", name: "Physical Fitness and Wellness", units: 2 },
    {
      code: "WS101",
      name: "Web Systems and Technologies 1 (Electives)",
      units: 3,
    },
    //first year second semester
    { code: "CC103", name: "Intermediate Programming", units: 3 },
    { code: "NSTP2", name: "National Service Training Program 2", units: 3 },
    { code: "NET101", name: "Networking 1", units: 3 },
    { code: "GEE3", name: "Philippine Popular Culture", units: 3 },
    { code: "PT101", name: "Platform Technologies (Electives)", units: 3 },
    { code: "ENG1", name: "Purposive Communication", units: 3 },
    { code: "PE2", name: "Rhythmic Activities", units: 2 },
    { code: "SCI1", name: "Science, Technology and Society", units: 3 },
    //second year first semester
    { code: "HUM1", name: "Art Appreciation", units: 3 },
    { code: "CC104", name: "Data Structures and Algorithms", units: 3 },
    { code: "PE3", name: "Individual and Dual Sports", units: 2 },
    { code: "CC105", name: "Information Management", units: 3 },
    { code: "NET102", name: "Networking 2", units: 3 },
    { code: "PF101", name: "Object-Oriented Programming", units: 3 },
    { code: "IS104", name: "Systems Analysis and Design", units: 3 },
    //second year second semester
    { code: "IM101", name: "Advanced Database Systems", units: 3 },
    {
      code: "IP101",
      name: "Integrative Programming and Technologies 1",
      units: 3,
    },
    {
      code: "HCI101",
      name: "Introduction to Human Computer Interaction",
      units: 3,
    },
    { code: "SOCSCI2", name: "Readings in Philippines History", units: 3 },
    { code: "SE101", name: "Software Engineering", units: 3 },
    { code: "PE4", name: "Team Sports", units: 2 },
    { code: "SOCSCI1", name: "Understanding the Self", units: 3 },
    //third year first semester
    { code: "AR101", name: "Architecture and Organization", units: 3 },
    { code: "MSI101", name: "Discrete Mathematics", units: 3 },
    {
      code: "IPT102",
      name: "Integrative Programming and Technologies 2 (Electives)",
      units: 3,
    },
    { code: "SPI101", name: "Social Professional Issues 1", units: 3 },
    { code: "SIA101", name: "Systems Integration and Architecture", units: 3 },
    { code: "SOCSCI3", name: "Contemporary World", units: 3 },
    { code: "RIZAL", name: "The Life and Work of Rizal", units: 3 },
    //third year second semester
    { code: "AL101", name: "Algorithms and Complexity", units: 3 },
    {
      code: "CC106",
      name: "Application Development and Emerging Technologies",
      units: 3,
    },
    { code: "HUM2", name: "Ethics", units: 3 },
    {
      code: "IAS101",
      name: "Fundamental of Information Asurance and Security",
      units: 3,
    },
    { code: "MS102", name: "Quantitative Methods", units: 3 },
    { code: "SIA102", name: "Systems Integration and Architecture", units: 3 },
    //fourth year first semester
    { code: "AL102", name: "Automata Theory and Formal Language", units: 3 },
    { code: "CAP101", name: "Capstone Project and Research 1", units: 3 },
    { code: "IAS102", name: "Information Assurance and Security 2", units: 3 },
    { code: "PRC101", name: "Practicum 1", units: 3 },
    //fourth year second semester
    { code: "CAP102", name: "Capstone Project and Research 2", units: 3 },
    { code: "SAM101", name: "System Administration and Maintenance", units: 3 },
    { code: "PRC102", name: "Practicum 2", units: 3 },
  ];

  const [selectedSubject, setSelectedSubject] = useState("");
  const [semester, setSemester] = useState({
    name: "First Semester",
    subjects: [],
  });

  const [gwa, setGwa] = useState(0);

  const handleGradeChange = (index, value) => {
    const updatedSubjects = [...semester.subjects];
    updatedSubjects[index] = { ...updatedSubjects[index], grade: value };
    setSemester({ ...semester, subjects: updatedSubjects });
  };

  const handleAddSubject = () => {
    if (selectedSubject && semester.subjects.length < 8) { // Added check for max subjects
      const subjectToAdd = availableSubjects.find(
        (s) => s.code === selectedSubject
      );
      if (
        subjectToAdd &&
        !semester.subjects.some((s) => s.code === selectedSubject)
      ) {
        setSemester({
          ...semester,
          subjects: [...semester.subjects, { ...subjectToAdd, grade: "" }],
        });
        setSelectedSubject("");
      }
    }
  };

  const handleDeleteSubject = (index) => {
    const updatedSubjects = semester.subjects.filter((_, i) => i !== index);
    setSemester({ ...semester, subjects: updatedSubjects });
  };

  const calculateGWA = () => {
    const gradedSubjects = semester.subjects.filter((subject) => subject.grade);
    if (gradedSubjects.length === 0) return 0;

    const totalUnits = gradedSubjects.reduce(
      (sum, subject) => sum + subject.units,
      0
    );
    const weightedSum = gradedSubjects.reduce(
      (sum, subject) => sum + parseFloat(subject.grade) * subject.units,
      0
    );

    return totalUnits ? (weightedSum / totalUnits).toFixed(2) : 0;
  };

  
  useEffect(() => {
    const newGwa = calculateGWA();
    setGwa(newGwa);
    if (onGwaChange) onGwaChange(newGwa);
  }, [semester.subjects]);

  return (
    <div className="bg-background2 p-2 sm:p-4 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div className="flex items-center gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary">
            Add Subjects and your grades here
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <select
            className="bg-gray-800 text-white p-1 rounded flex-1 sm:w-48"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {availableSubjects
              .filter(
                (subject) =>
                  !semester.subjects.some((s) => s.code === subject.code)
              )
              .map((subject) => (
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

      <div className="">
        <table className="w-full"> {/* Removed "min-w-full" to avoid scrollbars */}
          <thead>
            <tr className="text-left text-white text-sm">
              <th className="p-1 sm:p-2">Code</th>
              <th className="p-1 sm:p-2">Subject</th>
              <th className="p-1 sm:p-2">Units</th>
              <th className="p-1 sm:p-2">Grade</th>
              <th className="p-1 sm:p-2"></th>
            </tr>
          </thead>
          <tbody>
            {semester.subjects.map((subject, index) => (
              <tr
                key={subject.code}
                className="border-t border-gray-800 text-sm"
              >
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

      <div className="ml-2 flex flex-col sm:flex-row justify-between items-center gap-1">
        <span className="text-white text-sm">
          Total Units:{" "}
          {semester.subjects.reduce((sum, subj) => sum + subj.units, 0)}
        </span>
      </div>
    </div>
  );
}

export default GradesTable;
