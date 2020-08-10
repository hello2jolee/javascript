'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', ')
    console.log(result)
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    var result2 = fruits.split(',')
    console.log(result2)
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    var result3 = array.reverse()
    console.log(result3)
  }
  
  // Q4. make new array without the first two elements
  // splice: 배열 자체를 수정하고 싶을 때 사용 
  // splice: 배열에서 원하는 부분만 return해서 받아오고 싶을 때 사용
  {
    const array = [1, 2, 3, 4, 5];
    var result4 = array.slice(2, array.length)
    console.log(result4)
    console.log(array)   // splice의 경우 array의 값도 삭제하므로, 이 경우에는 사용할 수 없음.
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result5 = students.find((student) => student.score === 90)
    console.log(result5)
  }
  
  // Q6. make an array of enrolled students
  {
    const result6 = students.filter((student) => student.enrolled)
    console.log(result6)
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result7 = students.map((student) => student.score)
    console.log(result7)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result8 = students.some((student) => student.score < 50)
    console.log(result8)

    const result8_1 = !students.every((student) => student.score >= 50) 
    console.log(result8_1)
  }
  
  // Q9. compute students' average score
  // reduceRight -> 맨 끝부터 첫번째로
  {
    const result9 = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result9 / students.length)
  }
  
  // Q10. make a string containing all the scores/ 50점 이상만 출력 
  // result should be: '45, 80, 90, 66, 88'
  {
    const result10 = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join(', ')
    console.log(result10)
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result11 =students
    .map(student => student.score)
    .sort((a, b) => a - b) // b - a : 점수가 높은것부터 작은것으로 
    .join(', ')
    console.log(result11)
  }