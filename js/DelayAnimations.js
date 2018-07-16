document.body.classList.add('wait');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('wait');
}
