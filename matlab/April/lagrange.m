clear all, close all, clc;

function y = grange(x,x_i,y_i)
  y = 0;
  n = size(x_i ,2)
  m = size(x,2)

  % Creo una matriz de unos de n filas por m columnas
  matrix = ones(n,m)

  % Recorro la matriz hasta los n+1 puntos
  for i=1:n
    for j=1:n
    % Verifico que no esté en la misma posición para no tener una indeterminacion
      if (i~=j)
        % Hago la operacion en el numerador a x le resto l posicion j
        %  En el denominador resto la posicion i menos la j
        % Ese resultado lo multiplico por la siguiente iteración
        matrix (i,:) = matrix (i,:).* ( x - x_i(j) ) / ( x_i(i) - x_i(j) );
      end
    end
  end

  % Ese valor que obtuve de la multiplicacionde las fracciones lo multiplico por el vector de las y
  % y lo acumulo en y que será mi funcion evaluada
  for i=1:n
    y = y + ( y_i(i) * matrix (i,:) );
  end
end

% n + 1 puntos conocidos
x = [2,3,5];
y = [4,6,10];

xx = 1:5;
yy = grange(xx,x,y);
yy;
plot(xx,yy)
