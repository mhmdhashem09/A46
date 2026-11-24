const textinput = document.getElementById("text");
const savedtext = localStorage.getItem("text") || "";
textinput.value = savedtext;
document.getElementById("output").innerHTML = savedtext;

const textform = document.getElementById("textform");
textform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text = {
        content: e.target.elements.text.value
    }

    localStorage.setItem("text", text.content);
    document.getElementById("output").innerHTML = text.content;
    console.log(text);

})