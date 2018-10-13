
document.getElementById("ruaj").addEventListener('click',function(e)
{
    let idNxenesi = document.getElementById('selectNxenesi').value;
    let chipInstance = M.Chips.getInstance($(".chips"));
    console.log(chipInstance.chipsData);
    console.log(idNxenesi);
    db.collection('Nxenesit').doc(idNxenesi).update({
        Cmimi : cm,
        Ulje : chipInstance.chipsData
    });
});


document.getElementById("KlasaNxenesi").addEventListener('keydown',function(e)
{
  if (e.keyCode === 13)
  {
    getKlasa();
 document.getElementById("KlasaNxenesi").blur();
 document.getElementById("selectNxenesi").focus();

  }
});

document.getElementById("uljevlere").addEventListener('keydown',function(e)
{
  if (e.keyCode === 13)
  {
   
      cm=cm- Math.round(parseFloat( document.getElementById("uljevlere").value)*100)/100;
      k=(cm-prenotimi)/10; 
      document.getElementById('kesti').innerHTML ='KESTI : '+ Math.round(k*100)/100;

      document.getElementById("cmimi").innerHTML ='CMIMI :  ' + cm ;
  

      document.getElementById("uljevlere") = "";
  }     
});


document.getElementById("uljevlere").addEventListener('keyup',function(e)
{
  let cm1= cm;
   if(this.value!="")
   {
      cm1=cm1- Math.round(parseFloat( document.getElementById("uljevlere").value)*100)/100;
      k=(cm1-prenotimi)/10; 
      document.getElementById('kesti').innerHTML ='KESTI : '+ Math.round(k*100)/100;

      document.getElementById("cmimi").innerHTML ='CMIMI :  ' + cm1 ;
   
   }
   else
   {
    k=(cm-prenotimi)/10; 
    document.getElementById('kesti').innerHTML ='KESTI : '+ Math.round(k*100)/100;

    document.getElementById("cmimi").innerHTML ='CMIMI :  ' + cm ;
   }

  
});

function chipDeleted(e, data) {
    console.log("Chip was deleted with text: " + data.childNodes[0].textContent);
    var cmimi = document.getElementById('cmimi');    
    var perqindja = data.childNodes[0].textContent.slice(-2);
    cmimiNr=  Math.round(parseFloat(cm)/((100-perqindja)/100)*100)/100;
    cmimi.innerHTML = cmimiNr;
    cm=cmimi.innerHTML;
    cmimi.innerHTML ='CMIMI :  ' + cmimi.innerHTML;
    k=(cmimiNr-prenotimi)/10; 
    document.getElementById('kesti').innerHTML ='KESTI : '+ Math.round(k*100)/100;
}

function chipAdded(e, data) {
    console.log("Chip was added with text: " + data.childNodes[0].textContent);
    var cmimi = document.getElementById('cmimi');    
    var perqindja = data.childNodes[0].textContent.slice(-2);
    cmimiNr = Math.round(parseFloat(cm)*100)/100 -  Math.round(parseFloat(perqindja)*100)/100* Math.round(parseFloat(cm)/100*100)/100;
    cmimi.innerHTML = cmimiNr;
    cm=cmimi.innerHTML;
    cmimi.innerHTML ='CMIMI :  ' + cmimi.innerHTML;
    k=(cmimiNr-prenotimi)/10; 

    document.getElementById('kesti').innerHTML ='KESTI : '+  Math.round(k*100)/100;
}

function getKlasa()
{
    
    let klasaNxenesi = document.getElementById('KlasaNxenesi').value;
    var select = document.getElementById("selectNxenesi");
    var dropdown=$('#selectNxenesi');
    dropdown.empty();
    var length = select.options.length;
   //pastron combon
//     for (i = 0; i < length; i++) {
//      select.options[i].remove ;
// }
//gjen nxenesit e nje klase
    db.collection('Nxenesit').where('Klasa','==',klasaNxenesi).get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                var z = document.createElement("option");
                z.setAttribute("value", doc.id);
                var t = document.createTextNode(doc.data().Emri + '   '+ doc.data().Mbiemri );
                z.appendChild(t);
                document.getElementById("selectNxenesi").appendChild(z);
            });
            var elems = document.querySelectorAll('select#selectNxenesi');
            var instances = M.FormSelect.init(elems);
        });
       
}


$("#selectNxenesi").change(function() {

    console.log($('select#selectNxenesi').val());
   // document.getElementById("hideen").value = $('select#selectNxenesi').val();   
    let nxenesiID =  $('select#selectNxenesi').val();
    db.collection('Nxenesit').doc(nxenesiID).get().then(doc=>{
        document.getElementById('emri').innerHTML = 'EMRI : ' + doc.data().Emri + ' '+doc.data().Mbiemri;
        document.getElementById('klasa').innerHTML = 'KLASA : ' + doc.data().Klasa;
        document.getElementById('cmimi').innerHTML = 'CMIMI : ' + doc.data().Cmimi;
        inicializoChips(doc.data().Ulje)
      
        cm=doc.data().Cmimi;
       // var kesti  = document.getElementById("kesti");

        k=(cm-prenotimi)/10; 
        document.getElementById('kesti').innerHTML = 'KESTI : '+ Math.round(k*100)/100; 
        document.getElementById("divHiden").style.display = "block";
    }
        );
});




function inicializoChips(skonto)
{
    var myData = [] ;      
      for(var i=0;i<skonto.length;i++)
      {
        var el = {tag : skonto[i]};
        myData.push(el);        
      }
      console.log(skonto);
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, {
        data:skonto,
        autocompleteOptions: {
       data : {
         'Andi' : null,
         'Aferdita' : null,
         'Stela' : null
              },
            limit: Infinity,
            minLength: 1
        },
        placeholder: "Ska Ulje...",
        onChipDelete: function (e, data) { chipDeleted(e, data) },
        onChipAdd: function (e, data) { chipAdded(e, data) }
    });


}

let cm;
let k;

