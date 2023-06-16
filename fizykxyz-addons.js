;
function dec2bin(dec,places)
{
	places = Math.floor(places);
	var result = parseInt((dec >>> 0), 10).toString(2); //(dec >>> 0).toString(2);
	return (places >= result.length) ? '0'.repeat(places - result.length) + result : '#NUM!';
}
function potega(podstawa,wykladnik)
{
	return (podstawa)^(wykladnik);
}
function generujEtykiete()
{
let label="svg width=";

}
var rec = entry();
var da = rec.field("da");
var a = rec.field("RTF");	


var calData = { 
  daysName:   ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
  daysShort:  ['Pn','Wt','Śr','Cz','Pi','So','Ni'],
  daysMonth:  [31,28,31,30,31,30,31,31,30,31,30,31];
  monthName:  ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  monthShort: ['St','Lu','Mr','Kw','Mj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
}


function rokPrzestepny(rok)
{
  return ((rok % 4 == 0) && ((rok % 100 != 0) || (rok % 400 == 0)));
}

function kalendarz()
{
  data = new Date();
  var rok = data.getYear();
  if (rok < 1000) rok = 2000 + rok - 100;
  var miesiac = data.getMonth();
  var dzienTygodnia = data.getDay();
  var dzienMiesiaca = data.getDate();
  var tempDate = new Date(rok, miesiac, 1);
  var pierwszyDzienMiesiaca = tempDate.getDay();
  var kal="<b>Kalendarz</b><br>";
  if(dzienTygodnia == 0) dzienTygodnia = 7;
  if(pierwszyDzienMiesiaca == 0) pierwszyDzienMiesiaca = 7;
  var nazwyMies=['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień']
  var dniMies=[31,28+rokPrzestepny(rok),31,30,31,30,31,31,30,31,30,31];
  var nazwaMiesiaca=nazwyMies[miesiac];
  var dniWMiesiacu=dniMies[miesiac];
  kal+="<TABLE border = 1><TR>";
  kal+="<TD bgcolor='yellow' align='center' colspan='7'>";
  kal+=nazwaMiesiaca + " " + rok;
  kal+="</TD></TR><TR>";

  kal+="<TR>";
  kal+="<TD align='center' bgcolor='pink'>Pn</TD>";
  kal+="<TD align='center' bgcolor='pink'>Wt</TD>";
  kal+="<TD align='center' bgcolor='pink'>Śr</TD>";
  kal+="<TD align='center' bgcolor='pink'>Cz</TD>";
  kal+="<TD align='center' bgcolor='pink'>Pi</TD>";
  kal+="<TD align='center' bgcolor='pink'>So</TD>";
  kal+="<TD align='center' bgcolor='pink'>Nd</TD>";
  kal+="</TR>";

var j = dniWMiesiacu + pierwszyDzienMiesiaca - 1;

  for(var i = 0; i < j; i++){
    if(i < pierwszyDzienMiesiaca - 1){
      kal+="<TD bgcolor='white'></TD>";
      continue;
    }
    if((i % 7) == 0){
      kal+="</TR><TR>";
    }
    if((i - pierwszyDzienMiesiaca + 2) == dzienMiesiaca){
      color = "yellow";
    }
    else{
      color = "green";
    }
    kal+="<TD bgcolor='" + color + "' align='center'>";
    kal+=i - pierwszyDzienMiesiaca + 2;
    kal+="</TD>";
  }
  kal+="</TR></TABLE>";

return kal;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    //var t = setTimeout(startTime, 500);    
    return    h + ":" + m + ":" + s; 
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//var kal="<b>Kalendarz</b>";
//kal+="<b>test</b>";
//kal+=rokPrzestepny(2004)*1+kalendarz();

//kal+="<b>test</b> <tableta za border='1'><tr><th>Firstname</th><th>Lastname</t to takieh><th>Age</th></tr><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>Joh</td><td>Doe</td><td>80</td></tr></table>");

rec.set("RTF", kalendarz());

;
