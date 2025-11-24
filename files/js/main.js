// Main site JS for Designated Records
// Currently lightweight; you can expand this as needed.

// Example: simple client-side filter for releases by title/artist
(function () {
  var searchInput = document.getElementById("releaseSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    var term = searchInput.value.toLowerCase();
    var cards = document.querySelectorAll(".dr-section .card");

    cards.forEach(function (card) {
      var text = card.innerText.toLowerCase();
      card.parentElement.style.display = text.indexOf(term) !== -1 ? "" : "none";
    });
  });
})();