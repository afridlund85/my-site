import React from 'react'

import './hello.scss'
import pngSmall from './assets/images/nodejs.png'
import pngLarge from './assets/images/rick.png'
import svgSmall from './assets/images/nodejs.svg'

const Hello = () => (
  <div>
    <h1>Hello</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit lacinia ultrices. Curabitur dignissim tellus eget consectetur mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eget augue egestas, viverra justo vel, porta velit. Quisque molestie justo at nibh pharetra efficitur. Duis quis magna vehicula, placerat ipsum eu, malesuada nunc. Sed nec placerat risus, eu sodales sem. Quisque ac mattis eros. Integer iaculis risus ex, vel malesuada ex mollis quis. Etiam vitae justo lorem. Praesent mollis arcu nec nisl viverra dapibus.
    </p>

    <h2>World</h2>
    <p>
      Donec malesuada, orci ut porttitor molestie, sapien velit luctus mi, eget facilisis leo turpis id purus. Curabitur commodo eu massa ac dictum. Mauris congue massa elit, eget consequat lectus sollicitudin id. Mauris vitae scelerisque dui, ut finibus quam. Sed commodo, turpis sed pharetra efficitur, augue nisl rutrum nisi, vel lobortis erat nibh sit amet eros. Aliquam a porta ante. Ut elementum velit et pretium ultricies. Integer mattis elit et mollis placerat. Nunc placerat mattis nulla, at accumsan turpis ornare a. Praesent purus tortor, volutpat eget porta sed, ullamcorper tincidunt sapien. Donec rhoncus lorem sit amet felis consectetur, ut congue orci ullamcorper. Etiam egestas lorem et enim accumsan luctus.
    </p>
    <h3>images</h3>
    <h4>PNG</h4>
    <p><img src={pngSmall} alt="small png image"/></p>
    <p><img src={pngLarge} alt="large png image"/></p>
    <h4>SVG</h4>
    <p><img src={svgSmall} alt="small svg image"/></p>
  </div>
)

export default Hello
