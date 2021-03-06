import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Logo from './react-logo.svg'
import './HelloWorldDemoPage.less'

const HelloWorldDemoPage: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  console.log(routeProps)

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default HelloWorldDemoPage
