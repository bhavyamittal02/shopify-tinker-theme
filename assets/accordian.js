let items = document.querySelectorAll(".accordian-block")
items.forEach(item => {
    item.addEventListener('click' , () => {

        items.forEach(otherItem => {
            if(otherItem !== item){
                otherItem.querySelector(".icon1").innerText = '+'
                otherItem.querySelector(".ans").style.display = "none"
            }
        })

        let icon = item.querySelector(".icon1")
        let ans = item.querySelector(".ans")
        if(icon.innerText === '+'){
            icon.innerText = '-'
            ans.style.display = "block"
        }
        else{
            icon.innerText = '+'
            ans.style.display = "none"
        }
    })
});
