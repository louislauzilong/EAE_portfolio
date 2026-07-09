// ===== SLIDE DATA =====
const slidesData = [
  {
    title: "My Journey through Data Analytics",
    content: `
      <div class="slide-callout slide-hero-callout">
        <p class="slide-hero-line"><strong>Exploring patterns</strong>, solving problems, and turning information into insight.</p>
      </div>
      <div class="course-grid">
        <div class="course-item"><strong>TP</strong> Diploma in Big Data & Analytics (T60)</div>
        <div class="course-item"><strong>SP</strong> Diploma in AI and Analytics (S30)</div>
        <div class="course-item"><strong>NP</strong> Diploma in Applied AI & Analytics (N81)</div>
      </div>
    `
  },
  {
    title: "About Me",
    content: `
      <div class="slide-split">
        <div class="slide-copy">
          <ul>
            <li>I am <strong>Louis</strong> from <strong>Beatty Secondary School</strong> and I am graduating in <strong>2026</strong>.</li>
            <li><strong>Subjects:</strong> English, Chinese, E-Maths, History & Geography (combined), Physics & Chemistry (combined), Principles of Accounting.</li>
            <li>Outside of school I enjoy <strong>canoeing</strong> and playing video games like <strong>Valorant</strong>. I also watch <strong>Formula 1</strong> in my free time!</li>
          </ul>
        </div>
        <div class="slide-media">
          <img src="assets/images/slide2-photo.jpeg" alt="Louis with cat" class="slide-img slide2-portrait" />
        </div>
      </div>
    `
  },
  {
    title: "Why do I want to do Data Analytics?",
    content: `
      <div class="slide-callout">
        <p><strong>TikTok</strong> fascinated me because its <strong>For You Page</strong> shows how data can be used to recommend content that matches users' interests.</p>
      </div>
      <ul>
        <li>Those recommendations come from <strong>collecting and analysing large amounts of user data</strong> to provide added value.</li>
        <li>When analysed effectively, data can <strong>reveal patterns</strong>, <strong>predict user behaviour</strong>, and help organisations make <strong>better decisions</strong>.</li>
      </ul>
    `
  },
  {
    title: "Nexus A*STAR Project Overview",
    content: `
      <div class="slide-split">
        <div class="slide-copy">
          <ul>
            <li>I participated and led a team for a project under <strong>Nexus A*Star</strong> to explore how <strong>data</strong> and <strong>technology-driven approaches</strong> could solve real-world problems.</li>
            <li>I researched previous studies on how <strong>classical piano music</strong> may affect <strong>memory</strong>, then designed and conducted our own tests. We used <strong>Excel</strong> to collate the data and analyse trends.</li>
          </ul>
          <a href="assets/testimonials/NX 3023_Research Proposal_Group 1.pdf" target="_blank" rel="noopener" class="btn btn-small">Click here for the poster in HD</a>
        </div>
        <div class="slide-media">
          <img src="assets/images/nexus.png" alt="Nexus A*STAR poster" class="slide-img slide4-poster" />
        </div>
      </div>
    `
  },
  {
    title: "Data Analysis Process & Reflection",
    content: `
      <ul>
        <li>Using Excel we calculated the average scores and plotted the data onto a graph to see the correlation between music and improved memory.</li>
      </ul>
      <div class="data-visual-grid">
        <div class="table-wrap">
          <table>
            <tr><th>Role</th><th>Avg with music</th><th>Avg without music</th><th>Difference</th></tr>
            <tr><td>Student</td><td>11.8</td><td>11.9</td><td>-0.1</td></tr>
            <tr><td>Teacher</td><td>15.0</td><td>11.0</td><td>+4.0</td></tr>
            <tr><td><strong>Overall</strong></td><td><strong>11.9</strong></td><td><strong>11.2</strong></td><td><strong>+0.7</strong></td></tr>
          </table>
        </div>
        <div class="chart-card" aria-label="Bar chart of memory test averages with and without music">
          <svg viewBox="0 0 420 260" role="img" aria-labelledby="slide5ChartTitle slide5ChartDesc" preserveAspectRatio="xMidYMid meet">
            <title id="slide5ChartTitle">Average memory scores with and without music</title>
            <desc id="slide5ChartDesc">Teacher scores rise from 11.0 to 15.0 with music, while student and overall scores are near 12.</desc>

            <line x1="52" y1="220" x2="392" y2="220" stroke="rgba(176,196,222,0.6)" stroke-width="1" />
            <line x1="52" y1="180" x2="392" y2="180" stroke="rgba(176,196,222,0.2)" stroke-width="1" />
            <line x1="52" y1="140" x2="392" y2="140" stroke="rgba(176,196,222,0.2)" stroke-width="1" />
            <line x1="52" y1="100" x2="392" y2="100" stroke="rgba(176,196,222,0.2)" stroke-width="1" />
            <line x1="52" y1="60" x2="392" y2="60" stroke="rgba(176,196,222,0.2)" stroke-width="1" />

            <text x="40" y="224" fill="rgba(176,196,222,0.8)" font-size="12" text-anchor="end">0</text>
            <text x="40" y="184" fill="rgba(176,196,222,0.8)" font-size="12" text-anchor="end">4</text>
            <text x="40" y="144" fill="rgba(176,196,222,0.8)" font-size="12" text-anchor="end">8</text>
            <text x="40" y="104" fill="rgba(176,196,222,0.8)" font-size="12" text-anchor="end">12</text>
            <text x="40" y="64" fill="rgba(176,196,222,0.8)" font-size="12" text-anchor="end">16</text>

            <rect x="63" y="102" width="34" height="118" rx="6" fill="rgba(0, 212, 255, 0.9)" />
            <rect x="107" y="101" width="34" height="119" rx="6" fill="rgba(26, 107, 255, 0.9)" />
            <text x="80" y="96" fill="#e8edf5" font-size="11" text-anchor="middle">11.8</text>
            <text x="124" y="95" fill="#e8edf5" font-size="11" text-anchor="middle">11.9</text>

            <rect x="181" y="70" width="34" height="150" rx="6" fill="rgba(0, 212, 255, 0.9)" />
            <rect x="225" y="110" width="34" height="110" rx="6" fill="rgba(26, 107, 255, 0.9)" />
            <text x="198" y="64" fill="#e8edf5" font-size="11" text-anchor="middle">15.0</text>
            <text x="242" y="104" fill="#e8edf5" font-size="11" text-anchor="middle">11.0</text>

            <rect x="299" y="101" width="34" height="119" rx="6" fill="rgba(0, 212, 255, 0.9)" />
            <rect x="343" y="108" width="34" height="112" rx="6" fill="rgba(26, 107, 255, 0.9)" />
            <text x="316" y="95" fill="#e8edf5" font-size="11" text-anchor="middle">11.9</text>
            <text x="360" y="102" fill="#e8edf5" font-size="11" text-anchor="middle">11.2</text>

            <text x="102" y="242" fill="rgba(176,196,222,0.9)" font-size="12" text-anchor="middle">Student</text>
            <text x="220" y="242" fill="rgba(176,196,222,0.9)" font-size="12" text-anchor="middle">Teacher</text>
            <text x="338" y="242" fill="rgba(176,196,222,0.9)" font-size="12" text-anchor="middle">Overall</text>
          </svg>
          <div class="chart-legend">
            <span><i class="legend-dot with-music"></i>With music</span>
            <span><i class="legend-dot without-music"></i>Without music</span>
          </div>
        </div>
      </div>
      <ul>
        <li>The project increased my interest in data collection and visual presentation. I learnt to look at data critically and understand that data science is about gaining insight and creating meaningful solutions.</li>
        <li>This was my first leadership experience – I assigned tasks, led meet-ups, and ensured timelines were met. I adapted to different circumstances and solved problems creatively.</li>
      </ul>
      <a href="https://beattyss.sharepoint.com/:x:/s/2025Nexus3023A/IQBQcPStrfoIRpCPVol5a-jPAev6EZCbB202wrB5-4HWl34?e=dLRwtF" target="_blank" rel="noopener" class="btn btn-small">Click here for the raw data!</a>
    `
  },
  {
    title: "What I plan to learn",
    content: `
      <div class="slide-dual-panels">
        <section class="slide-panel">
          <h3>My current skill set</h3>
          <ul class="slide-bigger-list">
            <li><strong>Excel</strong> for data analysis</li>
            <li><strong>Micro:bit</strong> programming</li>
            <li><strong>Research</strong> and identifying variables</li>
            <li><strong>Problem solving</strong></li>
            <li><strong>Leading</strong> a team</li>
            <li><strong>Data interpretation</strong></li>
          </ul>
        </section>
        <section class="slide-panel">
          <h3>What I look forward to learn</h3>
          <ul class="slide-bigger-list">
            <li><strong>Python</strong></li>
            <li><strong>SQL</strong></li>
            <li><strong>Machine learning</strong></li>
            <li>More complex <strong>data visualisation</strong> methods</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    title: "Developing Solutions through Technology",
    content: `
      <h3>Micro:bit Experience</h3>
      <ul>
        <li>Learnt coding fundamentals</li>
        <li>Designed a prototype with my team</li>
        <li>Improved design based on user feedback</li>
        <li style="font-style:italic; color:var(--accent-cyan);">"This experience introduced me to how technology can be combined with problem-solving to create useful solutions."</li>
      </ul>
      <img src="assets/images/microbit.png" alt="Micro:bit" class="slide-img slide7-image rotated-landscape-image reverse" />
    `
  },
  {
    title: "My Achievements / Leadership (Part 1)",
    content: `
      <img src="assets/images/image.webp" alt="Peer Support Leader" class="slide-img landscape-image" />
      <ul>
        <li>As a <strong>peer support leader</strong> for my class and CCA I look out for the people around me and provide a helping hand. I spearheaded <strong>bonding activities</strong>, efforts to thank canteen vendors, and promoted <strong>cyberwellness</strong>.</li>
      </ul>
      <a href="assets/images/term3-class-bonding-activities.pdf" target="_blank" rel="noopener" class="btn btn-small" aria-label="View some activities I did in PDF format">view some activities I did</a>
      <img src="assets/images/microbit.png" alt="Micro:bit prototype" class="slide-img landscape-image rotated-landscape-image reverse" />
      <ul>
        <li>My team and I created a <strong>back massager</strong> to provide relief for the <strong>elderly</strong>. We learnt how to utilise <strong>Micro:bit</strong> in real-life situations and created solutions for people. I stepped up to <strong>lead the team</strong> and together we created a prototype.</li>
      </ul>
    `
  },
  {
    title: "My Achievements / Leadership (Part 2)",
    content: `
      <img src="assets/images/image.png" alt="Certificate of Merit" class="slide-img slide9-certificate" />
      <ul>
        <li>For the <strong>Nexus A*Star Research</strong> our team was awarded <strong><u>Merit</u></strong> for our year-long project on <strong>data collection</strong> and <strong>analysis</strong>.</li>
      </ul>
      <img src="assets/images/VIA.webp" alt="CCA and VIA" class="slide-img" />
      <ul>
        <li>Throughout my time in <strong>Beatty Secondary</strong>, I was consistent in attending <strong>CCA</strong> sessions and participated in various competitions (<strong>Pesta Sukan</strong>, <strong>National School Games</strong>, <strong>Singapore Junior Canoeing Championship</strong>) representing my school!</li>
        <li>My teacher also commended my efforts as a <strong>peer support leader</strong> during a class-initiated <strong>VIA</strong> project where we assisted the cleaning aunties and uncles clean up the school.</li>
      </ul>
    `
  },
  {
    title: "My Choices in EAE courses",
    content: `
      <div class="course-grid">
        <div class="course-item">
          <strong>TP – Big Data & Analytics (T60)</strong>
          <ul style="margin-top:0.5rem;">
            <li>Focuses specifically on data analytics</li>
            <li>Develop skills to support business decisions</li>
            <li>I take POA, so I can apply accounting skills</li>
            <li>Learn how Big Data is harnessed</li>
          </ul>
        </div>
        <div class="course-item">
          <strong>SP – Applied AI & Analytics (S30)</strong>
          <ul style="margin-top:0.5rem;">
            <li>Explore programming and machine learning</li>
            <li>Generate insights into analytics</li>
            <li>Learn how people look at data</li>
          </ul>
        </div>
        <div class="course-item">
          <strong>NP – Applied AI & Analytics (N81)</strong>
          <ul style="margin-top:0.5rem;">
            <li>Build knowledge in intelligent systems and AI</li>
            <li>Incorporate AI and Data to make life convenient</li>
            <li>Enhance digital literacy – my dad uses Power BI!</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Thank you for your consideration!",
    content: `
      <div class="slide-split slide-11-layout">
        <div class="slide-copy slide-11-copy">
          <p class="slide-11-name">Lau Zi Long Louis</p>
          <p class="slide-11-message">Looking forward to starting my <strong>poly life</strong> in your school and continuing to grow as a learner, teammate, and problem solver!</p>
          <p class="slide-11-finale">See you at poly!</p>
          <p class="slide-11-badge slide-11-badge-end">The end!! :D</p>
        </div>
        <div class="slide-media">
          <img src="assets/images/Slide 11.jpeg" alt="Louis mirror selfie" class="slide-img slide11-photo" />
        </div>
      </div>
    `
  },
  {
    title: "What is a Data Analyst?",
    content: `
      <ul>
        <li style="font-size:1.6rem; font-weight:500; text-align:center; list-style:none; padding-left:0;">A <strong>Data Analyst</strong> is a professional who <strong>collects</strong>, <strong>processes</strong>, and <strong>analyses</strong> data to support <strong>decision making</strong>.</li>
      </ul>
    `
  }
];

