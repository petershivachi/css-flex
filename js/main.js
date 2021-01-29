//Initialize and add the map
function initMap(){

  //Object location
  const loc = { lat: -1.292066, lng: 36.821945}

  //centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc 
  });

  //The marker positioned at location
  const marker = new google.maps.Map({ position: loc, map: map });
}

//sticky navbar backgrund
window.addEventListener('scroll', function(){
  if (window.scrollY > 150) {
    document.getElementById('navbar').style.opacity = 0.9;
  } else {
    document.getElementById('navbar').style.opacity = 1;
  }
})

//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      1000
    );
  }
});