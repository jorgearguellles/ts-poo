import axios from "axios";

(
  async ()=>{
    function delay(time: number){
      const promise = new Promise<boolean>((resolve) => {
        setTimeout(()=>{
          resolve(true)
        }, time)
      });
      return promise;
    }
    console.log('Called and waiting...');
    const rta = await delay(3000);
    console.log(rta);
  }
)();


