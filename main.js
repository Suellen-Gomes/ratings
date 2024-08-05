var rating = document.getElementById("rating");
var send = document.querySelector("#btn_submit #submit");
var answer = document.getElementById("info");

var number_rating;

rating.addEventListener('click', function(event){
	number_rating = pontuacao(event);
})

function pontuacao(event){

	if(event.target.tagName === 'LI'){

		return event.target.textContent;
	}
}

send.addEventListener('click', function(){
	let main_show = document.querySelector(".rating_container");
	let thanks_show = document.querySelector(".container_congratulations");

	if(typeof number_rating == 'undefined'){
		alert(`Por favor selecione um numero!`);
	}
	 else{
	  main_show.style.display = "none";
	  thanks_show.style.display = "inline-block";
	  answer.innerText = `You selected ${number_rating} out 5`;
	  }	  		   
	
})