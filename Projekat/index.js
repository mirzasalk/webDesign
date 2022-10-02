const spec1 = document.querySelector(".click1");
const spec2 = document.querySelector(".click2");
const spec3 = document.querySelector(".click3");
const spec4 = document.querySelector(".click4");
const spec5 = document.querySelector(".click5");

spec1.addEventListener("click", (e) => {
  document.getElementById("spec1").className = "AboutSpecials";
  document.getElementById("spec2").className = "AboutSpecialsNone";
  document.getElementById("spec3").className = "AboutSpecialsNone";
  document.getElementById("spec4").className = "AboutSpecialsNone";
  document.getElementById("spec5").className = "AboutSpecialsNone";
  console.log("spec1");
});
spec2.addEventListener("click", (e) => {
  console.log("spec2");
  document.getElementById("spec1").className = "AboutSpecialsNone";
  document.getElementById("spec2").className = "AboutSpecials";
  document.getElementById("spec3").className = "AboutSpecialsNone";
  document.getElementById("spec4").className = "AboutSpecialsNone";
  document.getElementById("spec5").className = "AboutSpecialsNone";
});
spec3.addEventListener("click", (e) => {
  console.log("spec3");
  document.getElementById("spec1").className = "AboutSpecialsNone";
  document.getElementById("spec2").className = "AboutSpecialsNone";
  document.getElementById("spec3").className = "AboutSpecials";
  document.getElementById("spec4").className = "AboutSpecialsNone";
  document.getElementById("spec5").className = "AboutSpecialsNone";
});
spec4.addEventListener("click", (e) => {
  console.log("spec4");
  document.getElementById("spec1").className = "AboutSpecialsNone";
  document.getElementById("spec2").className = "AboutSpecialsNone";
  document.getElementById("spec3").className = "AboutSpecialsNone";
  document.getElementById("spec4").className = "AboutSpecials";
  document.getElementById("spec5").className = "AboutSpecialsNone";
});
spec5.addEventListener("click", (e) => {
  console.log("spec5");
  document.getElementById("spec1").className = "AboutSpecialsNone";
  document.getElementById("spec2").className = "AboutSpecialsNone";
  document.getElementById("spec3").className = "AboutSpecialsNone";
  document.getElementById("spec4").className = "AboutSpecialsNone";
  document.getElementById("spec5").className = "AboutSpecials";
});
