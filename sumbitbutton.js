document.getElementById("row1.1").addEventListener("click", act1);
document.getElementById("row1.2").addEventListener("click", act2);
document.getElementById("row1.3").addEventListener("click", act3);
document.getElementById("row1.4").addEventListener("click", act4);
document.getElementById("row1.5").addEventListener("click", act5);

let rate = 0;

function act1() {
  rate = 1;
  document.getElementById("row1.1").classList.add("active1");
  document.getElementById("row1.2").classList.remove("active2");
  document.getElementById("row1.3").classList.remove("active3");
  document.getElementById("row1.4").classList.remove("active4");
  document.getElementById("row1.5").classList.remove("active5");
}
function act2() {
  rate = 2;

  document.getElementById("row1.2").classList.add("active2");
  document.getElementById("row1.1").classList.remove("active1");
  document.getElementById("row1.3").classList.remove("active3");
  document.getElementById("row1.4").classList.remove("active4");
  document.getElementById("row1.5").classList.remove("active5");
}
function act3() {
  rate = 3;

  document.getElementById("row1.3").classList.add("active3");
  document.getElementById("row1.2").classList.remove("active2");
  document.getElementById("row1.1").classList.remove("active1");
  document.getElementById("row1.4").classList.remove("active4");
  document.getElementById("row1.5").classList.remove("active5");
}
function act4() {
  rate = 4;

  document.getElementById("row1.4").classList.add("active4");
  document.getElementById("row1.2").classList.remove("active2");
  document.getElementById("row1.3").classList.remove("active3");
  document.getElementById("row1.1").classList.remove("active1");
  document.getElementById("row1.5").classList.remove("active5");
}
function act5() {
  rate = 5;

  document.getElementById("row1.5").classList.add("active5");
  document.getElementById("row1.2").classList.remove("active2");
  document.getElementById("row1.3").classList.remove("active3");
  document.getElementById("row1.4").classList.remove("active4");
  document.getElementById("row1.1").classList.remove("active1");
}

function nextPage() {
  window.location.href = "/thankyou.html?rate=" + rate;
}
