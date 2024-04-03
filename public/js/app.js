
const apiSection =  document.querySelector('.apiSection')

// const url = 'https://bloodborne-simple-api-dev-sdqb.2.us-1.fl0.io/bosses' ?? 'http://localhost:3000/api/bosses' 
const url = 'http://localhost:3000/api/bosses' 


const getApi = async() =>{
  try{
    const response = await axios.get(url) 
    const data = response.data.result
    createHtml(data)


  }catch(err){
    console.log(err);
  }
}

const createHtml = async(data) => {
  const asyncData = await data;
  console.log(asyncData);

  const html =  asyncData.map(element => {
    return `
    <div class="card" data-id="${element.id}">
      <div class="content">
      <p class="name">${element.name}</p>
      <p></p>
      <p class="locationTag">location:</p>
        <p class="location">${element.location}</p>
      <p class="fightTag">fight:</p>
        <p class="fight">${element.fight}</p>
      </div>
    </div>
    ` 
  }).join('')

  apiSection.innerHTML = html

  const cards =  apiSection.querySelectorAll('.card')
  cards.forEach((element,index )=> {
    const elementId = element.dataset.id
    const asyncDataId = asyncData[index].id
    const asyncDataImage = asyncData[index].image
    // console.log(element.dataset.id);
    if(elementId == asyncDataId){
      element.style.backgroundImage  = `url(${asyncDataImage})`;
      // console.log(asyncDataImage);

    }
    

  });

}
getApi()




