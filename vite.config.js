import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import Inspect from "vite-plugin-inspect"
import UnoCSS from "unocss/vite"
import tvuxCss from "./src/styles/tvuxcss"

export default {
  plugins: [
    vue(),
    vueJsx({}),
    Inspect(),
    UnoCSS({
      /* https://github.com/unocss/unocss#using-presets */
      presets: [
        // presetUno()
      ],
      rules: tvuxCss
    })
  ]
}
