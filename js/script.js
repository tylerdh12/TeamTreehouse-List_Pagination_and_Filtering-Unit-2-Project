/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Tyler Harper
******************************************/
// pull the content and set as variables
let pageList = document.querySelectorAll('ul');
let list = document.querySelectorAll('li');

//use this to set the number of students to display per page
const studentsPerPage = 10;

//setting the default page for initial page load
const page = 1;

//the math to figure out how many pages we are going to have as links
let numberOfPages = (Math.ceil(list.length/studentsPerPage));


//Function to show only 10 students
function showPage(list, page) {
   //assign index of students
   for (let i = 0; i < list.length; i++) {
      //show 10 students (using -1 for correction) using index
      if (i >= (page -1)*studentsPerPage && i < page * studentsPerPage) {
         list[i].style.display = '';
      } else {
         //hide the rest
         list[i].style.display = 'none';
      }
   }
}
// function to display the links at the bottom of page
function appendPageLinks(){
   //need to create the container for our pagination links--
   const pagination = document.createElement('div');
   const pageDiv = document.querySelector('body div');
      pagination.className = "pagination";
      pageDiv.appendChild(pagination);

   const paginationList = document.createElement('ul');
      pagination.appendChild(paginationList);
   //-- to here

   //creates each button for the pagination
   for (let i = 0; i < numberOfPages; i += 1) {
      const pageElement = document.createElement('li');
      const pageLink = document.createElement('a');

         paginationList.appendChild(pageElement);
         pageElement.appendChild(pageLink);

         //add the numbering system for each button
         pageLink.textContent = i+1;

         pageLink.classList.remove('active');

         // listening for a click on the buttons to rerun functions with the output of the page and list
         pageLink.addEventListener("click", () => {
            showPage(list, i+1);
            pageLink.classList.remove('active');
         });
   }
}
//fist run of show page to show the beginning of the list on page 1
showPage(list, page);
//shows the page links
appendPageLinks();

//Extra Credit:

// function appendSearch() {
//    const searchDiv = document.createElement('div');
//    const searchAppend = searchDiv.append;
//    searchDiv.className = "student-search";
//
//    const searchInput = document.createElement("input");
//    searchInput.type = "text";
//    searchInput.placeholder = "Search for students...";
//
//    const searchBtn = document.createElement("button");
//    searchBtn.type = "submit";
//    searchBtn.textContent = "Search";
//
//    document.querySelector('.page-header').appendChild(searchDiv);
//    searchDiv.appendChild(searchInput);
//    searchDiv.appendChild(searchBtn);
//
// }

// appendSearch();
//
//
// // Function should check the text content of input with the child elements of the list to see if anything matches if so appear in the list if not hide if nothing show message saying nothing was found please check your input
//    const searchContent = document.querySelector('input');
//    const searchBtn = document.querySelector('button');
//    const namesList = document.querySelectorAll('h3');
//    const searchResults = [];
//
// searchContent.addEventListener('keyup', () => {
//
//    let filter = searchContent.value.toLowerCase();
//
//    for (let i = 0; i < namesList.length; i++){
//      list[i].style.display = '';
//
//       if (list[i].innerHTML.indexOf(filter) > -1) {
//       } else {
//          list[i].style.display = 'none';
//          searchResults.push(list);
//       }
//
//    }
//
//    showPage(searchResults, 1);
//    appendPageLinks(searchResults);
// });

//showPage(list, page);
