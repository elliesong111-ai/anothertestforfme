
document.addEventListener('DOMContentLoaded', () => {
  function track(eventName, params={}){
    try{ if(window.gtag){ gtag('event', eventName, params); } }catch(e){}
    console.log('[track]', eventName, params);
  }

  // Elements (with guards)
  const rollBtn = document.getElementById('rollBtn');
  const mat = document.querySelector('.mat-demo');
  const shopBtn = document.getElementById('shopBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');
  const skuSelect = document.getElementById('sku');
  const colorSelect = document.getElementById('color');
  const qtyInput = document.getElementById('qty');
  const toast = document.getElementById('toast');
  const audio = new Audio('assets/roll.mp3');

  function showToast(msg='Added to cart!'){
    if(!toast) { alert(msg); return; }
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(()=> toast.style.display='none', 1600);
  }


  const heroBar = document.querySelector('.mat-animation');
  function toggleRoll(){
    try{
      if(mat){
        const isRolled = mat.style.transform === 'scaleX(1)';
        mat.style.transform = isRolled ? 'scaleX(0)' : 'scaleX(1)';
        if(heroBar){ heroBar.classList.add('expanded'); }
        try{ audio.currentTime = 0; audio.play().catch(()=>{}); }catch(e){}
        const msg = isRolled ? 'Mat folded' : 'Mat rolled out';
        const live = document.getElementById('live'); if(live){ live.textContent = msg; }
        track(isRolled ? 'mat_folded' : 'mat_rolled');
        // Ensure user sees the demo
        if(!isRolled && mat){ mat.scrollIntoView({behavior:'smooth', block:'center'}); }
      }
    }catch(e){ console.error(e); }
  }
  if(rollBtn){ rollBtn.addEventListener('click', toggleRoll); }

  if(rollBtn && mat){
    rollBtn.addEventListener('click', () => {
      try{ mat.style.transform = 'scaleX(1)'; }catch(e){}
      try{ audio.currentTime = 0; audio.play().catch(()=>{}); }catch(e){}
      track('mat_rolled');
    });
  }

  // Testimonials carousel
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  function updateSlides(){ slides.forEach((s,i)=> s.style.transform = `translateX(${(i-index)*100}%)` ); }
  if(slides && slides.length){ updateSlides(); setInterval(()=>{ index = (index+1)%slides.length; updateSlides(); }, 3000); }

  // Modal handlers
  if(shopBtn && modal){
    shopBtn.addEventListener('click', () => { modal.style.display='block'; modal.setAttribute('aria-hidden','false'); track('open_shop_modal'); });
  }
  if(closeBtn && modal){
    closeBtn.addEventListener('click', () => { modal.style.display='none'; modal.setAttribute('aria-hidden','true'); });
  }
  window.addEventListener('click', (e) => { if(e.target===modal){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); } });

  // Purchase form
  const buyForm = document.getElementById('buyForm');
  if(buyForm){
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    if(minus && qtyInput){ minus.addEventListener('click', () => { const v = Math.max(1, parseInt(qtyInput.value||'1')-1); qtyInput.value = v; }); }
    if(plus && qtyInput){ plus.addEventListener('click', () => { const v = Math.max(1, parseInt(qtyInput.value||'1')+1); qtyInput.value = v; }); }

    if(skuSelect){ skuSelect.addEventListener('change', ()=> track('change_sku', { sku: skuSelect.value })); }
    if(colorSelect){ colorSelect.addEventListener('change', ()=> track('change_color', { color: colorSelect.value })); }

    function getCart(){ try{ return JSON.parse(localStorage.getItem('rnd_cart')||'[]'); }catch(e){ return []; } }
    function setCart(items){ try{ localStorage.setItem('rnd_cart', JSON.stringify(items)); }catch(e){} }

    buyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      try{
        const sku = skuSelect ? skuSelect.value : '';
        const color = colorSelect ? colorSelect.value : '';
        const qty = Math.max(1, parseInt(qtyInput ? (qtyInput.value||'1') : '1'));
        if(!sku || !color){ showToast('Please select SKU and Color'); return; }
        const cart = getCart();
        cart.push({ sku, color, qty, ts: Date.now() });
        setCart(cart);
        track('add_to_cart', { sku, color, quantity: qty });
        showToast('Added to cart!');
      } catch(err){ console.error(err); showToast('Something went wrong'); }
    });
  }
});
