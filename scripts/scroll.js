
document.querySelector("#items").addEventListener("wheel", event => {
  if(event.deltaY > 0){
    event.target.scrollBy(700, 0);
    console.log(event.deltaY);
  }else{
    event.target.scrollBy(-700, 0);
    console.log(event.deltaY);
  }
})