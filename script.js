setTimeout(() => {
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
      // Verwijder alleen de blink-caret animatie
      typewriter.style.animation = 'typing 3.5s steps(50, end)';
    }
  }, 15000);
  

// ADDED, Positive feedback after submit ------------------------------------------
  document.getElementById('titelnewgoal').addEventListener('submit', function(event) {
    event.preventDefault();  // Stop de standaard formulierverwerking

    // Simuleer een succesvolle form submission door de .added class zichtbaar te maken
    document.querySelector('.added').style.display = 'block';

    // Simuleer het indienen van het formulier met een vertraging
    setTimeout(() => {
        event.target.submit(); // Nu het formulier echt indienen
    }, 500); // Wacht 500ms voordat het formulier wordt ingediend
});
