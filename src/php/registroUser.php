
<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }
 
    $dataJSON = file_get_contents("php://input");
    $params = json_decode($dataJSON);

    if (isset($params->nombre) && isset($params->email) && isset($params->password)) {
        $par1 = trim($params->nombre);
        $par2 = trim($params->email);
        $par3 = trim($params->password);

        if (!empty($par1) && !empty($par2) && !empty($par3)) {
            $conexion = mysqli_connect("localhost", "root", "", "usuarios");
            if (!$conexion) {
                echo json_encode(["success" => false, "message" => "No se puede conectar con la base de datos"]);
                exit();
            }
            $stmt = $conexion->prepare("INSERT INTO registros (nombre, email, password) VALUES (?, ?, ?)");
            if (!$stmt) {
                echo json_encode(["success" => false, "message" => "Error en la preparación de la consulta"]);
                exit();
            }
            $stmt->bind_param("sss", $par1, $par2, $par3);
            if ($stmt->execute()) {
                echo json_encode(["success" => true]);
            } else {
                echo json_encode(["success" => false, "message" => "Error al ejecutar la consulta"]);
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