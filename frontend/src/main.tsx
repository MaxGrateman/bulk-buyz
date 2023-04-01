import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App'
import Layout, {LayoutVariant} from './components/layouts/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <BrowserRouter>
          <Layout variant={LayoutVariant.image}>
              <App/>
          </Layout>
      </BrowserRouter>
)
