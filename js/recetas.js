/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(window){

	var filtros = $(".filter-container a");
	var recetas = $(".description");

	filtros.on("click",function(event){
		event.preventDefault();
		seleccionarReceta($(this));
	});


	$(function(){

		var hash = document.location.hash.replace("#","");
		var linkToActive = $(".filter-container ."+hash);
		seleccionarReceta(linkToActive);

	});


	function seleccionarReceta(link){

		var filterBy = link.data("id");
		var recetaToShow = $(".description[data-id="+filterBy+"]");

		if(recetaToShow.is(":visible")) return;

		filtros.removeClass("active");
		link.addClass("active");

		recetas.stop(true,true).fadeOut(500);
		recetaToShow.stop(true,true).delay(500).fadeIn(500);

		$('#title-filter').removeClass();
		$('#title-filter').addClass(filterBy);

		document.location.hash = filterBy;

	}

})(window);