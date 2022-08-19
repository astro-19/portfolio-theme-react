import React from 'react'
import {Helmet} from 'react-helmet'

const App = () => {

  const title = "Pushkar Pandey Portfolio"
  return (
    <>
      <Helmet><title>{title}</title></Helmet>
      <div>
        Pushkar Pandey
      </div>
    </>
  )
}

export default App