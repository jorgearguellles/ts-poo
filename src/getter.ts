export class MyDate {

  constructor(
    public year: number = 1990,
    public month: number = 1,
    private _day: number = 15
  ) { }

  printFormat(): string { // sign the function return =>  nameFunction(): dataType
    let day = this.addPadding(this.day)
    let month = this.addPadding(this.month)

    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    (type === 'days') && (this._day += amount);
    (type === 'months') && (this.month += amount);
    (type === 'years') && (this.year += amount);
  }

  get day() {
    return this._day;
  }

  getMonth() {
    return this.month
  }

  getYear() {
    return this.year
  }

  //IsLeapYear
  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1990,15,1);
console.log(myDate.printFormat());
console.log('1990 isLeapYear:',myDate.isLeapYear);

const myDate1 = new MyDate(2000,15,1);
console.log(myDate1.printFormat());
console.log('2000 isLeapYear:',myDate1.isLeapYear);

const myDate2 = new MyDate(2100,15,1);
console.log(myDate2.printFormat());
console.log('2100 isLeapYear:',myDate2.isLeapYear);
