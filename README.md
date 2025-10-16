# SGBU - Sistema de Gestión de Bibliotecas Universitarias

## 📚 Descripción del Proyecto

Este repositorio contiene los **mockups interactivos** del Sistema de Gestión de Bibliotecas Universitarias (SGBU) para la **Fundación Universitaria de Popayán**. Se trata de prototipos funcionales desarrollados con HTML, CSS y JavaScript vanilla que simulan la interfaz completa del sistema de gestión bibliotecaria.

## 🎯 Contexto

El SGBU es un sistema integral diseñado para gestionar todos los aspectos de una biblioteca universitaria moderna, incluyendo:

- 📖 **Gestión de inventario de libros**
- 👥 **Administración de usuarios y perfiles**
- 🔄 **Sistema de préstamos y devoluciones**
- 📅 **Reservas de libros en tiempo real**
- ⚠️ **Gestión de sanciones y multas**
- 📊 **Reportes y estadísticas**
- 🔍 **Búsqueda avanzada de catálogo**

### Tipos de Usuarios

El sistema contempla tres roles principales:

1. **👤 Usuarios Públicos**: Acceso al catálogo y sistema de login
2. **📚 Usuarios Registrados**: Estudiantes y personal que pueden realizar préstamos y reservas
3. **👨‍💼 Administradores**: Gestión completa del sistema, inventario y usuarios

## 🧩 Módulos Representados en el Mockup

### Módulo 1: Landing Page y Acceso Público

**Archivos**: `index.html`, `views/public/login.html`

- ✅ Página principal institucional con branding
- ✅ Hero section con llamados a la acción
- ✅ Sección de estadísticas de la biblioteca
- ✅ Features destacados del sistema
- ✅ Footer con información de contacto
- ✅ Sistema de login con validación visual
- ✅ Recuperación de contraseña (UI)

### Módulo 2: Catálogo Público de Libros

**Archivos**: `views/public/catalog.html`, `views/public/book-detail.html`

- ✅ Búsqueda avanzada de libros por:
  - Título, autor, ISBN
  - Categoría (Ficción, Tecnología, Ciencia, etc.)
  - Disponibilidad
- ✅ Grid de libros con portadas y gradientes
- ✅ Filtros laterales interactivos
- ✅ Vista detallada de libro individual con:
  - Información completa (autor, editorial, año, ISBN)
  - Estado de disponibilidad en tiempo real
  - Botón de reserva (para usuarios autenticados)
  - Sección de libros relacionados

### Módulo 3: Dashboard de Usuario

**Archivos**: `views/user/dashboard.html`

- ✅ Resumen de actividad del usuario:
  - Libros prestados actualmente
  - Reservas activas
  - Sanciones pendientes
- ✅ Gráficos de actividad con Canvas:
  - Préstamos por mes
  - Categorías más leídas
- ✅ Accesos rápidos a funciones principales
- ✅ Notificaciones y alertas importantes
- ✅ Próximas devoluciones destacadas

### Módulo 4: Gestión de Préstamos (Usuario)

**Archivos**: `views/user/loans.html`

- ✅ Tarjetas de resumen con estadísticas:
  - Préstamos activos
  - Por vencer (próximos 3 días)
  - Vencidos
  - Historial total
- ✅ Lista de préstamos activos con:
  - Portada del libro con gradiente
  - Fecha de préstamo y vencimiento
  - Contador de días restantes
  - Estado visual (activo, por vencer, vencido)
  - Botón de renovación
- ✅ Tabla de historial completo con:
  - Filtros por fecha y estado
  - Estado de devolución
  - Multas generadas
- ✅ Sistema de notificaciones toast

### Módulo 5: Sistema de Reservas (Usuario)

**Archivos**: `views/user/reservations.html`

- ✅ Dashboard de reservas con contadores:
  - Reservas activas
  - Listas para recoger
  - En lista de espera
  - Expiradas
- ✅ Tarjetas de reserva con tres estados visuales:
  - **Disponible para recoger** (verde): Libro listo en mostrador
  - **En lista de espera** (naranja): Posición en cola
  - **Expirada** (rojo): Reserva vencida
- ✅ Alertas de estado con countdown
- ✅ Información detallada por reserva:
  - Fecha de reserva
  - Fecha de vencimiento
  - Posición en lista de espera
