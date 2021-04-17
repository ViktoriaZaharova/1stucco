var coordinates = {lat: 47.212325, lng: 38.933663},
    markerImage = 'img/marker.svg',
    zoom = 15,

    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ff6800"
                    },
                    {
                        "saturation": "20"
                    },
                    {
                        "lightness": "-8"
                    },
                    {
                        "gamma": "1.00"
                    },
                    {
                        "weight": "1.12"
                    }
                ]
            }
        ]
    }),


    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });


