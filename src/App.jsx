import React from 'react'
import { showToast } from './showToast'
import Toast from './Toast';

const App = () => {
  return (
    <div>
      <button onClick={() => {
          showToast("this is showToast Test!");
      }}>Toast Alert Test</button>

    </div>
  )
}

export default App