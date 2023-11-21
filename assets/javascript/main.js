
// javascript to view product on click buttons
const tabs = document.querySelectorAll(".tabs");
const tabBtns = document.querySelectorAll(".btn-check");

const tab_button = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () =>{
        tab_button(i);
    });
});    