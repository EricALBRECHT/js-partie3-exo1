var img = document.getElementById("image1");
img.addEventListener("mouseover", redBorder);

function redBorder(){
  
  img.style.border= "3px solid red";
  img.addEventListener("mouseout", function (){img.style.border= "none";});
}