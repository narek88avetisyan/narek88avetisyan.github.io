window.onload = () => {
	let span1 = document.querySelector(".span1");
	let span2 = document.querySelector(".span2");
	let span3 = document.querySelector(".span3");
	let elem1 = document.querySelector(".inner1");
	let elem2 = document.querySelector(".inner2");
	let elem3 = document.querySelector(".inner3");

	span1.addEventListener("click", function() {
		elem1.innerHTML = "Java Script, Full stack Angular Course";
	})
	span2.addEventListener("click", function() {
		elem2.innerHTML = "Java Script, Type Script, Web Development";
	})
	span3.addEventListener("click", function() {
		elem3.innerHTML = "HTML/CSS Course";
	})

}