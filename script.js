let faqListItems = document.querySelectorAll('.faq-list-item');


faqListItems.forEach(function(element) {
	element.addEventListener('click', function() {
		element.classList.toggle('faq-list-item-expanded');

		let currentState = element.getAttribute('data-state');
		let arrow = element.querySelector('img');

		if (currentState === 'collapsed') {
			element.setAttribute('data-state', 'expanded');
			arrow.style.transform = 'rotate(180deg)';
		} else {
			element.setAttribute('data-state', 'collapsed');
			arrow.style.transform = 'rotate(0deg)';
		}
	});
});

let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');
let gamesContainer = document.querySelector('.games-container');


let position = 0;
next.addEventListener('click', function(){
	if(window.innerWidth > 1440){
		if(position != -3000){
			position -= 500;
		}
	} else {
		if(position != -2268){
			position -= 378;
		}
	}
	gamesContainer.style.transform = `translateX(${position}px)`;
});
prev.addEventListener('click', function(){
	if(position != 0){
		if(window.innerWidth > 1440){
			position += 500;
		} else {
			position += 378;
		}
		gamesContainer.style.transform = `translateX(${position}px)`;
	}
});