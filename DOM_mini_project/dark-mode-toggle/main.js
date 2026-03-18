const btn = document.getElementById("toggleButton");
btn.addEventListener("click", ()=>{
    if(document.body.classList.toggle("dark")){
        btn.innerText="toggle to light mode";

    } else {
        btn.innerText="toggle to dark mode";
    }
})