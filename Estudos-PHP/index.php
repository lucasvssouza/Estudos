<?php

// Comentario em linha unica

# Comentario em linha unica

/*
Comentarios 
de
Multiplas linhas
*/
echo 'Olá mundo';

# Variaveis é definida com o simbolo de $ (dollar) e um identificavel de nome
// $variavel = 100;
# Variaveis são Case Sensitives

#Exemplos de variaveis erradas:

// $1var = 0;
// $!var = 0;
// $variavel(1) =0;
// $variavel um = 0;
// $variavel-im =0;

#Exemplo de variaveis corretas:

$var1 = 0;
$var_um = 0;
$varUm = 0;
$_um = 0;
$_1 = 0;

# apesar de serem variaveis de tipo implicito, é importante saber:

$inteiro = 100; #Int - Números inteiros
$float = 10.5; #Float - Casa decimais
$bool = true; #Bool - Booleano True/False
$string = "Olá Mundo!"; #String - Cadeia de caracteres
$array = [1,2,3]; #Array - Coleção de valores
//$pessoa = new Pessoa(); #Objeto com propriedades e métodos
$nulo = null; #Null - Variavel com valor nulo

