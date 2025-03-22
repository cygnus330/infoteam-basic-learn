function sleep(t) {
    return new Promise((r) => setTimeout(r, t));
}

async function main_intro_load() {
    txt = "Hello, I'm Junhyeok!!";
    doc = document.getElementById("hello-ani");
    len = txt.length;
    for(let i = 0; i < len; i++) {
        doc.innerHTML += txt[i];
        await sleep(150);
    }
}

document.addEventListener("DOMContentLoaded", main_intro_load);