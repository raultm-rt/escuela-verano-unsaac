(function(){
 const t=document.querySelector('.menu-button'); const nav=document.querySelector('.navigation');
 if(t&&nav){t.addEventListener('click',()=>{const opened=nav.classList.toggle('open');t.setAttribute('aria-expanded',String(opened));t.textContent=opened?'Cerrar':'Menú';}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');t.setAttribute('aria-expanded','false');t.textContent='Menú'}));}
 const cfg=window.SCHOOL_CONFIG||{};
 document.querySelectorAll('[data-contact]').forEach(el=>{if(cfg.contactEmail){let a=document.createElement('a');a.href='mailto:'+cfg.contactEmail;a.textContent=cfg.contactEmail;el.replaceChildren(a)}else{el.textContent='Correo institucional por confirmar'}});
 document.querySelectorAll('[data-registration]').forEach(el=>{if(cfg.registrationUrl){el.href=cfg.registrationUrl;el.removeAttribute('aria-disabled');el.textContent='Abrir formulario de inscripción ↗';el.target='_blank';el.rel='noopener noreferrer'}else{el.textContent='Formulario de inscripción próximamente';el.setAttribute('aria-disabled','true');el.removeAttribute('href')}});
})();