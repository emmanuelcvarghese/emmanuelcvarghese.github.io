# 🚀 Emmanuel Varghese - Portfolio Website

A modern, dynamic portfolio website built with Astro, featuring content management through Markdown files and automated deployment to GitHub Pages.

**Live Site:** [emmanuelcvarghese.github.io](https://emmanuelcvarghese.github.io)

> ✅ **Migration Complete!** Successfully migrated from static HTML to dynamic Astro with full content management system. All legacy files cleaned up and documentation consolidated.

## ✨ Features

- 🎯 **Dynamic Content Management** - Hero, About, Projects, Experience, and Blog managed via Markdown
- 📝 **Blog System** - Full-featured blog with dynamic routing and SEO optimization  
- 🎨 **Modern Design** - Dark theme with gradient accents and smooth animations
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Static site generation with Astro for optimal speed
- 🔄 **Auto Deployment** - GitHub Actions workflow for seamless updates

## 🏗️ Project Structure

```text
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Hero.astro      # Dynamic hero section
│   │   ├── About.astro     # Dynamic about section  
│   │   ├── Projects.astro  # Projects showcase
│   │   ├── Experience.astro # Work experience timeline
│   │   └── Skills.astro    # Technical skills grid
│   ├── content/            # Markdown content collections
│   │   ├── hero/           # Hero section content
│   │   ├── about/          # About section content
│   │   ├── blog/           # Blog posts
│   │   ├── projects/       # Portfolio projects
│   │   └── experience/     # Work experience
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route definitions
│   │   ├── index.astro     # Homepage
│   │   └── blog/           # Blog routes
│   ├── scripts/            # JavaScript files
│   └── styles/             # CSS styles
├── public/                 # Static assets
│   ├── blog/              # Blog images
│   ├── projects/          # Project images  
│   └── Profile_image.jpg  # Main profile image
├── .github/workflows/     # GitHub Actions
└── docs/                  # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/emmanuelcvarghese/emmanuelcvarghese.github.io.git
   cd emmanuelcvarghese.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to view the site.

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Management

### Quick Content Updates

**Update Hero Section:**
```bash
# Edit: src/content/hero/main.md
# Change: name, title, description, social links
```

**Update About Section:**
```bash  
# Edit: src/content/about/main.md
# Change: paragraphs, skills, achievements
```

**Add New Blog Post:**
```bash
# Create: src/content/blog/my-new-post.md
# Add images: public/blog/my-new-post/
```

**Add New Project:**
```bash
# Create: src/content/projects/my-project.md
# Add images: public/projects/my-project/
```

### Detailed Documentation
- 📚 [Complete Content Management Guide](./CONTENT_MANAGEMENT_GUIDE.md) - Your one-stop guide for all content management
- 📊 [Project Status & Migration Details](./PROJECT_STATUS.md)
- ✅ [Migration Completion Summary](./MIGRATION_COMPLETE.md)

## 🚀 Deployment

### Automatic Deployment (Recommended)
The site automatically deploys to GitHub Pages when you push to the `main` branch.

```bash
git add .
git commit -m "Update content"
git push origin main
```

### GitHub Pages Setup
1. Go to repository **Settings > Pages**
2. Set **Source** to "GitHub Actions"
3. The workflow will handle the rest automatically

## �️ Technology Stack

- **Framework:** [Astro](https://astro.build) - Static site generator
- **Styling:** Custom CSS with modern features
- **Content:** Markdown with frontmatter
- **Deployment:** GitHub Pages with GitHub Actions
- **Icons:** FontAwesome 6.0.0
- **Fonts:** Playfair Display & Inter (Google Fonts)

## 📂 Content Collections

### Hero (`src/content/hero/`)
- Personal information and tagline
- Social media links
- Floating cards configuration

### About (`src/content/about/`)  
- Professional story
- Skills and achievements
- Multiple paragraph support

### Blog (`src/content/blog/`)
- Technical articles and insights
- SEO-optimized with tags and descriptions
- Image support with captions

### Projects (`src/content/projects/`)
- Portfolio showcase
- Detailed project information
- Technology tags and links

### Experience (`src/content/experience/`)
- Work history and roles
- Skills and achievements per role
- Company information and timelines

## 🎨 Customization

### Colors & Theme
Main colors defined in `src/styles/style.css`:
- Background: `#111111` (Dark)
- Text: `#F5F5F5` (Light) 
- Accent: `#FFD700` (Gold)
- Secondary: `#8A2BE2` (Purple)

### Fonts
- Headings: `'Playfair Display'` (Serif)
- Body: `'Inter'` (Sans-serif)

## 📈 Performance

- ⚡ Static site generation for optimal speed
- 🖼️ Optimized image loading
- 📱 Mobile-first responsive design
- 🔍 SEO-friendly URLs and metadata

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs or issues
- Suggest improvements
- Use as inspiration for your own portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Astro** | **Deployed on GitHub Pages**
