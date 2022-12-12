let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];


// const addColor = function(title, colors) {
//   colors.push({ title: title });
//   return colors;
// };

// console.log(addColor("Glam Green", list).length); // 4
// console.log(list.length); // 4

const addColor = (title, array) => { array.concat({ title });
};

// const addColor = (title, list) => [...list, { title }];

console.log(addColor("Glam Green", list)); // 4
console.log(list.length); // 3

console.log(list)
