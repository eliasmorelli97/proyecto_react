const products = [
    {id: 1, title: 'RYZEN 5 5600G', category: 'procesadores', description: 'Procesador AMD Ryzen 5 5600g 6 núcleos 12 hilos 4.4ghz', price: '38.449', pictureUrl: 'https://i.postimg.cc/Ss2d3d4N/ryzen-5-5600g.png'},
    {id: 2, title: 'RTX 3090', category: 'placas-de-video', description: 'Placa de video EVGA Geforce 3090 24gb', price: '308.000', pictureUrl: 'https://i.postimg.cc/vBc2MMry/placa-de-video-rtx-3090.png'},
    {id: 3, title: 'RAM HYPERX 16GB', category: 'memorias-ram', description: 'Memoria Ram HyperX Fury Beast 16gb DDR4 3200mhz', price: '15.665', pictureUrl: 'https://i.postimg.cc/bvFLmMKB/ram-hyperx-16gb.png'},
    {id: 4, title: 'RTX 3060', category: 'placas-de-video', description: 'Placa de video Gigabyte Geforce RTX 3060 12gb', price: '104.995', pictureUrl: 'https://i.postimg.cc/13rjrvmk/placa-de-video-rtx-3060.png'},
    {id: 5, title: 'RAM CORSAIR 16GB', category: 'memorias-ram', description: 'Memoria Ram Corsair Vengeance 16gb DDRA 3200mhz', price: '14.764', pictureUrl: 'https://i.postimg.cc/7Z9K2bXD/ram-corsair-16gb.png'},
    {id: 6, title: 'INTEL I5 12400F', category: 'procesadores', description: 'Procesador Intel Core i5-12400f 6 núcleos 12 hilos 4.4ghz', price: '42.990', pictureUrl: 'https://i.postimg.cc/jSHXr2BP/intel-i5-12400f.png'}
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 2000)
    })
  
    return promise
  };