let articleContentfulToken = document.getElementById("contentful-token");
let articleExternalId = document.getElementById('article-external-id');
let navigate = document.getElementById('navigate');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

  let currentUrl = new URL(tabs[0].url);

  if (currentUrl.hostname == 'app.contentful.com') {
    const splitUrl = currentUrl.toString().split("/");
    const contentfulToken = splitUrl[splitUrl.length - 1];
    articleContentfulToken.innerHTML = contentfulToken;

    fetch(`http://localhost:3001/externalId/${contentfulToken}`).then((res) => {
      return res.json()
    }).then((res => {
      articleExternalId.innerHTML = res.externalId;
      navigate.innerHTML = 'Go To Article';
      navigate.href = `http://localhost:3000/help/us/en/article/${res.externalId}`;
    }));
  } else { // TODO: Check that this url is actually a version of supportcenter
    const splitUrl = currentUrl.toString().split("/");
    const externalId = splitUrl[splitUrl.length - 1];
    articleExternalId.innerHTML = externalId;
    fetch(`http://localhost:3001/contentfulToken/${externalId}`).then((res) => {
      return res.json()
    }).then((res => {
      articleContentfulToken.innerHTML = res.contentfulToken;
      navigate.innerHTML = 'Go To Contentful Entry';
      navigate.href = `https://app.contentful.com/spaces/gc4s9mi2asix/environments/development/entries/${res.contentfulToken}`;
    }));
  }

});
