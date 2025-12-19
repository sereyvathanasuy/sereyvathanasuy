(function () {
  const ua = navigator.userAgent.toLowerCase();

  if (
    navigator.webdriver ||
    navigator.plugins.length === 0 ||
    !navigator.languages ||
    navigator.languages.length === 0 ||
    ua.includes("headless") ||
    ua.includes("bot") ||
    screen.width === 0 ||
    screen.height === 0
  ) {
    document.body.innerHTML = "";
  }
})();
