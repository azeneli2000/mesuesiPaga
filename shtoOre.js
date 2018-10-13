const form = document.querySelector('#shtoLende');
const lendaList = document.querySelector('#lendaList');
const form1 =  document.querySelector('#kerkoMesues');
mbushCombo();
//eventListner per krijimin e nje recordi te ri
form.addEventListener('submit', (e) => {
    e.preventDefault();    
   var lenda = document.getElementById("selectLenda");
   var klasa = document.getElementById("selectKlasa");
   var nrNxenes = document.getElementById("nrNxenesiKlase");
   var oreJave = document.getElementById("orejave");
   var javeTot = document.getElementById("javetot");
   var shteseInst = document.getElementById("shteseinst");
   var paralele = document.getElementById("paralele");
   var perqindjeLenda = document.getElementById("perqindjeLenda");
   
   const  docRef= db.collection('Lendet');
   if( document.getElementById("hideen").value != '')
      {
          let pagaEshtuar = llogaritPagesen(document.getElementById("hideen").value);
   docRef.add({
         mesuesiId: document.getElementById("hideen").value,
         Emri:lenda.options[lenda.selectedIndex].value,
         Klasa : klasa.options[klasa.selectedIndex].value,
         NrNxenesish : nrNxenes.value,
         Ore : oreJave.value,
         Javetot : javeTot.value,
         Shtese : shteseInst.value,
         Paga : pagaEshtuar


    })
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with ID: ", docRef.Emri);
        var docRefLendet = db.collection('Lendet');

        // //Krijon nje query per collection
          var queryRef1 = db.collection('Lendet').doc(docRef.id).onSnapshot(doc =>{    
            console.log(doc.data())
            if(doc.exists)
            {
            renderLenda(doc);
           document.getElementById("pagaDinamike").value  = Math.round( parseFloat( document.getElementById("pagaDinamike").value)*100)/100 + pagaEshtuar  ;
           document.getElementById("paga").textContent = 'Paga : ' + document.getElementById("pagaDinamike").value;
        //    let pagaVjeter =  
           db.collection('Mesuesit').doc(doc.data().mesuesiId).update({
                    Paga:parseFloat(document.getElementById("pagaDinamike").value)
                });
            }
          });        
        
        
});
   }
   else 
   {
       alert('Zgjidhni nje mesues !');
   }
lenda.selectedIndex = 0;
// klasa.selectedIndex = 0;
nrNxenes.value = '';
oreJave.value = '';
javeTot.value = '';
shteseInst.value = '';
perqindjeLenda.value = '';
paralele.checked  = false;

});
//evntListner per kerkimin e recordeve te nje meuesi
form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.querySelectorAll('.grida').forEach(function(a){
        a.remove()
        });
    gjejLendet();  
    

});




//krjon nje Li te 
function renderLenda(doc){
   
    let li = document.createElement('li');
    //let emri = document.createElement('span');
   
    let lenda = document.createElement('span');
    let klasa = document.createElement('span');

    let ore = document.createElement('span');

    let paga = document.createElement('span');
    let cross = document.createElement('div');
    cross.className = "fshi";
    li.setAttribute('data-id', doc.id);
    li.id=doc.id;
    li.className = "grida";
  
    lenda.textContent =  doc.data().Emri;
   klasa.textContent = 'Klasa : ' + doc.data().Klasa;
    ore.textContent = 'Ore : '  + doc.data().Ore;
    paga.textContent = 'Paga : ' + doc.data().Paga ;
    cross.textContent = 'x';

    li.appendChild(lenda);

    //li.appendChild(mbiemri);
    li.appendChild(klasa);
    li.appendChild(ore);
    li.appendChild(paga);

    li.appendChild(cross);

    lendaList.appendChild(li);
    //deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');        
        db.collection('Lendet').doc(id).delete();
       let li = document.getElementById(id);
       let p = li.childNodes[3].textContent
    //    let li = lendaList.querySelector('[data-id=' + id + ']');
    //     lendaList.removeChild(li);

    document.getElementById("pagaDinamike").value = parseFloat( document.getElementById("pagaDinamike").value) - parseFloat(p.slice(7));
    document.getElementById("paga").textContent = 'Paga : ' + document.getElementById("pagaDinamike").value;
    let mesuesiId = document.getElementById("hideen").value; 
    db.collection('Mesuesit').doc(doc.data().mesuesiId).update({
             Paga:parseFloat(document.getElementById("pagaDinamike").value)
         });
    $('#'+ id).remove();
    });
  
    
 }
//mbush ddl e mesuesve 
 function mbushCombo ()
 {
//mbush combo te mesuesve
db.collection('Mesuesit').get().then(snapshot =>  {
    
    snapshot.docs.forEach(doc => {
  
var z = document.createElement("option");
z.setAttribute("value", doc.id);
var t = document.createTextNode(doc.data().Emri + '   '+ doc.data().Mbiemri );
z.appendChild(t);
document.getElementById("selectMesuesi").appendChild(z);
 });

 
 //inicializon combo mesuesit
 var elems = document.querySelectorAll('select#selectMesuesi');
var instances = M.FormSelect.init(elems);
});

 }




