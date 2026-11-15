import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pageMeta } from './data/articles.mjs'
import './index.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/latin-700.css'

const application = (
  <React.StrictMode>
    <App path={window.location.pathname} />
  </React.StrictMode>
)
const root = document.getElementById('root')
if (root.hasChildNodes() && root.dataset.pagePath === pageMeta(window.location.pathname).path) ReactDOM.hydrateRoot(root, application)
else ReactDOM.createRoot(root).render(application)
