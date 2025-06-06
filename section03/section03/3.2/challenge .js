const school = {
  name: "Greenwood High",
  location: {
    city: "Springfield",
    state: "MO",
    zip: 65804,
    address: {
      street: "123 Elm St",
      building: "Main",
      room: 101
    }
  },
  mascot: "Gators",
  departments: [
    {
      name: "Science",
      teachers: [
        {
          name: "Mr. Newton",
          subject: "Physics",
          yearsTeaching: 12,
          schedule: {
            monday: "9am-11am",
            wednesday: "9am-11am"
          }
        },
        {
          name: "Dr. Curie",
          subject: "Chemistry",
          yearsTeaching: 9,
          schedule: {
            tuesday: "10am-12pm",
            thursday: "10am-12pm"
          }
        }
      ]
    },
    {
      name: "Arts",
      teachers: [
        {
          name: "Ms. Frida",
          subject: "Painting",
          yearsTeaching: 7,
          awards: ["Best Local Artist", "Creative Visionary"]
        },
        {
          name: "Mr. Mozart",
          subject: "Music",
          yearsTeaching: 15,
          instruments: ["Piano", "Violin"]
        }
      ]
    }
  ],
  students: [
    {
      name: "Lily",
      age: 14,
      classes: ["Biology", "Algebra", "Painting"],
      grades: {
        Biology: "A",
        Algebra: "B+",
        Painting: "A-"
      },
      guardian: {
        name: "Mrs. Thompson",
        contact: {
          phone: "555-1234",
          email: "thompson.lily@example.com"
        }
      }
    },
    {
      name: "Marcus",
      age: 15,
      classes: ["Chemistry", "Geometry", "Music"],
      grades: {
        Chemistry: "B",
        Geometry: "A",
        Music: "A+"
      },
      guardian: {
        name: "Mr. Lee",
        contact: {
          phone: "555-5678",
          email: "lee.marcus@example.com"
        }
      }
    }
  ]
};
//console.log(school.departments[1].teachers[0].awards[0])
 let students= school.students
function studentLists(){
  for (let x of students)
    console.log(x.name)
 }studentLists()