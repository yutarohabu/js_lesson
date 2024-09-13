// Section5
// Q1
function q5_1(){
  let nickname = 'ゆーぴー';
  let age = 25;

  console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');
}

q5_1();

// Q2
function q5_2(){
  let languages = ['JavaScript','PHP','Ruby','Python','Go'];

  console.log(`私の好きな言葉は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);
}

q5_2();

// Q3
function q5_3(){
  let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };

  console.log(user.age);
}

q5_3();

// Q4,Q5
function q5_4_5(){
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

q5_4_5();

// Q6
function q5_6(){
  function sayHello(){
    console.log('Hello');
  }

  sayHello();
}

q5_6();

// Q7
function q5_7(){
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

q5_7();

// Q8
function q5_8(){
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

q5_8();

// Q9
function q5_9(){
  let x;
  let y;

  function remainder(x,y){

    return x % y;

  }

  x = 5;
  y = 3;

  console.log( x + 'を' + y + 'で割った余りは' + remainder(x,y) + 'です。');
  
}

q5_9();

// Q10
// xのスコープの範囲は関数foo内だけなので、コンソールは参照できる範囲から外れているのでエラーがでます。
// エラーがでないようにするには、コンソールを関数foo内に書くか、変数xの宣言を関数fooの外に書く必要があります。


// Section6
// Q1
function q6_1(){
  console.log(Math.floor(Math.random() * 9));
}

q6_1();

// Q2
function q6_2(){

  setTimeout(function(){console.log('Hello World!')}, 3000);

}

q6_2();

//Q3
function q6_3(){
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

q6_3();

//Q4
function q6_4(){
  let numbers = [];

  for(let i = 0; i < 100; i++){
    numbers[i] = i;
    console.log(numbers[i]);
  }

}

q6_4();

// Q5
function q6_5(){
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

q6_5();