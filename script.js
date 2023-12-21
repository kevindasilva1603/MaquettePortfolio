document.addEventListener('DOMContentLoaded', function () {
    const animatedTitle = document.getElementById('animatedTitle');
  
    animatedTitle.addEventListener('mouseenter', () => {
      animatedTitle.style.animationPlayState = 'paused';
    });
  
    animatedTitle.addEventListener('mouseleave', () => {
      animatedTitle.style.animationPlayState = 'running';
    });
  
    // Effet de curseur
    document.addEventListener('mousemove', (event) => {
      const ghostElement = document.querySelector('.ghost');
  
      if (ghostElement) {
        ghostElement.style.left = `${event.clientX}px`;
        ghostElement.style.top = `${event.clientY}px`;
      }
    });
  });
  