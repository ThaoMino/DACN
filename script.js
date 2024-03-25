const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
  bar.addEventListener('click',() => {
    nav.classList.add('active');
  })
}
if(close){
  close.addEventListener('click',() => {
    nav.classList.remove('active');
  })
}

document.addEventListener('DOMContentLoaded', function () {

  var MainImg = document.getElementById("MainImg");
  var smallImgs = document.querySelectorAll(".small-img");

  smallImgs.forEach(function(img) {
      img.onclick = function() {
          MainImg.src = this.src;
      };
  });
});
