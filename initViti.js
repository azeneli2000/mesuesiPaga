
//inicializon klasat
    let viti : "2017-2018";
    db.collection('Nxenesit').doc(viti).set({});
   
   
    db.collection('Nxenesit').doc(viti).collection("klasa1").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa2").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa3").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa4").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa5").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa6").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa7").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa8").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa9").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa10").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa11").doc().set ({});
    db.collection('Nxenesit').doc(viti).collection("klasa12").doc().set ({});


    db.collection('Nxenesit').doc(viti).collection("klasa1").doc().delete();

//inicializon cmimet per   vitin shkollor
db.collection('Nxenesit').doc('2018-2019').collection('Constants').doc('Cmimet').set({

    CmimiKlasa1 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa2 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa3 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa4 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa5 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa6 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa7 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa8 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa9 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa10 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa11 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    },
    CmimiKlasa12 :{
      Shkolla : "",
      Transporti : "",
      Uniforma : "",
      Librat : ""
    }
});