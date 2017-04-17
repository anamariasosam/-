clear all, close all, clc;

function y = grange(x,x_i,y_i)
  y = 0;
  n = size(x_i ,2);
  % Recorro la matriz hasta los n+1 puntos
  for i=1:n
    value = y_i(i);
    for j=1:n
    % Verifico que no esté en la misma posición para no tener una indeterminacion
      if (i~=j)
        % Hago la operacion en el numerador a x le resto l posicion j
        %  En el denominador resto la posicion i menos la j
        % Ese resultado lo multiplico por la siguiente iteración
        value = value.* ( x - x_i(j) ) / ( x_i(i) - x_i(j) );
      end
    end

    % Ese valor que obtuve de la multiplicacionde las fracciones lo multiplico por el vector de las y
    % y lo acumulo en y que será mi funcion
    y += value;
  end
end

x = [1,2,3,5]
y = [2,4,6,10]

xi = input('Ingrese el valor de xi que se desea encontrar: ');
grange(xi,x,y)
