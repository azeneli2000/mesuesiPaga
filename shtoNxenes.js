const form = document.querySelector('#shtoNxenes');
const mesuesiList = document.querySelector('#nxenesiList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //shton nje dokument te ri
   //const  docRef= db.collection('mesuesit').doc('gjeneralitete').collection('lendet').doc('AIHehMQlEPXGtfy71R36').collection('klasat');
   var emri = document.getElementById("emri");
   var mbiemri = document.getElementById("mbiemri");
   var vjetersia = document.getElementById("atesia");
   var klasa = document.getElementById("klasa");
   var indeksi = document.getElementById("indeksi");
   var vitishkollor = document.getElementById("vitishkollor");
   
   const  docRef= db.collection('Nxenesit');
   docRef.add({
        Emri:form.emri.value,
        Mbiemri:form.mbiemri.value,
        Vitishkollor : form.vitishkollor.options[vitishkollor.selectedIndex].value,
        Klasa:form.klasa.options[klasa.selectedIndex].value,
        Indeksi : form.indeksi.options[indeksi.selectedIndex].value,
        Cmimi: 0,
        Cmimitransporti : 0,
        Kesti : 0,
        Ulje : [],
        Prenotimi : 0,
        Pagesatransporti : 0,
        Pagesauniforma : 0,
        Pagesalibra : 0,
        Pagesaeskursione : [{Emri : ""},{Paguar :""}],
        Paguar : 0
       
         
    });
    form.emri.value = '';
    form.mbiemri.value = '';
    form.vjetersia.value = '';
    form.kategoria.value = '';
});
//visualizon mesuesit
function renderCafe(doc){
    let li = document.createElement('li');
    let emri = document.createElement('span');
    emri.setAttribute("id", "e");
   // let mbiemri = document.createElement('span');
    let vjetersia = document.createElement('span');
    vjetersia.setAttribute("id", "v");
    let kategoria = document.createElement('span');
    kategoria.setAttribute("id", "k");
    let paga = document.createElement('span');
    kategoria.setAttribute("id", "p");

    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    li.id=doc.id;
    li.className = "grida";
    emri.textContent =  doc.data().Emri + '      ' + doc.data().Mbiemri;
   // mbiemri.textContent = doc.data().Mbiemri;
    vjetersia.textContent = 'Vjetersia : '  + doc.data().Vjetersia + '   ' + 'vite';
    kategoria.textContent = 'Kategoria : ' + doc.data().Kategoria;
    paga.textContent = 'Paga : ' + doc.data().Paga;

    cross.textContent = 'x';

    li.appendChild(emri);
   
    //li.appendChild(mbiemri);
    li.appendChild(vjetersia);
    li.appendChild(kategoria);
    li.appendChild(paga);
    li.appendChild(cross);

    mesuesiList.appendChild(li);

    //deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Mesuesit').doc(id).delete();
        //fshiLendet( db.collection('Mesuesit').doc(id));
    });
 }

function fshiLendet(idMesuesi)
{
    var docRefLendet = db.collection('Lendet');
    
    var queryRef1 = docRefLendet.where('mesuesiId', '==', idMesuesi);
    
    queryRef1.get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                
                
           var id =   doc.id;
                console.log(id);
                db.collection('Lendet').doc(id).delete(); 
            });
        });

}
 // real-time listener
db.collection('Nxenesit').orderBy('Emri').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => { 
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);
        } else if (change.type == 'removed'){
            // let li = mesuesiList.querySelector('[data-id=' + change.doc.id + ']');
            // mesuesiList.removeChild(li);
            $('#'+ change.doc.id).remove();
            fshiLendet(change.doc.id);
        }else if (change.type == 'modified')
        {
            console.log('u modifikua');
            let lim = mesuesiList.querySelector('[data-id=' + change.doc.id + ']');
            console.log ();
            lim.childNodes[0].textContent=change.doc.data().Emri + '  ' + change.doc.data().Mbiemri ;
            lim.childNodes[1].textContent='Vjetersia : '+change.doc.data().Vjetersia   ;
            lim.childNodes[2].textContent='Kategoria : '+change.doc.data().Kategoria  ;
            lim.childNodes[3].textContent='Paga : '+ change.doc.data().Paga  ;

            
        }
    });
});