const issues = document.querySelector(".issues-wrapper");
const issuesChildren = issues.children;
const issuesArr = [];
for (let i = 0; i < issuesChildren.length; i++) {
  const issue = issuesChildren[i].children;
  const title = issue[0].innerHTML;
  const author = issue[1].innerHTML;
  const description = issue[2].innerHTML;
  const labels = [];
  for (let j = 0; j < issue[3].children.length; j++) {
    labels.push(issue[3].children[j].innerHTML.toLowerCase());
  }

  issuesArr.push({
    title,
    author,
    description,
    labels,
  });
}

console.log(issuesArr);
// filter
const titleInput = document.querySelector(".title-filter  input");
const authorInput = document.querySelector(".author-filter  input");
const descriptionInput = document.querySelector(".description-filter  input");
const labelInput = document.querySelector(".label-filter  input");

// for labels
const tagsList = document.querySelector(".tags-list");
const tagArray = [];
let tagElement;

labelInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // display tags above label input
    const inputValue = labelInput.value;
    tagArray.push(inputValue);
    //add it to the tags list
    let htmlElem = "";
    tagArray.forEach((val) => {
      htmlElem += `<span  class="tag " >${val}</span>`;
    });
    tagsList.innerHTML = htmlElem;
  }
});

function filterHandler(event) {
  if (event.key === "Enter") {
    const titleInputValue = titleInput.value.toLowerCase();
    const authorInputValue = authorInput.value.toLowerCase();
    const descriptionInputValue = descriptionInput.value.toLowerCase();

    const filterArr = issuesArr.filter((item) => {
      //match tags
      if (tagArray.length !== 0) {
        let found = false;
        for (let i = 0; i < tagArray.length; i++) {
          if (item.labels.includes(tagArray[i].toLowerCase())) {
            found = true;
            break;
          }
        }
        if (found) {
          return true;
        }
      }
      //if tags does not match  match for other fields
      if (
        (titleInputValue &&
          item.title.toLowerCase().includes(titleInputValue)) ||
        (authorInputValue &&
          item.author.toLowerCase().includes(authorInputValue)) ||
        (descriptionInputValue &&
          item.description.toLowerCase().includes(descriptionInputValue))
      ) {
        return true;
      } else {
        return false;
      }
    });
    titleInput.value = "";
    authorInput.value = "";
    descriptionInput.value = "";
    labelInput.value = "";

    console.log(filterArr);
  }
}

// case insensitive match
titleInput.addEventListener("keydown", filterHandler);
authorInput.addEventListener("keydown", filterHandler);
descriptionInput.addEventListener("keydown", filterHandler);
labelInput.addEventListener("keydown", filterHandler);
