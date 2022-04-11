export abstract class Animal {
  constructor(
    protected name: string
  ){
  }

  move(){
    console.log(`${this.name} is moving...`);
  }

  greeting(){
    return `Hey All, I'm ${this.name}`;
  }

  protected doSomething(){
    console.log('Doing something...')
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
      console.log(`Woof!!! ${index + 1}`)
    }

    this.doSomething();
  }

  move(){
    console.log('Moving as a dog'); // Defining a specific Dog move
    super.move(); // Calling General Animal Move
  }

}

const red = new Dog('Jorge', 'Rocco');
// red.name = 'New name';
red.woof(2);
red.move();
