console.log('Original Math.PI:',Math.PI);
console.log(Math.max(1,2,3,5,6,7,8,9));

class MyMath{
  static readonly PI = 3.14;

  static max(...numbers: number[]){
    return numbers.reduce( (max, item) => max >= item ? max : item, 0  )
  }
}

console.log('MyMath.PI:',MyMath.PI);
const num = [12,3,4,5,100];
console.log('MyMath.max:', MyMath.max(...num));
