export { default as bannerIcon } from '../../public/images/bg.webp'
export { default as logoIcon } from '../../public/images/logo_navbar.png'


import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: `'Playfair Display', serif` },
        heading: { value: `'Playfair Display', serif` },
      },
    },
  },
})


