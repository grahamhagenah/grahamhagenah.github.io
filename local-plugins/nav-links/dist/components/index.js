import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

const css = `
.site-nav-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
`

export const NavLinks = () => {
  const SiteNavLinks = ({ fileData }) => {
    const workHistory = resolveRelative(fileData.slug, "work-history")
    return h(
      "div",
      { class: "site-nav-links" },
      h("a", { href: workHistory }, "Work History"),
    )
  }
  SiteNavLinks.css = css
  return SiteNavLinks
}
