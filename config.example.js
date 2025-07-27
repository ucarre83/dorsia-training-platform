// Archivo de configuración de ejemplo
// Copia este archivo como 'config.js' y agrega tu API Key de Gemini

const CONFIG = {
    GEMINI_API_KEY: 'TU_API_KEY_DE_GEMINI_AQUI',
    API_BASE_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    
    // Configuración de la aplicación
    APP_TITLE: 'Plataforma de Formación - Clínicas Dorsia',
    TOTAL_SLIDES: 17,
    
    // Configuración de IA
    AI_CONFIG: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024
    }
};

// Exportar configuración para uso en la aplicación
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

