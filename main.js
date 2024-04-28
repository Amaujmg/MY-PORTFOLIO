

//ANIMATION NAME
function animation(){
  let textAnimation = [
    ["J","U","A","N"," ","M","A","!"],
    ["A","M","A","U","J","!"]
  ];
  
  let letraContador = -1;
  let nivelArray = 0;

  const contentAnimation = document.querySelector(".content-text-animation");
  if (contentAnimation === null) return

  function PaintText(){
    letraContador++;
    contentAnimation.textContent += textAnimation[nivelArray][letraContador];
    if(letraContador === textAnimation[nivelArray].length -1){
      clearInterval(intervalo);

      setTimeout (() => {

        intervalo = setInterval(() => {
          contentAnimation.textContent = "";
          letraContador--;
          textAnimation[nivelArray].pop();

          textAnimation[nivelArray].forEach((elemento)=>{
            contentAnimation.textContent += elemento;
          });

          if(letraContador < 0){
            clearInterval(intervalo);
            nivelArray ++;
            intervalo = setInterval (PaintText, 300);

            if(nivelArray > textAnimation.length -1){
              clearInterval(intervalo);
              nivelArray = 0;
              animation();
            }
          }



        }, 300)

      },2000)
    }
  }
  let intervalo = setInterval(PaintText, 300);
}
window.addEventListener("load",animation)

