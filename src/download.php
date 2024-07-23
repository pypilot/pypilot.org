<?php
$fp = fopen("count.txt", "r");
$count = fread($fp, 1024);
fclose($fp);
$count = $count + 1;

$fp = fopen("count.txt", "w");
fwrite($fp, $count);
fclose($fp);

header("location: ".$_GET["Down"]);
exit;
