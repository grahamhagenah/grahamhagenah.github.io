import { h } from "preact"

const css = `
footer {
  text-align: left;
  margin-bottom: 4rem;
  opacity: 0.7;
}
`

export const Footer = () => {
  const SiteFooter = ({ displayClass }) =>
    h(
      "footer",
      { class: displayClass ?? "" },
      h(
        "p",
        null,
        "Developed by Graham Hagenah. Built with ",
        h("a", { href: "https://github.com/jackyzha0/quartz" }, "Quartz"),
        ".",
      ),
    )
  SiteFooter.css = css
  return SiteFooter
}
