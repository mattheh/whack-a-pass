
var app = {

    initialize: function() {
        this.bindEvents();
		loadJSONData()
	},

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        
    },

};

app.initialize();

function moleHole(x,y){
	this.x = x;
	this.y=y;
	var tempImage = new Image();
	tempImage.src = 'img/mole_hole.png';
	this.img = tempImage;
}

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas)

var moleArr = []

for (i = 0; i < 3; i++)
	for(j=0;j <3;j++)
		moleArr.push(new moleHole(i*(window.innerWidth/2 -20),j*(window.innerHeight/2 -20)))
function render(){		
	for(i=0; i < 9; i++){
		ctx.drawImage(moleArr[i].img,moleArr[i].x,moleArr[i].y)
	}
	requestAnimationFrame(render)
}
render();

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