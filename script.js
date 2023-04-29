document.addEventListener("DOMContentLoaded", function() {
    // espera 2 segundos e mostra o botão
    setTimeout(function() {
      var overlay = document.getElementById("overlay");
      var buttonContainer = document.getElementById("button-container");
      overlay.style.display = "block";
      buttonContainer.style.display = "block";
    }, 2000);
  
    // adiciona evento de clique ao botão
    var discountButton = document.getElementById("discount-button");
    discountButton.addEventListener("click", function() {
      var discountMessage = document.getElementById("discount-message");
      var discountButton = document.getElementById("discount-button");
      discountButton.style.backgroundColor = "#ed155a";
      discountButton.innerHTML = "Checking availability...";
      // espera 1 segundo e mostra a mensagem de sucesso
      setTimeout(function() {
        discountButton.style.backgroundColor = "green";
        discountButton.innerHTML = "Successfully applied! &#128525";
        // redireciona para outra página
        window.location.href = "https://www.digistore24.com/redir/431152/promo_applied/";
      }, 2000);
    });
  });
  
  