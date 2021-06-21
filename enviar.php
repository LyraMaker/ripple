<?php 
//Variáveis 
date_default_timezone_set('America/Sao_Paulo');
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$motivo = $_POST['motivo'];
$assunto = $_POST['assunto'];
$corpo = $_POST['corpo'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');


$destino = "";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: $nome <$email>";

$arquivo = "

<html>

<body>

    <center><h1>Mensagem de contato</h1></center>
    <center><h2>Enviada pelo site da escola</h2></center>
    <br>

<table>
<tr>
    <th>Nome:</th>
    <td> $nome</td>
    <th>Telefone:</th>
    <td> $telefone</td>
</tr>
<tr>
    <th>E-mail:</th>
    <td colspan='2'> $email</td>
  
</tr>
<tr>
    <th>Assunto:</th>
    <td>$assunto</td>
    <th>Motivo para contato:</th>
    <td> $motivo</td>
</tr>
<tr>
    <th>Mensagem:</th>
    <td colspan='3'> $corpo</td>
</tr>
</table>
<p> Mensagem enviada no dia <b>$data_envio</b> às <b>$hora_envio</b></p>
</main>
</body>
</html>

";

$enviaremail = mail($destino,"Msg. do site | $assunto - $motivo", $arquivo, $headers);

echo "
<!DOCTYPE html>
<html lang='pt-br' class=''>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>3D Colégios</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel='stylesheet' href='css/style.css'>
    <link rel='stylesheet' href='css/bulma-pageloader.min.css'>
    <link rel='shortcut icon' href='/img/logo.png'>
</head>
<body>
";


if($emailenviar){
   echo "<article class='message is-primary'>
   <div class='message-body'>
     <p class='has-text-centered'>Sua mensagem foi enviada com sucesso!</p>
     <p class='has-text-centered'>Logo reponderemos através do email informado.</p>
     <p class='has-text-centered'><input type='button' class='button is-success' onClick='window.history.back()' value='Voltar para o site'></input></p>

   </div>

 </article>";
    } else {
        echo "<article class='message is-danger'>
        <div class='message-body'>
          <p class='has-text-centered'>Opa! Aconteceu algum erro...</p>
          <p class='has-text-centered'>Entre em contato através do nosso Whatsapp, pode ser?</p>
          <p class='has-text-centered'><a class='button is-success' href='https://api.whatsapp.com/send?phone=5521965592803'><span
          class='fa fa-whatsapp fa-2x'> </span> <span class='text'> (21) 9 6559-2803</span></a></a></p>
     
        </div>
      </article>";
    }
echo "</body>
</html>";