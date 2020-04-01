// check off specific list elements

$("ul").on("click","li",function(){
	
	// // if li is gray turn black
	// 	if ($(this).css("color") === "rgb(128, 128, 128)" ) {
	// 		$(this).css({
	// 	color: "black",
	// 	textDecoration: "none",
	// 	});
	// 	}
	// // else gray
	// 	else {
	// 		$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through",
	// 		});
	
	//  };
	
		
	$(this).toggleClass("completed");
	 });
	
//click to delete Todo
$("ul").on("click","span",function(particularSpan){
	$(this).parent().fadeOut("500",function(){
		$(this).remove();
	});
	particularSpan.stopPropagation();


});
$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		// grabbing new todo text from input
		var todoText=($(this).val());     
		// create a new li &add it to ul
		$("ul ").append("<li><span>*icon </span>" + todoText + "</li>");
		
	}
});