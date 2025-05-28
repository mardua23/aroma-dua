// Ndryshon ngjyrën e header kur scroll-on faqja
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#004d40';  // ngjyrë më e errët
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  } else {
    header.style.backgroundColor = '#00796b';  // ngjyrë fillestare
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  }
});

// Efekt zoom-in / zoom-out tek imazhi në main
const mainImage = document.querySelector('main img');
mainImage.addEventListener('mouseenter', () => {
  mainImage.style.transform = 'scale(1.1)';
  mainImage.style.transition = 'transform 0.4s ease';
});
mainImage.addEventListener('mouseleave', () => {
  mainImage.style.transform = 'scale(1)';
});

// Popup i thjeshtë për kontaktin
const contactLink = document.querySelector('nav a[href="stafi.html"]');
if (contactLink) {
  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Na kontaktoni në email: info@aromadua.com ose në telefon: +355 69 123 4567');
  });
}

