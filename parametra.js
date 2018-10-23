const form = document.querySelector('#shtoNxenes');
const mesuesiList = document.querySelector('#nxenesiList');

var vitishkollor = document.getElementById("vitishkollor").value ;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    vitishkollor = document.getElementById("vitishkollor").value;   

   const  docRef= db.collection('Nxenesit').doc(vitishkollor).collection('Constants').doc('Cmimet');
   docRef.update({
        CmimiKlasa1 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa1").value,
        Transporti :  document.getElementById("transportiKlasa1").value,
        Uniforma :   document.getElementById("uniformaKlasa1").value , 
        Librat :  document.getElementById("libratKlasa1").value
        },
        CmimiKlasa2 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa2").value,
        Transporti :  document.getElementById("transportiKlasa2").value,
        Uniforma :   document.getElementById("uniformaKlasa2").value , 
        Librat :  document.getElementById("libratKlasa2").value
        },
        CmimiKlasa3 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa3").value,
        Transporti :  document.getElementById("transportiKlasa3").value,
        Uniforma :   document.getElementById("uniformaKlasa3").value , 
        Librat :  document.getElementById("libratKlasa3").value
        },
        CmimiKlasa4 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa4").value,
        Transporti :  document.getElementById("transportiKlasa4").value,
        Uniforma :   document.getElementById("uniformaKlasa4").value , 
        Librat :  document.getElementById("libratKlasa4").value
        },
        CmimiKlasa5 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa5").value,
        Transporti :  document.getElementById("transportiKlasa5").value,
        Uniforma :   document.getElementById("uniformaKlasa5").value , 
        Librat :  document.getElementById("libratKlasa5").value
        },
        CmimiKlasa6 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa6").value,
        Transporti :  document.getElementById("transportiKlasa6").value,
        Uniforma :   document.getElementById("uniformaKlasa6").value , 
        Librat :  document.getElementById("libratKlasa6").value
        },
        CmimiKlasa7 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa7").value,
        Transporti :  document.getElementById("transportiKlasa7").value,
        Uniforma :   document.getElementById("uniformaKlasa7").value , 
        Librat :  document.getElementById("libratKlasa7").value
        },
        CmimiKlasa8 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa8").value,
        Transporti :  document.getElementById("transportiKlasa8").value,
        Uniforma :   document.getElementById("uniformaKlasa8").value , 
        Librat :  document.getElementById("libratKlasa8").value
        },
        CmimiKlasa9 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa9").value,
        Transporti :  document.getElementById("transportiKlasa9").value,
        Uniforma :   document.getElementById("uniformaKlasa9").value , 
        Librat :  document.getElementById("libratKlasa9").value
        },
        CmimiKlasa10 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa10").value,
        Transporti :  document.getElementById("transportiKlasa10").value,
        Uniforma :   document.getElementById("uniformaKlasa10").value , 
        Librat :  document.getElementById("libratKlasa10").value
        },
        CmimiKlasa11 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa11").value,
        Transporti :  document.getElementById("transportiKlasa11").value,
        Uniforma :   document.getElementById("uniformaKlasa11").value , 
        Librat :  document.getElementById("libratKlasa11").value
        },
        CmimiKlasa12 :
        { 
        Shkolla :    document.getElementById("shkollaKlasa12").value,
        Transporti :  document.getElementById("transportiKlasa12").value,
        Uniforma :   document.getElementById("uniformaKlasa12").value , 
        Librat :  document.getElementById("libratKlasa12").value
        }
    });
         

});

