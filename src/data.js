// Table Data
export const headerData = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Occupation", key: "occupation" },
];

export const tableData = [
  {
    id: 1,
    name: "Emily Chen",
    age: 28,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Ryan Thompson",
    age: 32,
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Sophia Patel",
    age: 25,
    occupation: "Data Analyst",
  },
  {
    id: 4,
    name: "Michael Lee",
    age: 41,
    occupation: "CEO",
  },
  {
    id: 5,
    name: "Olivia Brown",
    age: 29,
    occupation: "Graphic Designer",
  },
  {
    id: 6,
    name: "Alexander Hall",
    age: 38,
    occupation: "Sales Representative",
  },
  {
    id: 7,
    name: "Isabella Davis",
    age: 26,
    occupation: "Teacher",
  },
  {
    id: 8,
    name: "Ethan White",
    age: 35,
    occupation: "Lawyer",
  },
  {
    id: 9,
    name: "Lily Tran",
    age: 30,
    occupation: "Nurse",
  },
  {
    id: 10,
    name: "Julian Sanchez",
    age: 39,
    occupation: "Engineer",
  },
  {
    id: 11,
    name: "Ava Martin",
    age: 27,
    occupation: "Journalist",
  },
  {
    id: 12,
    name: "Benjamin Walker",
    age: 42,
    occupation: "Doctor",
  },
  {
    id: 13,
    name: "Charlotte Brooks",
    age: 31,
    occupation: "HR Manager",
  },
  {
    id: 14,
    name: "Gabriel Harris",
    age: 36,
    occupation: "IT Consultant",
  },
  {
    id: 15,
    name: "Hannah Taylor",
    age: 24,
    occupation: "Student",
  },
  {
    id: 16,
    name: "Jackson Brown",
    age: 40,
    occupation: "Business Owner",
  },
  {
    id: 17,
    name: "Kayla Lewis",
    age: 33,
    occupation: "Event Planner",
  },
  {
    id: 18,
    name: "Logan Mitchell",
    age: 37,
    occupation: "Architect",
  },
  {
    id: 19,
    name: "Mia Garcia",
    age: 29,
    occupation: "Artist",
  },
  {
    id: 20,
    name: "Natalie Hall",
    age: 34,
    occupation: "Teacher",
  },
  {
    id: 21,
    name: "Oliver Patel",
    age: 38,
    occupation: "Software Developer",
  },
  {
    id: 22,
    name: "Penelope Martin",
    age: 26,
    occupation: "Writer",
  },
  {
    id: 23,
    name: "Quinn Lee",
    age: 35,
    occupation: "Entrepreneur",
  },
  {
    id: 24,
    name: "Rachel Kim",
    age: 30,
    occupation: "Dentist",
  },
  {
    id: 25,
    name: "Samuel Jackson",
    age: 42,
    occupation: "Lawyer",
  },
  {
    id: 26,
    name: "Tessa Hall",
    age: 28,
    occupation: "Graphic Designer",
  },
  {
    id: 27,
    name: "Uma Patel",
    age: 39,
    occupation: "Marketing Manager",
  },
  {
    id: 28,
    name: "Vincent Brooks",
    age: 36,
    occupation: "IT Consultant",
  },
  {
    id: 29,
    name: "Walter White",
    age: 41,
    occupation: "Engineer",
  },
  {
    id: 30,
    name: "Xavier Sanchez",
    age: 33,
    occupation: "Sales Representative",
  },
  {
    id: 31,
    name: "Yvonne Martin",
    age: 29,
    occupation: "Teacher",
  },
  {
    id: 32,
    name: "Zoe Lee",
    age: 27,
    occupation: "Data Analyst",
  },
  {
    id: 33,
    name: "Abigail Brown",
    age: 34,
    occupation: "Nurse",
  },
  {
    id: 34,
    name: "Caleb Harris",
    age: 38,
    occupation: "Business Owner",
  },
  {
    id: 35,
    name: "Diana Taylor",
    age: 31,
    occupation: "Event Planner",
  },
  {
    id: 36,
    name: "Eleanor Walker",
    age: 40,
    occupation: "CEO",
  },
];

// Dices Data
export const dices = [
  { value: 1, shape: [0, 0, 0, 0, 1, 0, 0, 0, 0] },
  { value: 2, shape: [1, 0, 0, 0, 0, 0, 0, 0, 1] },
  { value: 3, shape: [1, 0, 0, 0, 1, 0, 0, 0, 1] },
  { value: 4, shape: [1, 0, 1, 0, 0, 0, 1, 0, 1] },
  { value: 5, shape: [1, 0, 1, 0, 1, 0, 1, 0, 1] },
  { value: 6, shape: [1, 0, 1, 1, 0, 1, 1, 0, 1] },
];

// File Explorer Data
export const fileExplorer = [
  {
    id: 1,
    name: "README.md",
  },
  {
    id: 2,
    name: "Documents",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
  {
    id: 5,
    name: "Downloads",
    children: [
      {
        id: 6,
        name: "unnamed.txt",
      },
      {
        id: 7,
        name: "Misc",
        children: [
          {
            id: 8,
            name: "foo.txt",
          },
          {
            id: 9,
            name: "bar.txt",
          },
        ],
      },
    ],
  },
  { id: 10, name: "New Folder", children: [] },
  {
    id: 11,
    name: "src",

    children: [
      {
        name: "main.jsx",
        id: 12,
      },
      {
        name: "utils.js",
        id: 13,
      },
      { id: 14, name: "components", children: [{ id: 15, name: "page.jsx" }] },
    ],
  },
];

export const stars = [
  { id: 1, filled: "line-md:star-filled", outlined: "line-md:star" },
  { id: 2, filled: "line-md:star-filled", outlined: "line-md:star" },
  { id: 3, filled: "line-md:star-filled", outlined: "line-md:star" },
  { id: 4, filled: "line-md:star-filled", outlined: "line-md:star" },
  { id: 5, filled: "line-md:star-filled", outlined: "line-md:star" },
];
