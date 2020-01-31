$(document).ready(function() {
  $.ajax(
    {
      'url': "http://www.boolean.careers/api/random/boolean", 'method': "GET",
      'success': function (data, stato) {

      },
      'error': function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    });

});
