$('form').submit(function(e) {
  // Validar checkbox
  if ($('#flexCheckDefault').prop('checked')==false) {
    e.preventDefault();
    alert('Parece que nos faltó algo ...');
    return;
  }
  // Validar input text
  if ($('#email').val() === '') {
    e.preventDefault();
    alert('Parece que nos faltó algo ...');
    return;
  }
  //Mensaje final
  alert("¡Felicitaciones! Pronto escucharás de nosotros.")
});