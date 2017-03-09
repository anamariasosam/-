%Para leer imagen
image = imread('/Users/anasosa/Sites/numerical-methods/matlab/March/hijos.jpg');

%captura de la matriz 1
red_matrix = image(:,:,1);

%numero maximo
numero_maximo = double(max(max(red_matrix)));
%numero minimo
numero_minimo = double(min(min(red_matrix)));

%valores iniciales del intervalo
a=0;
b=1;
function_a = ((numero_maximo-numero_minimo)*a) - 1;
function_b = ((numero_maximo-numero_minimo)*b) - 1;
substract = numero_maximo-numero_minimo;

% Biseccion
max_value = 100;
i = 1;

while (i < 50 || max_value ~= 0)
  new_x = (a+b)*0.5;
  fxn = (substract*new_x) - 1;
  i = i + 1;
  if sign(fxn) == sign(function_a)
     a = new_x;
  end
  if sign(fxn) == sign(function_b)
      b = new_x;
  end
  if fxn < 1 && fxn > 0
      max_value = 0;
  end
end


sprintf('Nuevo x: %d', new_x);
%%aplicacion del valor obtenido por el metodo de la bisecci�n


[m,n] = size(red_matrix);

for i = 1:m
  for j = 1:n
    alfa = 255*new_x;
    beta = (red_matrix(i,j) - numero_minimo);
    f_nueva(i,j) = alfa*beta;
  end
end

imshow(f_nueva);
