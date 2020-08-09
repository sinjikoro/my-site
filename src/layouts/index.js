import React from "react"
import styles from "../styles"
import { HeadMenu, Footer } from "../components/Parts"

import "typeface-space-mono"
import "typeface-spectral"

import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const headMenus = [
  {text: 'blog', link: '/'},
  {text: 'profile', link: '/profile'},
]

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div {...styles.container} {...styles.verticalPadding}>
          {headMenus.map((menu) => (
            <HeadMenu text={menu.text} link={menu.link} />
          ))}
        </div>
        <div {...styles.container} {...styles.verticalPadding}>
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
