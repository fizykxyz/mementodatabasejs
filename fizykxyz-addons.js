;
function dec2bin(dec,places)
{
	places = Math.floor(places);
	var result = parseInt((dec >>> 0), 10).toString(2); //(dec >>> 0).toString(2);
	return (places >= result.length) ? _s.repeat('0', places - result.length) + result : '#NUM!';
}
;