// ===== SLIDER LOGIC =====
let currentSlide = 0;
const wrapper = document.getElementById('sliderWrapper');
const dotsContainer = document.getElementById('dotsContainer');
const slideNumber = document.getElementById('slideNumber');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const fullscreenBtn = document.getElementById('fullscreenSlideBtn');
const fullscreenOverlay = document.getElementById('slideFullscreenOverlay');
const fullscreenContent = document.getElementById('slideFullscreenContent');
const fullscreenCloseBtn = document.getElementById('slideFullscreenClose');
const fullscreenPrevBtn = document.getElementById('slideFullscreenPrev');
const fullscreenNextBtn = document.getElementById('slideFullscreenNext');
const fullscreenCounter = document.getElementById('slideFullscreenCounter');
const sliderContainer = document.querySelector('.slider-container');
let lastFocusedElement = null;
let touchStartX = 0;
let touchStartY = 0;

function renderSlides() {
  wrapper.innerHTML = '';
  slidesData.forEach((slide, index) => {
    const div = document.createElement('div');
    div.className = `slide slide--${index + 1}`;
    div.innerHTML = `
      <div class="slide-shell">
        <span class="slide-badge">Slide ${index + 1}</span>
        <h2>${slide.title}</h2>
        <div class="slide-body">${slide.content}</div>
      </div>
    `;
    wrapper.appendChild(div);
  });
  dotsContainer.innerHTML = '';
  slidesData.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('data-index', i);
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
    dot.classList.toggle('active', i === 0);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  updateSlide();
}

