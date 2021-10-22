const h1 = document.querySelector("div.hello:first-child h1");  
console.dir(h1);

function handleTitleClick(){
    // const clickedClass = "clicked";
    h1.classList.toggle("clicked");     //  clicked가 있는지 없는지 체크해서 있으면 없애고, 없으면 추가함 
    /* 1번째 방법 
     if(h1.classList.contains(clickedClass)){
         h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    */
    /* 2번째 방법 
     h1.className = "active";
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "red";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
    console.log(h1.style.color);
    h1.innerText = "Click me!";
    h1.style.color = "blue";
    console.log("h1 was clicked! change to blue");
    */
}

h1.addEventListener("click", handleTitleClick);
