const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => {
    button.addEventListener('click' , () => {
        const variantID = button.dataset.variantId;
        console.log(variantID)
        
        fetch('/cart/add.js' , {
            method : 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body:JSON.stringify({
                id : Number(variantID),
                quantity : 1
            })
        })
        .then(res => res.json())
        .then(item => {
            console.log(item)
            alert(item)
            location.reload()
        })
        .catch(err => {
            alert(err)
        })
    })
});


let btn1 = document.querySelectorAll(".btn1")
let btn2 = document.querySelectorAll(".btn2")

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        btn2.forEach(button => {
            if(entry.isIntersecting){
                button.classList.remove("show")
            }
            else{
                button.classList.add("show")
            }
        })
    })
})

btn1.forEach(button => {
    observer.observe(button)
})