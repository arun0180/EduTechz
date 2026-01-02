<?php
$conn = new mysqli("localhost", "root", "", "ed_tech_quiz");

if ($conn->connect_error) {
    die("Database connection failed");
}
?>
