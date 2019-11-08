<?php
session_start();
require_once 'conn.php';
$json_array = (array) (json_decode($_POST["section_arr"], true));
$orchestra_section_name = "";
$orchestra_section_member = "";
foreach ($json_array as $key => $value) {
    $orchestra_section_name .= $key . ",";
    foreach ($value as $member) {
        $orchestra_section_member .= $member . ",";
    }
}
$orchestra_category = filter_input(INPUT_POST, 'orchestra_category', FILTER_SANITIZE_STRING);
$orchestra_name = filter_input(INPUT_POST, 'orchestra_name', FILTER_SANITIZE_STRING);
$orchestra_title = filter_input(INPUT_POST, 'orchestra_title', FILTER_SANITIZE_STRING);
$orchestra_composer = filter_input(INPUT_POST, 'orchestra_composer', FILTER_SANITIZE_STRING);
$orchestra_arranger = filter_input(INPUT_POST, 'orchestra_arranger', FILTER_SANITIZE_STRING);

$sql_insert = "INSERT INTO orchestra_cat VALUES(null, $_SESSION[uID],'$orchestra_category', '$orchestra_name', '$orchestra_title', '$orchestra_composer', '$orchestra_arranger', '$_POST[section_arr]', '$orchestra_section_member', 'pending', null)";
$result_insert = mysqli_query($link, $sql_insert);
if ($result_insert) {
    echo '<div class="msg_box success"><img src="../Asset/correct_icon.svg" width="25" alt="@"><p>Saved successfully</p></div>';
    header('refresh:1;url= ' . filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_URL));
} else {
    echo '<script>alert("Error occured, please try again")</script>';
}
//echo $array;
//foreach($array as $key => $value) {  
//    $lol = "Key: " . $key;  
//} 
//$mykey;
//foreach($array as $key=>$value){
//    $mykey = $key . "=>" . $value;
//}
//echo $mykey;
//if (filter_input(INPUT_POST, 'reg_submit', FILTER_SANITIZE_URL) !== null) {
//    $orchestra_category = filter_input(INPUT_POST, 'orchestra_category', FILTER_SANITIZE_STRING);
//    $orchestra_name = filter_input(INPUT_POST, 'orchestra_name', FILTER_SANITIZE_STRING);
//    $orchestra_title = filter_input(INPUT_POST, 'orchestra_title', FILTER_SANITIZE_STRING);
//    $orchestra_composer = filter_input(INPUT_POST, 'orchestra_composer', FILTER_SANITIZE_STRING);
//    $orchestra_arranger = filter_input(INPUT_POST, 'orchestra_arranger', FILTER_SANITIZE_STRING);
//    if ($solo_accompaniment != "Piano") {
//        $solo_pianist = "-";
//    }
//
//    $sql_insert = "INSERT INTO chromatic_cat VALUES(null, '$solo_category', '$solo_contestant_name', '$solo_title', '$solo_composer', '$solo_arranger', '$solo_accompaniment', '$solo_pianist', 'pending', null)";
//    $result_insert = mysqli_query($link, $sql_insert);
//    if ($result_insert) {
//        echo '<div class="msg_box success"><img src="../Asset/correct_icon.svg" width="25" alt="@"><p>Saved successfully</p></div>';
//        header('refresh:1;url= ' . filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_URL));
//    } else {
//        echo '<script>alert("Error occured, please try again")</script>';
//    }
//}

?>