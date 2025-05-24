const hayirBtn = document.getElementById('hayirBtn');
const modal = document.getElementById('modal');
const evetBtn = document.querySelector('.evet');
const closeBtn = document.querySelector('.close');

// HAYIR butonu için kaçma fonksiyonu
hayirBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - hayirBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - hayirBtn.offsetHeight);
    
    hayirBtn.style.position = 'absolute';
    hayirBtn.style.left = `${x}px`;
    hayirBtn.style.top = `${y}px`;
});

// Modal açma fonksiyonu
evetBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Sayfanın scrollunu engelle
});

// Modal kapatma fonksiyonları
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Sayfanın scrollunu geri aç
}

// Çarpı işareti ile kapatma
closeBtn.addEventListener('click', closeModal);

// ESC tuşu ile kapatma
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Modal dışına tıklayınca kapatma
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
