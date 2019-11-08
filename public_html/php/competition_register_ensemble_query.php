<?php

require_once 'conn.php';

if (!isset($_SESSION['uID'])) {
    header('Location: log_in.php');
}

if (filter_input(INPUT_POST, 'reg_submit', FILTER_SANITIZE_URL) !== null) {
    $ensemble_category = filter_input(INPUT_POST, 'ensemble_category', FILTER_SANITIZE_STRING);
    $ensemble_team_name = filter_input(INPUT_POST, 'ensemble_team_name', FILTER_SANITIZE_STRING);
    $ensemble_member_count = filter_input(INPUT_POST, 'ensemble_member_count', FILTER_SANITIZE_STRING);
    $ensemble_title = filter_input(INPUT_POST, 'ensemble_title', FILTER_SANITIZE_STRING);
    $ensemble_composer = filter_input(INPUT_POST, 'ensemble_composer', FILTER_SANITIZE_STRING);
    $ensemble_arranger = filter_input(INPUT_POST, 'ensemble_arranger', FILTER_SANITIZE_STRING);
    $ensemble_first = filter_input(INPUT_POST, 'ensemble_first', FILTER_SANITIZE_STRING);
    $ensemble_second = filter_input(INPUT_POST, 'ensemble_second', FILTER_SANITIZE_STRING);
    $ensemble_third = filter_input(INPUT_POST, 'ensemble_third', FILTER_SANITIZE_STRING);
    $ensemble_forth = filter_input(INPUT_POST, 'ensemble_forth', FILTER_SANITIZE_STRING);
    $ensemble_bass = filter_input(INPUT_POST, 'ensemble_bass', FILTER_SANITIZE_STRING);
    $ensemble_chord = filter_input(INPUT_POST, 'ensemble_chord', FILTER_SANITIZE_STRING);
    
    if($ensemble_member_count == "4"){
        $ensemble_third = "-";
        $ensemble_forth = "-";
    } else if ($ensemble_member_count == "5") {
        $ensemble_forth = "-";
    }
    
    $sql_insert = "INSERT INTO ensemble_cat VALUES(null, $_SESSION[uID],'$ensemble_category', '$ensemble_team_name', '$ensemble_member_count', '$ensemble_title', '$ensemble_composer', '$ensemble_arranger', '$ensemble_first', '$ensemble_second', '$ensemble_third', '$ensemble_forth', '$ensemble_bass', '$ensemble_chord', 'pending', null)";
    $result_insert = mysqli_query($link, $sql_insert);
    if ($result_insert) {
        echo '<div class="msg_box success"><img src="../Asset/correct_icon.svg" width="25" alt="@"><p>Saved successfully</p></div>';
        header('refresh:1;url= ' . filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_URL));
    } else {
        echo '<script>alert("Error occured, please try again")</script>';
    }
}
?>