- ✅ Reglas del sistema de reservas:
  - Tiempo de validez
  - Funcionamiento de lista de espera
  - Política de cancelación
- ✅ Historial de reservas completadas/expiradas
- ✅ Cancelación de reservas con confirmación

### Módulo 6: Perfil de Usuario

**Archivos**: `views/user/profile.html`

- ✅ Avatar y header personalizado con gradiente
- ✅ Información personal completa:
  - Datos básicos (nombre, correo, teléfono)
  - Carné estudiantil/laboral
  - Programa académico/departamento
- ✅ Estadísticas del usuario:
  - Total de libros leídos
  - Reservas realizadas
  - Sanciones totales
  - Índice de cumplimiento
- ✅ Configuración de preferencias:
  - Notificaciones por correo
  - Recordatorios de devolución
  - Boletín de novedades
- ✅ Botones de acciones:
  - Editar perfil
  - Cambiar contraseña
  - Ver historial completo

### Módulo 7: Sanciones de Usuario

**Archivos**: `views/user/sanctions.html`

- ✅ Resumen de sanciones con tarjetas:
  - Sanciones activas
  - Monto total pendiente
  - Días de suspensión
  - Historial de sanciones
- ✅ Alerta destacada de estado de cuenta
- ✅ Listado de sanciones activas con:
  - Tipo de sanción (retraso, daño, pérdida)
  - Libro relacionado con portada
  - Monto de la multa
  - Fecha de emisión y vencimiento
  - Estado (pendiente, pagada, condonada)
  - Gradiente de fondo según tipo
- ✅ Información de métodos de pago:
  - Pago en caja
  - Transferencia bancaria
  - Datos bancarios institucionales
- ✅ Historial de sanciones resueltas

### Módulo 8: Dashboard Administrativo

**Archivos**: `views/admin/dashboard.html`

- ✅ Métricas clave del sistema:
  - Total de libros en inventario
  - Usuarios registrados
  - Préstamos activos
  - Sanciones pendientes
- ✅ Gráficos estadísticos avanzados:
  - Préstamos por mes (línea)
  - Libros más prestados (barras)
  - Categorías más populares (dona)
- ✅ Actividad reciente del sistema:
  - Últimos préstamos
  - Últimas devoluciones
  - Usuarios registrados recientemente
- ✅ Alertas administrativas:
  - Libros con bajo stock
  - Préstamos vencidos sin devolver
  - Sanciones no pagadas

### Módulo 9: Gestión de Inventario

**Archivos**: `views/admin/inventory.html`

- ✅ Estadísticas de inventario:
  - Total de libros
  - Disponibles
  - En préstamo
  - En mantenimiento
- ✅ Portadas de libros con gradientes personalizados
- ✅ Filtros avanzados por:
  - Búsqueda por título/autor/ISBN
  - Categoría literaria
  - Estado de disponibilidad
  - Año de publicación
- ✅ Tabla completa de inventario con:
  - Portada miniatura
  - Datos bibliográficos completos
  - Stock total y disponible
  - Estado visual con badges de color
  - Acciones (editar, eliminar)
- ✅ Modal para añadir nuevos libros
- ✅ Toast notifications para acciones
- ✅ Diseño responsive con scroll horizontal en móviles

### Módulo 10: Gestión de Usuarios

**Archivos**: `views/admin/users.html`

- ✅ Resumen de usuarios:
  - Total de usuarios
  - Usuarios activos
  - Usuarios con sanciones
  - Nuevos usuarios (mes actual)
- ✅ Filtros de búsqueda:
  - Por nombre o correo
  - Por rol (estudiante, docente, administrador)
  - Por estado (activo, suspendido)
  - Por programa académico
- ✅ Tabla de usuarios con:
  - Avatar generado por iniciales
  - Información completa (nombre, correo, carné)
  - Rol y programa
  - Estado visual con badges
  - Acciones (editar, suspender, eliminar)
- ✅ Modal para añadir nuevos usuarios
- ✅ Sistema de estados:
  - Activo (verde)
  - Suspendido (rojo)
  - Graduado (gris)

### Módulo 11: Préstamo Rápido

**Archivos**: `views/admin/quick-loan.html`

- ✅ Interfaz optimizada para mostrador
- ✅ Formulario de préstamo en dos pasos:
  1. Búsqueda de usuario por carné/correo
  2. Selección de libro por ISBN/título
