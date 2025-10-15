#!/bin/bash

# Script para actualizar la estructura de navbar en todos los archivos HTML

# Función para actualizar navbar en archivos con ruta relativa ../../
update_double_relative() {
    local file="$1"
    echo "Actualizando $file..."
    
    # Crear una copia temporal
    cp "$file" "$file.tmp"
    
    # Usar sed para reemplazar la estructura de navbar
    sed -i '/<header class="navbar">/,/<\/header>/{
        s/<header class="navbar">/<header class="navbar">\n      <div class="navbar-container">/
        s/<a href="\.\.\/\.\.\/index\.html" class="navbar-brand"/<a href="..\/..\/index.html" class="navbar-brand"/
        s/><\/a>/><\/a>\n        <button\n          class="navbar-toggle"\n          aria-label="Abrir menú de navegación"\n          onclick="toggleMobileMenu()"\n        >\n          ☰\n        <\/button>/
        s/<\/nav>/<\/nav>\n        <div class="navbar-mobile-menu" id="mobileMenu">\n          <ul class="navbar-nav">/
        s/<\/header>/          <\/ul>\n        <\/div>\n      <\/div>\n    <\/header>/
    }' "$file"
    
    # Si hay errores, restaurar el archivo original
    if [ $? -ne 0 ]; then
        mv "$file.tmp" "$file"
        echo "Error actualizando $file, restaurado"
    else
        rm "$file.tmp"
        echo "✓ $file actualizado correctamente"
    fi
}

# Función para actualizar navbar en archivos con ruta relativa ../
update_single_relative() {
    local file="$1"
    echo "Actualizando $file..."
    
    # Crear una copia temporal
    cp "$file" "$file.tmp"
    
    # Para archivos en subdirectorios de views/
    if [[ "$file" == *"/views/"* ]]; then
        # Actualizar estructura similar pero con rutas ajustadas
        echo "Archivo en views/, actualización manual requerida para $file"
    fi
    
    rm "$file.tmp"
}

# Buscar y actualizar archivos
echo "Iniciando actualización masiva de navbars..."

# Actualizar archivos en views/public/
for file in /home/jdlos/mockups-sgbu/views/public/*.html; do
    if [ -f "$file" ] && [ "$file" != "/home/jdlos/mockups-sgbu/views/public/login.html" ]; then
        update_double_relative "$file"
    fi
done

# Actualizar archivos en views/user/
for file in /home/jdlos/mockups-sgbu/views/user/*.html; do
    if [ -f "$file" ]; then
        update_double_relative "$file"
    fi
done

# Actualizar archivos en views/admin/
for file in /home/jdlos/mockups-sgbu/views/admin/*.html; do
    if [ -f "$file" ]; then
        update_double_relative "$file"
    fi
done

echo "Actualización completada."