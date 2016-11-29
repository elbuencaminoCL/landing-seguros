
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
	let $priceUF = $('.priceUF');
	let $priceSave = $('.priceSave');

	const ufValuePeso = 26304.77;

	if( $selectSecure.val() == 'secureMayor' ) {
		secureMayorFn();
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

		if( isNaN( $capital.html() ) || isNaN( $capital.html() ) ) {
			$capital.html( '' );
			$deductible.html( '' );
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
			let $valueDataCvUf = $( $capital ).data('cvuf' + $valueSecureCvDate);
			let $valueDataDcUf = $( $deductible ).data('cvuf' + $valueSecureCvDate);
			let $valueDataDcSickUf = $( $deductibleSick ).data('cvuf' + $valueSecureCvDate);

			totalPriceCv( $valueDataCvUf );
			totalPriceDc( $valueDataDcUf );
			totalPriceDcSick( $valueDataDcSickUf );

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
			let $valueDataCvUf = $( $capital ).data('cvuf' + $valueSecureCvDate);
			let $valueDataDcUf = $( $deductible ).data('cvuf' + $valueSecureCvDate);
			let $valueDataDcSickUf = $( $deductibleSick ).data('cvuf' + $valueSecureCvDate);

			totalPriceCv( $valueDataCvUf );
			totalPriceDc( $valueDataDcUf );
			totalPriceDcSick( $valueDataDcSickUf );

		})

		let $priceMorePeso = $( $pricePeso ).html();
		console.log( $priceMorePeso );

		$priceSave.html( parseFloat( $priceMorePeso * 3 ).toFixed( 3 ) );
	}

	function totalPrice( UF ) {
		let totalPeso = UF * ufValuePeso;
		$pricePeso.html( addCommas( parseInt( totalPeso ) ) );
		$priceUF.html( addCommas( parseFloat( UF ).toFixed(2) ) );
	}

	function totalPriceCv( CvUf ) {
		let totalPeso = CvUf;

		$capital.html( addCommas( parseInt( totalPeso ) ) );

		if( totalPeso % 1 != 0 ) {
			$capital.html( parseFloat( totalPeso ).toFixed(2) );
		}

	}

	function totalPriceDc( CvUf ) {
		let totalPeso = CvUf;
		$deductible.html( addCommas( parseInt( totalPeso ) ) );

		if( totalPeso % 1 != 0 ) {
			$deductible.html( parseFloat( totalPeso ).toFixed(2) );
		}

	}

	function totalPriceDcSick( Message ) {
		$deductibleSick.html( Message );
	}