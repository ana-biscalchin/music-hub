document.querySelector('.submit-form').addEventListener("click", sendOffer)

function sendOffer() {
  if (propose.tx_nome.value == "" || propose.tx_nome.value.length < 8) {
    alert("Preencha campo NOME corretamente!");
    propose.tx_nome.focus();
    return false;
  }

  if (propose.tx_email.value == "" || propose.tx_email.value.indexOf('@') == -1 || propose.tx_email.value.indexOf('.') == -1) {
    alert("Preencha campo E-MAIL corretamente!");
    propose.tx_email.focus();
    return false;
  }

  if (propose.tx_mensagem.value == "") {
    alert("Preencha o campo MENSAGEM!");
    propose.tx_mensagem.focus();
    return false;
  }

  if (propose.tx_mensagem.value.length < 10) {
    alert("É necessario preencher o campo MENSAGEM com mais de 10 caracteres!");
    propose.tx_mensagem.focus();
    return false;
  }

  return true;
};
