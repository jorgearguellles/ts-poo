const date = new Date();

date.getDay();

const date2 = new Date(1990,0,15);
date2.getDay();

console.log({date, date2})

export class MyDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2022,10,10);
console.log({myDate})
