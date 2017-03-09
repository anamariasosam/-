%Implementa un programa en Matlab que permita ecualizar el histograma de una imagen.
%El programa est� condicionado para que no se realicen divisiones. Utiliza el m�todo
%de la bisecci�n para hacer las divisiones necesarias a trav�s de la determinaci�n
%de ra�ces de una ecuaci�n.

%Para leer imagen
f = imread('hijos.jpg');
%captura de la matriz 1
f_1 = f(:,:,1);
%tama�o de la matriz
[n,c] = size(f_1);
%numero maximo
mx = double(max(max(f_1)));
%numero minimo
mn = double(min(min(f_1)));

%imprime el maximo y e minimo
sprintf('Valor maximo es: %d y Valor minimo es: %d',mx,mn);
%valores iniciales del intervalo
a=0;
b=1;
%valores iniciales y pendiente de la ecuaci�n
res = mx-mn;
fa = ((mx-mn)*a) - 1;
fb = ((mx-mn)*b) - 1;

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%Metodo de la bisecci�n:
stop = 100;
cont = 1;

while (cont < 50 || stop ~= 0)
  Xnuevo = (a+b)*0.5;
  fxn = (res*Xnuevo) - 1;
  cont = cont + 1;
  if sign(fxn) == sign(fa)
     a = Xnuevo;
  end
  if sign(fxn) == sign(fb)
      b = Xnuevo;
  end
  if fxn < 1 && fxn > 0
      stop = 0;
  end
end


sprintf('El valor para X es: %d', Xnuevo);
%%aplicacion del valor obtenido por el metodo de la bisecci�n

for i = 1:n
  for j = 1:c
    alfa = 255*Xnuevo;
    beta = (f_1(i,j) - mn);
    f_nueva(i,j) = alfa*beta;
  end
end

imshow(f_nueva);
