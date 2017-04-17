clear all, close all, clc;

function y = newton_interpolation(x_i,y_i,x)
  n = length(x_i);
  a(1) = y_i(1);
  Df(1) = 1;
  c(1) = a(1);

  for k = 1 : n - 1
     d(k, 1) = ( y_i(k+1) - y_i(k) ) / ( x_i(k+1) - x_i(k) );
  end

  for j = 2 : n - 1
     for k = 1 : n - j
        d(k, j) = ( d(k+1, j - 1) - d(k, j - 1) )/( x_i(k+j) - x_i(k) );
     end
  end

  for j = 2 : n
     a(j) = d(1, j-1);
  end


  for j = 2 : n
     Df(j)= (x - x_i(j-1)) .* Df(j-1);
     c(j) = a(j) .* Df(j);
  end

  y = sum(c);
end

x = [1,2,3,5]
y = [2,4,6,10]

xi = input('Ingrese el valor de xi que se desea encontrar: ');
newton_interpolation(x, y, xi)
