
document.body.style.backgroundColor = "silver";
const h1Title = document.getElementById("title");
if (h1Title) {
    h1Title.style.color = "green";
}
const h3Titles = document.querySelectorAll("h3");
h3Titles.forEach(h3 => {
    h3.style.textTransform = "uppercase";
});
const fruList = document.getElementById("fruList");
if (fruList) {
    const newFruit = document.createElement("li");
    newFruit.textContent = "Apples";
    fruList.appendChild(newFruit);
}

const vegList = document.getElementById("vegList");
if (vegList) {
    const newVegetable = document.createElement("li");
    newVegetable.textContent = "Carrots";
    vegList.appendChild(newVegetable);
}
