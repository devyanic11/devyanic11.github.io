// Render portfolio data dynamically

document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Render social icons
    renderSocialIcons();

    // Render experience
    renderExperience();

    // Render tech stack
    renderTechStack();

    // Render achievements
    renderAchievements();

    // Render education
    renderEducation();

    // Render projects
    renderProjects();

    // Render blogs
    renderBlogs();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

function renderSocialIcons() {
    const container = document.getElementById('social-icons');

    const iconSVGs = {
        'GitHub': '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        'LinkedIn': '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        'Twitter': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height="16" width="16"><desc>Twitter X Streamline Icon: https://streamlinehq.com</desc><path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" stroke-width="1"></path></svg>',
        'LeetCode': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode"><path fill="currentColor" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="currentColor" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="currentColor" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>',
        'Hashnode': '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="currentColor" d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126	c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291	C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7	C31,27.866,27.866,31,24,31z"></path></svg>',
        'Kaggle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="kaggle"><path fill="currentColor" d="M7.998 0h-2.4c-.233 0-.348.118-.348.352v23.295c0 .235.115.352.348.352h2.401c.232 0 .349-.117.349-.352v-5.11l1.427-1.374 5.115 6.59c.137.165.299.247.485.247h3.097c.162 0 .255-.047.278-.141l-.07-.353-6.749-8.494 6.471-6.343c.121-.124.078-.493-.244-.493h-3.201c-.162 0-.324.083-.487.247l-6.123 6.273V.352C8.347.118 8.23 0 7.998 0z"></path></svg>'
    };

    portfolioData.social.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link';
        link.setAttribute('aria-label', social.name);
        link.innerHTML = iconSVGs[social.name] || social.name;
        container.appendChild(link);
    });
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    portfolioData.experience.forEach(exp => {
                const item = document.createElement('div');
                item.className = 'experience-item';
                item.innerHTML = `
      <div class="experience-content">
        <div class="experience-left">
          <h3 class="experience-title">${exp.title}</h3>
          <h4 class="experience-company">${exp.company}</h4>
          <div class="experience-meta">
            <span class="experience-period">${exp.period}</span>
            <span class="experience-type">${exp.type}</span>
          </div>
        </div>
        <div class="experience-right">
          <div class="experience-tech">${exp.technologies.join(', ')}</div>
          <ul class="experience-achievements">
            ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderTechStack() {
  const container = document.getElementById('tech-stack');
  Object.entries(portfolioData.techStack).forEach(([category, techs]) => {
    const group = document.createElement('div');
    group.className = 'tech-category-group';
    group.innerHTML = `
      <h3 class="tech-category-title">${category}</h3>
      <div class="tech-list">
        ${techs.join(', ')}
      </div>
    `;
    container.appendChild(group);
  });
}

function renderAchievements() {
  const container = document.getElementById('achievements-list');
  portfolioData.achievements.forEach(ach => {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    const titleHTML = ach.url 
      ? `<h3 class="achievement-title"><a href="${ach.url}" target="_blank" rel="noopener noreferrer" class="achievement-link">${ach.title}</a></h3>`
      : `<h3 class="achievement-title">${ach.title}</h3>`;
    card.innerHTML = `
      <div class="achievement-header">
        ${titleHTML}
      </div>
      <p class="achievement-org">${ach.organization}</p>
      <p class="achievement-desc">${ach.description}</p>
    `;
    container.appendChild(card);
  });
}

function renderEducation() {
  const container = document.getElementById('education-list');
  portfolioData.education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'education-item';
    item.innerHTML = `
      <div class="education-header">
        <h3 class="education-degree">${edu.degree}</h3>
        <span class="education-period">${edu.period}</span>
      </div>
      <h4 class="education-institution">${edu.institution}</h4>
      <p class="education-location">${edu.location}</p>
      <p class="education-gpa">GPA: ${edu.gpa}</p>
      <p class="education-description">${edu.description}</p>
      <div class="education-coursework">
        <strong>Relevant Coursework:</strong>
        <div class="coursework-tags">
          ${edu.coursework.map(course => `<span class="course-tag">${course}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-list');
  const carousel = document.createElement('div');
  carousel.className = 'projects-carousel';
  
  // Create two identical sets for seamless infinite loop
  const projects = [...portfolioData.projects, ...portfolioData.projects];
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    const imageHTML = project.image ? `
      <div class="project-image-container">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      </div>
    ` : '';
    card.innerHTML = `
      ${imageHTML}
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join(', ')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ''}
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">Demo</a>` : ''}
        </div>
      </div>
    `;
    carousel.appendChild(card);
  });
  
  container.appendChild(carousel);
  
  // Wait for layout to calculate proper widths
  // Wait for layout/images to load
requestAnimationFrame(() => {

  const singleSetWidth = carousel.scrollWidth / 2;

  let scrollPosition = 0;
  const scrollSpeed = 0.5;

  let isPaused = false;
  container.addEventListener('mouseenter', () => isPaused = true);
  container.addEventListener('mouseleave', () => isPaused = false);

  function animate() {
    if (!isPaused) {
      scrollPosition += scrollSpeed;

      // seamless loop
      if (scrollPosition >= singleSetWidth) {
        scrollPosition -= singleSetWidth;
      }
    }

    carousel.style.transform = `translate3d(-${scrollPosition}px,0,0)`;
    requestAnimationFrame(animate);
  }

  animate();
});
}
function animate() {
  if (!isPaused) {
    scrollPosition += scrollSpeed;

    if (scrollPosition >= singleSetWidth) {
      scrollPosition -= singleSetWidth;
    }
  }

  carousel.style.transform = `translateX(-${scrollPosition}px)`;
  requestAnimationFrame(animate);
}
function renderBlogs() {
  const container = document.getElementById('blogs-list');
  portfolioData.blogs.forEach(blog => {
    const card = document.createElement('article');
    card.className = `blog-card ${blog.featured ? 'featured' : ''}`;
    card.innerHTML = `
      <div class="blog-header">
        <span class="blog-category">${blog.category}</span>
        <div class="blog-meta">
          <span class="blog-date">${blog.date}</span>
          <span class="blog-read-time">${blog.readTime}</span>
        </div>
      </div>
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-description">${blog.description}</p>
      <a href="${blog.link}" target="_blank" rel="noopener noreferrer" class="blog-link">Read More</a>
    `;
    container.appendChild(card);
  });
}