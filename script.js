setTimeout(() => {
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
      // Verwijder alleen de blink-caret animatie
      typewriter.style.animation = 'typing 3.5s steps(50, end)';
    }
  }, 15000);
  