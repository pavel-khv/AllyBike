var content = {
	size: 17,
	newsContent: document.getElementsByClassName("products__link"),
	buildText: function() {
		for (var t = 0; t < this.newsContent.length; t++) {
			var e = this.newsContent[t].textContent;
			e.length > this.size && (this.newsContent[t].innerHTML = e.slice(0, this.size) + "...")
		}
	}
};
var blogNews = {
	size: 50,
	newsContent: document.getElementsByClassName("item__title"),
	buildText: function() {
		for (var t = 0; t < this.newsContent.length; t++) {
			var e = this.newsContent[t].textContent;
			e.length > this.size && (this.newsContent[t].innerHTML = e.slice(0, this.size) + "...")
		}
	}
};
content.buildText();
blogNews.buildText();