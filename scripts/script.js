// JavaScript Document
console.log("Howdy!");

new fullpage('#fullpage', {
	//options here
	//autoScrolling:true,
	//scrollHorizontally: true

	anchors:['home', 'world1', 'world2', 'world3', 'world4', 'world5', 'world6', 'about']
});

/* Openen navigatie */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Sluiten navigatie */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll(".sidenav a").forEach(el=>{
	el.addEventListener("click", function(){
		console.log("close");
		closeNav();
	});
});

/* Pijlen klikbaar maken */
document.querySelector(".arrowdown").addEventListener("click", function(){
	fullpage_api.moveSectionDown()
});

document.querySelector(".arrowup").addEventListener("click", function(){
	fullpage_api.moveSectionUp()
});

/* Op mario klikken op homepage */
document.querySelector(".peek").addEventListener("click", function(){
	fullpage_api.moveSectionDown()
});