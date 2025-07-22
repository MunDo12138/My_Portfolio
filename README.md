# My Portfolio Website

A modern, responsive portfolio website built with React.js and powered by Sanity CMS. This single-page application showcases professional experience, skills, projects, and testimonials with smooth animations and an elegant design.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes and screen resolutions
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Content Management**: Dynamic content management through Sanity CMS
- **Modern UI/UX**: Clean, professional design with smooth scrolling navigation
- **Performance Optimized**: Built with React 18 and optimized for fast loading
- **Analytics Integration**: Vercel Analytics for performance monitoring

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: SCSS/Sass for modular and maintainable styles
- **Animations**: Framer Motion for smooth transitions and interactions
- **CMS**: Sanity.io for content management
- **Icons**: React Icons library
- **Routing**: React Router DOM
- **Analytics**: Vercel Analytics
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar/         # Navigation component
│   ├── NavigationDots.jsx
│   └── SocialMedia.jsx
├── containers/         # Main page sections
│   ├── About/          # About section
│   ├── Footer/         # Footer section
│   ├── Header/         # Hero/landing section
│   ├── Skills/         # Skills showcase
│   ├── Testimonial/    # Client testimonials
│   └── Work/           # Portfolio projects
├── assets/             # Static assets (images, icons)
├── constants/          # Application constants
├── wrapper/            # Higher-order components
├── App.js              # Main application component
├── App.scss            # Global styles
├── client.js           # Sanity CMS configuration
└── index.js            # Application entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Sanity.io account and project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add your Sanity credentials:
   ```env
   REACT_APP_SANITY_PROJECT_ID=your_project_id
   REACT_APP_SANITY_TOKEN=your_sanity_token
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Sections Overview

- **Header/Hero**: Introduction with animated profile and tech stack highlights
- **About**: Personal background and professional summary  
- **Skills**: Technical skills and expertise showcase
- **Work**: Portfolio of projects and achievements
- **Testimonials**: Client feedback and recommendations
- **Footer**: Contact information and social media links

## 🔧 Configuration

### Sanity CMS Setup

The project uses Sanity.io as a headless CMS for content management. The configuration is located in `src/client.js`:

- **Project ID**: Set via `REACT_APP_SANITY_PROJECT_ID`
- **Dataset**: Uses 'production' dataset
- **API Version**: 2023-04-01
- **CDN**: Enabled for optimized image delivery

### Styling

The project uses SCSS for styling with a modular approach:
- Global styles in `App.scss` and `index.css`
- Component-specific styles in respective folders
- Responsive design patterns throughout

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project is optimized for deployment on platforms like:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Tommy Li**
- Role: IT Analyst & App Developer
- Portfolio: [Live Demo](https://www.tommyli.info)
- LinkedIn: [My LinkedIn](https://www.linkedin.com/in/hungleongli/)
- Email: [lihungleong623@gmail.com](mailto:lihungleong623@gmail.com)

---

Built with ❤️ using React and Sanity CMS
