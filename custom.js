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
  input.hs-input:not([type=checkbox]):not([type=radio]),
  select.hs-input,
  textarea.hs-input{width:100%;padding:13px 15px;border:1px solid #d5d5d5;border-radius:9px;font-size:15px;color:#141414;background:#fff;box-sizing:border-box;}
  input.hs-input:not([type=checkbox]):not([type=radio]):focus,
  select.hs-input:focus,
  textarea.hs-input:focus{outline:none;border-color:#FFC630;box-shadow:0 0 0 3px rgba(255,198,48,.25);}
  .hs-button{background:#FFC630;color:#141414;border:0;border-radius:50px;padding:15px 26px;font-weight:700;font-size:16px;cursor:pointer;width:100%;margin-top:4px;}
  .hs-button:hover{background:#ffcf4a;}
  .legal-consent-container, .hs-richtext{font-size:11px;color:#8a8a8a;line-height:1.45;}
  .hs-error-msgs label{color:#e0393e;font-size:12px;font-weight:500;}
  .hs-form-booleancheckbox-display{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#555;font-weight:400;cursor:pointer;}
  .hs-form-booleancheckbox-display input.hs-input{width:auto;flex:0 0 auto;margin:2px 0 0;}
  .hs-form-booleancheckbox-display span{flex:1;}
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

// ===== Form del plan de estudios (Temario) — mismo estilo, formId propio =====
var temarioFormCreated = false;
function createTemarioForm(){
  if (temarioFormCreated) return;
  if (window.hbspt && window.hbspt.forms){
    temarioFormCreated = true;
    hbspt.forms.create({
      portalId:"5009969",
      formId:"27ddf761-1de9-4877-9694-305f336f730f",
      region:"na1",
      target:"#hs-form-temario",
      css: HS_FORM_CSS
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

// ===== Modal del temario (Descargar plan de estudios) =====
(function(){
  var overlay = document.getElementById('temario-overlay');
  var closeBtn = document.getElementById('temario-close');
  function open(){
    overlay.classList.add('is-open');
    if (window.hbspt && window.hbspt.forms){ createTemarioForm(); }
    else { window.addEventListener('load', createTemarioForm); }
  }
  function close(){ overlay.classList.remove('is-open'); }
  document.querySelectorAll('.js-open-temario-form').forEach(function(b){ b.addEventListener('click', open); });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) close(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();