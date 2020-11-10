
 AOS.init();

const counters = document.querySelectorAll(".counter");
const speed = 500;

counters.forEach(counter =>{
	const updateCount = () => {
		const target= +counter.getAttribute("data-target");
		const count = +counter.innerText;

		const inc = target/speed;

		if (count<target) {
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
		}else{
			count.innerText = target;
		}
	}

	updateCount();
});

function unhide(){
	document.getElementById("weds").classList.remove("hide")
	document.getElementById("gal-link-1").classList.add("clicked")
	document.getElementById("births").classList.add("hide")
	document.getElementById("life").classList.add("hide")
	document.getElementById("port").classList.add("hide")
	document.getElementById("gal-link-2").classList.remove("clicked")
	document.getElementById("gal-link-3").classList.remove("clicked")
	document.getElementById("gal-link-4").classList.remove("clicked");
}
function hide(){
	document.getElementById("weds").classList.add("hide")
	document.getElementById("gal-link-1").classList.remove("clicked");
}

function unhide2(){
	document.getElementById("births").classList.remove("hide")
	document.getElementById("gal-link-2").classList.add("clicked")
	document.getElementById("weds").classList.add("hide")
	document.getElementById("life").classList.add("hide")
	document.getElementById("port").classList.add("hide")
	document.getElementById("gal-link-1").classList.remove("clicked")
	document.getElementById("gal-link-3").classList.remove("clicked")
	document.getElementById("gal-link-4").classList.remove("clicked");
}
function hide2(){
	document.getElementById("births").classList.add("hide")
	document.getElementById("gal-link-2").classList.remove("clicked");
}

function unhide3(){
	document.getElementById("life").classList.remove("hide")
	document.getElementById("gal-link-3").classList.add("clicked")
	document.getElementById("weds").classList.add("hide")
	document.getElementById("births").classList.add("hide")
	document.getElementById("port").classList.add("hide")
	document.getElementById("gal-link-1").classList.remove("clicked")
	document.getElementById("gal-link-2").classList.remove("clicked")
	document.getElementById("gal-link-4").classList.remove("clicked");
}
function hide3(){
	document.getElementById("life").classList.add("hide")
	document.getElementById("gal-link-3").classList.remove("clicked");
}

function unhide4(){
	document.getElementById("port").classList.remove("hide")
	document.getElementById("gal-link-4").classList.add("clicked")
	document.getElementById("weds").classList.add("hide")
	document.getElementById("births").classList.add("hide")
	document.getElementById("life").classList.add("hide")
	document.getElementById("gal-link-1").classList.remove("clicked")
	document.getElementById("gal-link-2").classList.remove("clicked")
	document.getElementById("gal-link-3").classList.remove("clicked");
}
function hide4(){
	document.getElementById("port").classList.add("hide")
	document.getElementById("gal-link-4").classList.remove("clicked");
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.734856, lng: -73.995633 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


    var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}