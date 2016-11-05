$(function(){

	function getGirlWeight() {
		$.get("/get/girl_weight", function(data){
			alert("success!");
			get_GirlWeightModule(data);
		});
	}

});
