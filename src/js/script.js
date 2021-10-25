$(function() {
    
    // ............. Create Experiences .............
    
    
    // ............. Click Button Navegation .............
    
    $('.experiences .container .box-navegation ul .button').click(function () {
        const button = $('.experiences .container .box-navegation ul .button')
        const boxPurple =   $('.experiences .container .box-grid .column .box.box-purple')
        const boxYellow =   $('.experiences .container .box-grid .column .box.box-yellow')
        const boxGrey =   $('.experiences .container .box-grid .column .box.box-grey')
        
        button.removeClass('active');
        $(this).addClass('active');
        
        document.addEventListener('click', (e) => {
            const el = e.target;
            
            
            
            if(el.classList.contains('button-purple')){
                
                boxYellow.hide()
                boxGrey.hide()
                boxPurple.show()
                
            } else if (el.classList.contains('button-yellow')) {
                
                boxYellow.show()
                boxGrey.hide()
                boxPurple.hide()
                
            } else if (el.classList.contains('button-grey')) {
                boxPurple.hide()
                boxYellow.hide()
                boxGrey.show()
            }else if (el.classList.contains('button-all')) {
                boxPurple.show()
                boxYellow.show()
                boxGrey.show()
            }  else {
               
            }
            
            
        })
        
        
        
        
    });
    
    // ? .............  back to top page .............
    
    $('.back-top-site').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            
        })
    })

  
    
    
})