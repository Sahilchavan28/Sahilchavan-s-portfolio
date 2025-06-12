// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggleSwitch = document.getElementById('darkModeToggle');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
const modalPdf = document.getElementById('modalPdf');

document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'block';
        modalTitle.textContent = card.dataset.title;
        modalOrg.textContent = card.dataset.org;
        modalDate.textContent = card.dataset.date;
        modalImg.src = card.dataset.img;
        modalImg.alt = card.dataset.title;

        // Set PDF link
        if (card.dataset.pdf) {
            modalPdf.href = card.dataset.pdf;
            modalPdf.style.display = 'inline-block';
        } else {
            modalPdf.style.display = 'none';
        }
    });
});
function scrollSlider(direction) {
    const slider = document.getElementById('certSlider');
    const scrollAmount = 320; // width of cert card + gap
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you-msg');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch("https://formspree.io/f/xyzjelzw", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        form.style.display = "none";
        thankYou.style.display = "block";
    });
});