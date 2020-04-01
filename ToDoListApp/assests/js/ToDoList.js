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
$("ul").on("click",".delete",function(particularSpan){
	$(this).parent().fadeOut("500",function(){
		$(this).remove();
	});
	particularSpan.stopPropagation();


});
// looking for enter then append list
$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		// grabbing new todo text from input
		var todoText=($(this).val());     
		// create a new li &add it to ul
		$("ul ").append('<li><span class="fas fa-trash-alt delete"></span>' + todoText + "<span class='move'><></li>");
		
		
	}
});
// local storage html5

var theList = document.getElementById("theList");
// save localStorage
$("#saveAll").click(function(clk){
	clk.preventDefault();
	localStorage.setItem("todoList",theList.innerHTML);
	console.log ("saved");
	});
// clear localStorage
$("#clearAll").click(function(clk){
	clk.preventDefault();
	localStorage.clear();
	location.reload();
	
});
loadToDo();
function loadToDo(){
	if(localStorage.getItem("todoList")){
		theList.innerHTML=localStorage.getItem("todoList");
	};
};



// jquery sortable
$( function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  } );
