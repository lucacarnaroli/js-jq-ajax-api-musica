$(document).ready(function() {
  $.ajax(
    {
      'url': "https://flynn.boolean.careers/exercises/api/array/music",
      'method': "GET",
      'success': function (data) {
        creationData(data.response);

      },
      'error': function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    });
    $(document).on('change','#genere-musicale', function() {
      // fare variabile per prendere valore
      var selected= $(this).val();
      // ciclo per selezionare i cd
      for (var i = 0; i < $('.cd').length; i++) {
        // se il genere è uguale al valore selezionato mostrameli
        if ($('.genre').eq(i).text() == selected) {
           $('.cd').eq(i).show();
      } else {
           $('.cd').eq(i).hide();
      }
     }
    }
  );
});

function creationData(cd) {
  for (var i = 0; i < cd.length; i++) {
    var disco = cd[i];
    // console.log(disco);
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(disco);

    $('.cds-container').append(html);
  }
}

// .CHANGE() *
// L'evento si verifica quando viene modificato il valore di un elemento. Funziona solo su campi modulo. Quando si verifica l'evento change, il metodo change () allega una funzione da eseguire. Nota: questo evento è limitato agli elementi <input>, <textarea> e <select>.
// .EQ() *
// è un metodo che serve ad individuare elementi specifici all’interno di un set di elementi. All’interno del metodo eq() si specifica infatti un indice che indica la posizione dell’elemento che vogliamo selezionare. parte sempre da 0 (no 1);
