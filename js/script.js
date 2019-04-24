/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Tyler Harper
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const pageList = document.querySelectorAll('ul');
const list = document.querySelectorAll('li');
const page = 10;

const numberOfPages = (Math.ceil(list.length/page));

const hideStudentList = (list) => {
   for (let i = 0; i < list.length; i++) {
      list[i].style.display = 'none';
   }
}
const showStudentList = (page) => {
   for (let i = 0; i < list.length; i++) {

      if (i >= (page -1)*10 && i < page * 10) {
         list[i].style.display = '';
      }
   }
}







// function showPage(list, page) {

//    //list all students assign index
//    for (let i = 0; i < list.length; i++) {
//       //show 10 students -1 for correction because using index not numbered
//       if (i >= (page -1)*10 && i < page * 10) {
//          list[i].style.display = '';
//       } else {
//          //hide the rest
//          list[i].style.display = 'none';
//       }
//    }
// }

//start of appendPage Function
function appendPageLinks(){
   //the math to figure out how many pages we need

   // //used to show the first 10 students on first load
   // for (let i = 0; i < page; i++){
   //    list[i].style.display = '';
   // }

   //need to create the container for our pagination lines--
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

         //pageLink.classList.remove('active');

         // listening for a click on the buttons to rerun functions with the output of the page and list 
         pageLink.addEventListener("click", () => {
            showPage(list, i+1);
            pageLink.classList.remove('active');
         });
   }
}   

//needs to run to hide the excess on initial load
//showPage(list, page);


appendPageLinks();


function appendSearch() {
   const searchDiv = document.createElement('div');
   const searchAppend = searchDiv.append;
   searchDiv.className = "student-search";


   const searchInput = document.createElement("input");
   searchInput.type = "text";
   searchInput.placeholder = "Search for students...";

   const searchBtn = document.createElement("button");
   searchBtn.type = "submit";
   searchBtn.textContent = "Search";

   document.querySelector('.page-header').appendChild(searchDiv);
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchBtn);

}

appendSearch();


// Function should check the text content of input with the child elements of the list to see if anything matches if so appear in the list if not hide if nothing show message saying nothing was found please check your input
   const searchContent = document.querySelector('input');
   const searchBtn = document.querySelector('button');
   const namesList = document.querySelectorAll('h3');
   const searchResults = [];

searchContent.addEventListener('keyup', () => {

   let filter = searchContent.value.toLowerCase();

   for (let i = 0; i < namesList.length; i++){

      if (list[i].innerHTML.indexOf(filter) > -1) {
         list[i].style.display = '';

      } else {
         list[i].style.display = 'none';
         searchResults.push(i);
         
      }

   }


});



// Remember to delete the comments that came with this file, and replace them with your own code comments.
hideStudentList(list);
showStudentList(1);