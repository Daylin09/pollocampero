Let menu_desplegable = document.getElementById("menu");
Let boton_menu = document.getElementById("x")

function abrir_cerrar_menu(){
    menu_desplegable.classList.toggle("abrir_menu");
    boton_menu.classList.toggle("colocar_x")
}