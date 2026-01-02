<?php
$conn = new mysqli("localhost", "root", "", "ed_tech_quiz");

$name  = $_POST['name'];
$score = $_POST['score'];
$total = $_POST['total'];

$conn->query("INSERT INTO quiz_results (student_name, score, total)
VALUES ('$name','$score','$total')");
?>
