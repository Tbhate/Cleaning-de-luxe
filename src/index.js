const headerEl = document.getElementById("header") 

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos > 110){
        headerEl.classList.add("header_mini")
    }else{
        headerEl.classList.remove("header_mini")
    }
})





