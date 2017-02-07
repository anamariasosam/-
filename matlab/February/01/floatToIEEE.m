% Desarrolla un código en Matlab que convierte cualquier número,
% entero o flotante, en formato de coma flotante de 32 bits bajo
% el estandar IEEE 754.

number = input('Ingrese el numero entero o flotante: ');

% Creo una matriz de 32 ceros donde voy a reemplazar los valores
formatoComaFlotante = zeros(32,1);

% Saber si el numero es entero
if (rem(number, fix(number)) == 0)
   disp('Numero entero')
    if number > 0
      formatoComaFlotante(1) = 0;
    else
      formatoComaFlotante(1) = 1;
    end
else
   disp('Numero decimal')
end

disp(formatoComaFlotante);
