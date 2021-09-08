const p1={
	score:0,
	button:document.querySelector('#p1button'),
	display:document.querySelector('#p1display'),
}
const p2={
	score:0,
	button:document.querySelector('#p2button'),
	display:document.querySelector('#p2display'),
}



const resetbutton=document.querySelector('#reset');
const winningtoselect=document.querySelector('#playto');
let winningscore=5;
let isgameover=false;

function updatescore(player,opponent){
	if(!isgameover){
	player.score+=1;
	if(player.score === winningscore){
		isgameover =true;
		player.display.classList.add('has-text-success');
		opponent.display.classList.add('has-text-danger');
		player.button.disabled=true;
		opponent.button.disabled=true;
	}
	player.display.textContent=player.score;
         }
}



p1.button.addEventListener('click',function(){
	updatescore(p1,p2);
})

p2.button.addEventListener('click',function(){
	updatescore(p2,p1);
})

winningtoselect.addEventListener('change',function(){
	winningscore=parseInt(this.value);
	reset();
})

resetbutton.addEventListener('click',reset)

function reset(){
	isgameover=false;
	for(let p of [p1,p2]){
		p.score=0;
		p.display.textContent=0;
		p.display.classList.remove('has-text-success','has-text-danger');
		p.button.disabled=false;
	}
}
