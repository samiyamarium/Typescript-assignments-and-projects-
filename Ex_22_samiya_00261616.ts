//Exercise 22
//taken Exercise 13, making intentional index error
let cars=["Toyota","porsche","KIA"];
let message=[" I like to travel by cars","Toyota offers a wide range of vehicles"," Corolla is best to use for domestic"]
console.log(cars.concat(message));
console.log(cars[3]+message[3])// making intentional index error,returns "NaN"
console.log(cars[1]+  message[3]);//making another index error "porsche undefined"