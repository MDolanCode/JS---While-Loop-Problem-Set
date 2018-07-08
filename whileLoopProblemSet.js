//While Loop Problem Set

//1.Print all Numbers between -10 and 19

//my Answer
var num = -10;

while(num <= 19) {
  console.log(num)
  num++;
}

//2.Print all Even Numbers between 10 and 40

//my Answer
var num = 10;

while(num <= 40) {
  console.log(num)
  num+=2;
}

//Another way to solve this: Instructor's answer

var num = 10;

while(num <= 40) {
  if (num % 2 === 0); {
    console.log(num)
  }
  num+=1;
}

//3.Print all Odd Numbers between 300 and 333

var num = 300;

while(num <= 333) {
  console.log(num + 1)
  num+=2;
}

//Another way to solve this: Instructor's answer

var num = 300;

while(num <= 333) {
  if(num % 2 !== 0) {
  console.log(num)
  }
  num+=1;
}

//4.Print all Numbers divisible by 5 AND 3 between 5 and 50

var num = 5;

while(num <= 50) {
  if((num % 5 === 0) && (num % 3 === 0)) {
    console.log(num);
  }
  num++;
}

//Another way to solve this: Instructor's answer
var num = 5;

while(num <= 50) {
  if(num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}
