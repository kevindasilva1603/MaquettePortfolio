// document.addEventListener('DOMContentLoaded', function () {
//     const animatedTitle = document.getElementById('animatedTitle');
  
//     animatedTitle.addEventListener('mouseenter', () => {
//       animatedTitle.style.animationPlayState = 'paused';
//     });
  
//     animatedTitle.addEventListener('mouseleave', () => {
//       animatedTitle.style.animationPlayState = 'running';
//     });
  
//     // Effet de curseur
//     document.addEventListener('mousemove', (event) => {
//       const ghostElement = document.querySelector('.ghost');
  
//       if (ghostElement) {
//         ghostElement.style.left = `${event.clientX}px`;
//         ghostElement.style.top = `${event.clientY}px`;
//       }
//     });
//   });
  
  document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
  
    // Masquer la page de chargement initialement
    loader.style.display = 'none';
  
    // Afficher la page de chargement pendant le chargement initial
    loader.style.display = 'block';
  
    // Simuler le chargement (ajoutez le code réel pour charger vos ressources ici)
    setTimeout(function () {
      // Masquer la page de chargement une fois le chargement terminé
      loader.style.display = 'none';
      
      // Afficher le contenu principal
      mainContent.style.display = 'block';
    }, 3000); // Simulez un chargement de 3 secondes (à remplacer par le chargement réel)
  });
  