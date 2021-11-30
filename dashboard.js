const purchasesTab = document.getElementsByClassName("container-list")[0]
const businessTab = document.getElementsByClassName("businesses-container")[0]
const purchaseBtn = document.getElementById("purchase-btn")
const businessBtn = document.getElementById("business-btn")
function showMyBusinessTab(){
    purchasesTab.style.display="none"
    businessTab.style.display ="block";
    purchaseBtn.classList.add("btn2")
    businessBtn.classList.add("btn1")
    purchaseBtn.classList.remove("btn1")
    businessBtn.classList.remove("btn2")
}

function showPurchaseTab(){
    purchasesTab.style.display="block"
    businessTab.style.display ="none";
    purchaseBtn.classList.add("btn1")
    businessBtn.classList.add("btn2")
    purchaseBtn.classList.remove("btn2")
    businessBtn.classList.remove("btn1")
}