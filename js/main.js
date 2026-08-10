
document.addEventListener('DOMContentLoaded', function() {

  
  var burger = document.getElementById('burger') || document.querySelector('.hamburger');
  var navLinks = document.getElementById('navLinks');
  if(burger && navLinks){
    burger.onclick = function() {
      navLinks.classList.toggle('active');
      var expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !expanded);
    }
  }

  
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
// pages.js - COMMIT 2
document.addEventListener('DOMContentLoaded', function() {

  
  if(document.getElementById('countdown')){
    var countdownDate = new Date("Feb 17, 2027 09:00:00").getTime();
    setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;
      if(distance > 0){
        document.getElementById('cd-days').innerText = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2,'0');
        document.getElementById('cd-hours').innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,'0');
        document.getElementById('cd-min').innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,'0');
        document.getElementById('cd-sec').innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2,'0');
      }
    }, 1000);

    // Animation chiffres
    document.querySelectorAll('.stat-num').forEach(function(stat){
      var target = +stat.getAttribute('data-target');
      var count = 0;
      var speed = target / 100;
      function update(){
        if(count < target){
          count += speed;
          stat.innerText = Math.ceil(count);
          setTimeout(update, 20);
        } else { stat.innerText = target; }
      }
      update();
    });
  }

  
  var form = document.getElementById('contact-form');
  if(form){
    form.onsubmit = function(e){
      e.preventDefault();
      var ok = true;
      document.querySelectorAll('.field-error').forEach(function(p){ p.innerText = ''; });
      
      if(form.nom.value.length < 3){ form.nom.nextElementSibling.innerText = 'Nom requis'; ok = false; }
      if(!form.email.value.includes('@')){ form.email.nextElementSibling.innerText = 'Email invalide'; ok = false; }
      if(form.message.value.length < 20){ form.message.nextElementSibling.innerText = '20 caractères minimum'; ok = false; }
      
      if(ok){
        document.getElementById('form-success').innerText = '✅ Envoyé !';
        form.reset();
      }
    }

    
    document.querySelectorAll('.faq-item input[type=checkbox]').forEach(function(input){
      input.onchange = function(){
        this.parentElement.classList.toggle('active');
      }
    });
  }

  
  document.querySelectorAll('.filter-btn').forEach(function(btn){
    btn.onclick = function(){
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      var filter = this.getAttribute('data-filter');
      document.querySelectorAll('.speaker-card').forEach(function(card){
        card.style.display = (filter === 'all' || card.dataset.country === filter) ? 'block' : 'none';
      });
    }
  });

  
  document.querySelectorAll('.day-tab').forEach(function(tab){
    tab.onclick = function(){
      document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      var day = this.getAttribute('data-day');
      document.querySelectorAll('.day-content').forEach(function(c){
        c.style.display = c.id === day ? 'block' : 'none';
      });
    }
  });

  console.log("Pages JS chargé ✅");
});