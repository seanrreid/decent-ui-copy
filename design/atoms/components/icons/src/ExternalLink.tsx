import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const ExternalLink: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "ExternalLink",
  viewBox: "0 0 14 14",
  path: (
    <path d="m7.707 4.407.943.943a4.667 4.667 0 0 1 0 6.6l-.236.235a4.667 4.667 0 0 1-6.6-6.6l.943.944a3.333 3.333 0 1 0 4.715 4.714l.235-.236a3.333 3.333 0 0 0 0-4.714l-.943-.943.943-.943Zm4.478 4.007-.942-.943a3.334 3.334 0 1 0-4.714-4.714l-.236.236a3.333 3.333 0 0 0 0 4.714l.943.943-.943.943-.943-.943a4.667 4.667 0 0 1 0-6.6l.236-.235a4.667 4.667 0 0 1 6.6 6.6v-.001Z" fill="currentColor" />
  ),
})
