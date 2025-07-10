export function createLight() {
    const appDiv = document.getElementById("app");
    const lightDiv = document.createElement("div");

    lightDiv.classList.add('light');
    appDiv.appendChild(lightDiv);
}