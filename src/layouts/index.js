import React from "react"
import styles from "../styles"
import { HeadMenu, Footer } from "../components/Parts"

import "typeface-space-mono"
import "typeface-spectral"

import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div {...styles.container} {...styles.verticalPadding}>
          <HeadMenu text="blog" link="/" />
          <HeadMenu text="profile" link="/profile" />
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
