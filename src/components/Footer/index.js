import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p
        className={ styles.phenomicReference }
    >
        {" Website created by "}
        <a href="http://easybird.be" target="_blank">
            {"Easybird.be"}
      </a>
        {" and generated with "}
        <a
            href={ process.env.PHENOMIC_HOMEPAGE }
        >
        <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
