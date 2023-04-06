
let url ='https://kontests.net/api/v1/all'
let response = fetch(url)
response.then((v)=>{
  return v.json()
}).then((contests)=>{
  console.log(contests)
  ihtml =""
  for (item in contests){
    console.log(contests[item])
    ihtml += `
         <div class="card color" style="width: 18rem;">
         
         <div class="card-body">
           <h5 class="card-tittle">${contests[item].name}.</h5>
           <p> ${contests[item].start_time}</p>
           <p> ${contests[item].end_time}</p>
           <a href="${contests[item].url}  " class="btn btn-primary">Go to the Site</a>
          
         </div>
       </div>
       `
  }
cardContainer.innerHTML = ihtml
})




