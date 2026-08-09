
document.addEventListener('DOMContentLoaded', function() {

  // 1. MENU BURGER
  var burger = document.getElementById('burger') || document.querySelector('.hamburger');
  var navLinks = document.getElementById('navLinks');
  if(burger && navLinks){
    burger.onclick = function() {
      navLinks.classList.toggle('active');
      var expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !expanded);
    }
  }

  // 2. THEME SOMBRE/CLAIR
  var themeToggle = document.getElementById('themeToggle') || document.querySelector('.theme-toggle');
  var html = document.documentElement;
  var savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  if(themeToggle){
    if(themeToggle.textContent === '🌙' || themeToggle.textContent === '☀️'){
      themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
    themeToggle.onclick = function() {
      var newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      if(themeToggle.textContent === '🌙' || themeToggle.textContent === '☀️'){
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      }
    }
  }

  // 3. APPARITION AU SCROLL + BOUTON RETOUR HAUT
  window.onscroll = function(){
    document.querySelectorAll('.reveal').forEach(function(el){
      if(el.getBoundingClientRect().top < window.innerHeight - 100){
        el.classList.add('active');
      }
    });
    var backBtn = document.getElementById('back-to-top');
    if(backBtn) backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
  var backBtn = document.getElementById('back-to-top');
  if(backBtn) backBtn.onclick = function(){ window.scrollTo({top:0, behavior:'smooth'}); }

  // 4. ANNEE FOOTER
  var year = document.getElementById('year');
  if(year) year.innerText = new Date().getFullYear();

  console.log("Core JS chargé ✅");
});