document.addEventListener("DOMContentLoaded", main);

function main() {
  const card = document.querySelectorAll(".card");

  card.forEach(item =>{
    item.addEventListener("mousemove", startRotate);
    item.addEventListener("mouseout", stopRotate);

  })

}

function startRotate(e){
  const elem = this.querySelector(".card-item");
  const title = this.querySelector(".title");

  const halfWidth = elem.offsetWidth / 2;
  const halfHeight = elem.offsetHeight / 2;
  
  elem.style.transform = `rotateX(${-(e.offsetY - halfHeight) / 15}deg)
                          rotateY(${(e.offsetX - halfWidth) / 15}deg`;

  title.style.textShadow = `${-(e.offsetX - halfWidth) / 30}px ${-(e.offsetY - halfHeight) / 30}px 10px rgba(0, 0, 0, 0.5)`;                        

}

function stopRotate(){
  const elem = this.querySelector(".card-item");
  const title = this.querySelector(".title");

  elem.style.transform = `rotateX(0deg)`
  title.style.textShadow = `0px 0px 10px rgba(0, 0, 0, 0.5)`; 
}