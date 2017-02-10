clear all, close all, clc

% Esta funcion recorre la matriz de un especifico color de manera progresiva,
% de izquierda a derecha por filas
function matrix = loop_left_right(color_matrix)
  [M,N] = size(color_matrix);
  for i=1:M-1
    for j=1:N-1
        matrix(i,j) = color_matrix(i,j+1) - color_matrix(i,j);
    end
  end
  matrix;
end


% Esta funcion recorre la matriz de un especifico color de manera progresiva,
% de derecha a izquierda por filas
function matrix = loop_right_left(color_matrix)
  [M,N] = size(color_matrix);
  for i=M:-1:2
    for j=N:-1:2
        matrix(i,j) = color_matrix(i,j-1) - color_matrix(i,j);
    end
  end
  matrix;
endfunction

% Esta funcion recorre la matriz de un especifico color de manera progresiva,
% de arriba a abajo por columnas
function matrix = loop_top_bottom(color_matrix)
  [M,N] = size(color_matrix);
  for i=1:M-1
    for j=1:N-1
        matrix(i,j) = color_matrix(i+1,j) - color_matrix(i,j);
    end
  end
  matrix;
endfunction

% Esta funcion recorre la matriz de un especifico color de manera progresiva,
% de abajo a arriba por columnas
function matrix = loop_bottom_top(color_matrix)
  [M,N] = size(color_matrix);
  for i=M:-1:2
    for j=N:-1:2
        matrix(i,j) = color_matrix(i-1,j) - color_matrix(i,j);
    end
  end
  matrix;
endfunction

image = imread('/Users/anasosa/Desktop/rdm/capitan.png');

% Separamos la imagen en las tres matrices RGB
image_red_matrix = image(:,:,1);
image_green_matrix = image(:,:,2);
image_blue_matrix = image(:,:,3);

red_matrix_left_right = loop_left_right(image_red_matrix);
green_matrix_left_right = loop_left_right(image_green_matrix);
blue_matrix_left_right = loop_left_right(image_blue_matrix);

red_matrix_top_bottom = loop_top_bottom(image_red_matrix);
green_matrix_top_bottom = loop_top_bottom(image_green_matrix);
blue_matrix_top_bottom = loop_top_bottom(image_blue_matrix);


red_matrix_bottom_top = loop_bottom_top(image_red_matrix);
green_matrix_bottom_top = loop_bottom_top(image_green_matrix);
blue_matrix_bottom_top = loop_bottom_top(image_blue_matrix);

red_matrix_right_left = loop_right_left(image_red_matrix);
green_matrix_right_left = loop_right_left(image_green_matrix);
blue_matrix_right_left = loop_right_left(image_blue_matrix);


% Realizamos el producto punto de los resultados por filas y por columnas
RGB_left_right_rows = red_matrix_left_right.*blue_matrix_left_right.*green_matrix_left_right;
%RGB_right_left_rows = red_matrix_right_left.*green_matrix_right_left.*blue_matrix_right_left;

RGB_top_bottom_col = red_matrix_top_bottom.*green_matrix_top_bottom.*blue_matrix_top_bottom;
%RGB_bottom_top_col = red_matrix_bottom_top.*green_matrix_bottom_top.*blue_matrix_bottom_top;


%[M,N] = size(image_red_matrix);
%RGB_left_right_rows(M,N) = 0;
%RGB_top_bottom_col(M,N) = 0;

%
%RGB_col = RGB_top_bottom_col.*RGB_bottom_top_col;
%RGB_row = RGB_left_right_rows.*RGB_right_left_rows;

% Realizamos el producto punto entre columnas y filas y lo mostramos en una imagen
%imshow(RGB_col.*RGB_row)


imshow(RGB_left_right_rows.*RGB_top_bottom_col)
