
```js
class Animal {

  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  sayHello() {
    console.log(`Hi My Name is ${this.name} and i ${this.sound}`);
  }

}

class Dog extends Animal {
  constructor(){
    super("dog","bark");
    this.name = 'Tommy';
  }

// or

/*  constructor(type, sound){
    super(type, sound);
    this.name = 'Tommy';
  }*/

  sayWhoami(){
    console.log(`i am a ${this.type}`);
  }

}

var dog = new Dog();
// or if using the commented constructor
/*var dog = new Dog("dog","bark");*/

dog.sayHello(); // Hi My Name is Tommy and i bark
dog.sayWhoami(); // i am a dog
```
