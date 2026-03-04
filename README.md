# Portfolio 2026

Un portafolio personal moderno y dinámico, construido con Astro, React, Tailwind CSS y animaciones avanzadas utilizando GSAP y Matter.js.

## 🚀 Tecnologías Principales

- **[Astro](https://astro.build/)**: Framework web para tiempos de carga ultrarrápidos.
- **[React](https://react.dev/)**: Para componentes interactivos (Toggle de Modo Oscuro, Selector de Idioma, etc.).
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilización de utilidad rápida e integrada.
- **[GSAP](https://gsap.com/)**: Animaciones fluidas, scroll y efectos de parallax.
- **[Matter.js](https://brm.io/matter-js/)**: Motor de físicas 2D (utilizado en la sección interactiva de herramientas).
- **[EmailJS](https://www.emailjs.com/)**: Envío de correos electrónicos directamente desde el cliente.

## 🌟 Características

- 🌓 **Modo Oscuro / Claro**: Implementación fluida y adaptativa.
- 🌍 **Soporte Multi-idioma**: Estructura preparada para cambiar el idioma del sitio.
- 🎭 **Hero Parallax**: Experiencia inmersiva en el encabezado utilizando GSAP.
- ⚛️ **Físicas Interactivas**: Tarjetas de habilidades/herramientas que reaccionan a colisiones usando Matter.js.
- 🖱️ **Cursor Personalizado**: Implementación de un cursor customizado para mayor estética.

## 📁 Estructura del Proyecto

```text
/
├── public/                # Archivos estáticos
├── src/
│   ├── components/        # Componentes UI de Astro y React (UI, Secciones, Física)
│   ├── data/              # Datos estructurados (Timeline, Herramientas, Idiomas)
│   ├── layouts/           # Sistema de layouts principales
│   ├── pages/             # Enrutamiento basado en archivos de Astro
│   └── styles/            # Estilos globales y utilidades de Tailwind
├── astro.config.mjs       # Configuración de Astro
└── package.json           # Dependencias y scripts
```

## 🧞 Comandos de Desarrollo

| Comando                | Acción                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Instala todas las dependencias necesarias        |
| `pnpm run dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm run build`       | Construye tu sitio para producción optimizado    |
| `pnpm run preview`     | Previsualiza el proyecto construido localmente   |

> **Nota:** Este proyecto utiliza `pnpm` como gestor de paquetes (reflejado en `pnpm-lock.yaml`).

## 🛠️ Personalización

Para modificar el contenido del portafolio:

- Actualiza los archivos en `src/data/` para cambiar las tecnologías, lenguajes o elementos del timeline.
- Modifica los componentes en `src/components/sections/` para cambiar los apartados principales como Sobre Mí (`About.astro`), Contacto (`Contact.astro`) y Habilidades (`Skills.astro`).
