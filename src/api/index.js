export const getData = async () => {
  try {    
    const promis =  fetch('https://restcountries.com/v3.1/all')
    const data = (await promis).json()
    return data
  }
  catch(er){
    console.log(er)
  }
}