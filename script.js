document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        rue: document.getElementById('rue').value,
        codePostal: document.getElementById('codePostal').value,
        ville: document.getElementById('ville').value,
        chauffageActuel: document.getElementById('chauffageActuel').value,
        surface: document.getElementById('surface').value,
        typeLogement: document.getElementById('typeLogement').value,
        date: new Date().toLocaleString('fr-FR')
    };

    // Afficher le message de succès
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('errorMessage').classList.add('hidden');

    // Log des données (pour vérification)
    console.log('Données du lead:', formData);

    // Réinitialiser le formulaire
    document.getElementById('leadForm').reset();

    // Masquer le message après 5 secondes
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
    }, 5000);
});