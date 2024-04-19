document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const thankYouContainer = document.getElementById('thankYouContainer');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le comportement de soumission du formulaire par défaut

        // Vos conditions ici, par exemple, vérifiez si le nom du titulaire de la carte et le numéro de carte sont remplis
        const cardholderName = document.getElementById('cardholder-name').value.trim();
        const cardNumber = document.getElementById('input1').value.trim();

        if (cardholderName !== '' && cardNumber !== '') {
            form.style.display = 'none'; // Masque le formulaire
            thankYouContainer.style.opacity = '1'; // Affiche le message de remerciement
        } else {
            // Si les conditions ne sont pas remplies, vous pouvez les gérer ici (facultatif)
        }
    });
});
