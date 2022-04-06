export class MyDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string { // sign the function return =>  nameFunction(): dataType
    return `${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years'){
    (type === 'days') && (this.day += amount);
    (type === 'months') && (this.month += amount);
    (type === 'years') && (this.year += amount);
  }
}

const myDate = new MyDate(1993,7,7)
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());
myDate.add(6, 'months');
console.log(myDate.printFormat());
