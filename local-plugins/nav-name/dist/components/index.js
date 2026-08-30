import { h } from "preact"
import { pathToRoot } from "@quartz-community/utils"

const css = `
.site-nav-name {
  font-weight: 700;
}
`

export const NavName = () => {
  const SiteNavName = ({ fileData }) => {
    const home = pathToRoot(fileData.slug)
    return h("a", { class: "site-nav-name", href: home }, "Graham Hagenah")
  }
  SiteNavName.css = css
  return SiteNavName
}
