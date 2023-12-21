// document.addEventListener('DOMContentLoaded', function() {
//   const gallery = document.querySelector('.gallery');

//   fetch("https://api.unsplash.com/photos/?client_id=NYUR-fDgEwXSYbh7mGxiwlvc_soA_2bxFJ8dLjzMc4M")
//       .then(response => response.json())
//       .then(data => {
//           data.forEach(photo => {
//               const img = document.createElement('img');
//               img.src = photo.urls.small;  
//               img.alt = photo.description;
//               gallery.appendChild(img);
//           });
//       })
//       .catch(error => console.error('Error:', error));
// });
// JavaScript pour l'interaction avec le titre

const animatedTitle = document.getElementById('animatedTitle');

animatedTitle.addEventListener('mouseenter', () => {
  animatedTitle.style.animationPlayState = 'paused';
});

animatedTitle.addEventListener('mouseleave', () => {
  animatedTitle.style.animationPlayState = 'running';
});
