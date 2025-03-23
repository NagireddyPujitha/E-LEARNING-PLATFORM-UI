// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example: Dynamic progress update (for demonstration purposes)
  function updateProgress(courseId, percentage) {
    const progressFill = document.querySelector(`#${courseId} .progress-fill`);
    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
  }
  
  // Example usage:
  // updateProgress('web-dev-progress', 70); // Update Web Development progress to 70%