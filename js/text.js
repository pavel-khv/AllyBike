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
content.buildText();