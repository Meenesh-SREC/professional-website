// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Smooth scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Counter animation
function animateValue(id, end) {
  let current = 0;
  const interval = setInterval(() => {
    current++;
    document.getElementById(id).textContent = current;
    if (current === end) clearInterval(interval);
  }, 20);
}

animateValue("projectsCount", 12);
animateValue("clientsCount", 8);
animateValue("experienceCount", 3);

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Back to top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({top:0,behavior:"smooth"});
