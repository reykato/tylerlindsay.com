<?php
  $time = time();
  date_default_timezone_set('America/New_York');
  $date_est = date("M. d, Y h:iA");
  $time_str = gmdate("m/d/Y H:i:s", $time);
  $index_filename = '/home3/tylersay/public_html/messages/v2.1/aidan/index.log';
  $index = file_get_contents($index_filename);
  $index_updated = intval($index) + 1;
  $log_filename = '/home3/tylersay/public_html/messages/v2.1/aidan/' . strval($index_updated) . '.txt';
  $message = $_POST['message']; // incoming message
  $log_contents = $date_est . "\n" . $message;
  $index_contents = strval($index_updated);
  file_put_contents($index_filename, $index_contents);
  file_put_contents($log_filename, $log_contents, FILE_APPEND);
  header('Location: /restricted/msg'); // redirect back to the main site