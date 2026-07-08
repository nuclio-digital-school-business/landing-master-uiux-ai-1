// ===== HubSpot forms =====
// IMPORTANTE: este formulario carga dentro de un <iframe> de HubSpot.
// Por seguridad del navegador (cross-origin), el CSS y JS de esta página
// NO pueden estilizar lo que hay dentro del iframe. La única vía soportada
// es pasar un string de CSS en el propio hbspt.forms.create(), que HubSpot
// inyecta dentro del iframe desde su lado.
var HS_FORM_CSS = `
  body{font-family:'Manrope',-apple-system,Arial,sans-serif;}
  .hs-form-field{margin-bottom:14px;}
  .hs-form-field label{font-size:13.5px;font-weight:600;color:#333;margin-bottom:4px;display:block;}
  .hs-input{width:100%;padding:13px 15px;border:1px solid #d5d5d5;border-radius:9px;font-size:15px;color:#141414;background:#fff;box-sizing:border-box;}
  .hs-input:focus{outline:none;border-color:#FFC630;box-shadow:0 0 0 3px rgba(255,198,48,.25);}
  .hs-button{background:#FFC630;color:#141414;border:0;border-radius:50px;padding:15px 26px;font-weight:700;font-size:16px;cursor:pointer;width:100%;margin-top:4px;}
  .hs-button:hover{background:#ffcf4a;}
  .legal-consent-container, .hs-richtext{font-size:11px;color:#8a8a8a;line-height:1.45;}
  .hs-error-msgs label{color:#e0393e;font-size:12px;font-weight:500;}
  .hs-form-booleancheckbox-display{font-size:12px;color:#555;}
`;

function createNuclioForm(target){
  if (window.hbspt && window.hbspt.forms){
    hbspt.forms.create({
      portalId:"5009969",
      formId:"30035742-033a-4945-90c1-f2d8d9928b72",
      region:"na1",
      target:target,
      css: HS_FORM_CSS,
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