<?php
if(isset($_POST['find'])){
    $a = $_POST['n1'];
    $b = $_POST['n2'];
    $c = $_POST['n3'];

    if($a >= $b && $a >= $c)
        echo "Largest = " . $a;
    elseif($b >= $a && $b >= $c)
        echo "Largest = " . $b;
    else
        echo "Largest = " . $c;
}
?>

<form method="post">
    Enter Number 1: <input type="number" name="n1"><br><br>
    Enter Number 2: <input type="number" name="n2"><br><br>
    Enter Number 3: <input type="number" name="n3"><br><br>
    <button name="find">Find Largest</button>
</form>