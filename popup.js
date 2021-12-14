let token = document.getElementById("contentful-token");
token.innerHTML = window.location.href;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let currentUrl = tabs[0].url;
  const splitUrl = currentUrl.split("/");
  token.innerHTML = splitUrl[splitUrl.length - 1];
});
