const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
};

// const selfEducate = person => {   // this function will change the original data
//   person.canRead = true;
//   person.canWrite = true;
//   return person;
// };

// console.log(selfEducate(frederick)); // {name: "Frederick Douglass", canRead: true, canWrite: true}
// console.log(frederick); // {name: "Frederick Douglass", canRead: true, canWrite: true}

const selfEducate = person => ({   //this is a pure funtion - it will not mutate the origina person object
  ...person,
  canRead: true,
  canWrite: true
});

console.log(selfEducate(frederick));
console.log(frederick);

// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}
