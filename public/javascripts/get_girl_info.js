$(function(){
//ココにget_girlModuleお願いします。/


function getGirlInfo() {
	$.get("/get/girl", function(data){
		alert("success!");

		get_girlModule(data);
	});
}

});