function updateSlide() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.slider-dots button').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
    dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
  });
  slideNumber.textContent = `${currentSlide + 1} / ${slidesData.length}`;
}

function goToSlide(index) {
  if (index < 0) index = slidesData.length - 1;
  if (index >= slidesData.length) index = 0;
  currentSlide = index;
  updateSlide();
}

function handleTouchStart(event) {
  const touch = event.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}

function handleTouchEnd(event) {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
    if (deltaX < 0) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(currentSlide - 1);
    }
  }

  touchStartX = 0;
  touchStartY = 0;
}

function renderFullscreenSlide() {
  if (!fullscreenContent) return;
  fullscreenContent.innerHTML = `
    <div class="slide slide--${currentSlide + 1}">
      <div class="slide-shell">
        <span class="slide-badge">Slide ${currentSlide + 1}</span>
        <h2>${slidesData[currentSlide].title}</h2>
        <div class="slide-body">${slidesData[currentSlide].content}</div>
      </div>
    </div>
  `;
  if (fullscreenCounter) {
    fullscreenCounter.textContent = `${currentSlide + 1} / ${slidesData.length}`;
  }
}

function openFullscreenView(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (!fullscreenOverlay) return;
  lastFocusedElement = document.activeElement;
  renderFullscreenSlide();
  fullscreenOverlay.classList.add('active');
  fullscreenOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (fullscreenCloseBtn) {
    fullscreenCloseBtn.focus();
  }
}

