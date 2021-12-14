let token = document.getElementById("contentful-token");
let externalId = document.getElementById('external-id');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let currentUrl = tabs[0].url;
  const splitUrl = currentUrl.split("/");
  token.innerHTML = splitUrl[splitUrl.length - 1];

  fetch('http://localhost:3001/externalId').then((res) => {
    return res.json()
  }).then((res => {
    externalId.innerHTML = res.externalId;
  }));
});
