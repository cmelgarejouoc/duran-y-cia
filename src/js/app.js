const name = 'world';
console.log(`Hello ${name}`);

/*
	Importem un arxiu json amb el llistat de vídeos amb títol, id de Youtube i data d'enregistrament
*/
import * as data from './videos.json';

/*
	Escoltem l'event onclick per veure si s'ha premut el botó close del menú hamburguesa de mobile.
	Si és així afegim la classe collapse-menu, que ens tanca el menú i l'eliminem després d'un segon per
	no interferir en el normal funcionament de la dependència externa que gestiona aquest menú hamburguesa.
*/
document.addEventListener('click', function (event) {
	if (!event.target.closest('.close')) return;

	document.querySelector(".hamburger-menu").classList.add("collapse-menu");
	setTimeout(function(){
		document.querySelector(".hamburger-menu").classList.remove("collapse-menu");
	}, 1000);
});

/*
	A la home mirem si està definit el selector my-slider i si és així fem la crida a l'slider
	amb els seus paràmetres de configuració
*/
if(document.querySelector('.my-slider')){
	var slider = tns({
		container: '.my-slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		speed: 2500,
		autoplayTimeout: 7000,
		nav: true,
		navPosition: "bottom",
		controls: false,
		autoplayButtonOutput: false,
		mode: "gallery"//"carousel" or "gallery"
	});
}

/*
	Funció orderVideos que utilitzarem a la pàgina de vídeos per ordenar les dades que tenim al json videos.json

	Params:
	- field:string -> title|date
	- order:string -> asc|desc

	Return: array

	Utilitzem una funció Arrow de ES6 per fer un array sort ja sigui segons la data, en cas que el camp sigui 'date'
	o bé segons el títol, si el camp és 'title'.

	Les funcions Arrow tenen el format següent:

	const x = (x, y) => x * y;

	i Babel el transformarà a format ES5 a producció:

	"use strict";

	var x = function x(_x, y) {
	  return _x * y;
	};

*/
function orderVideos(field = 'date', order = 'asc'){
	let result;

	if (field == 'date') {
		switch (order) {
			case 'asc':
				result = data.sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime());
				break;
			default:
				result = data.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
		}
	}

	if (field == 'title') {
		switch (order) {
			case 'asc':
				result = data.sort((a,b)=> a.title > b.title);
				break;
			default:
				result = data.sort((a,b)=> b.title > a.title);
		}
	}

	return result;
}

/*
	Funció renderVideosBy que utilitzarem a la pàgina de vídeos per fer un render del contingut 
	de la llista desordenada (<ul>)

	Params:
	- field:string -> title|date
	- order:string -> asc|desc

	Return: html

	La funció obté primer un array ambels vídeos en l'ordre que s'ha triat i construeix els elements <li>
	amb el seu contingut (iframe i paràgraf amb titol i data) i els afegeix al node <ul class='new-videos'> amb
	un append.
*/
function renderVideosBy(field = 'date', order = 'asc'){
	let videos = orderVideos(field,order);
	let pageVideos = document.querySelector('.new-videos');

	while (pageVideos.hasChildNodes()) {
		pageVideos.removeChild(pageVideos.firstChild);
	}

	let nodes = videos.map(video => {
		let li = document.createElement('li');
		li.innerHTML= `
		<iframe width="560" height="315" src="https://www.youtube.com/embed/` + video.yt_id + `" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<p>` + video.title + ` <time datetime="` + video.date + `">` + video.date + `</time></p>`;
		return li;
	});

	return pageVideos.append(...nodes);
}

/*
	Si tenim el selector 'new-videos' (perquè estem a la pàgina de vídeos) fem el render inicial del llistat.

	Escoltem també l'event 'change' d'un select per triar una nova ordenació
*/
if(document.querySelector('.new-videos')){
	renderVideosBy('title', 'asc');

	const selectOrderElement = document.querySelector('#order-select');

	selectOrderElement.addEventListener('change', (event) => {
		let optionValue = event.target.value;
		let fieldValue, orderValue = "";
		
		switch (optionValue) {
			case 'titleasc':
				fieldValue = 'title';
				orderValue = 'asc';
				break;
			case 'titledesc':
				fieldValue = 'title';
				orderValue = 'desc';
				break;
			case 'dateasc':
				fieldValue = 'date';
				orderValue = 'asc';
				break;
			case 'datedesc':
				fieldValue = 'date';
				orderValue = 'desc';
				break;
			default:
				fieldValue = 'title';
				orderValue = 'asc';
		}
		renderVideosBy(fieldValue, orderValue);
	});
}
