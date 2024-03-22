// Apply Nocturne Shift
function applyDarkMode() {
  var style = document.createElement('style');
  style.id = 'dark-mode-style';
  var classesToInvert = "x-nocturne"; // These classes will not be inverted on load
  var css = classesToInvert.split(', ').map(cl => `.${cl} { filter: invert(1); transition: filter 0.5s ease; }`).join(' ');
  css += 'html { filter: invert(1); transition: filter 0.3s ease; }';
  style.innerHTML = css;
  document.head.appendChild(style);
}

// Remove Dark mode
function removeDarkMode() {
  var styleElement = document.getElementById('dark-mode-style');
  if (styleElement) {
      styleElement.innerHTML = styleElement.innerHTML.replace(/filter: invert\(1\);/g, 'filter: none;');
      setTimeout(() => {
          styleElement.remove();
      }, 500);
  }
}

// Alternate Dark Mode
function toggleDarkMode() {
  var darkModeState = sessionStorage.getItem('dark');
  if (darkModeState === 'true') {
      sessionStorage.setItem('dark', 'false');
      removeDarkMode();
  } else {
      sessionStorage.setItem('dark', 'true');
      applyDarkMode();
  }
}

// Apply on load if sStorage val dark is true
if (sessionStorage.getItem('dark') === 'true') {
  applyDarkMode();
}

// Listener handler for firing .darkmode_object
document.addEventListener('DOMContentLoaded', () => {
  var darkModeElements = document.querySelectorAll('.darkmode_object');
  darkModeElements.forEach(el => {
      el.addEventListener('click', toggleDarkMode);
  });
});
