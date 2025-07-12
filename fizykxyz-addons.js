//https://replit.com/@TomiDab/mementodbjs#script.js
function dec2bin(dec, places) 
{
  places = Math.floor(places);
  var result = parseInt((dec >>> 0), 10).toString(2); //(dec >>> 0).toString(2);
  return (places >= result.length) ? '0'.repeat(places - result.length) + result : '#NUM!';
}

function potega(podstawa, wykladnik)
{
  return (podstawa) ^ (wykladnik);
}

function rokPrzestepny(rok)
{
  return ((rok % 4 == 0) && ((rok % 100 != 0) || (rok % 400 == 0)));
}

//var rec = entry();
//var da = rec.field("da");
//var a = rec.field("RTF");	

/*
var calData = { 
  daysName:   ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
  daysShort:  ['Pn','Wt','Śr','Cz','Pi','So','Ni'],
  daysMonth:  [31,28,31,30,31,30,31,31,30,31,30,31];
  monthName:  ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  monthShort: ['St','Lu','Mr','Kw','Mj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
}
*/


function kalendarz()
{
  var data = new Date();
  var rok = data.getYear();
  if (rok < 1000) rok = 2000 + rok - 100;
  var miesiac = data.getMonth();
  var dzienTygodnia = data.getDay();
  var dzienMiesiaca = data.getDate();
  var tempDate = new Date(rok, miesiac, 1);
  var pierwszyDzienMiesiaca = tempDate.getDay();  
  if (dzienTygodnia == 0) dzienTygodnia = 7;
  if (pierwszyDzienMiesiaca == 0) pierwszyDzienMiesiaca = 7;
  var nazwyMies = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
  var dniMies = [31, 28 + rokPrzestepny(rok), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var nazwyDni = ['Pon','Wt','Śr','Cz','Pi','So','Ni'];
  var roboczy = '#D3D3D3';
  var wolny = '#FF6550';
  var aktualny = '#FFFF00';
  var koloryDni = [roboczy,roboczy,roboczy,roboczy,roboczy,wolny,wolny];
  var przyciemnijDni = -30;
  var nazwaMiesiaca = nazwyMies[miesiac];
  var dniWMiesiacu = dniMies[miesiac];
  
  var kal = "<DIV class='calendar'> <b>Kalendarz</b><br>";
  kal += "<TABLE border = 1><TR>";
  kal += "<TD bgcolor='yellow' align='center' colspan='7'>";
  kal += nazwaMiesiaca + " " + rok;
  kal += "</TD></TR><TR>";

  kal += "<TR>";
  for (var i=0;i<7;i++)
    {
      kal += "<TD align='center' bgcolor='"+koloryDni[i]+"'>"+nazwyDni[i]+"</TD>";
    }
  kal += "</TR>";

  var j = dniWMiesiacu + pierwszyDzienMiesiaca - 1;

  for (var i = 0; i < j; i++) {
    if (i < pierwszyDzienMiesiaca - 1) {
      kal += "<TD bgcolor='white'></TD>";
      continue;
    }
    if ((i % 7) == 0) {
      kal += "</TR><TR>";
    }
    if ((i - pierwszyDzienMiesiaca + 2) == dzienMiesiaca) {
      color = aktualny;
    }
    else {
      color = LightenDarkenColor(koloryDni[i%7],przyciemnijDni);
    }
    kal += "<TD bgcolor='" + color + "' align='center'>";
    kal += i - pierwszyDzienMiesiaca + 2;
    kal += "</TD>";
  }
  kal += "</TR></TABLE></DIV>";
  return kal;
}


function startTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = leadingZero(m);
    s = leadingZero(s);
    //var t = setTimeout(startTime, 500);
    return    h + ":" + m + ":" + s;
}

function leadingZero(i)
{
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function LightenDarkenColor(col,amt)
{
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}


//var kal="<b>Kalendarz</b>";
//kal+="<b>test</b>";
//kal+=rokPrzestepny(2004)*1+kalendarz();

//kal+="<b>test</b> <tableta za border='1'><tr><th>Firstname</th><th>Lastname</t to takieh><th>Age</th></tr><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>Joh</td><td>Doe</td><td>80</td></tr></table>");

//rec.set("RTF", kalendarz());

//document.body.innerHTML += kalendarz();



//message(kalendarz());
//alert(kalendarz());


function ExportHML()
{
var selectedEntries = selection();

if (selectedEntries.length == 0) {
    alert('Nie wybrano żadnych rekordów.');
} else {
    var html = '<html><head><title>Rekordy</title>';
    html += '<style>table {border-collapse: collapse; width: 100%;} th, td {border: 1px solid black; padding: 5px; text-align: left;}</style>';
    html += '</head><body>';
    html += '<h1>Rekordy</h1>';
    html += '<table>';
    
    html += '<tr>';
    var fields = lib().fields();
    for (var i in fields) {
        html += '<th>' + fields[i].name + '</th>';
    }
    html += '</tr>';
    
    for (var j in selectedEntries) {
        var entry = selectedEntries[j];
        html += '<tr>';
        for (var i in fields) {
            var field = fields[i];
            var value = entry.field(field.name);
            html += '<td>' + value + '</td>';
        }
        html += '</tr>';
    }
    
    html += '</table></body></html>';
    
    var filePath = file().createTempFile('rekordy.html');
    file().write(filePath, html);
    
    shareFile(filePath, 'text/html');
}
  
}
