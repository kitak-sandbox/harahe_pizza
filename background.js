function getUrlParams(url) {
  var params = {};
  var pair = [];
  var pairs = url.slice(url.indexOf('?') + 1).split('&');
  for(var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');
      params[pair[0]] = pair[1];
  }
  return params;
}

chrome.history.onVisited.addListener(function(item) {
  var params = getUrlParams(item.url);
  if (item.url.match(/www\.google\.co\.jp\/search/) !== null &&
      decodeURIComponent(params["q"]) === "はらへった") {
    chrome.tabs.create({
      url: "https://www.pizza-la.co.jp/MenuList.aspx?ListId=Pizza"
    });
  }
});
