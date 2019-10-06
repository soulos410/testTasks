/* task 5
   we cannot get desired object from promice, but if needed, we can use this code:

   const fetchData =  () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(dataList => {
      dataList.some(el =>{
          if(el.id === 5) {
              console.log(el);
              return el;
          }
      })
    })
}
   async function getResult() {
    const result = await fetchData();
    return result;
}
*/
const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json())
        .then(dataList => {
            dataList.some(el => {
                if (el.id === 5) {
                    console.log(el);
                    return el;
                }
            })
        })
}