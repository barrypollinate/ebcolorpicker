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
/* ['amethyst', '#702e60'],*/	['amethyst', '#702e60'],
/* 	['white', '#FCFCF8'],*/	['white', '#f5f5f5'],
/*	['true-blue', '#004e99'],*/  ['true-blue', '#01488c'],
	['tropical-orange', '#f86925'],
/*	['atlantic', '#12002f'],*/ 	['atlantic', '#101026'],
/*	['claret', '#51001b'],*/  ['claret', '#4d0008'],
/*	['inca-gold', '#c0cc00'],*/ ['inca-gold', '#e0e330'],
	['patina', '#08888c'],
/*	['rouge', '#d01050'],*/  ['rouge', '#cc1030'],
/*	['bright-green', '#1cd01c'],*/  ['bright-green', '#13ba13'],
/*	['flame', '#dd3915'],*/ ['flame', '#dd3915'],
/*	['picante', '#96010f'],*/  ['picante', '#961e0f'],
/*	['dark-seamist', '#00252a'],*/  ['dark-seamist', '#00292e']
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
