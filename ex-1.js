// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
  let result = [];
  for (let items of array){
      result.push(operation(items));
  }
  return result
}

// Using `forEach` function here
let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
  function addSalary500 เป็น Callback Function
  จุดสังเกตคือ function นี้เป็นการ return ค่า previousSalary ออกมา ถ้าตามคำสั่งใน function ค่าทีออกมาจะไม่เป็นตามโจทย์
  เพราะเป็นการบวกเลขที่ index ตัวสุดท้าย โดยการบวกเป็น String จะไม่ได้เข้าไปถึง index ตัวอื่น ๆ

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
  function forEach เป็น Higher Order Function
  จุดสังเกตคือ function นี้เมื่อถูก Execute จะเรียกใช้ function อื่น ให้มาทำงานใน function ของตัวเอง 
  ซึ่งแปลว่าใน function forEach จะต้องมี function อืนมาเป็น Argument ในตัว Parameter Operation ถึงสามารถทำงานได้

====================================
*/