- ✅ Vista previa de información:
  - Datos del usuario
  - Estado de cuenta (sanciones activas)
  - Información del libro
  - Disponibilidad en tiempo real
- ✅ Configuración de préstamo:
  - Fecha de devolución automática (7 días)
  - Opción de modificar plazo
  - Notas adicionales del préstamo
- ✅ Validaciones visuales:
  - Usuario con sanciones (alerta)
  - Libro no disponible (error)
  - Límite de préstamos alcanzado (advertencia)
- ✅ Confirmación y registro exitoso

### Módulo 12: Administración de Sanciones

**Archivos**: `views/admin/sanctions-admin.html`, `views/admin/sanctions.html`

- ✅ Panel de control de sanciones:
  - Sanciones activas totales
  - Monto total por cobrar
  - Sanciones vencidas sin pagar
  - Condonaciones del mes
- ✅ Tabla de sanciones con filtros:
  - Por usuario
  - Por tipo (retraso, daño, pérdida)
  - Por estado (pendiente, pagada, condonada)
  - Por rango de fecha
- ✅ Acciones administrativas:
  - Registrar pago
  - Condonar sanción
  - Enviar recordatorio de pago
  - Ver historial del usuario
- ✅ Generación de sanciones automáticas
- ✅ Configuración de tarifas:
  - Costo por día de retraso
  - Monto por daño
  - Costo de reposición por pérdida

### Módulo 13: Reportes y Estadísticas

**Archivos**: `views/admin/reports.html`

- ✅ Generador de reportes con opciones:
  - Tipo de reporte (préstamos, usuarios, inventario, financiero)
  - Rango de fechas personalizado
  - Formato de exportación (PDF, Excel, CSV)
- ✅ Reportes predefinidos:
  - **Préstamos**: Por período, por categoría, por usuario
  - **Usuarios**: Más activos, morosos, nuevos registros
  - **Inventario**: Stock bajo, más prestados, nunca prestados
  - **Financiero**: Ingresos por multas, costos de adquisición
- ✅ Visualizaciones gráficas:
  - Tendencias temporales
  - Comparativas por categoría
  - Distribución por programas académicos
- ✅ Preview de reportes antes de exportar
- ✅ Historial de reportes generados

### Módulo 14: Navegación y Utilidades

**Archivos**: `navigation-check.html`, `test-navigation.html`, `style-guide.html`

- ✅ **Menú de navegación responsive**:
  - Desktop: Barra horizontal con dropdowns
  - Mobile: Menú hamburguesa animado
  - Indicador de página actual
  - Transiciones suaves
- ✅ **Breadcrumbs**: Navegación jerárquica visible
- ✅ **Toast notifications**: Sistema centralizado de alertas
- ✅ **Modales**: Componentes reutilizables para formularios
- ✅ **Style guide**: Documentación completa de componentes
- ✅ **Verificación de navegación**: Herramienta de testing

## 🎨 Características del Diseño

### Diseño Visual Profesional

