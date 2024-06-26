// Dataset containing course details
const courses = [
    {
        code: "GN1101",
        Name: "Life Skills 1",
        type: "Science",
        credits: "0",
        grade: "",
        attendece: "VG",
      },
      {
        code: "ID1200",
        Name: "Ecology and Environment",
        type: "Science",
        credits: "0",
        grade: "",
        attendece: "VG",
      },
      {
        code: "MA1101",
        Name: "Functions of Several Variables",
        type: "Science",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "ME1480",
        Name: "Engineering Drawing",
        type: "Engineering",
        credits: "7",
        grade: "",
        attendece: "G",
      },
      {
        code: "PH1010",
        Name: "Physics I",
        type: "Science",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "AM1100A",
        Name: "Engineering Mechanics",
        type: "Engineering",
        credits: "10",
        grade: "",
        attendece: "G",
      },
      {
        code: "CE1010",
        Name: "Introduction to Civil Engineering Profession",
        type: "Professional",
        credits: "8",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE2330",
        Name: "Civil Engineering Materials and Construction",
        type: "Professional",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CS1100",
        Name: "Introduction to Programming",
        type: "Engineering",
        credits: "12",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CY1001#",
        Name: "Chemistry I: Structure, Bonding & Reactivity",
        type: "Science",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "GN1102",
        Name: "Life Skills 2",
        type: "Science",
        credits: "0",
        grade: "",
        attendece: "VG",
      },
      {
        code: "PH1020",
        Name: "Physics II",
        type: "Science",
        credits: "10",
        grade: "",
        attendece: "G",
      },
      {
        code: "PH1030",
        Name: "Physics Laboratory I",
        type: "Science",
        credits: "4",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CY1002",
        Name: "Chemistry Lab I",
        type: "Science",
        credits: "3",
        grade: "",
        attendece: "VG",
      },
      {
        code: "MA1102,",
        Name: "Series and Matrices",
        type: "Science",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE2040",
        Name: "Hydraulic Engineering",
        type: "Professional",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE2080",
        Name: "Surveying",
        type: "Professional",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE2310",
        Name: "Mechanics of materials",
        type: "Engineering",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3015",
        Name: "Highway Engineering",
        type: "Professional",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "MA2040",
        Name: "Probability, Statistics and Stochastic Process",
        type: "Science",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE2020",
        Name: "Structural Analysis",
        type: "Professional",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3060",
        Name: "Geotechnical Engineering I",
        type: "Professional",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3025",
        Name: "Traffic Engineering ",
        type: "Professional",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3040",
        Name: "Environmental Engineering",
        type: "Professional",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "HS4570",
        Name: "Introduction to Chinese Language",
        type: "Humanities",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "MA2020",
        Name: "Differential Equations",
        type: "Sciences",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3060",
        Name: "Basic design of reinforced concrete structures ",
        type: "Professional",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "HS4570",
        Name: "Urbanization and Development",
        type: "Humanities",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE4500",
        Name: "Hydraulic and Environmental Engineering Lab",
        type: "Professional",
        credits: "4",
        grade: "",
        attendece: "VG",
      },
      {
        code: "BT1010",
        Name: "Life Sciences",
        type: "Sciences",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3030",
        Name: "Water Resources Engineering",
        type: "Professional",
        credits: "12",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3350",
        Name: "Geotechnical Engineering II",
        type: "Professional",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3410",
        Name: "Construction Materials Laboratory",
        type: "Professional",
        credits: "4",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE4010",
        Name: "Construction Project Management",
        type: "Professional",
        credits: "10",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3050",
        Name: "Basic Steel Design",
        type: "Professional",
        credits: "11",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE3100",
        Name: "Structural engineering laboratory",
        type: "Professional",
        credits: "4",
        grade: "",
        attendece: "VG",
      },
      {
        code: "HS3002",
        Name: "Principles of Economics",
        type: "Humanities",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE4310",
        Name: "Design of Concrete Structrual Systems",
        type: "Professional",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE6051",
        Name: "Machine Learning in Civil Engineering",
        type: "Professional",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
      {
        code: "CE6018",
        Name: "Seismic Data Analytics",
        type: "Professional",
        credits: "9",
        grade: "",
        attendece: "VG",
      },
  ];
  
  // Dataset containing grade weights
  const grades = {
      S: 10,
      A: 9,
      B: 8,
      C: 7,
      D: 6,
      E: 4,
      F: 0,
      U: 0,
      P: 0,
  };
  
  document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const courseCount = parseInt(document.getElementById('courseCount').value);
    const courseInputsDiv = document.getElementById('courseInputs');
    courseInputsDiv.innerHTML = ''; // Clear any existing inputs
    
    for (let i = 0; i < courseCount; i++) {
        const courseInput = document.createElement('div');
        courseInput.innerHTML = `
            <label for="courseCode${i}">Course Code:</label>
            <input type="text" id="courseCode${i}" name="courseCode${i}" required>
            <label for="courseGrade${i}">Grade:</label>
            <input type="text" id="courseGrade${i}" name="courseGrade${i}" required>
        `;
        courseInputsDiv.appendChild(courseInput);
    }
    
    document.getElementById('calculateCGPA').style.display = 'block';
});

document.getElementById('calculateCGPA').addEventListener('click', function() {
    const courseCount = parseInt(document.getElementById('courseCount').value);
    
    let totalCredits = 0;
    let totalWeightedCredits = 0;
    
    for (let i = 0; i < courseCount; i++) {
        const courseCode = document.getElementById(`courseCode${i}`).value.toUpperCase();
        const courseGrade = document.getElementById(`courseGrade${i}`).value.toUpperCase();
        const gradeWeight = grades[courseGrade];
        
        const course = courses.find(c => c.code === courseCode);
        
        if (course && gradeWeight !== undefined) {
            const creditValue = parseInt(course.credits);
            totalCredits += creditValue;
            totalWeightedCredits += gradeWeight * creditValue;
        } else {
            alert('Invalid course code or grade. Please check your input.');
            return;
        }
    }
    
    const cgpa = totalWeightedCredits / totalCredits;
    document.getElementById('cgpaResult').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});