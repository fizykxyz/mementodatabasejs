;
function dec2bin(dec,places)
{
	places = Math.floor(places);
	var result = parseInt((dec >>> 0), 10).toString(2); //(dec >>> 0).toString(2);
	return (places >= result.length) ? '0'.repeat(places - result.length) + result : '#NUM!';
}
function potega(podstawa,wykladnik)
{
	return podstawa^wykladnik
}
;
