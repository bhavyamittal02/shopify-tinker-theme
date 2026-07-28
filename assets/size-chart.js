document.addEventListener('click' , (e) => {

    const openSizeBtn =  e.target.closest(".size-chart-btn");
    if(openSizeBtn){
        openSizeBtn.nextElementSibling.showModal();
        return;
    }

    const closeSizeBtn = e.target.closest(".close-btn");
    if(closeSizeBtn){
        closeSizeBtn.closest("dialog").close();
        return;
    }

});

document.querySelectorAll(".size-chart-modal").forEach((modal) => {
    modal.addEventListener('click' , (e) => {
        if(e.target == modal){
            modal.close();
        }
    })
});