<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("Acceso no permitido");
}

// Conexión a la BD
$pdo = require __DIR__ . '/../../../config/db.php';

// =========================
// 1. Recoger datos del formulario
// =========================

$nombre = $_POST['nombre'];
$slug = $_POST['slug'];
$categoria = $_POST['categoria'];
$descripcion_corta = $_POST['descripcion_corta'];
$descripcion_larga = $_POST['descripcion_larga'];
$precio_base = $_POST['precio_base'];
$unidad_texto = $_POST['unidad_texto'] ?? null;
$imagen_principal = $_POST['imagen_principal'];
$activo = isset($_POST['activo']) ? 1 : 0;


// =========================
// 2. Preparar INSERT
// =========================

$sql = "INSERT INTO productos 
(nombre, slug, categoria, descripcion_corta, descripcion_larga, precio_base, unidad_texto, imagen_principal, activo) 
VALUES 
(:nombre, :slug, :categoria, :descripcion_corta, :descripcion_larga, :precio_base, :unidad_texto, :imagen_principal, :activo)";

$stmt = $pdo->prepare($sql);


// =========================
// 3. Ejecutar
// =========================

$stmt->execute([
    'nombre' => $nombre,
    'slug' => $slug,
    'categoria' => $categoria,
    'descripcion_corta' => $descripcion_corta,
    'descripcion_larga' => $descripcion_larga,
    'precio_base' => $precio_base,
    'unidad_texto' => $unidad_texto,
    'imagen_principal' => $imagen_principal,
    'activo' => $activo
]);


// =========================
// 4. Redirección
// =========================

header("Location: nuevo.php?ok=1");
exit;
