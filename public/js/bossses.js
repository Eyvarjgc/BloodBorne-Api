const bossesSection =  document.querySelector('.bossesSection')


const getApi = async() =>{
  try{
    const response = await axios.get('http://localhost:3000/bosses' || 'https://bloodborne-simple-api-dev-sdqb.2.us-1.fl0.io/bosses') 
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
