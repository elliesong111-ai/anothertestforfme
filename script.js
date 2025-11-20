
document.addEventListener('DOMContentLoaded', ()=>{
  function track(evt, params={}){ console.log('[track]', evt, params); }
  const audio = new Audio('assets/roll.mp3');

  // Roll the mat + hero bar
  const rollBtn = document.getElementById('rollBtn');
  const mat = document.querySelector('.mat-demo');
  const heroBar = document.querySelector('.mat-animation');
  function safeRoll(){
    if(!mat) return;
    const isRolled = mat.style.transform === 'scaleX(1)';
    mat.style.transform = isRolled ? 'scaleX(0)' : 'scaleX(1)';
    heroBar && heroBar.classList.add('expanded');
    try{ audio.currentTime = 0; audio.play().catch(()=>{}); }catch(e){}
    track(isRolled? 'mat_folded':'mat_rolled');
    if(!isRolled){ mat.scrollIntoView({behavior:'smooth', block:'center'}); }
  }
  rollBtn && rollBtn.addEventListener('click', safeRoll);

  // Testimonials auto-slide
  let idx=0; const tslides=document.querySelectorAll('.testimonials .slide');
  function tUpdate(){ tslides.forEach((s,i)=> s.style.transform = `translateX(${(i-idx)*100}%)`); }
  tUpdate(); setInterval(()=>{ idx=(idx+1)%tslides.length; tUpdate(); }, 3000);

  // Modal open/close
  const modal=document.getElementById('modal');
  const shopBtn=document.getElementById('shopBtn');
  const closeBtn=document.querySelector('.close');
  shopBtn && shopBtn.addEventListener('click',()=>{ modal.style.display='block'; modal.setAttribute('aria-hidden','false'); 
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});
  closeBtn && closeBtn.addEventListener('click',()=>{ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); 
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});
  window.addEventListener('click', e=>{ if(e.target===modal){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});

  // Quantity stepper
  const qtyInput=document.getElementById('qty');
  document.getElementById('minus')?.addEventListener('click',()=>{ const v=Math.max(1,parseInt(qtyInput.value||'1')-1); qtyInput.value=v; updateModalTotal(); 
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});
  document.getElementById('plus')?.addEventListener('click',()=>{ const v=Math.max(1,parseInt(qtyInput.value||'1')+1); qtyInput.value=v; updateModalTotal(); 
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});

  // Prices
  const DISPLAY_PRICES = { classic: 39.99, pro: 59.99, xl: 79.99, neon: 99.99 };
  function updateModalTotal(){
    const sku=document.getElementById('sku')?.value;
    const qty=Math.max(1,parseInt(document.getElementById('qty')?.value||'1'));
    const p=DISPLAY_PRICES[sku]||0; const tot=(p*qty).toFixed(2);
    const box=document.getElementById('modalTotal'); if(box){ box.textContent = sku? `Estimated total: $${tot}` : 'Choose SKU to see total'; }
  }
  document.getElementById('sku')?.addEventListener('change', updateModalTotal);
  qtyInput?.addEventListener('input', updateModalTotal);

  // Carousel
  (function(){
    const track=document.querySelector('.gallery-carousel .track');
    const slides=document.querySelectorAll('.gallery-carousel .slide');
    const prev=document.querySelector('.gallery-carousel .prev');
    const next=document.querySelector('.gallery-carousel .next');
    if(!track||!slides.length) return; let i=0;
    function render(){ track.style.transform = `translateX(-${i*100}%)`; }
    function go(n){ i=(n+slides.length)%slides.length; render(); }
    prev && prev.addEventListener('click', ()=>go(i-1));
    next && next.addEventListener('click', ()=>go(i+1));
    let timer=setInterval(()=>go(i+1),4000);
    track.addEventListener('mouseenter',()=>clearInterval(timer));
    track.addEventListener('mouseleave',()=>timer=setInterval(()=>go(i+1),4000));
    let x0=null; track.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});
    track.addEventListener('touchend',e=>{ if(x0==null) return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>40) go(i+(dx<0?1:-1)); x0=null; 
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});
    render();
  })();

  // Cart + submit to checkout simulation
  function getCart(){ try{ return JSON.parse(localStorage.getItem('rnd_cart')||'[]'); }catch(e){ return []; } }
  function setCart(items){ localStorage.setItem('rnd_cart', JSON.stringify(items)); }
  const buyForm=document.getElementById('buyForm');
  buyForm && buyForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const sku=document.getElementById('sku')?.value;
    const color=document.getElementById('color')?.value;
    const qty=Math.max(1,parseInt(document.getElementById('qty')?.value||'1'));
    if(!sku||!color){ alert('Please select SKU and Color'); return; }
    const cart=getCart(); cart.push({ sku, color, qty, ts: Date.now() }); setCart(cart);
    updateModalTotal(); modal.style.display='none';
    window.location.href='checkout-sim.html';
  
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});

  // Checkout button (Stripe serverless, optional) — left as-is from prior package
  const checkoutBtn=document.getElementById('checkoutBtn');
  checkoutBtn && checkoutBtn.addEventListener('click',()=>{ window.location.href='checkout-sim.html'; 
  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});

  // --- Intro sequence (card-deal anticipation) ---
  (function(){
    const intro = document.getElementById('intro');
    if(!intro) return;
    const skip = document.getElementById('skipIntro');
    const audioShuffle = new Audio('assets/shuffle.mp3');
    // Only show once per session
    const seen = sessionStorage.getItem('rnd_intro_done');
    if(seen){ intro.classList.add('hide'); return; }
    function start(){
      try{ audioShuffle.currentTime=0; audioShuffle.play().catch(()=>{}); }catch(e){}
      // Hide after animation window (~2.2s)
      setTimeout(()=>{ intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); }, 2200);
    }
    intro.addEventListener('click', start);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ start(); }});
    skip && skip.addEventListener('click', (e)=>{ e.stopPropagation(); intro.classList.add('hide'); sessionStorage.setItem('rnd_intro_done','1'); });
  })();

});
