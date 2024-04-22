//CURSOR ANIMATION
function handleCursor(e) {
  const $cursor_outline = document.querySelector(".cursor-outline");
  const $cursor_dot = document.querySelector(".cursor-dot");
  const x = e.clientX;
  const y = e.clientY;
  $cursor_outline.style.left = `${x}px`;
  $cursor_outline.style.top = `${y}px`;
  $cursor_dot.style.left = `${x}px`;
  $cursor_dot.style.top = `${y}px`;
  $cursor_outline.animate(
    {
      top: `${y}px`,
      left: `${x}px`,
    },
    { duration: 500, fill: "forwards" }
  );

  $cursor_dot.animate(
    {
      top: `${y}px`,
      left: `${x}px`,
    },
    { duration: 100, fill: "forwards" }
  );
}

document.addEventListener("mousemove", handleCursor);

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
