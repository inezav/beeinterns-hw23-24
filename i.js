

window.onload = function(){ 
document.querySelector(".item__one").onclick = function (event) {
    console.log("click to one");
    console.log(event);
    event.target.style.backgroundColor = "red";
    // alert("Click on block 1");
  };
  document.querySelector(".item__two").onmouseenter = function () {
    document.querySelector(".item__two").style.background = "blue";
  };
  document.querySelector(".item__two").onmouseleave = function () {
  document.querySelector(".item__two").style.background = "coral";
  };

  
  
  let w = 100;
  let h = 100;
  document.querySelector(".item__three").onmousemove = () => {
        document.querySelector(".item__three").style.width = w + "px";
        document.querySelector(".item__three").style.height = h + "px";
        w++;
        h++;
      };
  

  let p = 10;
  let title = document.querySelector(".title");
  console.log(title);
  document.querySelector("button").onclick = () => {
  document.querySelector("progress").value = p;
  title.style.fontSize = p * 3 + "px";
  p++;
  console.log(title.style.fontSize);
  };

};