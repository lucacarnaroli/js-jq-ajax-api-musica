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

});


function creationData(cd) {
  for (var i = 0; i < cd.length; i++) {
    var disco = cd[i];
    console.log(disco);
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(disco);

    $('.cds-container').append(html);
  }
}
