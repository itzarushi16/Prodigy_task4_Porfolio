
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const toggleSwitch = document.getElementById('toggle');
  
  toggleSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
  });
  

  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
      toggleSwitch.checked = true;
  } else {
      document.body.classList.add('light');
  }
  
  toggleSwitch.addEventListener('change', () => {
      if (toggleSwitch.checked) {
          localStorage.setItem('theme', 'dark');
      } else {
          localStorage.setItem('theme', 'light');
      }
  });