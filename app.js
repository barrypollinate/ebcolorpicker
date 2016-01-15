var colorselector = document.querySelector('#colorselector'),
	paths = document.querySelectorAll('path'),
	svg = document.querySelector('#preview'),
	colors = [
	['ascent-blue', '#004B91'],
	['black', '#222222'],
	['cinder', '#525152'],
	['cherry', '#941B1E'],
// ];
//
// var unapproved = [
    ['amethyst', '#702e60'],     /* ['amethyst', '#702e60'],*/	
    ['white', '#f5f5f5'],        /* 	['white', '#FCFCF8'],*/
    ['true-blue', '#01488c'],    /*	['true-blue', '#004e99'],*/
	  ['tropical-orange', '#f86925'],
    ['atlantic', '#101026'],     /*	['atlantic', '#12002f'],*/
    ['claret', '#4d0008'],       /*	['claret', '#51001b'],*/
    ['inca-gold', '#e0e330'],    /*	['inca-gold', '#c0cc00'],*/
  	['patina', '#08888c'],
    ['rouge', '#cc1030'],        /*	['rouge', '#d01050'],*/
    ['bright-green', '#13ba13'], /*	['bright-green', '#1cd01c'],*/
    ['flame', '#dd3915'],        /*	['flame', '#dd3915'],*/
    ['picante', '#961e0f'],      /*	['picante', '#96010f'],*/
    ['dark-seamist', '#00292e']  /*	['dark-seamist', '#00252a'],*/
];

var zoomedIn = false;

colors.forEach(function(col){
	var opt = document.createElement('option');
	opt.setAttribute('value', col[1]);
	opt.textContent = col[0] + ' - ' + col[1];
	colorselector.appendChild(opt);
});

function setColor(){
	for(var i=0; i<paths.length; i++){
		paths.item(i).setAttribute('fill', colorselector.value);
	}
};

function toggleZoom(){
	if(zoomedIn){
		svg.setAttribute('width', '650px');
		svg.setAttribute('height', '650px');
	}
	else {
		svg.setAttribute('width', '1770px');
		svg.setAttribute('height', '1770px');
	}
	zoomedIn = !zoomedIn;
}

colorselector.onchange = setColor;

colorselector.value = colors[0][1];

setColor();
