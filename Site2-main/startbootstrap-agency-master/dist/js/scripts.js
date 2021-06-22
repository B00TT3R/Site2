/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
$.support.cors = true;

$("#submitButton").click(
function banana(){                                
    $.ajax({
        type:'POST',
        url:'http://192.168.10.14:8091/mail/send',
        contentType: "application/json",
        crossDomain: true,
        headers:{
            Authorization : "Basic "+btoa("ads:adsunifasipe2021")
        },
        data: '{"nome":"InserirNome","email":"a@a.com",'+
        '"site":"Armiger fulminis sercare","corpo":"Gladiolus et arminger auten tenebris fulminis"}',
        success: function(data){
            console.log(data);                                        
        },
        error: function(data){
            alert(data)          
        }
    })
});

$("#envioform").click(
function melancia(){                                
    $.ajax({
        type:'POST',
        url:'http://192.168.10.14:8091/mail/send',
        contentType: "application/json",
        crossDomain: true,
        headers:{
            Authorization : "Basic "+btoa("ads:adsunifasipe2021")
        },
        data: '{"nome":"InserirNome","email":"a@a.com",'+
        '"site":"Armiger fulminis sercare","corpo":"Gladiolus et arminger auten tenebris fulminis"}',
        success: function(data){
            console.log(data);                                        
        },
        error: function(data){
            alert(data)          
        }
    })
});
