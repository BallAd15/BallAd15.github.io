<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "aditbaliga@gmail.com";
    $subject = "New contact form submission";
    $txt = "Name: " . $name . "\r\nEmail: " . $email . "\r\nMessage: " . $message;
    $headers = "From: $email";

    // Attempt to send the email
    if (mail($to, $subject, $txt, $headers)) {
        // Email sent successfully
        echo "Thank you for your message. We will get in touch soon!";
    } else {
        // Email failed to send
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
