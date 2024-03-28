mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });


const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates) //listing/geo-coordinate
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after Booking</p>`))
        .addTo(map);
