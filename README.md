## Descripción del Proyecto
Este proyecto es una aplicación simple de gestión de tareas desarrollada con NestJS. La aplicación permite crear, leer, actualizar y eliminar tareas.

## Decisiones Tomadas
1. **Base de Datos**: Se utilizó SQLite por su facilidad de configuración y uso en proyectos de demostración.
2. **Validación**: Se implementó la validación de datos de entrada utilizando class-validator y DTOs.
3. **Documentación**: Se utilizó Swagger para documentar la API y facilitar su uso.

## Cómo Probar la API
1. Clonar el repositorio y navegar al directorio del proyecto.
2. Instalar las dependencias:
   
   npm install 

## Como iniciar el servidor: 
1. correr en el terminal:
   npm run start 

## Acceder a la documentacion de la api: 
1. GET http://localhost:3000/api

## Rutas API: 
1. GET http://localhost:3000/tasks para obtener todas las tareas 
2. GET http://localhost:3000/tasks/id para obtener una tarea específica
3. POST http://localhost:3000/tasks  para crear una tarea: 
      {
  "title": "Nueva Tarea",
  "description": "Descripción de la nueva tarea",
  "status": Estado Designado. Ejemplos; "pending", "done", "in progress"
}
4. PATCH http://localhost:3000/tasks/id para actualizar una tarea:
      {
  "title": "Tarea Actualizada",
  "description": "Descripción actualizada",
  "status": Estado Designado. Ejemplos; "pending", "done", "in progress"
}
5. DELETE http://localhost:3000/tasks/id para eliminar una tarea

6. Reemplazar "id" en las rutas con algun id asignado a cualquier tarea ya creada.























