<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);
// от кого письмо
$mail->setFrom('danil_pidr_228@mail.ru', 'Получить план');
// кому

$mail->addAddress('danil_korepanov_2003@mail.ru');

$mail->Subject = 'Здраствуйте хочу получить план';

// тело письма 
$body = '<h1>Данные</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong>' . $_POST['name'] . '</p>';
};
if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Почта:</strong>' . $_POST['email'] . '</p>';
};
if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Номер:</strong>' . $_POST['phone'] . '</p>';
};

$mail->Body = $body;

if (!$mail->send()) {
    $message  = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
