import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.css'
import {ErrorBoundary} from "@/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx";
import {StoreProvider} from "@/app/providers/StoreProvider";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StoreProvider>
          <ErrorBoundary>
              <Suspense fallback={""}>
                  <App />
              </Suspense>
          </ErrorBoundary>
      </StoreProvider>
  </StrictMode>,
)
