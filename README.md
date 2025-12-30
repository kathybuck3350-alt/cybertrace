# CyberTrace - Futuristic Blockchain Intelligence Platform

A Next.js-based platform for blockchain intelligence and AML compliance solutions, featuring AI-powered analytics and an admin dashboard.

## Features

- 🚀 Modern Next.js 14 with App Router
- 🎨 Futuristic UI with Tailwind CSS
- 🤖 AI-powered features (sentiment analysis, insights, chat assistant)
- 📊 Admin dashboard with metrics and contact management
- 🗄️ MongoDB database with Mongoose
- 🔐 Secure authentication system

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Add your MongoDB connection string to `.env.local`:
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_random_secret_key
NEXTAUTH_URL=http://localhost:3000
```

Note: AI features are simulated (not using real AI APIs) - they provide smart-looking responses based on keyword analysis and templates.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

The admin dashboard is available at `/admin`. Login uses hardcoded credentials (no database required for admin authentication).

### Admin Credentials

- **Username**: `vico`
- **Password**: `1404174`

Login at: `http://localhost:3000/admin/login`

## Features

### Public Pages
- **Homepage**: Hero section, stats, testimonials, success stories, services overview
- **About Us**: Company information and team
- **Services**: Detailed service offerings
- **How We Help**: Individual protection guide
- **Resources**: Blog, guides, and educational content
- **Contact**: Contact form with AI-powered sentiment analysis

### Admin Dashboard
- **Contact Management**: View, update, delete contacts
- **Status Tracking**: Update contact status (new, in-progress, resolved, closed, flagged)
- **AI Insights**: Automatic sentiment analysis and priority scoring
- **Metrics Dashboard**: Analytics and statistics with charts
- **AI Chat Assistant**: Interactive AI assistant for support

## AI Features (Simulated)

- **Sentiment Analysis**: Smart keyword-based analysis of contact form submissions (simulated AI)
- **Priority Scoring**: Intelligent priority level detection based on content (simulated AI)
- **AI Insights**: Contextual insights generated from contact content (simulated AI)
- **AI Chat Assistant**: Interactive chat assistant with smart responses (simulated AI)

Note: These features are designed to look and feel like AI but use rule-based systems and templates. No external AI APIs are required.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **AI Features**: Simulated AI (keyword-based analysis, no external APIs)
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

