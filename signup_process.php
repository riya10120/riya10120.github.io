<?php
// Assuming signup is successful

// Get the redirect URL
$redirect = isset($_POST['redirect']) ? $_POST['redirect'] : 'start.html';

// Redirect the user
header("Location: $redirect");
exit();
?>
