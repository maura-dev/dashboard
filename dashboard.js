const purchasesTab = document.getElementsByClassName("container-list")[0]
const businessTab = document.getElementsByClassName("businesses-container")[0]
const purchaseBtn = document.getElementById("purchase-btn")
const businessBtn = document.getElementById("business-btn")
function showMyBusinessTab(){
    window.location.href ="/business"
}

function showPurchaseTab(){
    window.location.href ="/dashboard.html"
}

function showStore(){
    window.location.href ="/business/store.html"
}