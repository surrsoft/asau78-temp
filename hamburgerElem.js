const hamburgerElem = document.querySelector('.hamburger-icon');
const navElem = document.querySelector('.nav');
const navListElem = document.querySelector('.nav-list');
const navListElems = document.querySelectorAll('.nav-list__elem');

function hamburgerClickHandler(event) {
	hamburgerElem.classList.toggle('active');
	navElem.classList.toggle('active');
	event.stopPropagation();
}

function activeRemove() {
	hamburgerElem.classList.remove('active');
	navElem.classList.remove('active');
}

function closeNavHandler(event) {
	activeRemove();
	event.stopPropagation();
}

function closeNavHandler2() {
	activeRemove()
}

navElem.addEventListener('click', closeNavHandler2);
hamburgerElem.addEventListener('click', hamburgerClickHandler);
navListElems.forEach((el) => el.addEventListener('click', closeNavHandler))
