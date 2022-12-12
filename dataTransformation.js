const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log(schools.join(", ")); // transformation

console.log(schools)  //however the orginal dataset is not mutated

const wSchools = schools.filter(school => school[0] === "W");

console.log(wSchools);

console.log(schools)  //original data still intact

const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", "));

// "Yorktown, Wakefield"

console.log(schools.join("\n")); // still proving that the above operations have merely transformed the original data from one form to another. The original data is not mutated

// Yorktown
// Washington & Liberty
// Wakefield

let schoolz = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington & Liberty" },
  { name: "Wakefield" }
];

let updatedSchools = editName("Stratford", "HB Woodlawn", schoolz);

// const editName = (oldName, name, arr) =>
//   arr.map(item => {
//     if (item.name === oldName) {
//       return {
//         ...item,
//         name
//       };
//     } else {
//       return item;
//     }
//   });

// const editName = (oldName, name, arr) =>
//   arr.map(item => (item.name === oldName ? { ...item, name } : item));



console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
console.log(schoolz[1]); // { name: "Stratford" }

// const schools = {
//   Yorktown: 10,
//   "Washington & Liberty": 2,
//   Wakefield: 5
// };

// const schoolArray = Object.keys(schools).map(key => ({
//   name: key,
//   wins: schools[key]
// }));

// console.log(schoolArray);

// [
// {
// name: "Yorktown",
// wins: 10
// },
// {
// name: "Washington & Liberty",
// wins: 2
// },
// {
// name: "Wakefield",
// wins: 5
// }
// ]