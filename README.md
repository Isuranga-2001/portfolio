# Isuranga Warnasooriya - Portfolio Website

A modern, professional portfolio website built with Next.js 16, React, and TypeScript, featuring a GitHub dark theme.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by GitHub's dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Work Experience Pages**: Detailed pages for WSO2 and Hypercube experiences
- **Project Showcases**: In-depth project pages for FirstStep, ITW Computers, and Internify
- **Easy Navigation**: Smooth navigation with sticky header and organized sections

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Isuranga-2001/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🖼️ Adding Your Images

### Profile Picture

1. Add your AI-generated profile image to the `/public` folder
2. Rename it to `profile.jpg` (or update the path in `src/app/page.tsx`)
3. Recommended size: 800x800 pixels or higher (square aspect ratio)

**See [IMAGE_SETUP.md](IMAGE_SETUP.md) for detailed instructions on adding images.**

## 📝 Customization

### Update Personal Information

Edit the following files to customize your information:

- `src/app/layout.tsx` - Update metadata (title, description)
- `src/app/page.tsx` - Update home page content, stats, skills
- `src/components/Footer.tsx` - Update social media links

### Color Scheme

The GitHub dark theme colors are defined in `src/app/globals.css`. You can customize them:

```css
:root {
  --gh-canvas-default: #0d1117;  /* Main background */
  --gh-accent-emphasis: #1f6feb; /* Accent color */
  /* ... more color variables */
}
```

## 📄 Pages Structure

```text
/                    - Home page with introduction and overview
/experience          - Work experience overview
/experience/wso2     - WSO2 internship details
/experience/hypercube - Hypercube consultancy work details
/projects            - Projects overview
/projects/firststep  - FirstStep project details
/projects/itw-computers - ITW Computers project details
/projects/internify  - Internify project details
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Social Media Links

Update your social media links in `src/components/Footer.tsx`:

- GitHub: Update the href to your GitHub profile
- LinkedIn: Add your LinkedIn profile URL
- Medium: Add your Medium profile URL

## 🎨 Design System

The website uses a consistent design system based on GitHub's dark theme:

- **Primary Color**: Blue (#1f6feb)
- **Success Color**: Green (#3fb950)
- **Warning Color**: Orange (#d29922)
- **Danger Color**: Red (#f85149)
- **Background**: Dark (#0d1117)
- **Text**: Light (#e6edf3)

## 📧 Contact

For any questions or suggestions, feel free to reach out:

- GitHub: [@Isuranga-2001](https://github.com/Isuranga-2001)
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Isuranga Warnasooriya
