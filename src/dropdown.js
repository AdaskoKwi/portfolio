export function dropdown() {
    const dropdown = document.querySelector('.findme-dropdown');
    const findMeButton = document.querySelector('.findme-button');

    findMeButton.addEventListener('click', () => {
        if (dropdown.style.transform === 'scale(1)') {
            dropdown.style.transform = 'scale(0)';
        } else {
            dropdown.style.transform = 'scale(1)';
        }
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.style.transform = 'scale(0)';
    });
}