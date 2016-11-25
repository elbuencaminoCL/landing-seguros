
	let $wrapperAnimate = $( '.wrapperAnimate' );
	let $wrapper = $( '#wrapper' );
	let $loading = $( '#loading' );

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
		setTimeout(animateClose, 1000);

	})