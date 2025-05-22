<?php
    session_start();
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }
 
    $dataJSON = file_get_contents("php://input");
    $params = json_decode($dataJSON);

    if (isset($params->email) && isset($params->password)) {
        $email = trim($params->email);
        $password = trim($params->password);

        if (!empty($email) && !empty($password)) {
            $conexion = mysqli_connect("localhost", "root", "", "usuarios");
            if (!$conexion) {
                echo json_encode(["success" => false, "message" => "Error de conexión a la base de datos"]);
                exit();
            }

            $stmt = $conexion->prepare("SELECT * FROM registros WHERE email = ? AND password = ?");
            if (!$stmt) {
                echo json_encode(["success" => false, "message" => "Error en la preparación de la consulta"]);
                exit();
            }

            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $resultado = $stmt->get_result();

            if ($resultado->num_rows > 0) {
                // Credenciales válidas
                echo json_encode(["success" => true, "redirect" => "home"]);
            } else {
                // Credenciales inválidas
                echo json_encode(["success" => false, "message" => "Credenciales incorrectas"]);
            }

            $stmt->close();
            mysqli_close($conexion);
        } else {
            echo json_encode(["success" => false, "message" => "Campos vacíos"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Datos incompletos"]);
    }

?>