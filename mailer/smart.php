<?php 

$email = $_POST['email'];

require 'phpmailer/PHPMailerAutoload.php';
$mail1 = new PHPMailer;
$mail2 = new PHPMailer;

$mail1->CharSet = 'utf-8';

$mail1->isSMTP();
$mail1->Host = 'smtp.gmail.com';
$mail1->SMTPAuth = true;
$mail1->Username = 'noreply.skystudy@gmail.com';
$mail1->Password = 'usfbbvfqsyyauvvm';
$mail1->SMTPSecure = 'ssl';
$mail1->Port = 465;

$mail1->setFrom('noreply.skystudy@gmail.com', 'Sky Study');
$mail1->addAddress('vagnydyadya@gmail.com');
$mail1->isHTML(true);

$mail1->Subject = 'Подписка';
$mail1->Body    = 'Новый пользователь подписался на ваши обновления<br>E-mail: ' . $email;

sleep(5);

$mail2->CharSet = 'utf-8';

$mail2->isSMTP();
$mail2->Host = 'smtp.gmail.com';
$mail2->SMTPAuth = true;
$mail2->Username = 'noreply.skystudy@gmail.com';
$mail2->Password = 'usfbbvfqsyyauvvm';
$mail2->SMTPSecure = 'ssl';
$mail2->Port = 465;

$mail2->setFrom('noreply.skystudy@gmail.com', 'Sky Study');
$mail2->addAddress($email);
$mail2->isHTML(true);

$mail2->Subject = 'Подписка';
$mail2->Body    = 'Поздравляем!<br>Вы подписались на обновления Sky Study';

if(!$mail1->send()) {
    echo 'Message 1 could not be sent. Mailer Error: ' . $mail1->ErrorInfo;
} else {
    echo 'Message 1 has been sent';
}

if(!$mail2->send()) {
    echo 'Message 2 could not be sent. Mailer Error: ' . $mail2->ErrorInfo;
} else {
    echo 'Message 2 has been sent';
}

?>