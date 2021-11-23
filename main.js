const buyBtns = document.querySelectorAll('.js-buy-tickets')
const model =document.querySelector('.js-model')
const modelContainer = document.querySelector('.js-model-container')
const modelClose = document.querySelector('.js-model-close')

function showBuytickets() {
model.style.display = 'flex';
}
function hideBuytickets(){
    model.style.display = 'none';
}
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuytickets)
}
  modelClose.addEventListener('click', hideBuytickets);
model.addEventListener('click',hideBuytickets)
modelContainer.addEventListener('click',function(event){
    event.stopPropagation()
})
var header = document.getElementById('header')
var mobiMenu = document.getElementById('menu-ti')
var headerHeight = header.clientHeight;
mobiMenu.onclick = function(){
    var isClosed =header.clientHeight == headerHeight;
    if(isClosed) {
        header.style.height = "auto";
    }else{
        header.style.height = null;
    }
}
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i =0; i<menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(checkNav) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            checkNav.preventDefault();
        } else {
            header.style.height = null;
        }
    }
        
                 
}
