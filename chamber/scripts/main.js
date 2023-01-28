function toggleMenu(){
    document.querySelector("#navbar").classList.toggle('menu-active');
    document.querySelector("#menu-closed").classList.toggle('menu-active');
    document.querySelector("#menu-open").classList.toggle('menu-active');
}

// document.querySelector("#hamburger-menu").onclick = toggleMenu;

document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);

