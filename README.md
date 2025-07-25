# Pet Sociable
Desarrollado por Alejandro Barraza y Angel Medina


## Descripción
Pet Sociable es una aplicación web construida con React + Vite que permite gestionar información relacionada con mascotas, publicaciones de estado (como mascotas perdidas o en adopción), comentarios, y otros datos asociados.

Una vez abierta la página en http://localhost:3000/, se mostrará una interfaz visual amigable para interactuar con la API desarrollada por el equipo. Esta aplicación actúa como cliente visual, permitiendo:

Registrar nuevas mascotas y visualizarlas con todos sus datos.
Registrar y listar estados personalizados (por ejemplo, "Perdido", "Encontrado", "En adopción").
Crear publicaciones asociadas a mascotas, incluyendo descripción, ubicación, fecha e imagen. Estas publicaciones se cargan una por fila y permiten scroll.
Visualizar cada publicación con toda su información y comentarios asociados.
Comentar directamente sobre cada publicación.
Eliminar estados o mascotas de forma simple, con retroalimentación visual clara mediante alertas.
Cada sección tiene su propio módulo y navegación dedicada. El formulario de publicaciones se puede abrir como una ventana emergente (overlay), imitando la experiencia de redes sociales como Facebook.

La aplicación fue desarrollada pensando en la usabilidad y claridad para cualquier usuario, incluso sin conocimientos técnicos.


## Indicaciones
Una vez clonado el repositorio pet-sociable, ubicarse dentro del repositorio y ejecutar en la interfaz (git bash): npm install

Esto instalará todas las dependencias, como librerías y vite, herramienta principal de react utilizada para la creación de esta aplicación.

npm install creará la carpeta node_modules que permitirá el correcto funcionamiento de la página.

Ejecuta el comando npm run dev

Ya estará listo y cargado para utilizarse en http://localhost:3000/



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
