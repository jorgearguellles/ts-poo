export class MyServices {

  static instance: MyServices | null = null;

  private constructor(
    private name: string
  ){}

  getName(){
    return this.name;
  }

  static create(name: string){
    if(MyServices.instance === null){
      console.log('Should called once')
      MyServices.instance = new MyServices(name);
    }
    return MyServices.instance;
  }
}

const myService1 = MyServices.create('service 1')
console.log(myService1.getName())

const myService2 = MyServices.create('service 2')
console.log(myService2.getName())

const myService3 = MyServices.create('service 3')
console.log(myService3.getName())

console.log(myService1 === myService2);
