let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0
};


// function rateColor(color, rating) {
//   color.rating = rating;
//   return color;
// }

// const rateColor = function(color, rating) {
//   return Object.assign({}, color, { rating: rating });
// };

//above function written with spread operator
const rateColor = (color, rating) => ({
  ...color,
  rating
});



console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5 and 0 when using the second function

console.log(color_lawn)