import { h } from "preact"
import { pathToRoot, resolveRelative } from "@quartz-community/utils"

const css = `
nav.site-nav {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
`

export const Nav = () => {
  const SiteNav = ({ fileData }) => {
    const home = pathToRoot(fileData.slug)
    const workHistory = resolveRelative(fileData.slug, "work-history")
    return h(
      "nav",
      { class: "site-nav" },
      h("a", { href: home }, "Graham Hagenah"),
      h("a", { href: workHistory }, "Work History"),
    )
  }
  SiteNav.css = css
  return SiteNav
}
