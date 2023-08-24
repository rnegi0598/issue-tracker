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
let clearTagsElement = null;

function clearTagsHandler() {
  tagArray.length = 0;
  tagsList.innerHTML = "";
  //update the result after clearing out all the tags
  const titleInputValue = titleInput.value.toLowerCase();
  const authorInputValue = authorInput.value.toLowerCase();
  const descriptionInputValue = descriptionInput.value.toLowerCase();
  let filterArr = [];
  if (
    !titleInputValue &&
    !authorInputValue &&
    !descriptionInputValue
  ) {
    filterArr = issuesArr;
  } else {
    filterArr = issuesArr.filter((item) => {
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
  }

  labelInput.value = "";

  console.log(filterArr);
  //   display the  issues after clearing tags
  let issueInnerHtml = "";
  for (let i = 0; i < filterArr.length; i++) {
    let tagsInnerHtml = "";

    for (let j = 0; j < filterArr[i].labels.length; j++) {
      tagsInnerHtml += `
            <span class="issue-label">${filterArr[i].labels[j]}</span>
            `;
    }
    issueInnerHtml += `
        <div class="issue-wrapper">
        <p class="flex-item title">${filterArr[i].title}</p>
        <p class="flex-item author">${filterArr[i].author}</p>
        <p class="flex-item description">${filterArr[i].description}</p>
        <div class="flex-item labels">
                ${tagsInnerHtml}         
        </div>
      </div>
        `;
    issues.innerHTML = issueInnerHtml;
  }
}
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
    htmlElem += '<span class="clear" title="Clear all tags">X</span>';
    tagsList.innerHTML = htmlElem;
    if (clearTagsElement) {
      clearTagsElement.removeEventListener("click", clearTagsHandler);
    }
    clearTagsElement = document.querySelector(".tags-list .clear");
    clearTagsElement.addEventListener("click", clearTagsHandler);
  }
});

function filterHandler(event) {
  if (event.key === "Enter") {
    const titleInputValue = titleInput.value.toLowerCase();
    const authorInputValue = authorInput.value.toLowerCase();
    const descriptionInputValue = descriptionInput.value.toLowerCase();
    let filterArr = [];
    // if everyField is empty display all the issues of that project
    if (
      !titleInputValue &&
      !authorInputValue &&
      !descriptionInputValue &&
      tagArray.length === 0
    ) {
      filterArr = issuesArr;
    } else {
      filterArr = issuesArr.filter((item) => {
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
    }

    // titleInput.value = "";
    // authorInput.value = "";
    // descriptionInput.value = "";
    labelInput.value = "";

    console.log(filterArr);

    //display updated results
    let issueInnerHtml = "";
    for (let i = 0; i < filterArr.length; i++) {
      let tagsInnerHtml = "";

      for (let j = 0; j < filterArr[i].labels.length; j++) {
        tagsInnerHtml += `
            <span class="issue-label">${filterArr[i].labels[j]}</span>
            `;
      }
      issueInnerHtml += `
        <div class="issue-wrapper">
        <p class="flex-item title">${filterArr[i].title}</p>
        <p class="flex-item author">${filterArr[i].author}</p>
        <p class="flex-item description">${filterArr[i].description}</p>
        <div class="flex-item labels">
                ${tagsInnerHtml}         
        </div>
      </div>
        `;
      issues.innerHTML = issueInnerHtml;
    }
  }
}

// case insensitive match
titleInput.addEventListener("keydown", filterHandler);
authorInput.addEventListener("keydown", filterHandler);
descriptionInput.addEventListener("keydown", filterHandler);
labelInput.addEventListener("keydown", filterHandler);
