/*javascript*/
var sub_menu = document.getElementsByTagName("section");
function init() {}
window.onload = init;

function expandirInfo(num_proyecto) {
	var container;
		container = num_proyecto.getElementsByClassName("container-cell")[0];
		if (container.classList.contains("container-cell-hiding")) {
			container.classList.remove("container-cell-hiding");
			container.classList.add("container-cell-showing");
			hideOtherProyects(num_proyecto);
		}
		else {
			container.classList.remove("container-cell-showing");
			container.classList.add("container-cell-hiding");
			//unhideOtherProyects(num_proyecto);
		}
}

function hideOtherProyects(num_proyecto) {
	var container;
	for(var x = 0; x < sub_menu.length; x++) {
		console.log("veces");
		if( sub_menu[x] !== num_proyecto) {
			console.log("veces if");
			container = num_proyecto.parentNode;
			console.log(container);
			container.classList.add("container-main-hiding");
			container.classList.remove("container-main-showing");
		}
	}
}

function unhideOtherProyects(num_proyecto) {
	var container;
	for(var x = 0; x < sub_menu.length; x++) {
		if( sub_menu[x] !== num_proyecto) {
			container = num_proyecto.parentNode;
			container.classList.remove("container-main-hiding");
			container.classList.add("container-main-showing");
		}
	}
}