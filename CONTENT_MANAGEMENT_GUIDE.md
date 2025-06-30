# 📚 Content Management Guide - Emmanuel Varghese Portfolio

This guide shows you how to manage all content in your Astro-powered portfolio website.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── content/            # All Markdown content
│   ├── hero/           # Hero section content
│   ├── about/          # About section content
│   ├── blog/           # Blog posts
│   ├── experience/     # Work experience
│   └── projects/       # Portfolio projects
├── layouts/            # Page layouts
├── pages/              # Route definitions
├── scripts/            # JavaScript files
└── styles/             # CSS styles

public/
├── blog/               # Blog images
├── projects/           # Project images
└── Profile_image.jpg   # Main profile image
```

---

## 📝 Adding New Blog Posts

### Step 1: Create the Markdown File
Create a new file in `src/content/blog/` with the naming pattern: `your-post-title.md`

### Step 2: Add Frontmatter
```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your post for SEO and previews"
author: "Emmanuel Varghese"
pubDate: 2025-06-30
tags: ["Manufacturing", "Data Science", "Innovation"]
draft: false
---

Your blog content goes here...
```

### Step 3: Add Images (Optional)
1. Create a folder in `public/blog/` named after your post
2. Add your images to that folder
3. Reference them in your Markdown:

```markdown
<!-- Simple image -->
![Alt text](/blog/your-post-folder/image.jpg)

<!-- Image with caption -->
<figure>
  <img src="/blog/your-post-folder/image.jpg" alt="Description">
  <figcaption>Your caption here</figcaption>
</figure>

<!-- Aligned image -->
<img src="/blog/your-post-folder/image.jpg" alt="Description" class="img-right">
```

### Step 4: Test Your Post
```bash
npm run build
npm run preview
```
Visit: `http://localhost:4322/blog/your-post-title/`

---

## 💼 Adding New Projects

### Step 1: Create Project File
Create a new file in `src/content/projects/` with format: `project-name.md`

### Step 2: Add Project Frontmatter
```markdown
---
title: "Project Title"
description: "Brief project description"
longDescription: "Detailed description of the project, its goals, and outcomes"
tags: ["Python", "Machine Learning", "Dashboard"]
icon: "fas fa-chart-line"
status: "completed"
priority: 1
featured: true
startDate: 2024-01-01
endDate: 2024-06-01
---

## Project Overview

Detailed description of the project...

## Key Features

- Feature 1
- Feature 2
- Feature 3

## Technologies Used

- Python
- Streamlit
- Pandas

## Results & Impact

Description of outcomes and business impact...
```

### Step 3: Add Project Images
1. Create folder in `public/projects/project-name/`
2. Add images and reference them:

```markdown
![Project Screenshot](/projects/project-name/screenshot.jpg)
```

### Step 4: Available Icons
Use FontAwesome icons for your projects:
- `fas fa-chart-line` - Analytics/Charts
- `fas fa-database` - Database projects
- `fas fa-cogs` - Engineering/Manufacturing
- `fas fa-cloud` - Cloud/Platform projects
- `fas fa-mobile-alt` - Mobile apps
- `fas fa-desktop` - Desktop applications

---

## 🏢 Adding New Experience

### Step 1: Create Experience File
Create a new file in `src/content/experience/` with format: `company-role.md`

### Step 2: Add Experience Frontmatter
```markdown
---
title: "Job Title"
company: "Company Name"
companyUrl: "https://company.com"
startDate: 2021-01-01
endDate: 2023-12-31  # Use null for current position
current: false
location: "City, State"
type: "Full-time"
description: "Brief role description"
order: 1  # Lower numbers appear first
---

## Role Overview

Detailed description of your role and responsibilities...

## Key Achievements

- Achievement 1
- Achievement 2
- Achievement 3

## Technologies & Skills

- Technology 1
- Technology 2
- Technology 3

## Key Projects

### Project Name
Description of a key project you worked on...
```

---

## 🦸 Updating Hero Section

**File:** `src/content/hero/main.md`

The Hero section is now dynamically managed through a Markdown file, making it easy to update your personal information without touching code.

### Content Structure:
```markdown
---
name: "Emmanuel"                    # Your first name (appears highlighted)
title: "Data Scientist & Engineer"  # Your professional title
subtitle: "Hi, I'm"                 # Greeting text before name
description: "Your compelling professional description..."
profileImage: "/Profile_image.jpg"  # Path to your profile image
linkedinUrl: "https://linkedin.com/in/username"
githubUrl: "https://github.com/username"
floatingCards:                      # Optional floating elements
  - icon: "fas fa-chart-line"       # FontAwesome icon
    title: "Data Scientist"         # Main title
    subtitle: "Company Name"        # Secondary text
  - icon: "fas fa-database"
    title: "Data Engineer" 
    subtitle: "Platform Lead"
---
```

### What You Can Change:
- ✅ **Name and Title** - Your personal/professional identity
- ✅ **Description** - Your value proposition (any length)
- ✅ **Social Media URLs** - LinkedIn, GitHub, etc.
- ✅ **Profile Image** - Path to your photo
- ✅ **Floating Cards** - Add/remove/modify the floating elements
- ✅ **Icons** - Change icons for floating cards

### Available FontAwesome Icons:
```
Analytics & Data:        fas fa-chart-line, fas fa-chart-bar
Database & Engineering:  fas fa-database, fas fa-server
AI & ML:                fas fa-brain, fas fa-robot
Cloud & Platforms:      fas fa-cloud, fas fa-cloud-upload-alt
Manufacturing:          fas fa-cogs, fas fa-industry
Development:            fas fa-code, fas fa-laptop-code
Leadership:             fas fa-users, fas fa-user-tie
Innovation:             fas fa-lightbulb, fas fa-rocket
```

