// JavaScript Document
console.log("Howdy!");

new fullpage('#fullpage', {
	//options here
	//autoScrolling:true,
	//scrollHorizontally: true

	anchors:['home', 'world1', 'world2', 'world3', 'world4', 'world5', 'world6', 'about']
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll(".sidenav a").forEach(el=>{
	el.addEventListener("click", function(){
		console.log("close");
		closeNav();
	});
});

document.querySelector(".arrowdown").addEventListener("click", function(){
	fullpage_api.moveSectionDown()
});

document.querySelector(".arrowup").addEventListener("click", function(){
	fullpage_api.moveSectionUp()
});