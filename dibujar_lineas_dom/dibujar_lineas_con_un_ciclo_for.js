var caja_texto = document.getElementById('caja_texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujar_con_click);

var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujar_Linea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujar_con_click()
{
 var xlineas = parseInt(caja_texto.value);
 var l = 1;
 var lineas = xlineas;
 var xi, yi, xf, yf;
 var espacio = ancho / xlineas;
 for ( l=1; l<=lineas; l=l+1)
 {
  yi = (l-1)*espacio;
  xf = l*espacio;
  xi = 0;
  yf = 500;
  dibujar_Linea("#FAA", xi, yi, xf, yf);
 }
 for (l=1; l<=lineas; l++)
 {
  xi =500-(l*espacio);
  yi =0;
  xf =500;
  yf =500-((l-1)*espacio);
  dibujar_Linea("#FAA", xi, yi, xf, yf);
 }
 }
dibujar_Linea("black", 0, 0, 0, 500);
dibujar_Linea("black", 0, 0, 500, 0);
dibujar_Linea("#AAF", 499, 499, 499, 0);
dibujar_Linea("#AAF", 499, 499, 0, 499);
