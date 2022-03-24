import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ModelsPage from './pages/ModelsPage'

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/modelos/:title/:id" exact element={<ModelsPage />} />
    </Routes>
  )
}
