function parallax(e){
  const layers = this.querySelectorAll(".layer");

  layers.forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    layer.style.cssText = `transform: translateX(${e.clientX * speed / 5000}px)`;
  });

}

document.addEventListener("mousemove", parallax);