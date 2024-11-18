# Challenge Apolo Web Prueba Tecnica

## Tecnologias usadas:

- **React**
- **TypeScript**
- **Bootstrap**
- **Context API en conjunto con LocalStorage**
- **React Router DOM**
- **React Tostify**
- **PokeApi**


## Clonar y ejecutar el proyecto

Para clonar y ejecutar el proyecto sigue estos pasos:

1. Clonar el repositorio:
   `git clone https://github.com/LucaasN/ApoloWebPruebaTecnica.git`
2. Navegar a la carpeta del proyecto:
   `cd ApoloWebPruebaTecnica`
3. Instalar las dependencias:
   `npm install` o `npm i`
6. Ejecutar el proyecto:
   `npm run dev`
8. Abrir el proyecto en el puerto indicado. Por ejemplo [http://localhost:5173/](http://localhost:5173/)


## Despliegue
Se puede testear el proyecto deployado en Netlify:

[Netlify](https://apolowebpruebatecnica.netlify.app/)


## A tener en cuenta

El login simula una autenticacion para las acciones de alta, baja y modificacion de maestros pokemon. Para poder acceder a esas acciones se debe estar logueado con user: admin@gmail.com y password: test1234 de lo contrario las acciones no estaran disponibles. El button de "Login" redirecciona al logueo con los inputs de user y password ya precargados, solo clickear en "Iniciar Sesion" para completar el login. En ejecucion el login y los maestros pokemon se almacenan en el LocalStorage (si tienes problemas: limpiar el LocalStorage y volver a ejecutar el proyecto). Para ver la lista de pokemons llamando a PokeApi y filtrarlos en el search no es necesario estar logueado. 

