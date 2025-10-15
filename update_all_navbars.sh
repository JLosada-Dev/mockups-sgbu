#!/bin/bash

# Script para actualizar todas las páginas con la nueva estructura de navegación

echo "Actualizando navegación en todas las páginas..."

# Función para actualizar navbar de admin
update_admin_navbar() {
    local file="$1"
    echo "Actualizando $file..."
    
    # Crear backup
    cp "$file" "$file.backup"
    
    # Actualizar navbar structure
    sed -i 's|<header class="navbar">|<header class="navbar"><div class="navbar-container">|g' "$file"
    sed -i 's|<a href="../../index.html" class="navbar-brand">SGBU - Fundación Universitaria de Popayán</a>|<a href="../../index.html" class="navbar-brand">SGBU - Fundación Universitaria de Popayán</a>|g' "$file"
    
    # Agregar JavaScript si no existe
    if ! grep -q "assets/js/main.js" "$file"; then
        sed -i 's|</body>|    <script src="../../assets/js/main.js"></script>\n</body>|g' "$file"
    fi
}

# Función para actualizar navbar de usuario
update_user_navbar() {
    local file="$1"
    echo "Actualizando $file..."
    
    # Crear backup
    cp "$file" "$file.backup"
    
    # Agregar JavaScript si no existe
    if ! grep -q "assets/js/main.js" "$file"; then
        sed -i 's|</body>|    <script src="../../assets/js/main.js"></script>\n</body>|g' "$file"
    fi
}

# Actualizar páginas de admin
for file in views/admin/*.html; do
    if [[ "$file" != "views/admin/dashboard.html" && "$file" != "views/admin/inventory.html" ]]; then
        update_admin_navbar "$file"
    fi
done

# Actualizar páginas de usuario
for file in views/user/*.html; do
    if [[ "$file" != "views/user/dashboard.html" && "$file" != "views/user/loans.html" ]]; then
        update_user_navbar "$file"
    fi
done

echo "Navegación actualizada en todas las páginas!"