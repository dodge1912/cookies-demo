const btnGetCookies = document.querySelector(".js-get-cookies");
const btnCreateCookie = document.querySelector(".js-create-cookie");

const resultsContainer = document.querySelector(".js-results_inner-container");
const cookieText = document.querySelector(".js-cookie-text");

btnGetCookies.addEventListener("click", function() {
  resultsContainer.innerHTML = document.cookie;
});

btnCreateCookie.addEventListener("click", function() {
  document.cookie = cookieText.value;
  cookieText.value = '';
});