---

## 👨‍💼 Updating About Section

**File:** `src/content/about/main.md`

The About section is also dynamically managed, allowing you to update your professional story easily.

### Content Structure:
```markdown
---
title: "About Me"                   # Section heading (customizable)
paragraphs:                         # Your story (add/remove as needed)
  - "First paragraph about background..."
  - "Second paragraph about expertise..."
  - "Third paragraph about approach..."
skills:                             # Optional skills grid
  - "Python & Data Science"
  - "Cloud Platforms"
  - "Manufacturing Analytics"
achievements:                       # Optional achievements list  
  - "Led transformation of 4 facilities"
  - "Trained 50+ engineers in AI"
  - "Developed enterprise platforms"
---
```

### What You Can Change:
- ✅ **Section Title** - "About Me", "My Story", "Background", etc.
- ✅ **Paragraphs** - Add/remove/edit your professional narrative
- ✅ **Skills** - Optional skills grid (or remove entirely)
- ✅ **Achievements** - Optional achievements list (or remove entirely)
- ✅ **Markdown Formatting** - Bold, italic, links supported

### Advanced About Section Tips:

**Multiple Paragraphs:**
```yaml
paragraphs:
  - "Short intro paragraph about your current role..."
  - "Longer detailed paragraph about your experience and expertise..."
  - "Future goals and vision paragraph..."
  - "Call to action or personal touch..."
```

**Remove Optional Sections:**
```yaml
# Remove skills section entirely
# skills:  <-- Comment out or delete

# Remove achievements section entirely  
# achievements:  <-- Comment out or delete
```

**Markdown Formatting in Content:**
```yaml
paragraphs:
  - "I specialize in **data science** and *manufacturing innovation*."
  - "Connect with me on [LinkedIn](https://linkedin.com/in/username)."
  - "My experience includes `Python`, `Azure`, and `Snowflake`."
```

### Quick Update Workflow for Personal Content:

1. **Edit Content:**
   ```bash
   # Edit hero content
   nano src/content/hero/main.md
   
   # Edit about content  
   nano src/content/about/main.md
   ```

2. **Test Changes:**
   ```bash
   npm run build
   npm run preview
   # Visit: http://localhost:4322
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Update personal content"
   git push origin main
   ```

---

## 🚀 Deployment

### Automatic Deployment
Push to the `main` branch and GitHub Actions will automatically deploy your site.

### Manual Testing
```bash
# Build the site
npm run build

# Preview locally
npm run preview

# Visit: http://localhost:4322
```

---

## 🎨 Customization Tips

### Colors
Main colors are defined in `src/styles/style.css`:
- Background: `#111111`
- Text: `#F5F5F5`
- Accent: `#FFD700` (Gold)
- Secondary: `#8A2BE2` (Purple)

### Fonts
- Headings: `'Playfair Display'`
- Body: `'Inter'`

### Icons
Using FontAwesome 6.0.0 - find icons at [fontawesome.com](https://fontawesome.com/icons)

---

## 🔧 Troubleshooting

### Images Not Loading
1. Ensure images are in the `public/` folder
2. Use absolute paths starting with `/`
3. Rebuild the site: `npm run build`

### Content Not Updating
1. Stop the preview server
2. Run `npm run build`
3. Run `npm run preview`

### Build Errors
1. Check Markdown frontmatter syntax
2. Ensure all required fields are present
3. Check for unclosed HTML tags

---

## 📊 Content Management Workflow

1. **Add Content**: Create new Markdown files in appropriate folders
2. **Add Images**: Place in `public/` folder structure
3. **Test Locally**: `npm run build && npm run preview`
4. **Deploy**: Push to `main` branch
5. **Verify**: Check live site at your GitHub Pages URL

---

## 🎯 Best Practices

- **SEO**: Always add meaningful `title` and `description` in frontmatter
- **Images**: Optimize images for web (compress, appropriate sizes)
- **Tags**: Use consistent tagging across content
- **Dates**: Use YYYY-MM-DD format for all dates
- **Naming**: Use kebab-case for file names (lowercase with hyphens)

---

## 🎯 **Benefits of Dynamic Content Management**

The new dynamic content system provides significant advantages over traditional static websites:

### **Personal Content (Hero & About)**
- ✅ **No Code Editing Required** - Update via simple Markdown files
- ✅ **Version Controlled** - All changes tracked in Git history
- ✅ **Easy to Maintain** - Clear separation of content and code
- ✅ **Rich Formatting** - Markdown support with bold, italic, links
- ✅ **Schema Validation** - Built-in error prevention

### **All Content Types**
- ✅ **Consistent System** - Same workflow for all content (Hero, About, Projects, Experience, Blog)
- ✅ **Image Support** - Easy image management with proper organization
- ✅ **SEO Optimized** - Automatic meta tags and structured data
- ✅ **Fast Updates** - Edit, commit, deploy in minutes
- ✅ **Professional Workflow** - Industry-standard content management

### **Development Experience**
- ✅ **Type Safety** - TypeScript and Zod schema validation
- ✅ **Hot Reload** - Instant preview during development
- ✅ **Build Optimization** - Astro generates optimized static sites
- ✅ **Error Prevention** - Schema validation catches mistakes early

---

**🚀 Update your content anytime by editing the Markdown files!** 

*For quick personal updates, focus on Hero and About sections. For comprehensive content management, use this complete guide.*
