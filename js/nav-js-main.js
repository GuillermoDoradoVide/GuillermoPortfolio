/*javascript*/
var sub_menu = document.getElementsByTagName("section");
function init() {}
window.onload = init;

function expandirInfo(num_proyecto) {
	var container;
		container = num_proyecto.getElementsByClassName("container-cell")[0];
		if (container.classList.contains("hidden")) {
			container.classList.remove("hidden");
			container.classList.add("visible");

			container.style.height = container.style.height;
			hideOtherProyects(num_proyecto);
		}
		else {
			container.classList.add("hidden");
			container.classList.remove("visible");
			unhideOtherProyects(num_proyecto);
		}
}

function hideOtherProyects(num_proyecto) {
	var container;
	for(var x = 0; x < sub_menu.length; x++) {
		if( sub_menu[x] !== num_proyecto) {
			container = sub_menu[x].parentNode;
			container.classList.remove("visible");
			container.classList.add("hidden");
		}
	}
}

function unhideOtherProyects(num_proyecto) {
	var container;
	for(var x = 0; x < sub_menu.length; x++) {
		if( sub_menu[x] !== num_proyecto) {
			container = sub_menu[x].parentNode;
			container.classList.add("visible");
			container.classList.remove("hidden");
		}
	}
}