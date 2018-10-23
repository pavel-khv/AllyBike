let products = document.querySelector('.products');
let productsItem = document.getElementsByClassName('products__item');
let widthItem = productsItem[0].offsetWidth;
let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let marginItem = 43.333;
let slideWidth = +widthItem + marginItem;
let i = 0;

console.log(productsItem.length);

arrowRight.onclick = function() {
	i -= slideWidth;
	if (i < -slideWidth * 7) {
		i = 0;
	}
	products.style.marginLeft = i + "px";
}

arrowLeft.onclick = function() {
	i += slideWidth;
	if (i > 0) {
		i = 0;
	}
	products.style.marginLeft = i + "px";
}