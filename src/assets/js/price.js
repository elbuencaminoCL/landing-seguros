
	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureDateCoverage = $('select.secureDateCoverage');
	let $selectSecureDateCoverageOption = $('select.secureDateCoverage option');
	let $selectSecureCan = $('select.secureCan');
	let $selectSecureCanOption = $('select.secureCan option');
	let $capital = $( '#capital' );
	let $deductible = $( '#deductible' );
	let $deductibleSick = $( '#deductibleSick' );
	let UF;
	let $pricePeso = $('.pricePeso');
	let $priceUF = $('.priceUF');
	let $priceSave = $('.priceSave');
	let $changeCoverage = $('.changeCoverage')
	let $changeCoverageMore = $('.changeCoverageMore')

	const ufValuePeso = 26329.30;

	if( $selectSecure.val() == 'secureMayor' ) {
		secureMayorFn();
		$changeCoverage.removeClass( 'hide' );
		$changeCoverageMore.addClass( 'hide' );
	}

	$selectSecure.add( $selectSecureCan ).add( $selectSecureDate ).add( $selectSecureDateCoverage ).on( 'change', () => {
		selectFn();
	})

	function selectFn() {
		let $selectSecureVal = $selectSecure.val();

		if( $selectSecureVal == 'secureMayor' ) {
			secureMayorFn();
			$changeCoverageMore.addClass( 'hide' );
			$changeCoverage.removeClass( 'hide' );
		}
		else if( $selectSecureVal == 'secureMayorMore' ) {
			secureMayorMoreFn();
			$changeCoverage.addClass( 'hide' );
			$changeCoverageMore.removeClass( 'hide' );
		}

		if( isNaN( $capital.html() ) || isNaN( $capital.html() ) ) {

			$($selectSecureDateCoverage).val( '18' );

			if( $selectSecureVal == 'secureMayor' ) {
				secureMayorFn();
			}
			else if( $selectSecureVal == 'secureMayorMore' ) {
				secureMayorMoreFn();
			}

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

		let $priceMorePeso = $( $pricePeso ).html();
		let unFormat = numeral().set($priceMorePeso).value();

		$priceSave.html( parseFloat(unFormat * 3).toFixed(3) );

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
		let unFormat = numeral().set($priceMorePeso).value();

		$priceSave.html( parseFloat(unFormat * 3).toFixed(3) );
	}

	function totalPrice( UF ) {
		let totalPeso = UF * ufValuePeso;
		$pricePeso.html( addInteger( totalPeso) );
		$priceUF.html( addDecimal( UF ) );
	}

	function totalPriceCv( CvUf ) {
		let totalPeso = CvUf;

		$capital.html( addInteger( totalPeso ) );

		if( totalPeso % 1 != 0 ) {
			$capital.html( parseFloat( totalPeso ).toFixed(2) );
		}

	}

	function totalPriceDc( CvUf ) {
		let totalPeso = CvUf;
		$deductible.html( addInteger( totalPeso ) );

		if( totalPeso % 1 != 0 ) {
			$deductible.html( totalPeso );
		}

	}

	function totalPriceDcSick( Message ) {
		$deductibleSick.html( Message );
	}