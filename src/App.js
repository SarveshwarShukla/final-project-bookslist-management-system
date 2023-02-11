import React from 'react'

import { BookForm } from './components'

const App = () => {
  return (
    <div className="container">
      <div className="top">
        <h1>BookList Maintenance Form</h1>
        <h3>Add and view your books using local storage</h3>
      </div>
      <div className="bottom">
        <BookForm />
      </div>
    </div>
  )
}

export default App