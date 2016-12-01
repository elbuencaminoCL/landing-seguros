
	numeral.language('es', {
    delimiters: {
        thousands: '.',
        decimal: ','
    }
	});

	numeral.language('es');

	function addDecimal(x) {
		let string = numeral( x ).format(  '0,0.000' );
		return string;
	}

	function addInteger(x) {
		let string = numeral( x ).format(  '0,0' );
		return string;
	}