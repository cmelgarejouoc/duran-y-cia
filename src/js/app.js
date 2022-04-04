const name = 'world';
console.log(`Hello ${name}`);

document.addEventListener('click', function (event) {
	if (!event.target.closest('.close')) return;

	document.querySelector(".hamburger-menu").classList.add("collapse-menu");
	setTimeout(function(){
		document.querySelector(".hamburger-menu").classList.remove("collapse-menu");
	}, 1000);
});