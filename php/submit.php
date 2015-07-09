<?php
if (isset($_POST['inp'])) {
  echo json_encode(strrev($_POST['inp']));
} else die("No input!");
?>
