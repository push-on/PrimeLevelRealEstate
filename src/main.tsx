import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/500-italic.css'
import '@fontsource/playfair-display/600-italic.css'
import '@fontsource/playfair-display/700-italic.css'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />)
