export interface Driver {
  database: string;
  password: string;
  port: number

  connect():void;
  disconnect(): void;
  isConnected(name: string): void;
}

// Normally we use
// const driver:Driver = {
//   database: '',
//   password: '',
//   port: 8080
// }

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true
  }
}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}

class SQLDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true
  }
}
