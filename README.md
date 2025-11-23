# Vivek Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Responsive**: Optimized for all device sizes
- **Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Animations**: Smooth transitions powered by Framer Motion
- **Contact Form**: Integrated with Google Apps Script for email submissions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend Integration**: Google Apps Script, Vercel
- **Deployment**: Vercel

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create `.env.local` and add:

   ```bash
   NEXT_PUBLIC_GAS_URL=your_google_apps_script_webhook_url
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Skills.tsx           # Skills section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase (Woof-Woof, Pixell, Media Manager)
│   ├── Contact.tsx          # Contact form with Google Apps Script
│   ├── Footer.tsx           # Footer component
│   └── ScrollProgress.tsx   # Scroll indicator
├── public/                  # Static assets
└── ...config files
```

## Featured Projects

### Woof-Woof

Full-stack e-commerce platform for pet accessories with admin panel and CI/CD

- **Duration**: 02/2025 – 05/2025
- **Tech**: Next.js, MongoDB, Cloudinary, GitHub Actions, Tailwind CSS
- **Live**: https://woof-wooff.vercel.app/

### Pixell

Retail branding platform with centralized management of installation reports and creative signages

- **Duration**: 12/2024 – Present
- **Tech**: React.js, Node.js, Express.js, MongoDB, AWS, Stripe
- **Live**: https://pixell.in/

### Media Manager

MERN stack application for secure media handling with JWT authentication

- **Duration**: 06/2024
- **Tech**: React.js, Node.js, Express.js, MongoDB, Redux Toolkit, JWT
- **Live**: https://capture-and-storage-web-application.vercel.app/

## Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Name, title, tagline
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information and social links

### Styling

- Modify `tailwind.config.js` for color schemes
- Update `app/globals.css` for custom styles
- Adjust component styles in individual component files

### Contact Form

1. Create a Google Apps Script webhook
2. Add the endpoint to `.env.local` as `NEXT_PUBLIC_GAS_URL`
3. Test form submissions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Build command: `npm run build`
- **Railway**: Automatic detection of Next.js

## Performance

This portfolio is optimized for:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent performance
- **SEO**: Search engine optimized with meta tags
- **Accessibility**: WCAG 2.1 compliant

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: vivekkumar1164@gmail.com
- **Phone**: +91-7503710648
- **LinkedIn**: [linkedin.com/in/vivek-kumar-a83b61254](https://www.linkedin.com/in/vivek-kumar-a83b61254/)
- **GitHub**: [github.com/Vivek1164](https://github.com/Vivek1164/)
- **Location**: Remote / Available Worldwide
