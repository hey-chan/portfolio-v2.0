import React from 'react'
import './sideprojects.scss'

export default function SideProjects() {
  return (
    <div className="sideprojects" id="sideprojects">
      <h1>Portfolio</h1>
      <ul>
        <li></li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/terminal-app.png" alt=""/>
          <h3>Terminal Application</h3>
        </div>
        <div className="item">
          <img src="assets/marketplace-app.png" alt=""/>
          <h3>Marketplace</h3>
        </div>
        <div className="item">
          <img src="assets/terminal-app.png" alt=""/>
          <h3>An app</h3>
        </div>
        <div className="item">
          <img src="assets/terminal-app.png" alt=""/>
          <h3>Terminal Application</h3>
        </div>
      </div>
    </div>
  )
}
