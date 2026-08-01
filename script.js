// Dynamic Projects Data
const projects = [
  {
    title: "JavaScript Quiz",
    description: "A dynamic JavaScript quiz application.",
    tags: ["JavaScript", "HTML5"],
    github: "https://github.com/kerrching17/quiz_assignment.git",
    live: "https://quizassignment.netlify.app/"
  },
  {
    title: "React Habit Tracker",
    description: "A single page application habit tracker using React and Tailwind Css",
    tags: ["JavaScript", "React", "TailwindCSS"],
    github: "https://github.com/kerrching17/habit_tracker.git",
    live: "https://habittrackerweek.netlify.app/"
  },
  {
    title: "Store Landing Page",
    description: "An accessible, themeable portfolio template designed specifically for entry-level developers.",
    tags: ["HTML5", "CSS Variables", "Accessibility"],
    github: "https://github.com/kerrching17/store_landing_page.git",
    live: "https://animated-axolotl-ec3e90.netlify.app/"
  }
];

// Populate Projects Dynamically
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="card-links">
        <a href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo of ${project.title}">Live Demo</a>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Source code for ${project.title}">GitHub</a>
      </div>
    </article>
  `).join('');
}

// Dark/Light Theme Toggle with LocalStorage
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initialize theme from preference
const savedTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
  themeToggleBtn.innerHTML = `<span class="icon" aria-hidden="true">${theme === 'dark' ? '☀️' : '🌙'}</span>`;
}

// Dynamic Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Initial Render
renderProjects();