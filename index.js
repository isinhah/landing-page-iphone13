function imgSlider(e) {
  //Função que muda a imagem do celular assim que clica no botão de cor
  document.querySelector("#phone").src = e;
}

//Função de mudar a cor do clip-path
function circleChange(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
