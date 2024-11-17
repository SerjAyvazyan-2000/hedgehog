
document.addEventListener('DOMContentLoaded', function () {
    const position = {lat: 40.20296037829776, lng: 44.50292307104346};
    let map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 18,
        // zoomControl: false,
        // draggable: false,
        // gestureHandling: 'none',
        mapId: "DEMO_MAP_ID",
        mapTypeId: 'terrain',

    });
    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: "Uluru",
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.header_menu ul li a');
    const footerMenuItems = document.querySelectorAll('.footer_bottom_menu ul a');
    const allMenuItems = [...menuItems, ...footerMenuItems];

    const activePageId = localStorage.getItem('activePageId');
    if (activePageId) {
        const activeItem = document.querySelector(`a[data-id="${activePageId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    allMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            allMenuItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
            const pageId = item.getAttribute('data-id');
            localStorage.setItem('activePageId', pageId);
            console.log("Сохранен data-id:", pageId);
        });
    });
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');

    }


});





