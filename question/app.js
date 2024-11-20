// Section5
// Q1
function showMessage(){
  let nickname = 'ゆーぴー';
  let age = 25;

  console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');
}

showMessage();

// Q2
function templateRitteral(){
  let languages = ['JavaScript','PHP','Ruby','Python','Go'];

  console.log(`私の好きな言葉は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);
}

templateRitteral();

// Q3
function showArray(){
  let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };

  console.log(user.age);
}

showArray();

// Q4,Q5
function showObject(){
  let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];

  console.log(playerList[1].favorites[1]);

  let num=0;

  for(let i=0;i<playerList.length;i++){
    num += playerList[i].age;

    if(i===playerList - 1){
      num =  num / playerList.length
      console.log(num);
    }
  }
}

showObject();

// Q6
function functionQuestion(){
  function sayHello(){
    console.log('Hello');
  }

  sayHello();
}

functionQuestion();

// Q7
function addProperties(){
  let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };

  user.birthday = '2000-09-27'

  user.sayWorld =function(){
    console.log('Hello!');
  }

  user.sayWorld();

}

addProperties();

// Q8
function addMethods(){
  let x;
  let y;
  let calc = {
    add : function(x,y){
      console.log(x + y);
    },

    subtract : function(x,y){
      console.log(x - y);
    },

    multiply : function(x,y){
      console.log(x * y);
    },

    divide : function(x,y){
      console.log(x / y);
    }

  };

  calc.add(3,4);
  calc.subtract(15,5);
  calc.multiply(7,7);
  calc.divide(25,5);

}

addMethods();

// Q9
function useArgument(){
  let x;
  let y;

  function remainder(x,y){

    return x % y;

  }

  x = 5;
  y = 3;

  console.log( x + 'を' + y + 'で割った余りは' + remainder(x,y) + 'です。');
  
}

useArgument();

// Q10
// xのスコープの範囲は関数foo内だけなので、コンソールは参照できる範囲から外れているのでエラーがでます。
// エラーがでないようにするには、コンソールを関数foo内に書くか、変数xの宣言を関数fooの外に書く必要があります。


// Section6
// Q1
function randomNumber(){
  console.log(Math.floor(Math.random() * 9));
}

randomNumber();

// Q2
function showDelay(){

  setTimeout(function(){console.log('Hello World!')}, 3000);

}

showDelay();

//Q3
function judgeNumber(){
  let num;

  num = 5;

  if(num < 0 ){
    console.log('num is greater than 0');
  }else if(num > 0){
    console.log('num is less than 0');
  }else if(num === 0){
    console.log('num is 0');
  }
}

judgeNumber();

//Q4
function showNumberLoop(){
  let numbers = [];

  for(let i = 0; i < 100; i++){
    numbers[i] = i;
    console.log(numbers[i]);
  }

}

showNumberLoop();

// Q5
function judgeArray(){
  let mixed = [4, '2', 5, '8', '9', 0, 1];

  for(let i = 0; i < mixed.length; i++){
    if( typeof mixed[i] === 'number' && mixed[i] % 2 === 0){
      console.log('even');
    }else if(typeof mixed[i] === 'number' && mixed[i] % 2 === 1){
      console.log('odd');
    }else{
      console.log('not number');
    }
  }

}

judgeArray();