function closeFullscreenView() {
  if (!fullscreenOverlay) return;
  fullscreenOverlay.classList.remove('active');
  fullscreenOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
if (fullscreenBtn) {
  fullscreenBtn.addEventListener('click', openFullscreenView);
}
if (fullscreenCloseBtn) {
  fullscreenCloseBtn.addEventListener('click', closeFullscreenView);
}
if (fullscreenPrevBtn) {
  fullscreenPrevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    renderFullscreenSlide();
  });
}
if (fullscreenNextBtn) {
  fullscreenNextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    renderFullscreenSlide();
  });
}
if (fullscreenOverlay) {
  fullscreenOverlay.addEventListener('click', (event) => {
    if (event.target === fullscreenOverlay) closeFullscreenView();
  });
}

document.addEventListener('keydown', (event) => {
  if (!fullscreenOverlay || !fullscreenOverlay.classList.contains('active')) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeFullscreenView();
    return;
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    goToSlide(currentSlide - 1);
    renderFullscreenSlide();
    return;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    goToSlide(currentSlide + 1);
    renderFullscreenSlide();
  }
});

if (sliderContainer) {
  sliderContainer.setAttribute('tabindex', '0');
  sliderContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
  sliderContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
  sliderContainer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToSlide(currentSlide - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToSlide(currentSlide + 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      goToSlide(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      goToSlide(slidesData.length - 1);
    }
  });
}
renderSlides();

