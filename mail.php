<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($name && $email && $message) {
        $mailheader = "From: $name <$email>\r\n";
        $recipient = "konopskajulia6@gmail.com";
        $subject = "Contact Form Submission from $name";

        if (mail($recipient, $subject, $message, $mailheader)) {
            // Email sent successfully
            // You can add any additional actions here if needed
            echo "Message sent successfully!";
        } else {
            // Error occurred while sending email
            // Log the error or provide an error message to the user
            echo "Error: Unable to send the email. Please try again later.";
        }
    } else {
        // Invalid input data
        // You can provide an error message or redirect the user back to the form
        echo "Error: Please fill in all the required fields.";
    }
}
?>