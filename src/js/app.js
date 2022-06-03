const name = 'world';
console.log(`Hello ${name}`);

/*
	Importem la llibreria pel menú hamburguesa
*/
import 'hamburger-menu';

/*
	Importem la llibreria per l'slider
*/
import {tns} from 'tiny-slider';

/*
	Importem la llibreria per manipular dates
*/
import date from 'date-and-time';

/*
	Importem un arxiu json amb el llistat de vídeos amb títol, id de Youtube i data d'enregistrament
*/
import * as data from './videos.json';

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
		lazyload: true,
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
				result = data.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
				break;
			default:
				result = data.sort((a,b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
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
	let pageVideos = document.querySelector('.new-videos');

	while (pageVideos.hasChildNodes()) {
		pageVideos.removeChild(pageVideos.firstChild);
	}

	let videos = orderVideos(field,order);

	let nodes = videos.map(video => {
		const videoDate = new Date(video.date);
		const formattedDate = date.format(videoDate, 'DD/MM/YYYY'); 

		let li = document.createElement('li');
		li.innerHTML= `
		<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/` + video.yt_id + `" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<p>` + video.title + ` <time datetime="` + video.date + `">` + formattedDate + `</time></p>`;
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
		}
		
		renderVideosBy(fieldValue, orderValue);
	});
}


let header = document.querySelector('header');

window.addEventListener('scroll', function() {
	if(document.documentElement.scrollTop + window.innerHeight > document.body.clientHeight - 100) {
		header.classList.add("hidden");
	}else{
		header.classList.remove("hidden");
	}
});