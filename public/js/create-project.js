const accordianOneNext=document.querySelector('.accordian-1 .next');
const accordianTwoNext=document.querySelector('.accordian-2 .next');
const accordianTwoBack=document.querySelector('.accordian-2 .back');
const accordianThreeFinish=document.querySelector('.accordian-3 .finish');
const accordianThreeBack=document.querySelector('.accordian-3 .back');


accordianOneNext.onclick=()=>{
    document.querySelector('.accordian-1 p').classList.toggle('fold');
    document.querySelector('.accordian-2 p').classList.toggle('fold');
}

accordianTwoNext.onclick=()=>{
    document.querySelector('.accordian-2 p').classList.toggle('fold');
    document.querySelector('.accordian-3 p').classList.toggle('fold');
}

accordianTwoBack.onclick=()=>{
    document.querySelector('.accordian-2 p').classList.toggle('fold');
    document.querySelector('.accordian-1 p').classList.toggle('fold');

}

accordianThreeBack.onclick=()=>{
    document.querySelector('.accordian-3 p').classList.toggle('fold');
    document.querySelector('.accordian-2 p').classList.toggle('fold');
}


// prevent submission on title,author,desc input
const titleInput = document.querySelector(".accordian-1 input");
const authorInput = document.querySelector(".accordian-2 input");
const descriptionInput = document.querySelector(".accordian-3 input");

titleInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
  }
});
authorInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
  }
});
descriptionInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
  }
});


//   form submission
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  if (!titleInput.value || !authorInput.value || !descriptionInput.value) {
    return;
  }
  
  form.submit();
});