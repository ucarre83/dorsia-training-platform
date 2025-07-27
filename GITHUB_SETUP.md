# Instrucciones para Crear el Repositorio en GitHub

## Método 1: Crear Repositorio Nuevo (Recomendado)

### Paso 1: Crear Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Configura el repositorio:
   - **Repository name**: `dorsia-training-platform`
   - **Description**: `Plataforma web interactiva para formación de agentes de Customer Service de Clínicas Dorsia`
   - **Visibility**: Elige Public o Private según tus necesidades
   - **NO marques** "Add a README file" (ya tenemos uno)
   - **NO marques** "Add .gitignore" (ya tenemos uno)
   - **NO marques** "Choose a license" (ya tenemos uno)
5. Haz clic en "Create repository"

### Paso 2: Subir el Código
Después de crear el repositorio, GitHub te mostrará instrucciones. Usa estas:

```bash
# Navega a la carpeta del proyecto
cd dorsia-training-platform

# Agrega el remote de GitHub (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/dorsia-training-platform.git

# Sube el código
git push -u origin main
```

## Método 2: Usar GitHub CLI (Si lo tienes instalado)

```bash
# Instalar GitHub CLI (si no lo tienes)
# En macOS: brew install gh
# En Ubuntu: sudo apt install gh
# En Windows: winget install GitHub.cli

# Autenticarse
gh auth login

# Crear repositorio y subirlo
gh repo create dorsia-training-platform --public --description "Plataforma web interactiva para formación de agentes de Customer Service de Clínicas Dorsia"
git remote add origin https://github.com/TU_USUARIO/dorsia-training-platform.git
git push -u origin main
```

## Método 3: Importar desde Bundle (Alternativo)

Si tienes problemas con los métodos anteriores:

1. Descarga el archivo `dorsia-training-platform.bundle`
2. En tu computadora local:
```bash
# Crear directorio y clonar desde bundle
mkdir dorsia-training-platform
cd dorsia-training-platform
git clone /ruta/al/dorsia-training-platform.bundle .

# Crear repositorio en GitHub (Método 1)
# Luego agregar remote y subir
git remote add origin https://github.com/TU_USUARIO/dorsia-training-platform.git
git push -u origin main
```

## Configuración Post-Creación

### 1. Configurar GitHub Pages (Opcional)
Para hospedar la aplicación gratis en GitHub Pages:

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. Scroll hasta "Pages" en el menú lateral
4. En "Source", selecciona "Deploy from a branch"
5. Selecciona "main" branch y "/ (root)"
6. Haz clic en "Save"
7. Tu aplicación estará disponible en: `https://TU_USUARIO.github.io/dorsia-training-platform`

### 2. Configurar API Key
**IMPORTANTE**: Antes de usar la aplicación, debes configurar tu API Key de Gemini:

1. Abre el archivo `index.html`
2. Busca la línea:
   ```javascript
   const GEMINI_API_KEY = 'AIzaSyAAEMp7SI6qCVihTQR5z29hT7J6aps7gJI';
   ```
3. Reemplaza con tu propia API Key de Google Gemini
4. Haz commit y push de los cambios:
   ```bash
   git add index.html
   git commit -m "Update API key configuration"
   git push
   ```

### 3. Configurar Protección de Rama (Recomendado)
1. Ve a "Settings" > "Branches"
2. Haz clic en "Add rule"
3. En "Branch name pattern" escribe `main`
4. Marca "Require pull request reviews before merging"
5. Haz clic en "Create"

## Estructura del Proyecto

```
dorsia-training-platform/
├── index.html                 # Aplicación principal
├── README.md                  # Documentación principal
├── LICENSE                    # Licencia MIT
├── .gitignore                # Archivos a ignorar
├── config.example.js         # Configuración de ejemplo
├── GITHUB_SETUP.md           # Este archivo
├── assets/                   # Recursos (vacío por ahora)
│   ├── css/
│   ├── js/
│   └── images/
└── docs/                     # Documentación adicional
    ├── SETUP.md              # Guía de configuración
    └── SIMULATORS.md         # Documentación de simuladores
```

## Próximos Pasos

1. **Configurar API Key**: Esencial para que funcionen los simuladores
2. **Probar localmente**: Asegúrate de que todo funciona antes de desplegar
3. **Configurar GitHub Pages**: Para acceso web directo
4. **Personalizar**: Ajustar colores, contenido o funcionalidades según necesidades
5. **Documentar cambios**: Mantener el README actualizado

## Soporte

Si tienes problemas:
1. Revisa la documentación en la carpeta `docs/`
2. Verifica que la API Key esté configurada correctamente
3. Usa las herramientas de desarrollador del navegador para debug
4. Crea un issue en el repositorio para reportar bugs

## Enlaces Útiles

- [Documentación de GitHub](https://docs.github.com)
- [GitHub Pages](https://pages.github.com)
- [Google AI Studio](https://makersuite.google.com/app/apikey) (para API Key)
- [Tailwind CSS](https://tailwindcss.com) (framework CSS usado)

