const bossesSection =  document.querySelector('.bossesSection')

const URL = 'https://bloodborne-simple-api-dev-sdqb.2.us-1.fl0.io/bosses' ?? 'http://localhost:3000/bosses'
const getApi = async() =>{
  try{
    const response = await axios.get(URL) 
    const data = response.data.data
    console.log(data);


    const html = data.map(element => {
      return `
      <div class="container">
      <p class="name">${element.name}</p>
      <p class="location">${element.location}</p>
      <img class="image" src='${element.image}'>
      <p class="fight">${element.fight}</p>
      </div>
      `
    }).join('')
    bossesSection.innerHTML = html


  }catch(err){
    console.log(err);
  }
}

getApi()
