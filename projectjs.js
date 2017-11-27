console.log("Working")
// RESTART GAME
var restart =document.querySelector("#b");

// SQUARES DECLARATION
var squares=document.querySelectorAll("td");

// Clear all the SQUARES
function clearBoard(){

	for( var i =0;i<squares.length;i++){
		squares[i].textContent="";
	}

};

// Attaching event listener to restart button
restart.addEventListener('click',clearBoard);

 //Now the real task

 function changeMarker(){
 	if(this.textContent === ''){
 		this.textContent= 'X';
 		// console.log("DONE")
 	}
 	else if(this.textContent==='X'){
 		this.textContent='O';
 			}
 	else {
 		this.textContent='';
 		 	}	
 	}
 	
	for(var i=0;i<squares.length;i++){
 		squares[i].addEventListener('click',changeMarker);
 	}
 

