<?php

require_once 'conn.php';

if (!isset($_SESSION['uID'])) {
    header('Location: log_in.php');
}

if (filter_input(INPUT_POST, 'reg_submit', FILTER_SANITIZE_URL) !== null) {
    $solo_category = filter_input(INPUT_POST, 'solo_category', FILTER_SANITIZE_STRING);
    $solo_contestant_name = filter_input(INPUT_POST, 'solo_contestant_name', FILTER_SANITIZE_STRING);
    $solo_title = filter_input(INPUT_POST, 'solo_title', FILTER_SANITIZE_STRING);
    $solo_composer = filter_input(INPUT_POST, 'solo_composer', FILTER_SANITIZE_STRING);
    $solo_arranger = filter_input(INPUT_POST, 'solo_arranger', FILTER_SANITIZE_STRING);
    $solo_accompaniment = filter_input(INPUT_POST, 'solo_accompaniment', FILTER_SANITIZE_STRING);
    $solo_pianist = filter_input(INPUT_POST, 'solo_pianist', FILTER_SANITIZE_STRING);
    
    if($solo_accompaniment != "Piano"){
        $solo_pianist = "-";
    }
    
    $sql_insert = "INSERT INTO chromatic_cat VALUES(null, $_SESSION[uID] ,'$solo_category', '$solo_contestant_name', '$solo_title', '$solo_composer', '$solo_arranger', '$solo_accompaniment', '$solo_pianist', 'pending', null)";
    $result_insert = mysqli_query($link, $sql_insert);
    if ($result_insert) {
        echo '<div class="msg_box success"><img src="../Asset/correct_icon.svg" width="25" alt="@"><p>Saved successfully</p></div>';
        header('refresh:1;url= ' . filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_URL));
    } else {
        echo '<script>alert("Error occured, please try again")</script>';
    }
}
?>