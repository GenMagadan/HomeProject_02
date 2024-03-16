const btn1 = document.querySelector('.catalog-button');
const nav = document.querySelector('.catalog-menu');
// console.log(nav);
document.addEventListener('DOMContentLoaded', hiddenCloseclick());
btn1.addEventListener('click', hiddenCloseclick);
function hiddenCloseclick() {
  if (nav.style.display == 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}
