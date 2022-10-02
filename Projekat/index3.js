const btn1 = document.querySelector(".divBtn1");
const btn2 = document.querySelector(".divBtn2");
const btn3 = document.querySelector(".divBtn3");

btn1.addEventListener("click", (e) => {
  document.getElementById("event1").className = "eventOptions";
  document.getElementById("event2").className = "eventNone";
  document.getElementById("event3").className = "eventNone";
  console.log("yes");
});
btn2.addEventListener("click", (e) => {
  document.getElementById("event1").className = "eventNone";
  document.getElementById("event2").className = "eventOptions";
  document.getElementById("event3").className = "eventNone";
  console.log("yes");
});
btn3.addEventListener("click", (e) => {
  document.getElementById("event1").className = "eventNone";
  document.getElementById("event2").className = "eventNone";
  document.getElementById("event3").className = "eventOptions";
  console.log("yes");
});
