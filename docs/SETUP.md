# Guía de Configuración

## Configuración Inicial

### 1. Obtener API Key de Google Gemini

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la API Key generada

### 2. Configurar la Aplicación

#### Opción A: Configuración Directa (Más Simple)
1. Abre el archivo `index.html`
2. Busca la línea que contiene:
   ```javascript
   const GEMINI_API_KEY = 'AIzaSyAAEMp7SI6qCVihTQR5z29hT7J6aps7gJI';
   ```
3. Reemplaza la API Key con la tuya

#### Opción B: Archivo de Configuración (Más Seguro)
1. Copia `config.example.js` como `config.js`:
   ```bash
   cp config.example.js config.js
   ```
2. Edita `config.js` y agrega tu API Key
3. Modifica `index.html` para cargar la configuración desde el archivo

### 3. Ejecutar la Aplicación

#### Método 1: Abrir Directamente
- Simplemente abre `index.html` en tu navegador

#### Método 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000`

## Solución de Problemas

### Error: "API Key no válida"
- Verifica que la API Key esté correctamente copiada
- Asegúrate de que la API Key tenga permisos para Gemini
- Revisa que no haya espacios extra al inicio o final

### Error: "CORS"
- Usa un servidor local en lugar de abrir el archivo directamente
- Algunos navegadores bloquean requests desde archivos locales

### Los simuladores no funcionan
- Verifica tu conexión a internet
- Abre las herramientas de desarrollador (F12) para ver errores
- Asegúrate de que la API Key esté configurada correctamente

### Problemas de rendimiento
- Usa un servidor local para mejor rendimiento
- Verifica que tu conexión a internet sea estable
- Los requests a la API pueden tomar unos segundos

## Personalización

### Cambiar Colores de Dorsia
Los colores están definidos en las variables CSS:
```css
:root {
    --dorsia-gold: #c5a67a;
    --dorsia-dark: #2c3e50;
    --dorsia-light: #f8f9fa;
}
```

### Agregar Nuevos Módulos
1. Crea una nueva sección con clase `slide`
2. Agrega el contenido HTML
3. Actualiza la variable `totalSlides` en JavaScript
4. Agrega navegación si es necesario

### Modificar Prompts de IA
Los prompts están en las funciones JavaScript:
- `generateKnowledgeTestCase()`
- `generatePatientQuery()`
- `generateSatisfactionScenario()`
- `generateComplaintScenario()`
- `generateGeneralQuery()`

