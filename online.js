var scrollPos = window.scrollY || document.documentElement.scrollTop

setInterval(function() {
	console.log(scrollPos);
	var x = document.getElementById("head");
	if(scrollPos > 1) {
		x.style.backgroundColor = 'white';
		document.getElementById('logo_img').setAttribute('src', 'img/logo.png');	
		document.getElementById('logo_img').setAttribute('class', 'img_changed');
		document.getElementById('menus').setAttribute('backgroundColor', 'white');
		document.getElementById('menu_detail').setAttribute('class', 'menus_changed');
		document.getElementById('menu_button').setAttribute('class', 'button_changed');
		document.getElementById('menu_globe').setAttribute('src', 'img/globe.png');
		document.getElementById('menu_arrow').setAttribute('src', 'img/arrow.png');
		for(var i = 0; i<5; i++)
			document.getElementsByTagName("button")[i].style.color ='black';
	} else {
		x.style.backgroundColor = "transparent";
		document.getElementById('logo_img').setAttribute('src', 'img/logo2.png');
		document.getElementById('logo_img').setAttribute('class', '');	
		document.getElementById('menus').setAttribute('backgroundColor', 'black');
		document.getElementById('menu_detail').setAttribute('class', '');
		document.getElementById('menu_button').setAttribute('class', '');
		document.getElementById('menu_globe').setAttribute('src', "img/globe2.png");
		document.getElementById('menu_arrow').setAttribute('src', 'img/arrow2.png');

		for(var i = 0; i<5; i++)
			document.getElementsByTagName("button")[i].style.color ='white';		
	}
	scrollPos = window.scrollY || document.documentElement.scrollTop;

}, 250);