let countEl = 0;

function count() {
    countEl++;
    document.getElementById("count").innerText = countEl;
}
function save() {
    console.log(countEl);
    let text = ` ${countEl} -`;
    let save = document.getElementById("save")
    save.textContent += text;
    countEl = 0;
    document.getElementById("count").innerText = countEl;
}