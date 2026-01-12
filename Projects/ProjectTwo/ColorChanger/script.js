const body = document.querySelector("body")
const btn = document.querySelector("button")

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

 const Bg = ()=>{
    document.body.style.backgroundColor = getRandomColor();

}

// callback hell kya hota
