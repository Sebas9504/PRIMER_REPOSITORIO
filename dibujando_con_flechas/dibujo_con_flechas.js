var teclas  = {
  LEFT: 37,
  UP: 38,
  REIGHT: 39,
  DOWN: 40
};
var x = 250;
var y =250;


document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papelito = cuadrito.getContext("2d");

dibujar_Linea("red", x -1, 249, 252, y + 2, papelito);

function dibujar_Linea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado (evento)
{
  var movimiento =10;
  var colorcito = "red";
  if (evento.keyCode == teclas.UP)
  {
    dibujar_Linea(colorcito, x, y, x, y - movimiento, pepelito);
    y = y - movimiento;
  }

  switch (evento.keyCode)
  {
    case teclas.DOWN:
      dibujar_Linea(colorcito, x, y, x, y + movimiento, pepelito);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujar_Linea(colorcito, x, y, x - movimiento, y, pepelito);
      x = x - movimiento;
    break;
    case teclas.REIGHT:
    dibujar_Linea(colorcito, x, y, x + movimiento, y, pepelito);
    x = x + movimiento;
      console.log("DERECHA");
    break;
    default:
    console.log("otratecla");
    break;
  }
}
