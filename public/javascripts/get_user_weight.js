$(function(){


	function getUserWeight() {
		$.get("/get/weight", function(data){
			alert("success!");
			get_UserWeightModule(data);
		});
	}

});
