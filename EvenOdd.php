<?php
if(isset($_POST['check'])){
    $num = $_POST['num'];

    if($num % 2 == 0)
        echo "Number is Even";
    else
        echo "Number is Odd";
}
?>

<form method="post">
    Enter Number: <input type="number" name="num"><br><br>
    <button name="check">Check</button>
</form>