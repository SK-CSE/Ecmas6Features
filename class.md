

### ECMAScript 6
```js
class Person {

  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  
  describeYourself() {
    console.log(`My name is ${this.name} and i am a ${this.occupation}`);
  }
  
}

var man = new Person("Saurabh Kumar", "Software Engineer");
man.describeYourself();
```

### ECMAScript 5
```js
function Person(name, occupation){
  this.name = name;
  this.occupation = occupation;
}

Person.prototype.describeYourself = function(){
    console.log("My name is " +this.name+" and i am a "+this.occupation);
}

var man = new Person("Saurabh Kumar", "Software Engineer");

man.describeYourself();
```