function getConstants()
{
    db.collection('Nxenesit').doc('2018-2019').collection('Constants').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            if(doc.exists)
            {
            document.getElementById("libratKlasa1").value = doc.data().CmimiKlasa1.Librat;                                         
            document.getElementById("uniformaKlasa1").value = doc.data().CmimiKlasa1.Uniforma;                                         
            document.getElementById("transportiKlasa1").value = doc.data().CmimiKlasa1.Transporti;                                         
            document.getElementById("shkollaKlasa1").value = doc.data().CmimiKlasa1.Shkolla;    

            document.getElementById("libratKlasa2").value = doc.data().CmimiKlasa2.Librat;                                         
            document.getElementById("uniformaKlasa2").value = doc.data().CmimiKlasa2.Uniforma;                                         
            document.getElementById("transportiKlasa2").value = doc.data().CmimiKlasa2.Transporti;                                         
            document.getElementById("shkollaKlasa2").value = doc.data().CmimiKlasa2.Shkolla;      

            document.getElementById("libratKlasa3").value = doc.data().CmimiKlasa3.Librat;                                         
            document.getElementById("uniformaKlasa3").value = doc.data().CmimiKlasa3.Uniforma;                                         
            document.getElementById("transportiKlasa3").value = doc.data().CmimiKlasa3.Transporti;                                         
            document.getElementById("shkollaKlasa3").value = doc.data().CmimiKlasa3.Shkolla;    

            document.getElementById("libratKlasa4").value = doc.data().CmimiKlasa4.Librat;                                         
            document.getElementById("uniformaKlasa4").value = doc.data().CmimiKlasa4.Uniforma;                                         
            document.getElementById("transportiKlasa4").value = doc.data().CmimiKlasa4.Transporti;                                         
            document.getElementById("shkollaKlasa4").value = doc.data().CmimiKlasa4.Shkolla;     

            document.getElementById("libratKlasa5").value = doc.data().CmimiKlasa5.Librat;                                         
            document.getElementById("uniformaKlasa5").value = doc.data().CmimiKlasa5.Uniforma;                                         
            document.getElementById("transportiKlasa5").value = doc.data().CmimiKlasa5.Transporti;                                         
            document.getElementById("shkollaKlasa5").value = doc.data().CmimiKlasa5.Shkolla;       

            document.getElementById("libratKlasa6").value = doc.data().CmimiKlasa6.Librat;                                         
            document.getElementById("uniformaKlasa6").value = doc.data().CmimiKlasa6.Uniforma;                                         
            document.getElementById("transportiKlasa6").value = doc.data().CmimiKlasa6.Transporti;                                         
            document.getElementById("shkollaKlasa6").value = doc.data().CmimiKlasa6.Shkolla;      

            document.getElementById("libratKlasa7").value = doc.data().CmimiKlasa7.Librat;                                         
            document.getElementById("uniformaKlasa7").value = doc.data().CmimiKlasa7.Uniforma;                                         
            document.getElementById("transportiKlasa7").value = doc.data().CmimiKlasa7.Transporti;                                         
            document.getElementById("shkollaKlasa7").value = doc.data().CmimiKlasa7.Shkolla;         

            document.getElementById("libratKlasa8").value = doc.data().CmimiKlasa8.Librat;                                         
            document.getElementById("uniformaKlasa8").value = doc.data().CmimiKlasa8.Uniforma;                                         
            document.getElementById("transportiKlasa8").value = doc.data().CmimiKlasa8.Transporti;                                         
            document.getElementById("shkollaKlasa8").value = doc.data().CmimiKlasa8.Shkolla;      

            document.getElementById("libratKlasa9").value = doc.data().CmimiKlasa9.Librat;                                         
            document.getElementById("uniformaKlasa9").value = doc.data().CmimiKlasa9.Uniforma;                                         
            document.getElementById("transportiKlasa9").value = doc.data().CmimiKlasa9.Transporti;                                         
            document.getElementById("shkollaKlasa9").value = doc.data().CmimiKlasa9.Shkolla;     

            document.getElementById("libratKlasa10").value = doc.data().CmimiKlasa10.Librat;                                         
            document.getElementById("uniformaKlasa10").value = doc.data().CmimiKlasa10.Uniforma;                                         
            document.getElementById("transportiKlasa10").value = doc.data().CmimiKlasa10.Transporti;                                         
            document.getElementById("shkollaKlasa10").value = doc.data().CmimiKlasa10.Shkolla;     
                                               
            document.getElementById("libratKlasa11").value = doc.data().CmimiKlasa11.Librat;                                         
            document.getElementById("uniformaKlasa11").value = doc.data().CmimiKlasa11.Uniforma;                                         
            document.getElementById("transportiKlasa11").value = doc.data().CmimiKlasa11.Transporti;                                         
            document.getElementById("shkollaKlasa11").value = doc.data().CmimiKlasa11.Shkolla;         

            document.getElementById("libratKlasa12").value = doc.data().CmimiKlasa12.Librat;                                         
            document.getElementById("uniformaKlasa12").value = doc.data().CmimiKlasa12.Uniforma;                                         
            document.getElementById("transportiKlasa12").value = doc.data().CmimiKlasa12.Transporti;                                         
            document.getElementById("shkollaKlasa12").value = doc.data().CmimiKlasa12.Shkolla;                                         

            }
        });
    });

}
getConstants();


