export class MyDate {
  // public year: number = 0; // Public access verbose
  // month: number = 0; // Public access by default
  // private day: number = 0; // We can't Print nether Mutated it
  // readonly example: number = 10; // Read Only inside and outside Class

  // constructor(year: number, month: number, day: number){
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  // }

  constructor(
    public year: number = 1990,
    public month: number = 1,
    private day: number = 15
  ){}

  printFormat(): string { // sign the function return =>  nameFunction(): dataType
    let day = this.addPadding(this.day)
    let month = this.addPadding(this.month)

    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){
    return value < 10 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'){
    (type === 'days') && (this.day += amount);
    (type === 'months') && (this.month += amount);
    (type === 'years') && (this.year += amount);
  }

  getDay(){
    return this.day;
  }

  getMonth(){
    return this.month
  }

  getYear(){
    return this.year
  }
}
