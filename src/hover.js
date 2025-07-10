export function disableOnHover() {
    const lightDiv = document.querySelector('.light');
    const images = document.querySelectorAll(".icon");

    for (let image of images) {
        image.addEventListener('mouseover', (e) => {
            lightDiv.style.display = 'none';
        });

        image.addEventListener('mouseout', (e) => {
            lightDiv.style.display = 'inline';
        });
    }
}