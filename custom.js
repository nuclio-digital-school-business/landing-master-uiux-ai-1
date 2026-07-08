// ===== HubSpot forms =====
function styleHubspotForm(target){
  var container = document.querySelector(target);
  if(!container) return;
  var applyStyles = function(){
    var form = container.querySelector('form');
    if(!form) return;

    // Inputs y selects
    form.querySelectorAll('input[type=text], input[type=email], input[type=tel], input[type=number], select, textarea').forEach(function(el){
      el.style.width = '100%';
      el.style.padding = '13px 15px';
      el.style.border = '1px solid #d5d5d5';
      el.style.borderRadius = '9px';
      el.style.fontSize = '15px';
      el.style.fontFamily = 'inherit';
      el.style.color = '#141414';
      el.style.background = '#fff';
      el.style.boxSizing = 'border-box';
      el.style.marginBottom = '2px';
      el.style.outline = 'none';
    });

    // Labels
    form.querySelectorAll('label').forEach(function(el){
      el.style.fontSize = '13.5px';
      el.style.fontWeight = '600';
      el.style.color = '#333';
      el.style.marginBottom = '4px';
      el.style.display = 'block';
      el.style.fontFamily = 'inherit';
    });

    // Campos (contenedor de cada label+input)
    form.querySelectorAll('.hs-form-field, .hs_form_field, .field').forEach(function(el){
      el.style.marginBottom = '14px';
    });

    // Botón
    var btn = form.querySelector('.hs-button, input[type=submit]');
    if(btn){
      btn.style.background = '#FFC630';
      btn.style.color = '#141414';
      btn.style.border = '0';
      btn.style.borderRadius = '50px';
      btn.style.padding = '15px 26px';
      btn.style.fontWeight = '700';
      btn.style.fontSize = '16px';
      btn.style.cursor = 'pointer';
      btn.style.width = '100%';
      btn.style.fontFamily = 'inherit';
      btn.style.marginTop = '4px';
    }

    // Mensajes legales / consentimiento
    form.querySelectorAll('.legal-consent-container, .hs-richtext, .hs-form-booleancheckbox-display').forEach(function(el){
      el.style.fontSize = '11px';
      el.style.color = '#8a8a8a';
      el.style.lineHeight = '1.45';
      el.style.marginTop = '11px';
    });

    // Errores de validación
    form.querySelectorAll('.hs-error-msgs label').forEach(function(el){
      el.style.color = '#e0393e';
      el.style.fontSize = '12px';
      el.style.fontWeight = '500';
    });
  };

  var obs = new MutationObserver(applyStyles);
  obs.observe(container, {childList:true, subtree:true, attributes:true});
  applyStyles();
}

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
        styleHubspotForm(target);
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