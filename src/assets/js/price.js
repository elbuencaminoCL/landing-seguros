
	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureCan = $('select.secureCan');
	let $selectSecureCanOption = $('select.secureCan option');
	let UF;
	let $pricePeso = $('.pricePeso');
	let $priceUF = $('.priceUF')

	const ufValuePeso = 26304.77;

	if( $selectSecure.val() == 'secureMayor' ) {
		secureMayorFn();
	}

	$selectSecure.on( 'change', () => {
		selectFn();
	})

	$selectSecureCan.on( 'change', () => {
		selectFn();
	})

	$selectSecureDate.on( 'change', () => {
		selectFn();
	})

	function selectFn() {
		let $selectSecureVal = $selectSecure.val();

		if( $selectSecureVal == 'secureMayor' ) {
			secureMayorFn();
		}
		else if( $selectSecureVal == 'secureMayorMore' ) {
			secureMayorMoreFn();
		}
	}

	function secureMayorFn() {

		$.each( $selectSecureDate, ( k, v ) => {

			let $valueSecureDate = $( v ).val();
			let $valueDataUf = $( $selectSecureCan ).find(':selected').data('uf' + $valueSecureDate);

			totalPrice( $valueDataUf );

		})

	}

	function secureMayorMoreFn() {
		$.each( $selectSecureDate, ( k, v ) => {

			let $valueSecureDate = $( v ).val();
			let $valueDataUf = $( $selectSecureCan ).find(':selected').data('more-uf' + $valueSecureDate);

			totalPrice( $valueDataUf );

		})
	}

	function totalPrice( UF ) {
		let totalPeso = UF * ufValuePeso;
		$pricePeso.html( addCommas( parseInt( totalPeso ) ) );
		$priceUF.html( addCommas( parseFloat( UF ).toFixed(2) ) );
	}