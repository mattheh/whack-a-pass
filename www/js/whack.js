var app = {

  
    initialize: function() {
        this.bindEvents();
			
		//loadJSONData()
	},

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        jsonObject = JSON.parse('[{"Password":"password123","Type": 1},{"Password":"I<3Horses","Type": 1},{"Password":"JknsD3@anmAiLfknsma!","Type": 1},{ "Password":"HappyDays","Type": 1},{"Password":"TheBestPassword","Type": 1},{"Password":"TheBestPassword","Type": 1},{"Password":"TheWorstPassword","Type": 1},{"Password":"2@Atak","Type": 2},{"Password":"24pples2D4y","Type": 2},{"Password":"IWasBornIn1919191995","Type": 2},{"Password":"IWasBornIn1919191995","Type": 2},{"Password":"2BorNot2B_ThatIsThe?","Type": 3},{"Password":"4Score&7yrsAgo","Type": 3}]');
		lastTime = Date.now()
		main();	
    },

};
var baseDelay = 5000
app.initialize();
var bgImage = new Image();
bgImage.src = 'img/grass.jpg';
function moleHole(x,y){
	this.x = x;
	this.y=y;
        this.width = window.innerWidth/3;
        this.height = window.innerHeight/3;
	var tempImage = new Image();
	tempImage.src = 'img/mole_hole.png';
	this.img = tempImage;
	this.mole = null;
}

function mole(password,type){
	this.password = password;
	this.type = type;
	this.delay = baseDelay;

}

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas)

var moleArr = []

for (i = 0; i < 2; i++)
	for(j=0;j <3;j++)
                moleArr.push(new moleHole(i*(window.innerWidth/2),j*(window.innerHeight/3)))
function render(){		
        ctx.font = "18px Helvetica";
        ctx.strokeStyle = "white";
        ctx.drawImage(bgImage,0,0,window.innerWidth,window.innerHeight)
	for(i=0; i < 6; i++){
                ctx.drawImage(moleArr[i].img,moleArr[i].x,moleArr[i].y,moleArr[i].width, moleArr[i].height)
                ctx.strokeText("password " + i, moleArr[i].x, moleArr[i].y + moleArr[i].height/2);
	}
	
}

var lastTime;
function main (){
	editObjects(Date.now() - lastTime)
	lastTime = Date.now()
	render()
	requestAnimationFrame(main)
}
var millisecondsPerMole = 3000;
function editObjects(dt){
	for (i=0;i<6;i++){
		if (Math.random() < (1/millisecondsPerMole)*dt && moleArr[i].mole == null){
			var random = getRandomInt(0,jsonObject.length -1)
			moleArr[i].mole = new mole(jsonObject[random].Password,jsonObject[random].Type)
			console.log(moleArr[i].mole)
		}
			
	}

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadJSONData(){
var xmlhttp;
var jsonObject;

// code for IE7+, Firefox, Chrome, Opera, Safari
if (window.XMLHttpRequest)
{
    xmlhttp=new XMLHttpRequest();
}
// code for IE6, IE5
else
{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        jsonObject = JSON.parse(xmlhttp.responseText);
        alert(jsonObject[0].Password);                     
    }
}

xmlhttp.open("GET","gamedata/whack.json",true);
xmlhttp.send();

}
