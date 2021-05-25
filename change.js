
var imgArray=["image/1.png","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg",
              "image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg"];

function change() {
  var random=Math.floor(Math.random()*imgArray.length);
  document.getElementById('image').src=imgArray[random];
}

hgt.onchange = function(){
            image.style.height = this.value + "px";
            }
wdt.onchange = function()
{
    image.style.width = this.value + "px";
}

brd.onchange = function(){
    document.getElementById("image").border=brd.value;
    document.getElementById("image").style.borderColor="black";

}
