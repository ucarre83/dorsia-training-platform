# Plataforma de Formación - Clínicas Dorsia

Una plataforma web interactiva completa para la formación de agentes de Customer Service de Clínicas Dorsia, con navegación vertical tipo PowerPoint y módulos de práctica con IA.

## 🚀 Características Principales

### 📚 Contenido Formativo Completo
- **16 módulos de formación** basados en protocolos reales de Clínicas Dorsia
- Filosofía del Gestor Personal del Paciente
- Técnicas de comunicación y lenguaje
- Manejo de objeciones y conflictos
- Protocolos de crisis y emergencias
- Catálogo completo de tratamientos
- Herramientas de fidelización

### 🤖 Simuladores de IA Interactivos
- **Simulador de Test de Conocimiento**: Casos clínicos para selección de tratamientos
- **Simulador de Identificación de Necesidades**: Práctica de indagación sin proponer tratamientos
- **Simulador de Venta Cruzada**: Introducción natural de programas PRIME y Beauty Coach
- **Simulador de Manejo de Conflictos**: Aplicación de técnicas psicológicas
- **Simulador de Role-Playing General**: Práctica libre con cualquier consulta

### 🔄 Funcionalidad "Cambiar Escenario del Paciente"
- Generación automática de nuevos casos usando IA
- Limpieza automática de respuestas anteriores
- Escenarios únicos y realistas adaptados a Dorsia
- Feedback inteligente y personalizado

## 🛠️ Configuración

### Requisitos Previos
- Navegador web moderno
- Conexión a internet
- API Key de Google Gemini

### Instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/tu-usuario/dorsia-training-platform.git
cd dorsia-training-platform
```

2. **Configura la API Key de Gemini**:
   - Abre el archivo `index.html`
   - Busca la línea que contiene `const GEMINI_API_KEY`
   - Reemplaza `'TU_API_KEY_AQUI'` con tu API Key de Google Gemini

3. **Abre la aplicación**:
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local para mejor rendimiento

### Uso con Servidor Local (Recomendado)

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 📖 Guía de Uso

### Navegación
- **Flechas del teclado**: ↑/↓ o PageUp/PageDown para navegar entre slides
- **Botones de navegación**: Flechas flotantes en la esquina derecha
- **Barra de progreso**: Indica el progreso actual en la formación
- **Indicadores de slide**: Puntos en la parte inferior para navegación directa

### Simuladores de IA
1. **Navega** hasta cualquier simulador (slides 12-16)
2. **Lee** el escenario del paciente presentado
3. **Escribe** tu respuesta en el área de texto
4. **Haz clic** en "Evaluar Respuesta" para recibir feedback de IA
5. **Usa** "🔄 Cambiar Escenario del Paciente" para practicar con nuevos casos

### Catálogo de Tratamientos
- **Haz clic** en las pestañas para ver diferentes categorías
- **Explora** los tratamientos disponibles en cada área
- **Aprende** las indicaciones y beneficios de cada procedimiento

## 🔧 Personalización

### Modificar Contenido
- El contenido está estructurado en slides HTML
- Cada slide tiene un ID único (`slide-1`, `slide-2`, etc.)
- Los estilos están incluidos en el `<head>` del documento

### Agregar Nuevos Simuladores
1. Crea una nueva sección con clase `slide`
2. Agrega los elementos HTML necesarios
3. Implementa las funciones JavaScript correspondientes
4. Conecta con la API de Gemini siguiendo el patrón existente

### Cambiar Estilos
- Los estilos usan Tailwind CSS via CDN
- Los colores principales de Dorsia están definidos como variables CSS
- La tipografía usa la fuente Montserrat

## 🔑 API de Gemini

### Configuración
La aplicación utiliza la API de Google Gemini para generar escenarios y evaluar respuestas. Necesitas:

1. **Obtener una API Key**:
   - Visita [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Crea una nueva API Key
   - Cópiala y pégala en el archivo `index.html`

2. **Configurar la API Key**:
```javascript
const GEMINI_API_KEY = 'tu-api-key-aqui';
```

### Funciones Principales
- `callGeminiAPI()`: Función base para llamadas a la API
- `generateKnowledgeTestCase()`: Genera casos de test de conocimiento
- `generatePatientQuery()`: Crea consultas de pacientes
- `generateSatisfactionScenario()`: Genera escenarios de satisfacción
- `generateComplaintScenario()`: Crea quejas de pacientes
- `generateGeneralQuery()`: Genera consultas generales

## 📱 Compatibilidad

- ✅ Chrome/Chromium 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles (responsive design)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Para soporte técnico o preguntas sobre la implementación:
- Abre un issue en GitHub
- Revisa la documentación en la carpeta `docs/`
- Consulta los comentarios en el código fuente

## 🏥 Sobre Clínicas Dorsia

Esta plataforma ha sido desarrollada específicamente para la formación de agentes de Customer Service de Clínicas Dorsia, incorporando sus protocolos, tratamientos y metodologías de atención al cliente.

---

**Desarrollado con ❤️ para Clínicas Dorsia**

