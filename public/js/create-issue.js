// accordian
const accordianOneNext = document.querySelector(".accordian-1 .next");
const accordianTwoNext = document.querySelector(".accordian-2 .next");
const accordianTwoBack = document.querySelector(".accordian-2 .back");
const accordianThreeNext = document.querySelector(".accordian-3 .next");
const accordianThreeBack = document.querySelector(".accordian-3 .back");
const accordianFourFinish = document.querySelector(".accordian-4 .next");
const accordianFourBack = document.querySelector(".accordian-4 .back");

accordianOneNext.onclick = () => {
  document.querySelector(".accordian-1 div").classList.toggle("fold");
  document.querySelector(".accordian-2 div").classList.toggle("fold");
};

accordianTwoNext.onclick = () => {
  document.querySelector(".accordian-2 div").classList.toggle("fold");
  document.querySelector(".accordian-3 div").classList.toggle("fold");
};

accordianTwoBack.onclick = () => {
  document.querySelector(".accordian-2 div").classList.toggle("fold");
  document.querySelector(".accordian-1 div").classList.toggle("fold");
};

accordianThreeNext.onclick = () => {
  document.querySelector(".accordian-3 div").classList.toggle("fold");
  document.querySelector(".accordian-4 div").classList.toggle("fold");
};
accordianThreeBack.onclick = () => {
  document.querySelector(".accordian-3 div").classList.toggle("fold");
  document.querySelector(".accordian-2 div").classList.toggle("fold");
};

accordianFourBack.onclick = () => {
  document.querySelector(".accordian-4 div").classList.toggle("fold");
  document.querySelector(".accordian-3 div").classList.toggle("fold");
};

// label

const tagInput = document.querySelector(".tag-input");
const tagsList = document.querySelector(".tags-list");
const tagArray = [];
//on enter add tags to tags list
tagInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const inputValue = tagInput.value;
    tagArray.push(inputValue);
    //add it to the tags list
    let htmlElem = "";
    tagArray.forEach((val) => {
      htmlElem += `<span  class="tag" >${val}</span>`;
    });
    tagsList.innerHTML = htmlElem;
    tagInput.value = ""; // Clear the input
    console.log(tagArray);
  }
});

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
  console.log(titleInput.value ,authorInput.value ,descriptionInput.value);
  if (!titleInput.value || !authorInput.value || !descriptionInput.value) {
    return;
  }
  tagInput.value = tagArray;
  form.submit();
});
