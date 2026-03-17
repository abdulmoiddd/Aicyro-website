# AicyroNext

This project now runs on **Next.js** with the classic `pages` router, Tailwind CSS for styling, and Firebase Realtime Database for content management.

## Getting Started

```bash
npm install
npm run dev
```

The dev server boots on [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` – start the Next.js development server
- `npm run build` – create an optimized production build
- `npm start` – serve the production build
- `npm run lint` – run ESLint using `next lint`

## Project Structure

- `src/pages` – route entries (`/`, `/services`, `/portfolio`, `/about`, `/contact`)
- `src/Components` – shared UI sections used across routes
- `src/lib/firebase.js` – Firebase initialization shared by data-driven components
- `src/styles/globals.css` – Tailwind and global styles

Static assets continue to live in `src/assets` and are imported directly into components.


## Chatbot UI Integration

A floating Aicyro chatbot widget is now mounted globally from `src/pages/_app.jsx` and proxies requests through `src/pages/api/chat.js`.

### Frontend
- Component: `src/Components/Chatbot/ChatWidget.jsx`
- Uses the existing stack: React + Tailwind CSS + Framer Motion + lucide-react
- Calls the local Next.js API route at `/api/chat`

### Backend proxy
Set this environment variable if your FastAPI backend runs on a custom host or port:

```bash
AICYRO_CHAT_BACKEND_URL=http://127.0.0.1:8000
```

### Local run flow
1. Start the FastAPI backend on port 8000
2. Start the Next.js website on port 3000
3. Open `http://localhost:3000` and test the launcher in the bottom-right corner
