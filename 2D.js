const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");
const marqueeContent2 = document.querySelector(".marquee-content2");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

for (let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
}