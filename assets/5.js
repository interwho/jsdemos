var pattern = document.getElementById('pattern');
var patternTerm = document.getElementById('patternTerm');
var totalCount = document.getElementById('totalCount');

pattern.onkeyup = updateSearch;

var websites = ["google.com",
                "youtube.com",
                "facebook.com",
                "baidu.com",
                "yahoo.com",
                "wikipedia.org",
                "google.co.in",
                "amazon.com",
                "qq.com",
                "google.co.jp",
                "live.com",
                "tmall.com",
                "taobao.com",
                "vk.com",
                "sohu.com",
                "twitter.com",
                "instagram.com",
                "linkedin.com",
                "reddit.com",
                "sina.com.cn",
                "360.cn",
                "yahoo.co.jp",
                "google.de",
                "google.co.uk",
                "google.fr"];

function updateSearch() {
  var count = 0;

  for (var index = 0; index < websites.length; ++index) {
      if (websites[index].includes(pattern.value)) {
          count++;
      }
  }

  patternTerm.innerHTML = pattern.value;
  totalCount.innerHTML = count;
}
