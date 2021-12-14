let contentfulToken = document.getElementById("contentful-token");
let externalId = document.getElementById('external-id');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let currentUrl = tabs[0].url;
  const splitUrl = currentUrl.split("/");
  contentfulToken.innerHTML = splitUrl[splitUrl.length - 1];

  fetch(`http://localhost:3001/externalId/${contentfulToken.innerHTML}`).then((res) => {
    return res.json()
  }).then((res => {
    externalId.innerHTML = res.externalId;
  }));
});
