import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Component/Counter.jsx'
import Login from './Component/login.jsx'
import HideShow  from './Component/hideshow.jsx'
import TodoApp from './Component/TodoList.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    <Login/>
    <HideShow/>
    <TodoApp/>
  </StrictMode>
)
