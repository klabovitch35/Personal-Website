<?php
 $firstname = filter_input(INPUT_POST, 'firstname');
 $lastname = filter_input(INPUT_POST, 'lastname');
 $people = filter_input(INPUT_POST, 'people');
 $email = filter_input(INPUT_POST, 'email');
 $cost = filter_input(INPUT_POST, 'cost');

var_dump($email);

 if (!empty($firstname)){
if (!empty($lastname)){
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "project";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $project);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO lessons (firstname, lastname, people, email, cost)
values ('$firstname','$lastname','$people','$email','$cost')";
if ($conn->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Firstname should not be empty";
die();
}
}
else{
echo "Lastname should not be empty";
die();
}
?>