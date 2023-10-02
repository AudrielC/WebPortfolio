console.log("Welcome!");
const vWidthHandle = function () {
    const vWidth = window.innerWidth;
    console.log("ViewportX:", vWidth);
    const text = document.getElementById("title-main-button");
    if (vWidth <= 340) {
        text.textContent = "Learn More!";
    } else {
        text.textContent = "Learn More Of Me!";
    }
}
vWidthHandle();
