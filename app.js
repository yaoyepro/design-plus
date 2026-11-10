/* Design+ 瑶叶设计灵感库 */
(() => {
  'use strict';
  const SITES = window.EYEWASH_SITES;
  const META = {
    motionsites: { h: ['Motion first.', 'Prompt next.'],       hue: '#d9d3f2' },
    reactbits:   { h: ['Drop it in.', 'Watch it move.'],       hue: '#d2e6e9' },
    uiverse:     { h: ['Open source.', 'Pure CSS.'],           hue: '#e4dcf1' },
    aceternity:  { h: ['Polish that', 'ships today.'],         hue: '#d4d9e6' },
    animejs:     { h: ['Time it.', 'Then tune it.'],           hue: '#f1dccf' },
    aura:        { h: ['Describe it.', 'See it built.'],       hue: '#d6e2f2' },
    supahero:    { h: ['First fold.', 'Best foot.'],           hue: '#f0e1cc' },
    seesaw:      { h: ['Real sites.', 'Fresh picks.'],         hue: '#d8ead7' },
    saaspo:      { h: ['SaaS pages', 'that convert.'],         hue: '#d3dcf0' },
    searchsystem:{ h: ['Charts with', 'a point of view.'],     hue: '#ebe1d4' },
    godly:       { h: ['Off the grid.', 'On purpose.'],        hue: '#ecd0e2' },
    minimal:     { h: ['Less, but', 'better.'],                hue: '#e7e5dd' },
    dark:        { h: ['Lights off.', 'Detail on.'],           hue: '#cdcad9' },
    lapa:        { h: ['Five seconds.', 'One promise.'],       hue: '#f3dcc8' },
    bdox:        { h: ['From the feed.', 'Worth keeping.'],    hue: '#d1def1' },
    inspora:     { h: ['Many styles.', 'One board.'],          hue: '#e3d6ee' },
    cta:         { h: ['One button.', 'Whole page.'],          hue: '#f2d6cf' },
    footer:      { h: ['The last screen.', 'Still counts.'],   hue: '#d8e2d9' },
    mobbin:      { h: ['Shipped screens.', 'Whole flows.'],    hue: '#cfdbf3' },
    refero:      { h: ['Dense data.', 'Calm surface.'],        hue: '#c9e2dd' },
    collectui:   { h: ['Daily UI.', 'Steady hands.'],          hue: '#dde3f2' },
    spells:      { h: ['Small moments.', 'Big delight.'],      hue: '#dcd0f4' },
    loadmore:    { h: ['Break it.', 'Then learn.'],            hue: '#d6edc9' },
    scrolltide:  { h: ['Scroll slowly.', 'Tell a story.'],     hue: '#cde4ef' },
    fps60:       { h: ['Every frame.', 'Counted.'],            hue: '#efd9e6' },
    backgrounds: { h: ['Set the mood.', 'Behind it all.'],     hue: '#e9dcc9' },
    recraft:     { h: ['Draw it.', 'Then vector it.'],         hue: '#d4e6f0' },
    feral:       { h: ['Mix colour.', 'Add grain.'],           hue: '#f1d4dc' },
    typewolf:    { h: ['Set the type.', 'Set the tone.'],      hue: '#efe4c6' },
    abduzeedo:   { h: ['Borrow wide.', 'Design deep.'],        hue: '#e6dbd0' },
    deck:        { h: ['One slide.', 'One idea.'],             hue: '#d9dff0' },
    logosystem:  { h: ['Small mark.', 'Long life.'],           hue: '#e2e2dc' },
    vjournal:    { h: ['Grid first.', 'Then poster.'],         hue: '#f0dccc' },
    brandguide:  { h: ['Rules that', 'feel like you.'],        hue: '#d5e7dc' },
    rstyles:     { h: ['Write taste', 'into a file.'],         hue: '#d3e9df' },
    oneprompt:   { h: ['One prompt.', 'Right picture.'],       hue: '#ebdcf0' },
    relume:      { h: ['Structure first.', 'Style later.'],    hue: '#dfe3d2' },
    bencho:      { h: ['Copy the code.', 'Keep the feel.'],    hue: '#d6dcef' },
    phosphor:    { h: ['One family.', 'Six weights.'],         hue: '#e6e0f2' },
    iconly:      { h: ['First glance.', 'Home screen.'],       hue: '#f2e1cc' },
    dribbble:    { h: ['See how others', 'say it.'],           hue: '#f2d5e1' },
    pinterest:   { h: ['Pin it.', 'Find the thread.'],         hue: '#f1d3d0' },
    dbookmark:   { h: ['Every tool.', 'One shelf.'],           hue: '#dbe4e6' },
    ondesign:    { h: ['Share the work.', 'Hear back.'],       hue: '#e0e0ea' },
    bartlett:    { h: ['Space, drawn', 'on a screen.'],        hue: '#e4ddd2' },
    threejs:     { h: ['Flat screen.', 'Deep space.'],         hue: '#cfdde8' },
    navbar:      { h: ['First click.', 'Right door.'],         hue: '#dde0ee' },
    pixabay:     { h: ['Find the track.', 'Set the mood.'],    hue: '#cfe6d6' },
    freesound:   { h: ['Rain, wind,', 'the street.'],          hue: '#d3dfe6' },
    soundlab:    { h: ['Tiny sounds.', 'Daily use.'],          hue: '#f1dccf' },
    mixkit:      { h: ['Cut here.', 'Whoosh.'],                hue: '#e0d8f0' },
    elevensfx:   { h: ['Describe it.', 'Hear it.'],            hue: '#d8e4ee' },
    earshot:     { h: ['Code moves.', 'Sound follows.'],       hue: '#e4e2d8' }
  };
  const GROUPS = [
    ['all', '全部'], ['pick', '精选'], ['web', '网页灵感'], ['product', '产品界面'], ['motion', '动效交互'], ['visual', '视觉素材'],
    ['brand', '品牌排版'], ['sound', '声音'], ['ai', 'AI 工作流'], ['ui', '组件图标'], ['community', '资源社区'], ['space', '空间设计']
  ];
  const CW = 300, CH = 264;

  const $ = s => document.querySelector(s);
  const pad = (n, l = 2) => String(n).padStart(l, '0');
  const mod = (a, n) => ((a % n) + n) % n;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const store = {
    get(k, d) { try { const v = localStorage.getItem('designplus.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('designplus.' + k, JSON.stringify(v)); } catch (e) {} }
  };
  const isTyping = el => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

  /* Toast */
  const toastEl = $('#toast');
  let toastT = 0;
  function toast(msg, ms = 2600) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('show'), ms);
  }

  /* Cards */
  const studio = $('#studio'), stage = $('#stage'), rig = $('#rig');
  const cards = SITES.map((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'card';
    b.dataset.i = i;
    b.style.setProperty('--hue', META[s.id].hue);
    b.setAttribute('aria-label', `${s.name}：${s.line}`);
    b.innerHTML =
      `<div class="card-glass"><div class="card-media"><img class="hero" src="assets/img/${s.id}-hero.webp" alt="" width="1280" height="800" decoding="async" draggable="false"><span class="live-tag">LIVE</span></div>` +
      `<div class="card-cap"><span class="card-name">${s.name}</span><span class="card-num">${pad(i + 1)}</span><span class="card-tag">${s.tag}</span><svg class="i card-arrow" aria-hidden="true"><use href="#i-arrow-up-right"/></svg></div>` +
      `<span class="glare" aria-hidden="true"><i></i></span></div>`;
    rig.appendChild(b);
    return b;
  });
  let tallLoaded = false;
  function loadTall() {
    if (tallLoaded) return;
    tallLoaded = true;
    cards.forEach((c, i) => {
      const img = document.createElement('img');
      img.className = 'tall';
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.draggable = false;
      img.width = 1100; img.height = 2200;
      img.src = `assets/img/${SITES[i].id}-tall.webp`;
      c.querySelector('.card-media').insertBefore(img, c.querySelector('.live-tag'));
    });
  }

  /* State */
  let view = store.get('view', 'orbit') === 'grid' ? 'grid' : 'orbit';
  let cat = 'all', query = '';
  let order = SITES.map((_, i) => i);
  let pos = 0, target = 0, vel = 0, focusIdx = 0;
  let dragging = false;
  let px = 0, py = 0, tx = 0, ty = 0;
  let intro = true;
  const SHAPES = [['arc', '弧廊'], ['ring', '环幕'], ['helix', '螺旋'], ['wave', '波浪'], ['fan', '扇面']];
  let shape = store.get('shape', 'arc');
  if (!SHAPES.some(x => x[0] === shape)) shape = 'arc';

  function hay(s) {
    return [s.name, s.domain, s.tag, s.mood, s.line, s.desc, s.kw, s.groups.join(' '),
      s.groups.map(g => (GROUPS.find(x => x[0] === g) || [])[1]).join(' ')].join(' ').toLowerCase();
  }
  const HAY = SITES.map(hay);
  function matches(i) {
    const s = SITES[i];
    if (cat !== 'all' && !s.groups.includes(cat)) return false;
    if (!query) return true;
    return query.toLowerCase().split(/\s+/).filter(Boolean).every(t => HAY[i].includes(t));
  }

  /* Geometry */
  function stageBox() { return { w: stage.clientWidth, h: stage.clientHeight }; }
  const DEG = 180 / Math.PI;
  function orbitT(rank, n, g) {
    const narrow = g.w < 700;
    let d = rank - pos;
    if (n > 1) { d = mod(d + n / 2, n) - n / 2; } else d = 0;
    const ad = Math.abs(d), s = Math.sign(d), a1 = Math.min(ad, 1);
    const cx = narrow ? g.w / 2 : g.w * 0.4;
    const cy = narrow ? g.h * 0.52 : g.h * 0.57;
    let x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sc = 1, lim = 4.4, fade = 1.1;
    if (shape === 'ring') {
      const m = clamp(n, 6, 10), th = d * 2 * Math.PI / m, R = narrow ? 240 : 500;
      x = Math.sin(th) * R;
      z = (Math.cos(th) - 1) * R;
      y = (1 - Math.cos(th)) * (narrow ? 18 : 40);
      ry = th * DEG;
      lim = m / 4 + 0.35; fade = 1.3;
    } else if (shape === 'helix') {
      const th = d * Math.PI / 4.2, R = narrow ? 190 : 320;
      x = Math.sin(th) * R;
      z = (Math.cos(th) - 1) * R - ad * 30;
      y = d * (narrow ? 40 : 60);
      ry = th * DEG * 0.85;
      rx = -d * 4;
      sc = 1 - Math.min(ad, 4) * 0.03;
      lim = 3; fade = 1.1;
    } else if (shape === 'wave') {
      const step = narrow ? CW * 0.6 : CW * 0.8, amp = narrow ? 30 : 64;
      x = d * step;
      y = Math.sin(d * 1.25) * amp * a1;
      rz = Math.cos(d * 1.25) * 7 * a1 * s;
      z = -a1 * 110 - ad * 24;
      sc = 1 - a1 * 0.1;
      lim = narrow ? 2.6 : 3.4;
    } else if (shape === 'fan') {
      const ph = d * (narrow ? 10 : 7.5) / DEG, Rf = narrow ? 640 : 860;
      x = Math.sin(ph) * Rf;
      y = (1 - Math.cos(ph)) * Rf + a1 * 14;
      rz = ph * DEG;
      ry = -d * 3;
      z = -ad * 34 + (1 - a1) * 40;
      sc = 1 - a1 * 0.06;
      lim = 4.4; fade = 1.6;
    } else {
      const S1 = narrow ? 156 : 214, S2 = narrow ? 44 : 96;
      x = s * (ad < 1 ? ad * S1 : S1 + (ad - 1) * S2);
      y = Math.pow(ad, 1.25) * (narrow ? 8 : 18);
      z = -ad * (narrow ? 130 : 160) + (ad < 1 ? (1 - ad) * 60 : 0);
      ry = clamp(-s * a1 * 32 - d * 3, -48, 48);
      sc = 1 - Math.min(ad, 5) * 0.025;
    }
    lim = Math.min(lim, n / 2 + 0.01);
    const op = ad > lim ? 0 : ad > lim - fade ? (lim - ad) / fade : 1;
    return {
      t: `translate3d(${(cx - CW / 2 + x).toFixed(2)}px,${(cy - CH / 2 + y).toFixed(2)}px,${z.toFixed(2)}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg) scale(${sc.toFixed(4)})`,
      o: op, z: 1000 - Math.round(ad * 100), ad
    };
  }
  let gridCache = null;
  function gridLayout() {
    const w = stage.clientWidth;
    const cols = w > 1180 ? 5 : w > 880 ? 4 : w > 620 ? 3 : w > 470 ? 2 : 1;
    const gap = w > 620 ? 18 : 12;
    const cellW = (w - gap * (cols - 1)) / cols;
    const sc = Math.min(cellW / CW, 1.12);
    const cellH = CH * sc;
    const rows = Math.max(1, Math.ceil(order.length / cols));
    gridCache = { cols, gap, cellW, cellH, sc };
    stage.style.height = (rows * (cellH + gap) - gap + 8) + 'px';
  }
  function gridT(rank) {
    const { cols, gap, cellW, cellH, sc } = gridCache;
    const col = rank % cols, row = Math.floor(rank / cols);
    const x = col * (cellW + gap) + (cellW - CW) / 2;
    const y = row * (cellH + gap) + (CH * sc - CH) / 2 + 4;
    return `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0px) scale(${sc.toFixed(4)})`;
  }

  function render() {
    const n = order.length;
    if (view === 'orbit') {
      const g = stageBox();
      rig.style.transform = fine.matches && !reduce.matches ? `rotateX(${(-py * 3.2).toFixed(3)}deg) rotateY(${(px * 5).toFixed(3)}deg)` : '';
      cards.forEach((c, i) => {
        const rank = order.indexOf(i);
        if (rank < 0) {
          c.style.transform = `translate3d(${(g.w * 0.4 - CW / 2).toFixed(0)}px,${(g.h * 0.57 - CH / 2 + 120).toFixed(0)}px,-700px) scale(.8)`;
          c.style.opacity = '0';
          c.classList.add('gone');
          c.tabIndex = -1;
          return;
        }
        const r = orbitT(rank, n, g);
        c.style.transform = r.t;
        c.style.opacity = r.o.toFixed(3);
        c.style.zIndex = r.z;
        c.classList.toggle('gone', r.o < 0.05);
        c.tabIndex = r.o < 0.05 ? -1 : 0;
      });
    } else {
      rig.style.transform = '';
      gridLayout();
      cards.forEach((c, i) => {
        const rank = order.indexOf(i);
        c.style.zIndex = rank < 0 ? 0 : 10;
        if (rank < 0) {
          c.style.opacity = '0';
          c.classList.add('gone');
          c.tabIndex = -1;
          c.style.transform = c.style.transform.replace(/scale\(([\d.]+)\)/, (m, v) => `scale(${(+v * 0.86).toFixed(4)})`);
          return;
        }
        c.style.transform = gridT(rank);
        c.style.opacity = '1';
        c.classList.remove('gone');
        c.tabIndex = 0;
      });
    }
  }

  /* Loop: spring for orbit position plus pointer parallax */
  let raf = 0;
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  function tick() {
    raf = 0;
    let moving = false;
    if (view === 'orbit' && !dragging) {
      if (reduce.matches) { pos = target; vel = 0; }
      const diff = target - pos;
      vel = vel * 0.72 + diff * 0.075;
      pos += vel;
      if (Math.abs(diff) < 0.0008 && Math.abs(vel) < 0.0008) { pos = target; vel = 0; } else moving = true;
    }
    if (view === 'orbit') {
      px += (tx - px) * 0.07; py += (ty - py) * 0.07;
      if (Math.abs(tx - px) + Math.abs(ty - py) > 0.0005) moving = true;
    }
    if (view === 'orbit' && !intro) render();
    syncFocus();
    if (moving || dragging) kick(); else studio.classList.remove('live');
  }
  function live() { if (view === 'orbit' && !intro) studio.classList.add('live'); kick(); }
  function go(step) { if (!order.length) return; target = Math.round(target) + step; live(); }
  function goTo(si) {
    const n = order.length, rank = order.indexOf(si);
    if (rank < 0 || !n) return;
    let delta = rank - mod(Math.round(target), n);
    if (delta > n / 2) delta -= n;
    if (delta < -n / 2) delta += n;
    target = Math.round(target) + delta;
    live();
  }
  function currentRank() { return order.length ? mod(Math.round(pos), order.length) : -1; }
  function syncFocus() {
    if (view !== 'orbit' || !order.length) return;
    const si = order[currentRank()];
    if (si !== focusIdx || !cards[si].classList.contains('focus')) setFocus(si);
  }

  /* Focus: info panel, ghost headline, aura, counters */
  const ghost = $('#ghost'), kicker = $('#kicker');
  const iBody = $('#iBody');
  const auras = [$('#auraA'), $('#auraB')];
  let auraOn = 0, infoT = 0, ghostT = 0;
  function words(text, base) {
    return text.split(' ').map((w, k) => `<span class="w out" style="--d:${base + k}">${w}</span>`).join(' ');
  }
  function setGhost(si) {
    const h = META[SITES[si].id].h;
    const old = ghost.querySelectorAll('.w');
    old.forEach(w => w.classList.add('out'));
    clearTimeout(ghostT);
    ghostT = setTimeout(() => {
      ghost.querySelectorAll('.ln').forEach(l => l.remove());
      const a = document.createElement('span'), b = document.createElement('span');
      a.className = b.className = 'ln';
      a.setAttribute('aria-hidden', 'true'); b.setAttribute('aria-hidden', 'true');
      a.innerHTML = words(h[0], 0);
      b.innerHTML = words(h[1], h[0].split(' ').length);
      ghost.append(a, b);
      requestAnimationFrame(() => requestAnimationFrame(() => ghost.querySelectorAll('.w').forEach(w => w.classList.remove('out'))));
    }, old.length ? 260 : 0);
    kicker.textContent = `${GROUPS.find(x => x[0] === SITES[si].groups[0])[1]} / ${SITES[si].domain}`;
  }
  function setAura(si) {
    const next = auras[1 - auraOn];
    next.style.setProperty('--aura', META[SITES[si].id].hue);
    next.classList.add('on');
    auras[auraOn].classList.remove('on');
    auraOn = 1 - auraOn;
  }
  function fillInfo(si) {
    const s = SITES[si];
    $('#iTag').textContent = `${s.tag} / ${s.name}`;
    $('#iName').textContent = s.name;
    $('#iLine').textContent = s.line;
    $('#iDesc').textContent = s.desc;
    $('#iMood').textContent = s.mood;
    const d = $('#iDomain');
    d.href = s.url;
    d.firstChild.nodeValue = s.domain + ' ';
    $('#iGo').href = s.url;
    $('#iGo').setAttribute('aria-label', `打开 ${s.domain}`);
  }
  function setFocus(si) {
    focusIdx = si;
    cards.forEach((c, i) => c.classList.toggle('focus', i === si && view === 'orbit'));
    const rank = order.indexOf(si);
    $('#iNum').textContent = `${pad(rank + 1)} / ${pad(order.length, 3)}`;
    $('#dockCount').textContent = `${pad(rank + 1)} / ${pad(order.length)}`;
    iBody.classList.add('swap');
    clearTimeout(infoT);
    infoT = setTimeout(() => { fillInfo(si); iBody.classList.remove('swap'); }, 170);
    setGhost(si);
    setAura(si);
  }

  /* Drag, wheel and click on the stage */
  let down = null, moved = false, suppress = false;
  const PX = e => window.__rot ? e.clientY : e.clientX;
  const PY = e => window.__rot ? window.__rot - e.clientX : e.clientY;
  stage.addEventListener('pointerdown', e => {
    if (view !== 'orbit' || e.button !== 0 || !order.length) return;
    down = { x: PX(e), y: PY(e), p: pos, t: performance.now(), lx: PX(e), v: 0 };
    moved = false;
  });
  addEventListener('pointermove', e => {
    if (fine.matches && view === 'orbit') {
      tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5;
      kick();
    }
    if (!down) return;
    const dx = PX(e) - down.x, dy = PY(e) - down.y;
    if (!moved) {
      if (Math.abs(dx) < 6) return;
      if (Math.abs(dy) > Math.abs(dx) && e.pointerType !== 'mouse') { down = null; return; }
      moved = true; dragging = true;
      stage.classList.add('dragging');
      studio.classList.add('live');
    }
    const now = performance.now();
    const dt = Math.max(1, now - down.t);
    down.v = down.v * 0.6 + ((PX(e) - down.lx) / dt) * 0.4;
    down.t = now; down.lx = PX(e);
    const unit = stage.clientWidth < 700 ? 170 : 230;
    pos = down.p - dx / unit;
    kick();
  });
  function endDrag() {
    if (!down) return;
    if (moved) {
      const unit = stage.clientWidth < 700 ? 170 : 230;
      const fling = clamp(-down.v * 16 / unit, -0.6, 0.6);
      vel = fling;
      target = Math.round(pos + fling * 7);
      suppress = true;
      setTimeout(() => { suppress = false; }, 0);
    }
    dragging = false; down = null;
    stage.classList.remove('dragging');
    kick();
  }
  addEventListener('pointerup', endDrag);
  addEventListener('pointercancel', endDrag);

  rig.addEventListener('click', e => {
    const c = e.target.closest('.card');
    if (!c || suppress) return;
    const si = +c.dataset.i;
    if (view === 'grid' || si === focusIdx) openRoom(si, c);
    else goTo(si);
  });
  rig.addEventListener('focusin', e => {
    const c = e.target.closest('.card');
    if (c && view === 'orbit' && !c.matches(':hover')) goTo(+c.dataset.i);
  });

  let wheelAcc = 0, wheelLock = 0;
  stage.addEventListener('wheel', e => {
    if (view !== 'orbit' || !order.length) return;
    const horiz = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (!horiz && stage.clientWidth < 700) return;
    e.preventDefault();
    wheelAcc += horiz ? e.deltaX : e.deltaY;
    const now = performance.now();
    if (Math.abs(wheelAcc) > 42 && now > wheelLock) {
      go(Math.sign(wheelAcc));
      wheelAcc = 0;
      wheelLock = now + 150;
    }
  }, { passive: false });

  /* Glare and tilt */
  let hoverCard = null;
  rig.addEventListener('pointermove', e => {
    const c = e.target.closest('.card');
    if (!c || dragging) return;
    const r = c.getBoundingClientRect();
    const fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
    const scale = view === 'grid' && gridCache ? gridCache.sc : 1;
    c.querySelector('.glare i').style.transform = `translate3d(${(fx * CW).toFixed(1)}px,${(fy * CH).toFixed(1)}px,0)`;
    if (fine.matches && !reduce.matches && (view === 'grid' || c.classList.contains('focus'))) {
      c.querySelector('.card-glass').style.transform = `perspective(900px) rotateX(${((0.5 - fy) * 9).toFixed(2)}deg) rotateY(${((fx - 0.5) * 11).toFixed(2)}deg) translateZ(${(12 / scale).toFixed(1)}px)`;
    }
    hoverCard = c;
  });
  rig.addEventListener('pointerout', e => {
    const c = e.target.closest('.card');
    if (c && !c.contains(e.relatedTarget)) {
      c.querySelector('.card-glass').style.transform = '';
      if (hoverCard === c) hoverCard = null;
    }
  });

  /* Categories, search, filter */
  const catsEl = $('#cats'), catsInd = catsEl.querySelector('.cats-ind');
  GROUPS.forEach(([id, zh]) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.dataset.cat = id;
    b.setAttribute('aria-selected', String(id === cat));
    const n = id === 'all' ? SITES.length : SITES.filter(s => s.groups.includes(id)).length;
    b.innerHTML = `${zh}<span>${n}</span>`;
    b.addEventListener('click', () => setCat(id));
    catsEl.appendChild(b);
  });
  function moveCatInd() {
    const b = catsEl.querySelector(`[data-cat="${cat}"]`);
    const w = catsEl.scrollWidth;
    catsInd.style.width = w + 'px';
    catsInd.style.setProperty('--l-in', b.offsetLeft + 'px');
    catsInd.style.setProperty('--r-in', (w - b.offsetLeft - b.offsetWidth) + 'px');
  }
  function setCat(id) {
    const changed = id !== cat;
    cat = id;
    catsEl.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.cat === id)));
    moveCatInd();
    const b = catsEl.querySelector(`[data-cat="${id}"]`);
    if (catsEl.scrollWidth > catsEl.clientWidth) b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce.matches ? 'auto' : 'smooth' });
    applyFilter();
    if (changed && view === 'orbit' && !reduce.matches && order.length > 1) cycleShape(1);
  }
  const qEl = $('#q');
  qEl.addEventListener('input', () => { query = qEl.value.trim(); applyFilter(); });
  qEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && order.length) { e.preventDefault(); openRoom(order[0]); }
    if (e.key === 'Escape') { if (qEl.value) { qEl.value = ''; query = ''; applyFilter(); } else qEl.blur(); e.stopPropagation(); }
  });
  function clearAll() { qEl.value = ''; query = ''; setCat('all'); }
  $('#stackChip').addEventListener('click', clearAll);
  $('#clearQ').addEventListener('click', () => { clearAll(); qEl.focus(); });

  function applyFilter() {
    const prev = focusIdx;
    order = SITES.map((_, i) => i).filter(matches);
    const n = order.length;
    $('#stackCount').textContent = n;
    $('#openN').textContent = n;
    $('#openSet').disabled = !n;
    $('#empty').hidden = !!n;
    $('#info').style.visibility = n ? '' : 'hidden';
    if (n) {
      const si = order.includes(prev) ? prev : order[0];
      pos = target = order.indexOf(si);
      vel = 0;
      focusIdx = -1;
      setFocus(si);
    } else {
      $('#dockCount').textContent = '00 / 00';
    }
    studio.classList.remove('live');
    stagger(28);
    render();
  }
  let staggerT = 0;
  function stagger(step) {
    cards.forEach((c, i) => {
      const r = order.indexOf(i);
      c.style.setProperty('--delay', ((r < 0 ? 0 : r) * step) + 'ms');
    });
    clearTimeout(staggerT);
    staggerT = setTimeout(() => cards.forEach(c => c.style.removeProperty('--delay')), 1400);
  }

  /* View switch: the same ten elements morph between orbit and grid */
  const seg = document.querySelector('.seg');
  function setView(v, first) {
    view = v;
    store.set('view', v);
    studio.dataset.view = v;
    seg.dataset.v = v;
    $('#vOrbit').setAttribute('aria-selected', String(v === 'orbit'));
    $('#vGrid').setAttribute('aria-selected', String(v === 'grid'));
    studio.classList.remove('live');
    cards.forEach(c => { c.querySelector('.card-glass').style.transform = ''; });
    if (v === 'grid') { loadTall(); }
    else { stage.style.height = ''; }
    cards.forEach((c, i) => c.classList.toggle('focus', v === 'orbit' && i === focusIdx));
    if (!first) {
      stagger(v === 'grid' ? 32 : 24);
      render();
      if (v === 'grid' && scrollY > 10) scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' });
    }
  }
  $('#vOrbit').addEventListener('click', () => view !== 'orbit' && setView('orbit'));
  $('#vGrid').addEventListener('click', () => view !== 'grid' && setView('grid'));

  /* Orbit shapes: the same cards re-form into arc, ring, helix, wave or fan */
  /* No switcher UI: the stack re-forms on its own (new tab, idle pause, double-click, S key) */
  function setShape(id) {
    if (id === shape) return;
    shape = id;
    store.set('shape', id);
    studio.dataset.shape = id;
    idleAt = performance.now();
    if (view !== 'orbit') setView('orbit');
    studio.classList.remove('live');
    studio.classList.add('morph');
    clearTimeout(setShape.t);
    setShape.t = setTimeout(() => studio.classList.remove('morph'), 1500);
    stagger(22);
    render();
  }
  function cycleShape(step) {
    const i = SHAPES.findIndex(x => x[0] === shape);
    setShape(SHAPES[mod(i + step, SHAPES.length)][0]);
  }
  studio.dataset.shape = shape;
  let idleAt = performance.now();
  const wake = () => { idleAt = performance.now(); };
  ['pointermove', 'pointerdown', 'wheel', 'keydown', 'touchstart'].forEach(t => addEventListener(t, wake, { passive: true }));
  setInterval(() => {
    if (reduce.matches || document.hidden || intro || roomOpen || view !== 'orbit' || dragging || order.length < 4) return;
    if (performance.now() - idleAt > 9000) cycleShape(1);
  }, 1000);
  stage.addEventListener('dblclick', e => {
    if (view !== 'orbit' || e.target.closest('.card')) return;
    cycleShape(1);
  });

  /* Open the current set in one go */
  $('#openSet').addEventListener('click', () => {
    let blocked = 0;
    order.forEach(i => {
      const w = window.open(SITES[i].url, '_blank');
      if (!w) blocked++; else { try { w.opener = null; } catch (er) {} }
    });
    if (blocked) toast(`浏览器拦截了 ${blocked} 个窗口，在地址栏允许本页弹出窗口后再点一次`, 4200);
    else toast(`已打开 ${order.length} 个站点`);
  });

  $('#iMore').addEventListener('click', () => openRoom(focusIdx));

  /* Room */
  const room = $('#room'), panel = $('#roomPanel'), grid = $('#roomGrid');
  const win = $('#win'), winView = $('#winView'), winPage = $('#winPage');
  const kS = $('#kScroll'), kZ = $('#kZoom'), kT = $('#kTilt');
  let roomIdx = -1, roomOpen = false, swapT = 0, demoRaf = 0, lastFocus = null;

  function applyKnobs() {
    const s = +kS.value, z = +kZ.value, t = +kT.value;
    const vw = winView.clientWidth, vh = winView.clientHeight;
    const maxY = Math.max(0, vw * 2 * z - vh);
    winPage.style.transform = `translate3d(${(-(z - 1) * vw / 2).toFixed(1)}px,${(-s * maxY).toFixed(1)}px,0) scale(${z.toFixed(3)})`;
    win.style.transform = t > 0.001 ? `rotateX(${(t * 14).toFixed(2)}deg) rotateY(${(-t * 18).toFixed(2)}deg) rotateZ(${(t * 1.6).toFixed(2)}deg) translateZ(${(t * 30).toFixed(1)}px)` : '';
    $('#oScroll').textContent = s.toFixed(2);
    $('#oZoom').textContent = z.toFixed(2);
    $('#oTilt').textContent = t.toFixed(2);
    [kS, kZ, kT].forEach(k => k.style.setProperty('--v', ((k.value - k.min) / (k.max - k.min) * 100) + '%'));
    $('#rPct').textContent = `Scroll ${Math.round(s * 100)}%`;
  }
  [kS, kZ, kT].forEach(k => k.addEventListener('input', () => { cancelAnimationFrame(demoRaf); applyKnobs(); }));
  winView.addEventListener('wheel', e => {
    e.preventDefault();
    cancelAnimationFrame(demoRaf);
    kS.value = clamp(+kS.value + e.deltaY / 1400, 0, 1);
    applyKnobs();
  }, { passive: false });
  let vDrag = null;
  winView.addEventListener('pointerdown', e => {
    vDrag = { y: PY(e), v: +kS.value };
    winView.setPointerCapture(e.pointerId);
    cancelAnimationFrame(demoRaf);
  });
  winView.addEventListener('pointermove', e => {
    if (!vDrag) return;
    kS.value = clamp(vDrag.v - (PY(e) - vDrag.y) / (winView.clientHeight * 2.2), 0, 1);
    applyKnobs();
  });
  winView.addEventListener('pointerup', () => { vDrag = null; });
  winView.addEventListener('pointercancel', () => { vDrag = null; });

  function demoKnob() {
    if (reduce.matches) return;
    const t0 = performance.now(), dur = 1500, to = 0.16;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      kS.value = to * e;
      applyKnobs();
      if (k < 1) demoRaf = requestAnimationFrame(step);
    };
    demoRaf = requestAnimationFrame(t => { requestAnimationFrame(step); });
  }

  function related(si) {
    const g = SITES[si].groups.filter(x => x !== 'pick');
    const same = SITES.map((_, i) => i).filter(i => i !== si && SITES[i].groups.some(x => g.includes(x)));
    const rest = SITES.map((_, i) => i).filter(i => i !== si && !same.includes(i));
    const rot = k => same.slice(k).concat(same.slice(0, k));
    return rot(si % Math.max(1, same.length)).concat(rest).slice(0, 3);
  }
  function fillRoom(si) {
    const s = SITES[si], m = META[s.id];
    roomIdx = si;
    $('#rCrumb').textContent = `Site ${pad(si + 1, 3)} / ${s.name}`;
    $('#rHead').innerHTML = `${m.h[0]}<em>${m.h[1]}</em>`;
    $('#rName').textContent = s.name;
    $('#rTag').textContent = s.tag;
    $('#rLine').textContent = s.line;
    $('#rDesc').textContent = s.desc;
    $('#rUrl').textContent = s.domain;
    $('#rFrame').textContent = `${pad(si + 1, 3)} / ${s.tag}`;
    const src = $('#rSrc'); src.href = s.url; src.textContent = s.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    $('#rGo').href = s.url;
    $('#rGoTxt').textContent = `打开 ${s.domain}`;
    winView.style.setProperty('--hue', m.hue);
    winPage.innerHTML = `<img src="assets/img/${s.id}-tall.webp" alt="${s.name} 首页长截图" width="1100" height="2200" decoding="async" draggable="false">`;
    $('#related').innerHTML = related(si).map(i => {
      const r = SITES[i];
      return `<button type="button" class="rel" data-i="${i}" style="--hue:${META[r.id].hue}"><div class="rel-img"><img src="assets/img/${r.id}-hero.webp" alt="" width="1280" height="800" loading="lazy" draggable="false"></div><div class="rel-cap"><span>${r.name}</span><span class="mono">${pad(i + 1)}</span></div></button>`;
    }).join('');
    kS.value = 0; kZ.value = 1; kT.value = 0;
    applyKnobs();
  }
  $('#related').addEventListener('click', e => {
    const b = e.target.closest('.rel');
    if (b) swapRoom(+b.dataset.i, 1);
  });

  function fly(fromEl, done) {
    const media = fromEl && fromEl.querySelector('.card-media');
    if (!media || reduce.matches) { done(); return; }
    const a = media.getBoundingClientRect();
    panel.style.transition = 'none';
    room.classList.add('open');
    const b = winView.getBoundingClientRect();
    room.classList.remove('open');
    void panel.offsetWidth;
    panel.style.transition = '';
    if (!a.width || !b.width) { done(); return; }
    const f = document.createElement('div');
    f.className = 'flyer';
    f.style.width = b.width + 'px';
    f.style.height = b.height + 'px';
    f.innerHTML = `<img src="assets/img/${SITES[roomIdx].id}-hero.webp" alt="">`;
    document.body.appendChild(f);
    media.style.opacity = '0';
    winView.style.opacity = '0';
    const anim = f.animate([
      { transform: `translate(${a.left}px,${a.top}px) scale(${a.width / b.width},${a.height / b.height})`, borderRadius: '15px' },
      { transform: `translate(${b.left}px,${b.top}px) scale(1,1)`, borderRadius: '2px' }
    ], { duration: 820, easing: 'cubic-bezier(.22,1,.36,1)' });
    done();
    anim.onfinish = () => {
      winView.style.opacity = '';
      f.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220 }).onfinish = () => f.remove();
      media.style.opacity = '';
    };
  }

  function openRoom(si, fromEl) {
    if (roomOpen) { swapRoom(si, si > roomIdx ? 1 : -1); return; }
    roomOpen = true;
    lastFocus = document.activeElement;
    fillRoom(si);
    room.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    const src = fromEl || cards[si];
    const visible = src && !src.classList.contains('gone') && +getComputedStyle(src).opacity > 0.3;
    fly(visible ? src : null, () => {
      requestAnimationFrame(() => {
        room.classList.add('open');
        panel.scrollTop = 0;
        panel.focus({ preventScroll: true });
        applyKnobs();
        demoKnob();
      });
    });
  }
  function swapRoom(si, dir) {
    if (si === roomIdx) return;
    grid.style.setProperty('--sx', (dir > 0 ? -28 : 28) + 'px');
    grid.classList.add('swap');
    clearTimeout(swapT);
    swapT = setTimeout(() => {
      fillRoom(si);
      grid.style.setProperty('--sx', (dir > 0 ? 28 : -28) + 'px');
      void grid.offsetWidth;
      grid.classList.remove('swap');
      panel.scrollTo({ top: 0, behavior: 'auto' });
      demoKnob();
    }, 190);
  }
  function stepRoom(dir) {
    const list = order.includes(roomIdx) ? order : SITES.map((_, i) => i);
    const k = list.indexOf(roomIdx);
    swapRoom(list[mod(k + dir, list.length)], dir);
  }
  function closeRoom() {
    if (!roomOpen) return;
    roomOpen = false;
    cancelAnimationFrame(demoRaf);
    room.classList.remove('open');
    document.documentElement.style.overflow = '';
    if (view === 'orbit' && order.includes(roomIdx)) goTo(roomIdx);
    setTimeout(() => { if (!roomOpen) room.hidden = true; }, 520);
    const back = view === 'grid' || order.includes(roomIdx) ? cards[roomIdx] : lastFocus;
    if (back && back.focus) back.focus({ preventScroll: true });
  }
  $('#rPrev').addEventListener('click', () => stepRoom(-1));
  $('#rNext').addEventListener('click', () => stepRoom(1));
  $('#rClose').addEventListener('click', closeRoom);
  room.addEventListener('click', e => { if (e.target === room) closeRoom(); });
  room.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = [...panel.querySelectorAll('a[href],button,input,[tabindex="0"]')].filter(x => x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* Keys */
  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); if (roomOpen) closeRoom(); qEl.focus(); qEl.select(); }
      return;
    }
    const a = document.activeElement;
    if (isTyping(a)) return;
    if (roomOpen) {
      if (e.key === 'Escape') { e.preventDefault(); closeRoom(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); stepRoom(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); stepRoom(1); }
      else if (e.key === 'Enter' && (a === panel || a === document.body)) { e.preventDefault(); window.open(SITES[roomIdx].url, '_blank', 'noopener'); }
      return;
    }
    if (e.key === '/') { e.preventDefault(); qEl.focus(); return; }
    if (e.key === 'g' || e.key === 'G') { setView(view === 'orbit' ? 'grid' : 'orbit'); return; }
    if (e.key === 's' || e.key === 'S') { cycleShape(e.shiftKey ? -1 : 1); return; }
    if (/^[0-9]$/.test(e.key)) {
      const si = e.key === '0' ? 9 : +e.key - 1;
      if (SITES[si]) { if (view === 'orbit' && order.includes(si) && si !== focusIdx) goTo(si); else openRoom(si); }
      return;
    }
    if (view === 'orbit') {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'Enter' && (!a || a === document.body || a.classList.contains('card'))) {
        if (a && a.classList.contains('card') && +a.dataset.i !== focusIdx) return;
        e.preventDefault(); if (order.length) openRoom(focusIdx);
      }
    }
  });

  /* 小瑶叶: floating follow card */
  const yy = $('#yy'), yyBtn = $('#yyBtn'), yyPop = $('#yyPop');
  let yyOpen = false;
  function setYY(open) {
    yyOpen = open;
    yy.classList.toggle('open', open);
    yyBtn.setAttribute('aria-expanded', String(open));
    yyPop.inert = !open;
    if (open) setTimeout(() => yyPop.querySelector('[data-tab].on').focus({ preventScroll: true }), 60);
  }
  yyPop.inert = true;
  const yyHop = yy.querySelector('.yy-hop');
  yyBtn.addEventListener('click', e => {
    e.stopPropagation(); setYY(!yyOpen);
    if (reduce.matches) return;
    yyHop.classList.remove('go'); void yyHop.offsetWidth; yyHop.classList.add('go');
  });
  yyHop.addEventListener('animationend', () => yyHop.classList.remove('go'));
  let yyRaf = 0, yyX = 0, yyY = 0;
  document.addEventListener('pointermove', e => {
    if (!fine.matches || reduce.matches) return;
    yyX = e.clientX; yyY = e.clientY;
    if (yyRaf) return;
    yyRaf = requestAnimationFrame(() => {
      yyRaf = 0;
      const r = yyBtn.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (yyX - (r.left + r.width / 2)) / 600));
      const dy = Math.max(-1, Math.min(1, (yyY - (r.top + r.height / 2)) / 500));
      yy.style.setProperty('--ry', (dx * 22).toFixed(2) + 'deg');
      yy.style.setProperty('--rx', (-dy * 10).toFixed(2) + 'deg');
    });
  }, { passive: true });
  yyPop.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('click', () => yyOpen && setYY(false));
  yyPop.querySelectorAll('[data-tab]').forEach(t => t.addEventListener('click', () => {
    yyPop.querySelectorAll('[data-tab]').forEach(x => { x.classList.toggle('on', x === t); x.setAttribute('aria-selected', String(x === t)); });
    yyPop.dataset.tab = t.dataset.tab;
  }));
  yyPop.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    const v = b.dataset.copy;
    try { await navigator.clipboard.writeText(v); }
    catch (er) { const t = document.createElement('textarea'); t.value = v; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e2) {} t.remove(); }
    b.classList.add('done');
    setTimeout(() => b.classList.remove('done'), 1600);
    toast(`已复制 ${v}`);
  }));
  setTimeout(() => { if (!yyOpen) { yy.classList.add('hello'); setTimeout(() => yy.classList.remove('hello'), 3200); } }, 2600);
  addEventListener('keydown', e => {
    if (yyOpen && e.key === 'Escape') { e.stopImmediatePropagation(); setYY(false); yyBtn.focus(); }
  }, true);

  const catFade = () => {
    const m = catsEl.scrollWidth - catsEl.clientWidth;
    catsEl.classList.toggle('fade-l', catsEl.scrollLeft > 2);
    catsEl.classList.toggle('fade-r', m > 2 && catsEl.scrollLeft < m - 2);
  };
  catsEl.addEventListener('scroll', catFade, { passive: true });
  addEventListener('resize', catFade);

  /* Init */
  addEventListener('resize', () => { moveCatInd(); if (!intro) render(); if (roomOpen) applyKnobs(); });
  fine.addEventListener('change', () => kick());
  setView(view, true);
  moveCatInd();
  catFade();
  setFocus(0);
  (function introRun() {
    const g = stageBox();
    studio.classList.add('live');
    cards.forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = view === 'orbit'
        ? `translate3d(${(g.w * 0.4 - CW / 2 + 260).toFixed(0)}px,${(g.h * 0.6 - CH / 2 + 180).toFixed(0)}px,-900px) rotateX(24deg) rotateY(-30deg) scale(.9)`
        : `translate3d(0px,80px,0px) scale(.6)`;
    });
    void rig.offsetWidth;
    requestAnimationFrame(() => {
      studio.classList.remove('live');
      intro = false;
      stagger(view === 'orbit' ? 70 : 40);
      render();
      if (view === 'grid') loadTall();
    });
  })();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { moveCatInd(); render(); });
  if (!store.get('hinted', false) && fine.matches) {
    setTimeout(() => toast('提示：按 / 搜索，← → 翻阅，停一会儿或双击空白处，卡片会换个队形', 3600), 1800);
    store.set('hinted', true);
  }
})();
