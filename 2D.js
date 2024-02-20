// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideInRight');
        return;
      }
  
      entry.target.classList.remove('slideInRight');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const h1Element = document.querySelectorAll('h1');
  
  // Loop over the elements and add each one to the observer
  h1Element.forEach((element) => observer.observe(element));