- ✅ **Paleta de colores institucional**: Azul primario (#005790), verde azulado secundario (#00B4A5)
- ✅ **Íconos SVG**: Sistema de íconos vectoriales escalables sin dependencias externas
- ✅ **Gradientes modernos**: Aplicados en tarjetas, botones y elementos destacados
- ✅ **Animaciones suaves**: Transiciones y efectos hover para mejor UX

### Responsive Design

- 📱 **Mobile First**: Diseño optimizado para dispositivos móviles
- 💻 **Desktop Friendly**: Aprovechamiento óptimo de pantallas grandes
- 📐 **Breakpoints**:
  - 1200px (pantallas grandes)
  - 1024px (tablets landscape)
  - 967px (tablets portrait)
  - 767px (móviles landscape)
  - 600px (móviles pequeños)
  - 480px (móviles muy pequeños)

### Componentes Reutilizables

- 🎴 **Cards**: Tarjetas con sombras y efectos hover
- 📊 **Gráficos**: Visualización de datos con canvas
- 📋 **Tablas responsive**: Con scroll horizontal en móviles
- 🔘 **Botones**: Sistema de botones con variantes (primary, outline, error)
- 🔔 **Toast Notifications**: Sistema de notificaciones no intrusivas
- 📝 **Formularios**: Inputs y selects estilizados

## 📂 Estructura del Proyecto

```
mockups-sgbu/
├── index.html                 # Página principal/landing
├── navigation-check.html      # Verificación de navegación
├── style-guide.html          # Guía de estilos
├── test-navigation.html      # Pruebas de navegación
│
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos globales del sistema
│   ├── images/               # Imágenes y recursos gráficos
│   └── js/
│       └── main.js          # JavaScript principal
│
├── components/               # Componentes reutilizables (futuro)
│
└── views/
    ├── admin/               # Panel de administración
    │   ├── dashboard.html   # Dashboard administrativo
    │   ├── inventory.html   # Gestión de inventario
    │   ├── users.html       # Gestión de usuarios
    │   ├── sanctions-admin.html  # Administración de sanciones
    │   ├── sanctions.html   # Vista de sanciones
    │   ├── reports.html     # Reportes y estadísticas
    │   └── quick-loan.html  # Sistema de préstamo rápido
    │
    ├── public/              # Vistas públicas
    │   ├── login.html       # Página de inicio de sesión
    │   ├── catalog.html     # Catálogo público de libros
    │   └── book-detail.html # Detalle de libro individual
    │
    └── user/                # Panel de usuario
        ├── dashboard.html   # Dashboard del usuario
        ├── loans.html       # Mis préstamos
        ├── reservations.html # Mis reservas
        ├── profile.html     # Mi perfil
        └── sanctions.html   # Mis sanciones
```

## 🚀 Cómo Ver los Mockups

### Opción 1: Abrir Directamente en el Navegador (Recomendado)

1. **Clonar o descargar el repositorio**:

   ```bash
   git clone [URL-del-repositorio]
   cd mockups-sgbu
   ```

2. **Abrir el archivo principal**:

   - Navega hasta la carpeta del proyecto
   - Haz doble clic en `index.html`
   - O arrastra el archivo `index.html` a tu navegador favorito

3. **Navegar por el sistema**:
   - La página principal muestra enlaces a todas las secciones
   - Usa el menú de navegación superior para moverte entre páginas
   - El menú es responsive: en móvil se convierte en hamburguesa

### Opción 2: Servidor Local con Python

Si prefieres usar un servidor local (recomendado para evitar problemas con rutas):

```bash
# Con Python 3
cd mockups-sgbu
python3 -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 3: Servidor Local con Node.js

Si tienes Node.js instalado, puedes usar `http-server`:

```bash
# Instalar http-server globalmente (solo una vez)
npm install -g http-server

# Ejecutar el servidor
cd mockups-sgbu
http-server -p 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 4: Live Server en VS Code

Si usas Visual Studio Code:

1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🗺️ Mapa de Navegación

### Desde la Página Principal (index.html)

```
🏠 Inicio
├── 📖 Catálogo Público → views/public/catalog.html
│   └── 📕 Detalle de Libro → views/public/book-detail.html
├── 👤 Mi Cuenta → views/user/dashboard.html
├── ⚙️ Administración → views/admin/dashboard.html
└── 🔐 Login → views/public/login.html
```

### Panel de Usuario

```
👤 Usuario
├── 📊 Dashboard → views/user/dashboard.html
├── 📚 Mis Préstamos → views/user/loans.html
├── 📅 Mis Reservas → views/user/reservations.html
├── 👤 Mi Perfil → views/user/profile.html
└── ⚠️ Mis Sanciones → views/user/sanctions.html
```

### Panel de Administración

```
⚙️ Administración
├── 📊 Dashboard → views/admin/dashboard.html
├── 📚 Inventario → views/admin/inventory.html
├── 👥 Usuarios → views/admin/users.html
├── ⚠️ Sanciones → views/admin/sanctions.html
├── 📈 Reportes → views/admin/reports.html
└── ⚡ Préstamo Rápido → views/admin/quick-loan.html
```

## 📱 Probar la Responsividad

### En Navegadores de Escritorio

1. **Chrome/Edge**:

   - Presiona `F12` o `Ctrl+Shift+I` (Windows/Linux)
   - Presiona `Cmd+Option+I` (Mac)
   - Haz clic en el ícono de dispositivos móviles (📱) o presiona `Ctrl+Shift+M`

2. **Firefox**:

   - Presiona `F12` o `Ctrl+Shift+I`
   - Haz clic en el ícono de diseño responsive

3. **Safari**:
   - Habilita el menú de desarrollador: Preferencias → Avanzado → "Mostrar menú Desarrollo"
   - Presiona `Cmd+Option+I`
   - Selecciona "Diseño Responsive" en el menú Desarrollo

### Tamaños de Pantalla para Probar

- 📱 **iPhone SE**: 375x667px
- 📱 **iPhone 12/13**: 390x844px
- 📱 **Samsung Galaxy S20**: 360x800px
- 📱 **iPad Mini**: 768x1024px
- 💻 **iPad Pro**: 1024x1366px
- 💻 **Desktop HD**: 1920x1080px
- 🖥️ **Desktop Full HD**: 2560x1440px

## 🎯 Funcionalidades Interactivas

### Elementos Funcionales

- ✅ **Menú de navegación responsive** con hamburguesa en móvil
- ✅ **Toast notifications** al hacer acciones (añadir, editar, eliminar)
- ✅ **Modales** para formularios de añadir libros
- ✅ **Filtros interactivos** en catálogo e inventario
- ✅ **Gráficos animados** en dashboards (con Canvas)
- ✅ **Switches toggle** en configuración de perfil
- ✅ **Tooltips y hover effects** en elementos interactivos
- ✅ **Búsqueda en tiempo real** (simulada)

### Datos de Ejemplo

Todos los datos mostrados son **ficticios** y sirven únicamente para demostrar la funcionalidad del sistema:

- 📚 Libros de ejemplo: "Cien años de soledad", "Sapiens", "Clean Code", etc.
- 👤 Usuario ejemplo: Jose Losada (jose.losada@estudiante.fup.edu.co)
- 📊 Estadísticas simuladas
- 💰 Montos de sanciones ficticios

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos (Grid, Flexbox, Variables CSS, Gradientes)
- **JavaScript Vanilla**: Sin frameworks para máxima portabilidad
- **SVG**: Íconos vectoriales escalables
- **Canvas API**: Para gráficos y visualizaciones

## 📝 Notas Importantes

### Limitaciones Actuales

- ⚠️ **Backend simulado**: No hay persistencia de datos real
- ⚠️ **Autenticación mock**: El login es simulado
- ⚠️ **APIs externas**: No hay integración con servicios externos
- ⚠️ **Base de datos**: Los datos se cargan desde JavaScript

### Navegadores Compatibles

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🎨 Paleta de Colores

```css
--primary-color: #005790      /* Azul institucional */
--secondary-color: #00B4A5    /* Verde azulado */
--success-color: #10b981      /* Verde éxito */
--warning-color: #f59e0b      /* Naranja advertencia */
--error-color: #ef4444        /* Rojo error */
--text-primary: #1a202c       /* Texto principal */
--text-secondary: #718096     /* Texto secundario */
--border-color: #e2e8f0       /* Bordes */
--background-color: #f7fafc   /* Fondo claro */
--surface-color: #edf2f7      /* Superficies elevadas */
```

## 📚 Recursos Adicionales

### Archivos de Referencia

- **style-guide.html**: Guía completa de componentes y estilos
- **navigation-check.html**: Verificación de enlaces de navegación
- **test-navigation.html**: Pruebas de navegación entre páginas

### Documentación de Componentes

Ver `style-guide.html` para ejemplos de:

- Botones y sus variantes
- Cards y tarjetas
- Formularios e inputs
- Tablas responsive
- Badges y chips
- Alertas y notificaciones
- Modales
- Sistema de grid

## 🤝 Contribución

Este es un proyecto de mockups estáticos. Para sugerencias o mejoras:

1. Revisa la estructura actual
2. Mantén la consistencia visual
3. Prueba en múltiples dispositivos
4. Documenta cualquier cambio significativo

## 📧 Contacto

**Fundación Universitaria de Popayán**  
Sistema de Gestión de Bibliotecas Universitarias

---

## 🚀 Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone [URL-del-repositorio]

# 2. Navegar a la carpeta
cd mockups-sgbu

# 3. Abrir index.html en tu navegador
# O iniciar un servidor local:
python3 -m http.server 8000

# 4. Abrir en el navegador
# http://localhost:8000
```

---

**¡Listo para explorar! 🎉**  
Abre `index.html` y comienza a navegar por el sistema completo de gestión bibliotecaria.