// ===== TYPEWRITER =====
(function() {
  const nameEl = document.getElementById('typewriter-name');
  if (!nameEl) return;
  const text = 'Louis Lau';
  let index = 0;
  function type() {
    if (index < text.length) {
      nameEl.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  window.addEventListener('load', () => setTimeout(type, 300));
})();

// ===== AUTO-EXPAND ABOUT =====
(function() {
  const aboutDetails = document.getElementById('about-details');
  if (!aboutDetails) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => aboutDetails.setAttribute('open', ''), 400);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(aboutDetails);
})();

// ===== SCROLL REVEAL =====
(function() {
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => revealObserver.observe(el));
})();

// ===== MOBILE MENU =====
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');
const navLinks = document.querySelectorAll('#navbar a');
const mobileViewToggle = document.querySelector('#mobileViewToggle');

function updateMobileViewToggleLabel(isMobilePreview) {
  if (!mobileViewToggle) return;
  const label = mobileViewToggle.querySelector('span');
  mobileViewToggle.setAttribute('aria-pressed', String(isMobilePreview));
  mobileViewToggle.setAttribute('aria-label', isMobilePreview ? 'Exit mobile preview mode' : 'View in mobile preview mode');
  if (label) {
    label.textContent = isMobilePreview ? 'Exit mobile view' : 'View in mobile';
  }
}

if (mobileViewToggle) {
  const savedMobilePreview = localStorage.getItem('mobilePreviewMode') === 'true';
  if (savedMobilePreview) {
    document.body.classList.add('force-mobile-view');
  }
  updateMobileViewToggleLabel(savedMobilePreview);

  mobileViewToggle.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('force-mobile-view');
    localStorage.setItem('mobilePreviewMode', String(enabled));
    updateMobileViewToggleLabel(enabled);
  });
}

menuIcon.addEventListener('click', () => {
  const open = !navbar.classList.contains('active');
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  menuIcon.setAttribute('aria-expanded', String(open));
});

menuIcon.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  menuIcon.click();
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    menuIcon.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (!sectionId) return;
    const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
    if (!activeLink) return;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      activeLink.classList.add('active');
    } else {
      activeLink.classList.remove('active');
    }
  });
  if (window.innerWidth <= 820) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    menuIcon.setAttribute('aria-expanded', 'false');
  }
});

// ===== CONTACT FORM =====
(function() {
  const modalOverlay = document.querySelector('#thankyou-modal');
  const modal = modalOverlay ? modalOverlay.querySelector('.modal') : null;
  const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
  const modalOk = modalOverlay ? modalOverlay.querySelector('.modal-ok') : null;

  function showModal() {
    if (!modalOverlay || !modal) return;
    modalOverlay.style.display = 'grid';
    requestAnimationFrame(() => modal.classList.add('show'));
  }

  function hideModal() {
    if (!modalOverlay || !modal) return;
    modal.classList.remove('show');
    setTimeout(() => modalOverlay.style.display = 'none', 260);
  }

  if (modalClose) modalClose.addEventListener('click', hideModal);
  if (modalOk) modalOk.addEventListener('click', hideModal);
  if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) hideModal();
  });

  const contactForm = document.querySelector('#contact-form');
  const formSuccess = document.querySelector('#form-success');
  const formError = document.querySelector('#form-error');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const messageField = contactForm.querySelector('textarea[name="message"]');

      if (formSuccess) { formSuccess.textContent = ''; formSuccess.style.display = 'none'; }
      if (formError) { formError.textContent = ''; formError.style.display = 'none'; }

      if (messageField && !messageField.value.trim()) {
        if (formError) {
          formError.textContent = 'Please enter a message before sending.';
          formError.style.display = 'block';
        }
        messageField.focus();
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      const formData = new FormData(contactForm);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          showModal();
          if (formSuccess) {
            formSuccess.textContent = 'Message sent successfully. Thank you!';
            formSuccess.style.display = 'block';
          }
          contactForm.reset();
        } else {
          let errorMessage = 'There was a problem. Please try again.';
          try {
            const data = await response.json();
            if (data && typeof data.error === 'string' && data.error.trim()) {
              errorMessage = data.error;
            }
          } catch {
            const rawText = await response.text();
            if (rawText && rawText.trim()) {
              errorMessage = rawText.trim();
            }
          }
          if (formError) {
            formError.textContent = errorMessage;
            formError.style.display = 'block';
          }
        }
      } catch (error) {
        clearTimeout(timeoutId);
        if (formError) {
          formError.textContent = error.name === 'AbortError'
            ? 'The request timed out. Please try again in a moment.'
            : 'Network error. Please check your connection.';
          formError.style.display = 'block';
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Send Message';
        }
      }
    });
  }
})();
