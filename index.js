
// portfolio filtter section

const category=document.querySelectorAll(".categorys-filter-sections li");
const themeItems = document.querySelectorAll('.col-lg-4.col-md-6.themes-item');

category.forEach(function(item){
    item.addEventListener("click",function(){
        var filterValue=item.getAttribute("data-fileter");
        
        
        themeItems.forEach(function(theme_item){
           
            theme_item.classList.remove('theme_active');
        })
        themeItems.forEach(function(theme_item){
            var items=theme_item.getAttribute("data-id");
            if(items === filterValue || filterValue === '0'){
                theme_item.classList.add('theme_active');
            }
        })
    })

})


// portfolio filtter section

// video filtter section

const categoryBtn=document.querySelectorAll(".category-filter-sections li");
const themeItem = document.querySelectorAll('.col-lg-4.col-md-6.theme-item');

categoryBtn.forEach(function(item){
    item.addEventListener("click",function(){
        var filterValue=item.getAttribute("data-fileter");
        
        
        themeItem.forEach(function(theme_item){
           
            theme_item.classList.remove('theme_active');
        })
        themeItem.forEach(function(theme_item){
            var items=theme_item.getAttribute("data-id");
            if(items === filterValue || filterValue === '0'){
                theme_item.classList.add('theme_active');
            }
        })
    })

})
// video filtter section
