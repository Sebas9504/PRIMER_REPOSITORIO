var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var l = 0;
var xi, yf;
var lineas = 50;

function dibujar_Linea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

while(l<lineas)
{
 yi =10*l;
 xf =10*(l+1);
 dibujar_Linea("#AAF", 0, yi, xf, 500);
 console.log("linea "+l);
 l =l+1;
}