$("#selectMesuesi").change(function() {

    console.log($('select#selectMesuesi').val());
    document.getElementById("hideen").value = $('select#selectMesuesi').val();   
    let mesuesiID =  document.getElementById("hideen").value;
    db.collection('Mesuesit').doc(mesuesiID).get().then(doc=>{
        document.getElementById('vjetersia').value = doc.data().Vjetersia;
        document.getElementById('kategoria').value  = doc.data().Kategoria;
         document.getElementById("pagaDinamike").value = doc.data().Paga;
         document.getElementById('paga').innerHTML  = 'Paga Tot : ' + doc.data().Paga;
        
        console.log (doc.data().Paga);
    }
        );
});
//gjen lendet perkatese per mesuesin zgjedhur
function gjejLendet()
{
    var docRefLendet = db.collection('Lendet');
    var mesuesiId = document.getElementById("hideen").value;
    var queryRef1 = docRefLendet.where('mesuesiId', '==', mesuesiId);
    
    queryRef1.get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if(doc.exists)
                {
                renderLenda(doc);
               // document.getElementById("pagaDinamike").innerHTML = doc.data().Paga;
                document.getElementById("paga").innerHTML ='Paga : ' + document.getElementById("pagaDinamike").value;
               
                

                }
            });
        });

       
       
       
}


function gjejBazen (lenda)
{
return 700;

}
function llogaritPagesen(mesuesiID)
{
let perqindjeLenda =parseInt(document.getElementById('perqindjeLenda').value);
let nrNxenesiKlase =parseInt (document.getElementById('nrNxenesiKlase').value);
let orejave =parseInt (document.getElementById('orejave').value);
let javetot = parseInt(document.getElementById('javetot').value);
let shteseinst = parseFloat(document.getElementById('shteseinst').value);
let paralele = document.getElementById('paralele');
//let perqKlasa = gjejPerqKlasa(document.getElementById('selectKlasa').value);
let baza = gjejBazen(document.getElementById("selectLenda").options[document.getElementById("selectLenda").selectedIndex].value);
let paraleleNr;
let cikliNr;
let klasa = parseInt(document.getElementById("selectKlasa").options[document.getElementById("selectKlasa").selectedIndex].value);

 
    let vjetersia = parseInt( document.getElementById('vjetersia').value);
    let kategoria = parseInt( document.getElementById('kategoria').value);
    console.log(vjetersia);

    //llogartija e pages 
    let pagadinamike =parseFloat (document.getElementById('pagaDinamike').value);
    if (paralele.checked==false)
    {
        paraleleNr = 1;
    }
    else
    paraleleNr = 0;


if (klasa == '1'|klasa == '2' | klasa == '3' |klasa == '4' | klasa == '5' | klasa == '0')
{
    cikliNr = 0;
}else if (klasa == '6'|klasa == '7' | klasa == '8' | klasa == '9' )
{
cikliNr = 10;
}else if(klasa == '10'|klasa == '11' | klasa == '12'  )
{
    cikliNr = 25;
}

    
    let pagaLenda = (perqindjeLenda + klasa + vjetersia*0.5 + (nrNxenesiKlase-16)*2.5 + paraleleNr*2 + kategoria*5 + shteseinst + cikliNr)*700/100 + gjejBazen(gjejBazen(document.getElementById('selectLenda').value))

    let pagaBrutoMujore = pagaLenda*orejave*javetot/12;
    return Math.round( pagaBrutoMujore*100)/100;
}




//real time
function realtime()
{
var docRefLendet = db.collection('Lendet');

//Krijon nje query per collection
var mesuesiId = document.getElementById("hideen").value;

var queryRef = docRefLendet.where('mesuesiId', '==', mesuesiId);

queryRef.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
   
     changes.forEach(change => {
        console.log(change.doc.data());
        
        if(change.type == 'added'){           
            renderLenda(change.doc);
        } else if (change.type == 'removed'){
            // let li = paga.querySelector('[data-id=' + change.doc.id + ']');
            // lendaList.removeChild(li);
            $('#'+ id).remove();
        }else if (change.type == 'modified')
        {
            console.log('u modifikua');
             let lim = lendaList.querySelector('[data-id=' + change.doc.id + ']');
             console.log ();
             lim.childNodes[0].textContent=change.doc.data().Emri  ;
             lim.childNodes[1].textContent='Klasa : '+change.doc.data().Klasa   ;
             lim.childNodes[2].textContent='Ore : '+change.doc.data().Ore  ;
             lim.childNodes[3].textContent='Paga : '+change.doc.data().Paga  ;


        }
    });
});
}
