// ===== HubSpot forms =====
function createNuclioForm(target){
  if (window.hbspt && window.hbspt.forms){
    hbspt.forms.create({
      portalId:"5009969",
      formId:"30035742-033a-4945-90c1-f2d8d9928b72",
      region:"na1",
      target:target,
      onFormReady:function(){
        var t=document.querySelector(target);
        if(t){ var fb=t.parentNode.querySelector('.lead-form'); if(fb) fb.style.display='none'; }
      }
    });
  }
}
function initForms(){
  createNuclioForm("#hs-form-hero");
  createNuclioForm("#hs-form-signup");
  createNuclioForm("#hs-form-modal");
}
if (window.hbspt && window.hbspt.forms){ initForms(); }
else { window.addEventListener('load', initForms); }

// ===== Modal open/close =====
(function(){
  var overlay = document.getElementById('hs-overlay');
  var closeBtn = document.getElementById('hs-close');
  var stickyBtn = document.getElementById('sticky-btn');
  function open(){ overlay.classList.add('is-open'); if(stickyBtn) stickyBtn.classList.remove('is-pop'); }
  function close(){ overlay.classList.remove('is-open'); }
  document.querySelectorAll('.js-open-form').forEach(function(b){ b.addEventListener('click', open); });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) close(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();