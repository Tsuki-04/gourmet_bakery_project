<?php
// Esta página solo muestra el formulario.
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Nuevo producto</title>
</head>
<body>

    <h1>Crear producto</h1>

    <form action="guardar.php" method="POST">

        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="slug">Slug:</label><br>
        <input type="text" id="slug" name="slug" required><br><br>

        <label for="categoria">Categoría:</label><br>
        <input type="text" id="categoria" name="categoria" required><br><br>

        <label for="descripcion_corta">Descripción corta:</label><br>
        <input type="text" id="descripcion_corta" name="descripcion_corta" required><br><br>

        <label for="descripcion_larga">Descripción larga:</label><br>
        <textarea id="descripcion_larga" name="descripcion_larga" required></textarea><br><br>

        <label for="precio_base">Precio base:</label><br>
        <input type="number" id="precio_base" name="precio_base" step="0.01" required><br><br>

        <label for="unidad_texto">Unidad texto:</label><br>
        <input type="text" id="unidad_texto" name="unidad_texto"><br><br>

        <label for="imagen_principal">Imagen principal (ruta):</label><br>
        <input type="text" id="imagen_principal" name="imagen_principal" required><br><br>

        <label>
            <input type="checkbox" name="activo" value="1" checked>
            Activo
        </label><br><br>

        <button type="submit">Guardar producto</button>
    </form>

</body>
</html>
