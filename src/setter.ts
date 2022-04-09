export class MyDate {

  constructor(
    public year: number = 1990,
    private _month: number = 1,
    private _day: number = 15
  ) { }

  printFormat(): string { // sign the function return =>  nameFunction(): dataType
    let day = this.addPadding(this._day)
    let month = this.addPadding(this._month)

    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    (type === 'days') && (this._day += amount);
    (type === 'months') && (this._month += amount);
    (type === 'years') && (this.year += amount);
  }

  get day() {
    return this._day;
  }

  getMonth() {
    return this._month
  }

  getYear() {
    return this.year
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month(){
    return this._month;
  }

  set month(newValue: number){
    if(newValue >= 1 && newValue <= 12){
      this._month = newValue
    } else {
      throw new Error(`${newValue} is out of range, It have to be between 1 and 12`)
    }
  }
}

const myDate1 = new MyDate(2000,15,1);
console.log(myDate1.printFormat());
console.log('2000 isLeapYear:',myDate1.isLeapYear);
myDate1.month = 8;
console.log(myDate1.printFormat());
myDate1.month = 78;
console.log(myDate1.printFormat());

