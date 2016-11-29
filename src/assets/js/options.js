
	let $secure = $( '#secure' );
	let $secure2 = $( '#secure2' );
	let $secureDate = $( '#secureDate' );
	let $secureDateOption = $( '#secureDate option' );
	let $secureDateOption2 = $( '#secureDate2 option' );
	let $secureDateOption3 = $( '#secureDate3 option' );
	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureDateCoverage = $('select.secureDateCoverage');
	let $selectSecureCan = $('select.secureCan');
	let $getMayorMore = $('.getMayorMore');

	$selectSecure.change( function() {
	  $selectSecure.not(this).val(this.value);
	});

	$selectSecureDate.change( function() {
	  $selectSecureDate.not(this).val(this.value);
	})

	$selectSecureCan.change( function() {
	  $selectSecureCan.not(this).val(this.value);
	})

	$getMayorMore.on( 'click', ( e ) => {
		e.preventDefault();
		e.stopPropagation();

		$( $selectSecure ).val( 'secureMayorMore' );
		selectFn();
	})

	if( $secure.add( $secure2 ).val() == 'secureMayor' ) {
		$secureDateOption2.each( function () {
			if( $( this ).val() == '1865' ) {
				$( this ).attr('disabled', true);
			}
		})
	}

	$secure.add( $secure2 ).on('change', ( e ) => {

		if( $secure.add( $secure2 ).val() == 'secureMayorMore' ) {
			$( $selectSecureDateCoverage ).val( '1865' );

			$secureDateOption2.each( function () {
				$( this ).attr('disabled', true);
				if( $( this ).val() == '1865' ) {
					$( this ).attr('disabled', false);
				}
			})
		}
		else {
			$secureDateOption2.each( function () {
				$(this ).attr('disabled', false);
				if( $( this ).val() == '1865' ) {
					$( this ).attr('disabled', true);
				}
			})
		}
	});