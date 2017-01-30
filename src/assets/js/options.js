
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