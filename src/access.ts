export class MyDate {
  public year: number = 0; // Public access verbose
  month: number = 0; // Public access by default
  private day: number = 0; // We can't Print nether Mutated it
  readonly example: number = 10; // Read Only inside and outside Class

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string { // sign the function return =>  nameFunction(): dataType
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years'){
    (type === 'days') && (this.day += amount);
    (type === 'months') && (this.month += amount);
    (type === 'years') && (this.year += amount);
  }
}
