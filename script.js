// ===== SLIDE DATA =====
const slidesData = [
  {
    title: "My Journey through Data Analytics",
    content: `
      <p style="font-size:1.3rem; text-align:center; margin-bottom:0.5rem;">Exploring patterns, solving problems and turning information into insight</p>
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
      <p>I am Louis from Beatty Secondary School and I am graduating in 2026.</p>
      <p><strong>Subjects:</strong> English, Chinese, E-Maths, History & Geography (combined), Physics & Chemistry (combined), Principles of Accounting.</p>
      <p>Outside of school I enjoy canoeing and playing video games like Valorant. I also watch Formula 1 in my free time!</p>
      <img src="assets/images/portrait.png" alt="Louis" class="slide-img" style="max-height:200px; width:auto; border-radius:50%;" />
    `
  },
  {
    title: "Why do I want to do Data Analytics?",
    content: `
      <p>I was fascinated by how platforms such as TikTok are able to recommend content that matches users' interests (the For You Page). I learnt that these recommendations come from collecting and analysing large amounts of user data to provide added value.</p>
      <p>When analysed effectively, data has the ability to reveal patterns, predict user behaviour and help organizations make better decisions. This sparked my curiosity on how data can influence decisions and improve services around us.</p>
    `
  },
  {
    title: "Nexus A*STAR Project Overview",
    content: `
      <p>I participated and led a team for a project under Nexus A*Star. The aim was to explore how data and technology-driven approaches could be used to address real-world problems.</p>
      <p>I researched previous studies on how music may affect memory and we designed and conducted our own tests. We used Excel to collate the data and analyse trends.</p>
      <img src="assets/images/nexus.png" alt="Nexus A*STAR poster" class="slide-img" />
      <a href="assets/testimonials/NX 3023_Research Proposal_Group 1.pdf" target="_blank" rel="noopener" class="btn btn-small">Click here for the poster in HD</a>
    `
  },
  {
    title: "Data Analysis Process & Reflection",
    content: `
      <p>Using Excel we calculated the average scores and plotted the data onto a graph to see the correlation between music and improved memory.</p>
      <div class="table-wrap">
        <table>
          <tr><th>Role</th><th>Avg with music</th><th>Avg without music</th><th>Difference</th></tr>
          <tr><td>Student</td><td>11.8</td><td>11.9</td><td>-0.1</td></tr>
          <tr><td>Teacher</td><td>15.0</td><td>11.0</td><td>+4.0</td></tr>
          <tr><td><strong>Overall</strong></td><td><strong>11.9</strong></td><td><strong>11.2</strong></td><td><strong>+0.7</strong></td></tr>
        </table>
      </div>
      <p>The project increased my interest in data collection and visual presentation. I learnt to look at data critically and understand that data science is about gaining insight and creating meaningful solutions.</p>
      <p>This was my first leadership experience – I assigned tasks, led meet-ups, and ensured timelines were met. I adapted to different circumstances and solved problems creatively.</p>
      <a href="https://beattyss.sharepoint.com/:x:/s/2025Nexus3023A/IQBQcPStrfoIRpCPVol5a-jPAev6EZCbB202wrB5-4HWl34?e=dLRwtF" target="_blank" rel="noopener" class="btn btn-small">Click here for the raw data!</a>
    `
  },
  {
    title: "What I plan to learn",
    content: `
      <h3>My current skillset:</h3>
      <ul>
        <li>Excel for data analysis</li>
        <li>Microbit programming</li>
        <li>Research and identifying variables</li>
        <li>Problem Solving</li>
        <li>Leading a team</li>
        <li>Data Interpretation</li>
      </ul>
      <h3>What I look forward to learn:</h3>
      <ul>
        <li>Python</li>
        <li>SQL</li>
        <li>Machine Learning</li>
        <li>More complex Data visualisation methods</li>
      </ul>
    `
  },
  {
    title: "My Achievements / Leadership (Part 1)",
    content: `
      <img src="assets/images/image.webp" alt="Peer Support Leader" class="slide-img" />
      <p>As a peer support leader for my class and CCA I look out for the people around me and provide a helping hand. I spearheaded bonding activities, efforts to thank canteen vendors, and promoted cyberwellness.</p>
      <img src="assets/images/microbit.png" alt="Micro:bit prototype" class="slide-img" />
      <p>My team and I created a back massager to provide relief for the elderly. We learnt how to utilise Microbit in real-life situations and created solutions for people. I stepped up to lead the team and together we created a prototype.</p>
    `
  },
  {
    title: "My Achievements / Leadership (Part 2)",
    content: `
      <img src="assets/images/image.webp" alt="Young Engineer Award" class="slide-img" style="max-height:200px;" />
      <p>For the Nexus A*Star Research our team was awarded <strong>Merit</strong> for our year-long project on data collection and analysis.</p>
      <img src="assets/images/VIA.webp" alt="CCA and VIA" class="slide-img" />
      <p>Throughout my time in Beatty Secondary, I was consistent in attending CCA sessions and participated in various competitions (Pesta Sukan, National School Games, Singapore Junior Canoeing Championship) representing my school!</p>
      <p>My teacher also commended my efforts as a peer support leader during a class-initiated VIA project where we assisted the cleaning aunties and uncles clean up the school.</p>
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
      <p style="font-size:2.5rem; font-weight:700; color:var(--accent-cyan); text-align:center;">Lau Zi Long Louis</p>
      <p style="font-size:1.4rem; text-align:center;">Looking forward to starting my Poly life in your school!</p>
      <img src="assets/images/portrait.png" alt="Louis" class="slide-img" style="max-height:200px; width:auto; border-radius:50%; margin-top:1rem;" />
    `
  },
  {
    title: "What is a Data Analyst?",
    content: `
      <p style="font-size:1.6rem; font-weight:500; text-align:center;">A Data Analyst is a professional who collects, processes, and analyzes data to support decision making.</p>
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
      </ul>
      <p style="font-style:italic; color:var(--accent-cyan); font-size:1.2rem;">"This experience introduced me to how technology can be combined with problem-solving to create useful solutions."</p>
      <img src="assets/images/microbit.png" alt="Micro:bit" class="slide-img" style="max-height:200px;" />
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
const sliderContainer = document.querySelector('.slider-container');
let touchStartX = 0;
let touchStartY = 0;

function renderSlides() {
  wrapper.innerHTML = '';
  slidesData.forEach((slide, index) => {
    const div = document.createElement('div');
    div.className = 'slide';
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

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

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

menuIcon.addEventListener('click', () => {
  const open = !navbar.classList.contains('active');
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  menuIcon.setAttribute('aria-expanded', String(open));
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
      if (formSuccess) { formSuccess.textContent = ''; formSuccess.style.display = 'none'; }
      if (formError) { formError.textContent = ''; formError.style.display = 'none'; }
      const formData = new FormData(contactForm);
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });
        if (response.ok) {
          showModal();
          contactForm.reset();
        } else {
          const data = await response.json();
          if (formError) {
            formError.textContent = data.error || 'There was a problem. Please try again.';
            formError.style.display = 'block';
          }
        }
      } catch (error) {
        if (formError) {
          formError.textContent = 'Network error. Please check your connection.';
          formError.style.display = 'block';
        }
      }
    });
  }
})();
