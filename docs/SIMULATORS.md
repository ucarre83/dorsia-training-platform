# Documentación de Simuladores de IA

## Descripción General

Los simuladores de IA utilizan Google Gemini para crear escenarios realistas y evaluar las respuestas de los agentes de Customer Service. Cada simulador está diseñado para practicar habilidades específicas.

## Simuladores Disponibles

### 1. Simulador de Test de Conocimiento (Slide 12)
**Objetivo**: Evaluar el conocimiento sobre tratamientos y su aplicación correcta.

**Funcionalidad**:
- Genera casos clínicos con descripción del paciente
- Presenta opciones de tratamiento para seleccionar
- Evalúa la selección basándose en las indicaciones correctas

**Casos Típicos**:
- Pacientes con diferentes edades y preocupaciones estéticas
- Variedad de tipos de piel y expectativas
- Combinaciones de tratamientos apropiadas

### 2. Simulador de Identificación de Necesidades (Slide 13)
**Objetivo**: Practicar la indagación en necesidades sin proponer tratamientos específicos.

**Funcionalidad**:
- Genera consultas de pacientes con finalidades vagas
- Evalúa si el agente indaga correctamente
- Verifica que el objetivo sea agendar una cita

**Ejemplos de Consultas**:
- "Quiero verme menos cansada"
- "Me gustaría marcar más la mandíbula"
- "Quiero sentirme más segura con mi sonrisa"

### 3. Simulador de Venta Cruzada (Slide 14)
**Objetivo**: Practicar la introducción natural de programas adicionales.

**Funcionalidad**:
- Genera escenarios de pacientes satisfechos
- Evalúa la introducción de PRIME, Beauty Coach o Tarjeta VIP
- Verifica que la venta cruzada sea natural, no forzada

**Programas a Introducir**:
- **PRIME**: Membresía premium con beneficios exclusivos
- **Beauty Coach**: Asesoramiento personalizado continuo
- **Tarjeta VIP**: Descuentos y acceso prioritario

### 4. Simulador de Manejo de Conflictos (Slide 15)
**Objetivo**: Aplicar técnicas psicológicas para manejar pacientes enfadados.

**Funcionalidad**:
- Genera quejas y situaciones conflictivas
- Evalúa la aplicación de técnicas específicas
- Verifica validación emocional, desescalada y empatía

**Técnicas Evaluadas**:
- **Validación Emocional**: Reconocer sentimientos del paciente
- **Desescalada**: Mantener tono calmado y pausado
- **Empatía**: Ponerse en el lugar del paciente
- **Reenmarcado**: Reformular hacia soluciones
- **Asertividad**: Comunicación clara y respetuosa

### 5. Simulador de Role-Playing General (Slide 16)
**Objetivo**: Práctica libre con cualquier tipo de consulta u objeción.

**Funcionalidad**:
- Genera consultas y objeciones variadas
- Evalúa respuestas basándose en protocolos generales
- Enfoque en agendar citas de valoración gratuita

## Funcionalidad "Cambiar Escenario del Paciente"

### Características
- **Generación Automática**: Usa IA para crear escenarios únicos
- **Limpieza Automática**: Borra respuestas anteriores al cambiar
- **Contexto Dorsia**: Todos los escenarios están adaptados a la clínica
- **Variedad**: Cada generación produce casos diferentes

### Implementación Técnica
```javascript
// Ejemplo de función de generación
async function generatePatientQuery() {
    // Limpiar estado anterior
    document.getElementById('needs-feedback').classList.add('hidden');
    document.getElementById('agent-response').value = '';
    
    // Generar nuevo escenario
    const prompt = "Actúa como un paciente de Dorsia...";
    const query = await callGeminiAPI(prompt);
    
    // Mostrar nuevo escenario
    document.getElementById('patient-message').textContent = query;
}
```

## Sistema de Evaluación

### Estructura del Feedback
Cada evaluación incluye:
1. **Fortalezas**: Aspectos positivos de la respuesta
2. **Áreas de Mejora**: Puntos a mejorar
3. **Respuesta Sugerida**: Ejemplo de respuesta ideal

### Criterios de Evaluación

#### Test de Conocimiento
- Selección correcta de tratamientos
- Comprensión de indicaciones
- Evitar tratamientos inapropiados

#### Identificación de Necesidades
- Indagación sin proponer tratamientos
- Enfoque en agendar cita
- Validación de preocupaciones

#### Venta Cruzada
- Naturalidad en la introducción
- Enfoque en beneficios del paciente
- Momento apropiado para la propuesta

#### Manejo de Conflictos
- Aplicación de técnicas psicológicas
- Tono y actitud apropiados
- Orientación hacia soluciones

#### Role-Playing General
- Adherencia a protocolos Dorsia
- Objetivo de agendar cita
- Profesionalismo y cercanía

## Configuración de Prompts

### Personalización
Los prompts pueden modificarse para:
- Cambiar el tipo de escenarios generados
- Ajustar el nivel de dificultad
- Enfocar en aspectos específicos

### Mejores Prácticas
- Usar contexto específico de Dorsia
- Incluir instrucciones claras sobre el formato de respuesta
- Especificar el idioma (castellano)
- Definir el rol del paciente claramente

## Troubleshooting

### Problemas Comunes
1. **Escenarios repetitivos**: Ajustar prompts para mayor variedad
2. **Evaluaciones inconsistentes**: Revisar criterios en prompts
3. **Errores de API**: Verificar conectividad y API Key
4. **Respuestas en inglés**: Especificar idioma en prompts

### Monitoreo
- Revisar logs de consola para errores
- Verificar respuestas de la API
- Testear con diferentes tipos de input

