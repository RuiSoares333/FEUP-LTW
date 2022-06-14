<?php
    declare(strict_types = 1);

    require_once(__DIR__ . '/../../utils/session.php');

    $session = new Session();

    require_once(__DIR__ . '/../../database/connection.php');
    require_once(__DIR__ . '/../../database/costumer.class.php');

    $db = getDBConnection(__DIR__ . '/../../database/data.db');

    $query = 'SELECT username FROM User WHERE username = ?';

    $username = getQueryResults($db, $query, false, array(trim($_POST['phone'])));

    echo json_encode($username ? $username !== $session->getId() : false);
?>