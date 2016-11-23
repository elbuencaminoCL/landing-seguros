
	$(document).foundation();

	let $secure = $( '#secure' );
	let $secure2 = $( '#secure2' );
	let $secureDate = $( '#secureDate' );
	let $secureDateOption = $( '#secureDate option' );
	let $secureDateOption2 = $( '#secureDate2 option' );
	let $secureDateOption3 = $( '#secureDate3 option' );
	let $wrapper = $( '#wrapper' );
	let $wrapperAnimate = $( '#wrapperAnimate' );
	let $loading = $( '#loading' );
	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureCan = $('select.secureCan');


	$selectSecure.change( function() {
	  $selectSecure.not(this).val(this.value);
	});

	$selectSecureDate.change( function() {
	  $selectSecureDate.not(this).val(this.value);
	})

	$selectSecureCan.change( function() {
	  $selectSecureCan.not(this).val(this.value);
	})

	$wrapperAnimate.on( 'click', ( e ) => {

		e.preventDefault();
		e.stopPropagation();

		$wrapper.add($loading).addClass( 'animate' );

		if( $wrapper.add($loading).hasClass( 'animate' ) ) {
			$wrapper.add($loading).removeClass( 'animate' );
			$wrapper.add($loading).addClass( 'animate' );
		}

		function animateClose() {
			$wrapper.add($loading).removeClass( 'animate' );
		}
		setTimeout(animateClose, 5000);

	})

	$secure.add( $secure2 ).on('change',( e ) => {
		// console.log("PROBANDO", e);

		if( $secure.add( $secure2 ).val() == 'secureMayorMore' ) {

			$secureDateOption.add( $secureDateOption2 ).add( $secureDateOption3 ).each( function () {
				$(this ).attr('disabled', true);
				if( $( this ).val() == '18' ) {
					$(this ).attr('disabled', false);
				}
			})

		}
		else {
			$secureDateOption.add( $secureDateOption2 ).add( $secureDateOption3 ).each( function () {
				$(this ).attr('disabled', false);
			})
		}
	});