### **Objective**
Migrate my existing static HTML portfolio to a modern Astro project to enable easier content management and add a new blog section. The final site should be deployed to GitHub Pages using the existing repository.

### **Inputs**
1.  The complete current project directory (HTML, CSS, JS, images).
2.  The goal is to manage portfolio content (Experience, Projects) and new blog posts using Markdown files.

### **Key Requirements**

**1. Astro Project Setup:**
*   Initialize a new, minimal Astro project.
*   Re-create the existing file structure within the `src/` and `public/` directories.
    *   Move `assets/css/style.css` to `src/styles/style.css`.
    *   Move `assets/js/main.js` to `src/scripts/main.js`.
    *   Move `Profile_image.jpg` to the `public/` directory.

**2. Site Migration & Componentization:**
*   Create a main layout file (`src/layouts/Layout.astro`) that includes the `<head>` section, footer, and imports the global stylesheet and main script.
*   Convert the `index.html` file into the main page at `src/pages/index.astro`, using the new `Layout.astro`.
*   Break down the static sections of the old `index.html` (Hero, About, Experience, Projects, Skills, Contact) into reusable Astro components (e.g., `src/components/Hero.astro`, `src/components/ProjectCard.astro`, etc.).

**3. Content Abstraction with Content Collections:**
*   Set up Astro's Content Collections to manage portfolio content.
*   Create a `projects` collection to replace the hardcoded project cards. Each project should be a separate Markdown file with frontmatter for its title, description, tags, and icon.
*   Create an `experience` collection to replace the hardcoded experience timeline. Each job should be a Markdown file.
*   Modify the `index.astro` page to fetch data from these collections and render the components dynamically in a loop.

**4. Blog Implementation:**
*   Create a new `blog` content collection for blog posts. Each post will be a Markdown file with frontmatter for title, author, publication date, and a short description.
*   Create a blog listing page at `/blog` that shows a list of all posts, sorted by date.
*   Create a dynamic route `src/pages/blog/[slug].astro` to render individual blog posts from the Markdown content.
*   Add a "Blog" link to the main navigation in the `Layout.astro` file.

**5. Deployment:**
*   Update the `.github/workflows/deploy.yml` file to build the Astro project and deploy the output from the `dist` folder to GitHub Pages.

### **Action Plan**
Please provide the code and instructions for the following steps:

1.  **Setup:** Provide the terminal commands to create a new Astro project and set up the directory structure.
2.  **Layout:** Provide the code for the base layout (`src/layouts/Layout.astro`), ensuring it correctly links to the CSS and JS files.
3.  **Componentization:** Show an example of converting the "Projects" section.
    *   Create the `src/components/ProjectCard.astro` component that accepts props for project data.
    *   Create the `src/components/Projects.astro` component that will contain the grid and heading.
4.  **Content Collections:**
    *   Provide the code for `src/content/config.ts` to define the schemas for `projects`, `experience`, and `blog` collections.
    *   Show an example of a project Markdown file (`src/content/projects/leaders-cockpit.md`).
    *   Show an example of a blog post Markdown file (`src/content/blog/my-first-post.md`).
5.  **Dynamic Rendering:** Update the `src/components/Projects.astro` component to fetch all entries from the `projects` collection and render a `ProjectCard` for each one.
6.  **Blog Pages:**
    *   Provide the code for the blog index page `src/pages/blog/index.astro`.
    *   Provide the code for the dynamic blog post page `src/pages/blog/[slug].astro`.
7.  **Deployment:** Provide the complete, updated `deploy.yml` file needed to build and deploy an Astro site to GitHub Pages.
