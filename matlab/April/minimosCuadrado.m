clear all, close all, clc;

function x = confirmar_pivotear (vector, valor)
  # Verifico si el pivote es igual al numero maximo en absoluto en la columna de pivote
  if  abs(valor) == max(abs(vector))
    x = true;
  else
    x = false;
  end
  x;
end

% Voy a saber la posicion donde se encuentra el numero maximo para
% poder luego hacer un pivote entre la de mayor y la de la posicion dada
function m = pivotear(matrix,n)
  vector = abs(matrix(:,n));
  [valorMaximo,x] = max(vector);

  % Toda la columna de la fila n y toda la columna de la fila x
  columna_pivote = matrix(n, :);
  columna_del_max = matrix(x,:);

  matrix(n,:) = columna_del_max;
  matrix(x,:)= columna_pivote;

  m = matrix;
end


function matrix = gauss(a)
  [m,n]=size(a);
  for j=1:m-1
      for z=2:m
          if a(j,j)==0
              t=a(1,:);
              a(1,:)=a(z,:);
              a(z,:)=t;
          end
      end
      for i=j+1:m
          a(i,:)=a(i,:)-a(j,:)*(a(i,j)/a(j,j));
      end
  end

  for j=m:-1:2
      for i=j-1:-1:1
          a(i,:)=a(i,:)-a(j,:)*(a(i,j)/a(j,j));
      end
  end

  for s=1:m
      a(s,:)=a(s,:)/a(s,s);
      x(s)=a(s,n);  
  end
  matrix = a;
end

%x = input("ingresar el vector x ")
%y = input("ingresar el vector y ")
n = 2;

x =  [2,3,4,5,6,7,8,9];
y = [18,24,35,44,59,72,91,109];
y = y';
a = ones(1, length(x));

matrixT = [a; x];

for i=2:n
  matrixT = [matrixT; x.^i];
end

FtF = mtimes(matrixT,matrixT');
FtY = mtimes(matrixT,y);

matrix = [FtF, FtY];

matrix = gauss(matrix);

matrix(:,length(matrix))