export function trackMouse(e) {
    const lightDiv = document.querySelector('.light');

    lightDiv.style.zIndex = "-99";
    lightDiv.style.top = (e.clientY + window.scrollY) + 'px';
    lightDiv.style.left = (e.clientX) + 'px';
}