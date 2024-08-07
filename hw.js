let Box=document.querySelector(".box")
let r=[
    {
        imag1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6LRWI_Oljc3gVw3789Sa7MSi-QDpN1V_9A&s",
        name:"Croses",
        text:"sadfsadfsadf sdfsdfasfasdfad fadsfaweweafkewflewklf kwefklwemfkwemfkawef lfsldaf",
butt:"Buy"
    }
]

r.forEach((elem,i)=>{
    const mainhtml = document.createElement("div")
    const main = document.createElement("div")
    const image = document.createElement("img")
    const name = document.createElement("h2")
    const text = document.createElement("p")
    const button1 = document.createElement("button")

    image.src = elem.imag1
    name.innerHTML = elem.name
    text.innerHTML = elem.text
    button1.innerHTML = elem.butt

    main.classList.add("main")
    image.classList.add("img")
    name.classList.add("name")
    text.classList.add("text")
    button1.classList.add("button")

    main.append(image, name, text, button1)
    mainhtml.append(main)
    

    // image.style.width = "200px"
    // image.style.border = "3px solid #9400d3"
    // image.style.borderRadius = "15px"
    // image.style.marginTop = "20px"
    // image.style.boxShadow = "0px 0px 10px #9400d3"
    

    // Box.append(mainblock)
    Box.append(mainhtml)

})
