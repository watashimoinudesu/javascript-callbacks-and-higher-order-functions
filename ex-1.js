// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
  const newSalary = []
  for (let i = 0; i < array.length; i++) {
    array[i] = operation(array[i])
    newSalary.push(array[i])
  }
  return newSalary
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries,addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
function addSalary5000
2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
function forEach
====================================
*/
