const form = document.querySelector('#shtoNxenes');
const mesuesiList = document.querySelector('#nxenesiList');
var klasa = "klasa" + document.getElementById("klasa").value; 
var vitishkollor = document.getElementById("vitishkollor").value ;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    klasa = "klasa" + document.getElementById("klasa").value;
    vitishkollor = document.getElementById("vitishkollor").value;   
   var emri = document.getElementById("emri");
   var mbiemri = document.getElementById("mbiemri");  
   
   
   const  docRef= db.collection('Nxenesit').doc(vitishkollor).collection(klasa);
   docRef.add({
        Emri: emri.value,
        Mbiemri: mbiemri.value,
        Cmimi: getCmimi(document.getElementById("klasa").value),
        Cmimitransporti : cmimiTransporti,
        Kesti : 0,
        Ulje : [],
        Prenotimi : 0,
        Pagesatransporti : 0,
        Pagesauniforma : 0,
        Pagesalibra : 0,
        Pagesaeskursione : [{Emri : ""},{Paguar :""}],
        Paguar : 0
       
         
    }).then(docRef =>{
        db.collection('Nxenesit').doc(vitishkollor).collection(klasa).doc(docRef.id).onSnapshot(doc =>{ 
        if(doc.exists)
        {
        renderCafe(doc);
        }
        });
    // form.emri.value = '';
    // form.mbiemri.value = '';
    // form.vjetersia.value = '';
    // form.kategoria.value = '';
});
});
//visualizon mesuesit
function renderCafe(doc){
    let li = document.createElement('li');
    let emri = document.createElement('span');
    emri.setAttribute("id", "e");
    let klNxenenesi = document.createElement('span');
   

    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    li.id=doc.id;
    li.className = "grida";
    emri.textContent =  doc.data().Emri + '      ' + doc.data().Mbiemri;
 

    cross.textContent = 'x';

    li.appendChild(emri);
   
   
    li.appendChild(cross);

    nxenesiList.appendChild(li);

    //deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Nxenesit').doc(vitishkollor).collection(klasa).doc(id).delete();
        $('#'+ id).remove();
    });
 }


$("#klasa").change(function() {

    klasa =  "klasa" + $('select#klasa').val();  
    vitishkollor = document.getElementById("vitishkollor").value ;
    document.querySelectorAll('.grida').forEach(function(a){
        a.remove()
        });
      queryRef1 = db.collection('Nxenesit').doc(vitishkollor).collection(klasa)  
        queryRef1.get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if(doc.exists)
                {
                renderCafe(doc);                                         

                }
            });
        });
});
 // real-time listener
//  db.collection('Nxenesit').doc(vitishkollor).collection(klasa).onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => { 
//         console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderCafe(change.doc);
//         } else if (change.type == 'removed'){
//             // let li = mesuesiList.querySelector('[data-id=' + change.doc.id + ']');
//             // mesuesiList.removeChild(li);
//             $('#'+ change.doc.id).remove();
//            // fshiLendet(change.doc.id);
//         }else if (change.type == 'modified')
//         {
//             console.log('u modifikua');
//             let lim = mesuesiList.querySelector('[data-id=' + change.doc.id + ']');
//             console.log ();
//             lim.childNodes[0].textContent=change.doc.data().Emri + '  ' + change.doc.data().Mbiemri ;
//             lim.childNodes[1].textContent='Vjetersia : '+change.doc.data().Vjetersia   ;
//             lim.childNodes[2].textContent='Kategoria : '+change.doc.data().Kategoria  ;
//             lim.childNodes[3].textContent='Paga : '+ change.doc.data().Paga  ;

            
//         }
//     });
// });