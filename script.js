function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function changeBackground(imageUrl) {
    if (window.innerWidth <= 800) return;

    const header = document.querySelector("header");
    header.style.backgroundImage = `url('${imageUrl}')`;
}

document.getElementById("first-div").addEventListener("mouseover", () => {
    changeBackground("images/phone-call.jpg");
});

document.getElementById("second-div").addEventListener("mouseover", () => {
    changeBackground("images/examination.jpg");
});

document.getElementById("third-div").addEventListener("mouseover", () => {
    changeBackground("images/calculating-cost.jpg");
});

document.getElementById("fourth-div").addEventListener("mouseover", () => {
    changeBackground("images/repair.jpg");
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
