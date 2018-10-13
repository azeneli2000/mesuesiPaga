
let cmimiUlur;
let kestiUlur;
let pnotim;
document.getElementById("uljepersonale").addEventListener('keydown',function(e)
{
  if (e.keyCode === 13)
  {
    let uljepersonale = document.getElementById("uljepersonale").value;
    let cmimiU = document.getElementById("cmimi");
    let kestiU = document.getElementById("kesti");
    cmimiU.innerHTML = cmimiUlur-parseFloat(uljepersonale);
    kestiU.innerHTML =   Math.round((parseFloat( cmimiU.innerHTML)-pnotim)/10*100)/100;

  }
});



document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelector('select');
  
  elems.onchange = selectThem;
  var instances = M.FormSelect.init(elems);
  var selectedOne = instances.getSelectedValues();
  llogaritCmimin(selectedOne);
  
  
  console.log(document.querySelectorAll("select>option").text);
  
  
  function selectThem() {
      var selectedOne = instances.getSelectedValues();
      llogaritCmimin(selectedOne);
      console.log(selectedOne);
  }
});




var nxenesiEmri = document.getElementById('emri');
var klasa = document.getElementById('klasa');
var cmimi = document.getElementById('cmimi');
var kesti  = document.getElementById("kesti");
var n =  getNxenesi(2);
nxenesiEmri.innerHTML ='Emri : '+n.emri + ' ' + n.mbiemri ;
klasa.innerHTML ='Klasa : '+n.klasa + ' ' + n.indeksi ;
cmimi.innerHTML ='Cmimi : '+n.cmimi;

let cm = n.cmimi;
let prenotimi =parseFloat( n.Prenotim);
pnotim = prenotimi;
let k =  Math.round( parseFloat( n.cmimi)/12*100)/100;
kesti.innerHTML ='Kesti : ' + k;
let selectedOptions = n.skonto;


$.each(selectedOptions, function(i,e){
  $("#mySelect option[value='" + e + "']").prop("selected", true);
});


//gjen nxenesin 
function getNxenesi(nxenesiID)
{
  let nxenesiInfo = {
   emri : "Andi",
   mbiemri :"Zeneli",
   klasa : "1",
   indeksi :  "A",
   cmimi :  "1000",
   skonto : ["1","2"],
   Prenotim :"100"

  }
  return nxenesiInfo;
}

function llogaritCmimin(uljet)
{
  var cmimi1 =  cm;
 var cmimiTmp = cm;
  for (var i=0; i<uljet.length;i++)
  {
    
  cmimiTmp = Math.round( parseFloat(cmimiTmp*100)/100) - uljet[i]/100*Math.round( parseFloat(cmimiTmp*100)/100); //* Math.round( parseFloat(cmimi1*100)/100)

  }
  if(uljet.length>0)
  {
  document.getElementById('cmimi').innerHTML= 'Cmimi : ' + cmimiTmp;
  document.getElementById('kesti').innerHTML = 'Kesti : ' + Math.round((cmimiTmp-prenotimi)/12*100)/100;
  cmimiUlur = cmimiTmp;
  kestiUlur = Math.round((cmimiTmp-prenotimi)/10*100)/100;

  }
  else
  document.getElementById('cmimi').innerHTML= 'Cmimi : ' + cm;
}




