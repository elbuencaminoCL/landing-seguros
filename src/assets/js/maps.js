
    function initMap() {

        let $hospitales = $( '.maps__tabs__list-item:first-of-type' );
        let $muestras = $( '.maps__tabs__list-item:nth-of-type(2)' );
        let $medicos = $( '.maps__tabs__list-item:nth-of-type(3)' );
        let $close = $( ".close" );
        let $mapsTabsAnchor = $("#maps-tabs li a");


        showMap('Clínica UC','<b>Ubicación</b> Lira 40 Metro U. Católica<br /> Santiago<br /> <br /><b>Teléfono</b><br />22384 6000<br />','-33.44183','-70.64121','hospital','http://redsalud.uc.cl/medios/thumbnail/clinica-lira/home-clinica-lira-288x80.png');


        $hospitales.on( 'click', () => {
            showMap('Clínica UC','<b>Ubicación</b> Lira 40 Metro U. Católica<br /> Santiago<br /> <br /><b>Teléfono</b><br />22384 6000<br />','-33.44183','-70.64121','hospital','http://redsalud.uc.cl/medios/thumbnail/clinica-lira/home-clinica-lira-288x80.png');
        });

        $muestras.on( 'click', () => {
            showMap('Centro de Especialidades Médicas','<b>Ubicación</b> Marcoleta 350, Metro U. Católica<br /><b>Teléfono</b><br /><b>Informaciones y códigos:</b> 22354 8636','-33.442137','-70.64010','utm','http://redsalud.uc.cl/medios/thumbnail/laboratorios/UTM/utm-cem-288x80.png');
        });

        $medicos.on( 'click', () => {
            showMap('Centro Médico San Joaquín', '<b>Ubicación</b> Av. Vicuña Mackenna 4686 <br /> Metro San Joaquín<br /> <br /><b>Teléfono</b><br />Reserva horas e informaciones<br />22676 7000  ','-33.497349','-70.61481','centro','http://redsalud.uc.cl/medios/thumbnail/centros_medicos/sanjoaquin-288x80.png');
        });

        $mapsTabsAnchor.click( function() {
            var selector = this.id.substring(this.id.indexOf("_") + 1);
            $("#" + selector).siblings("ul").fadeOut().delay(800).hide();
            $("#" + selector).fadeIn();
        });

        $close.click( function() {
            $('ul.content').fadeOut();
        });

    }



    function showMap( title, ubication, latitude, longitude, type, pic ) {
        let ubicationPosition = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: ubicationPosition,
          scrollwheel: false
        });

        let contentString =
            '<div id="content">'+
                '<div id="siteNotice"><img src="' + pic + '"></div>'+
                '<p id="firstHeading" class="firstHeading">'+ title +'</p>'+
                '<div id="bodyContent">'+
                    '<p>'+ ubication +'</p>'+
                '</div>'+
            '</div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        let marker = new google.maps.Marker({
          position: ubicationPosition,
          map: map
        });

        infowindow.open(map, marker);

    }