export class Animal {
  constructor(
    public name: string
  ){
  }

  move(){
    console.log(`${this.name} is moving...`);
  }

  greeting(){
    return `Hey All, I'm ${this.name}`;
  }
}

export class Dog extends Animal{

  constructor(
    public owner: string,
    name: string
    ){
    super(name);
  }

  woof(times: number){
    console.log(`${this.name} is woofing ${times} times:`)
    for (let index = 0; index < times; index++) {
      console.log(`Wooof!!! ${index + 1}`)
    }
  }

}

const test = new Animal('Firulais');
console.log(test.greeting());
test.move();

const doggy = new Dog('Jorge', 'Rocco');
console.log('Owner: ',doggy.owner)
console.log(doggy.greeting());
doggy.move();
doggy.woof(5);
