
	let $headerMenu = $( '#headerMenu' );
	let $headerList = $( '#headerList' );

	$headerMenu.on( 'click', () => {
		$headerMenu.toggleClass( 'visible' );
		$headerList.toggleClass( 'visible' );
		console.log( 'click' )
	});