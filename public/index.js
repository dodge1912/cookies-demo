const btnGetCookies = document.querySelector(".js-get-cookies");
const btnHttpRequest = document.querySelector(".js-fake-http");

const resultsContainer = document.querySelector(".js-results_inner-container");
const httpStatus = document.querySelector(".js-http-status");


btnGetCookies.addEventListener("click", function() {
  resultsContainer.innerHTML = document.cookie;
});

const httpCounter = 0;
httpStatus.innerHTML = httpCounter; 

btnHttpRequest.addEventListener("click", function() {
  fetch('/')
  .then(res => {
    httpCounter++;
    httpStatus.innerHTML = httpCounter; 
  })
  .catch(err => {
    console.log('Something went wrong!');
  });
});