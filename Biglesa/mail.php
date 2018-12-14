<?php

$recepient = "biglesa.com.ua@gmail.com";
$sitename = "Biglesa";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$long = trim($_POST["long"]);
$height = trim($_POST["height"]);
$amount = trim($_POST["amount"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nДлина лесов: $long \nВысота лесов: $height \nКоличество лесов: $amount";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");