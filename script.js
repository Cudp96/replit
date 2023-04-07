let btn = document.getElementById("add");
btn.addEventListener("click", (e)=>{
  e.preventDefault();

  let name = document.getElementById("name").value;
  // let number = document.getElementById("number");
  
  let li = document.createElement('li')
  let text = document.createTextNode(name)
  li.appendChild(text);
  document.getElementById("myUL").appendChild(li);
 
})
  
