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
    console.log({rta});

    function getProducts(){
      const promise = axios.get('https://api.escuelajs.co/api/v1/products');
      return promise;
    }

    const products = await getProducts();
    console.log(products.data);

    async function getProductsAsync(){
      const products = await axios.get('https://api.escuelajs.co/api/v1/products');
      return products.data;
    }

    const rta2 = getProductsAsync();
    console.log(rta2);
  }
)();


