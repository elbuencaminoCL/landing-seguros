
	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureDateCoverage = $('select.secureDateCoverage');
	let $selectSecureCan = $('select.secureCan');
	let $selectSecureCanOption = $('select.secureCan option');
	let $capital = $( '#capital' );
	let $deductible = $( '#deductible' );
	let $deductibleSick = $( '#deductibleSick' );
	let UF;
	let $pricePeso = $('.pricePeso');
	let $priceUF = $('.priceUF')

	const ufValuePeso = 26304.77;

	if( $selectSecure.val() == 'secureMayor' ) {
		secureMayorFn();
	}
	else if( $selectSecure.val() == 'secureMayorMore' ) {
		secureMayorMoreFn();
	}

	$selectSecure.add( $selectSecureCan ).add( $selectSecureDate ).add( $selectSecureDateCoverage ).on( 'change', () => {
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

		$.each( $selectSecureDateCoverage, ( k, v ) => {

			let $valueSecureCvDate = $( v ).val();
			let $valueDataCvUf = $( $selectSecureCan ).find(':selected').data('uf' + $valueSecureCvDate);

			totalPriceCv( $valueDataCvUf );

		})

	}

	function secureMayorMoreFn() {
		$.each( $selectSecureDate, ( k, v ) => {

			let $valueSecureDate = $( v ).val();
			let $valueDataUf = $( $selectSecureCan ).find(':selected').data('more-uf' + $valueSecureDate);

			totalPrice( $valueDataUf );

		})

		$.each( $selectSecureDateCoverage, ( k, v ) => {

			let $valueSecureCvDate = $( v ).val();
			let $valueDataCvUf = $( $selectSecureCan ).find(':selected').data('more-uf' + $valueSecureCvDate);

			console.log( $valueDataCvUf );

			totalPriceCv( $valueDataCvUf );

		})
	}

	function totalPrice( UF ) {
		let totalPeso = UF * ufValuePeso;
		$pricePeso.html( addCommas( parseInt( totalPeso ) ) );
		$priceUF.html( addCommas( parseFloat( UF ).toFixed(2) ) );
	}

	function totalPriceCv( CvUf ) {
		let totalPeso = CvUf;
		console.log( totalPeso );
		$capital.html( addCommas( parseFloat( totalPeso ).toFixed(2) ) );
	}