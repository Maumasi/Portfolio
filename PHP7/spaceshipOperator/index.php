<?php

gap();
// Introduction to PHP7's spaceship operator

// returns either:
//  1 == Left side of the operation is greater
// -1 == Right side of the operation is greater
//  0 == Both sides of the operation are equal

$num1 = 1;
$num2 = 2;
$numArray = [1, '90', 1.999, 9, 4, 23, 67, 3, 1, 56, 7, 89, 46, 68, 15, 26, 8];
$farmAnimalGroups = [
  [hen => 4, horse => 2],
  [goat => 1, pig => 123, sheep => 9],
  [cow => 73], [nothing => 0]
];


str("$num1 <=> $num2");
str($num1 <=> $num2);
gap();


// order numbers array
usort($numArray, 'order');
print_r($numArray);
gap();


// order multi dementional array
usort($farmAnimalGroups, 'order');
print_r($farmAnimalGroups);


// =============== Functions to aid demo =======================================

// func to order arrays using the spaceship operator
function order($left, $right, $dir = 1) {
  return ($left <=> $right) == $dir;
}

// print string to screen
function str($string)
{
  echo $string;
  echo "\n\n";
}

// make a several new-lines
function gap()
{
  echo "___";
  echo "\n\n\n\n";
}
