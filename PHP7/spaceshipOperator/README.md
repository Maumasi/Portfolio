*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# PHP7 Spaceship Operator

The spaceship operator in PHP7 is a bit different than other logic operator not just in the syntax but in the values returned from the operation.
<br>

```PHP
// returns either:
//  1 == Left side of the operation is greater
// -1 == Right side of the operation is greater
//  0 == Both sides of the operation are equal

$num1 = 1;
$num2 = 2;

// prints -1
echo $num1 <=> $num2
```
<br>

This can be very helpful when creating custom sorting operations. In the example below of a custom sorting operation used with `usort()` can also be done with other built-in array helpers in PHP, this is just to illustrate a simple demo.
```PHP
// func to order arrays using the spaceship operator
function order($left, $right, $dir = 1) {
  return ($left <=> $right) == $dir;
}


// defining vars at the top
$numArray = [1, '90', 1.999, 9, 4, 23, 67, 3, 1, 56, 7, 89, 46, 68, 15, 26, 8];
$farmAnimalGroups = [
  [hen => 4, horse => 2],
  [goat => 1, pig => 123, sheep => 9],
  [cow => 73], [nothing => 0]
];


// order numbers array
usort($numArray, 'order');
print_r($numArray);


// order multidimensional array
usort($farmAnimalGroups, 'order');
print_r($farmAnimalGroups);
```
