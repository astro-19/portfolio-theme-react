import React from 'react'
import {Helmet} from 'react-helmet'

const App = () => {

  const title = "Portfolio theme react"
  return (
    <>
      <Helmet><title>{title}</title></Helmet>
      <div>
        Portfolio
      </div>
    </>
  )
}

export default App