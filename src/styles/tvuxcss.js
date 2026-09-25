const behaviors = [
  ['disable', {'pointer-events': 'none', opacity: 0.5}],
  ['clickable', {cursor: 'pointer'}],
  ['button', {
    border: '1px solid #ddd',
    'border-radius': '6px',
    cursor: 'pointer',
    'padding-left': '1em',
    'padding-right': '1em',
    'padding-top': '0.5em',
    'padding-bottom': '0.5em'
  }],
  ['input', {height: '30px', 'padding-left': '0.5em', 'padding-right': '0.5em'}],
  ['select', {height: '30px', 'min-width': '60px'}],
]

/*https://material.io/resources/color*/
const colors = [
  [/^c:(.*?)$/, ([, c]) => ({color: `${c} !important`})],
  [/^bc:(.*?)$/, ([, bc]) => ({'background-color': `${bc} !important`})],
]

const layouts = [
  /* sizing */
  [/^h-(\d+)px/, ([, d]) => ({height: `${d}px !important`})],
  [/^w-(\d+)px/, ([, d]) => ({width: `${d}px !important`})],

  [/^h-(\d+)$/, ([, d]) => ({height: `${d}% !important`})],
  [/^w-(\d+)$/, ([, d]) => ({width: `${d}% !important`})],

  ['h-100vh', {height: '100vh !important'}],
  ['w-100vw', {width: '100vw !important'}],

  [/^min-h-(\d+)px/, ([, d]) => ({['min-height']: `${d}px !important`})],
  [/^min-w-(\d+)px/, ([, d]) => ({['min-width']: `${d}px !important`})],

  [/^max-h-(\d+)px/, ([, d]) => ({['max-height']: `${d}px !important`})],
  [/^max-w-(\d+)px/, ([, d]) => ({['max-width']: `${d}px !important`})],

  /* overflow */
  ['ovf-h', {overflow: 'hidden'}],
  ['ovf-x-a', {'overflow-x': 'auto'}],
  ['ovf-x-s', {'overflow-x': 'scroll'}],
  ['ovf-x-h', {'overflow-x': 'hidden'}],
  ['ovf-y-a', {'overflow-y': 'auto'}],
  ['ovf-y-s', {'overflow-y': 'scroll'}],
  ['ovf-y-h', {'overflow-y': 'hidden'}],
  ['sb-h', {'-ms-overflow-style': 'none', 'scrollbar-width': 'none'}],
  ['sb-h::-webkit-scrollbar', {display: 'none'}],
  ['hide-scroll-bar', {'-ms-overflow-style': 'none', 'scrollbar-width': 'none'}],
  ['hide-scroll-bar::-webkit-scrollbar', {display: 'none'}],

  /* flex */
  /* https://css-tricks.com/snippets/css/a-guide-to-flexbox */
  ['fr', {display: 'flex'}],
  ['fc', {display: 'flex', 'flex-direction': 'column'}],
  ['fw-w', {'flex-wrap': 'wrap'}],
  ['fw-nw', {'flex-wrap': 'nowrap'}],
  ['fw-wr', {'flex-wrap': 'wrap-reverse'}],
  [/^fg-(\w+)$/, ([, w]) => ({gap: w})],
  [/^fg-r-(\w+)$/, ([, w]) => ({rowGap: w})],
  [/^fg-c-(\w+)$/, ([, w]) => ({columnGap: w})],
  [/^f(\d+)$/, ([, d]) => ({flex: d})],

  ['ac-c', {'align-content': 'center'}],
  ['ac-fe', {'align-content': 'flex-end'}],
  ['ac-fs', {'align-content': 'flex-start'}],
  ['ac-s', {'align-content': 'stretch'}],
  ['ac-sa', {'align-content': 'space-around'}],
  ['ac-sb', {'align-content': 'space-between'}],

  ['ai-bl', {'align-items': 'baseline'}],
  ['ai-c', {'align-items': 'center'}],
  ['ai-fe', {'align-items': 'flex-end'}],
  ['ai-fs', {'align-items': 'flex-start'}],

  ['as-a', {'align-self': 'auto'}],
  ['as-b', {'align-self': 'baseline'}],
  ['as-c', {'align-self': 'center'}],
  ['as-fe', {'align-self': 'flex-end'}],
  ['as-fs', {'align-self': 'flex-start'}],
  ['as-s', {'align-self': 'stretch'}],

  ['jc-c', {'justify-content': 'center'}],
  ['jc-sa', {'justify-content': 'space-around'}],
  ['jc-sb', {'justify-content': 'space-between'}],
  ['jc-se', {'justify-content': 'space-evenly'}],
  ['jc-fe', {'justify-content': 'flex-end'}],
  ['jc-fs', {'justify-content': 'flex-start'}],
  ['jc-n', {'justify-content': 'normal'}],
  ['jc-r', {'justify-content': 'revert'}],

  /* grid */
  /* https://css-tricks.com/snippets/css/complete-guide-grid */
  ['grid', {display: 'grid'}],
  [/^gg-(\w+)$/, ([, w]) => ({['grid-gap']: w})],
  [/^gtc-(.+)$/, ([, w]) => ({'grid-template-columns': w.split('-').join(' ')})],
  [/^gtr-(.+)$/, ([, w]) => ({'grid-template-rows': w.split('-').join(' ')})],
]

const borderRadius = [
  [/^br-(\d+)px$/, ([, d]) => ({'border-radius': `${d}px`})],
  [/^btlr-(\d+)px$/, ([, d]) => ({'border-top-left-radius': `${d}px`})],
  [/^btrr-(\d+)px$/, ([, d]) => ({'border-top-right-radius': `${d}px`})],
  [/^bblr-(\d+)px$/, ([, d]) => ({'border-bottom-left-radius': `${d}px`})],
  [/^bbrr-(\d+)px$/, ([, d]) => ({'border-bottom-right-radius': `${d}px`})],

  [/^br-(\d+)$/, ([, d]) => ({'border-radius': `${d * 4}px`})],
  [/^btlr-(\d+)$/, ([, d]) => ({'border-top-left-radius': `${d * 4}px`})],
  [/^btrr-(\d+)$/, ([, d]) => ({'border-top-right-radius': `${d * 4}px`})],
  [/^bblr-(\d+)$/, ([, d]) => ({'border-bottom-left-radius': `${d * 4}px`})],
  [/^bbrr-(\d+)$/, ([, d]) => ({'border-bottom-right-radius': `${d * 4}px`})],
]

const position = [
  ['abs', {position: 'absolute'}],
  ['fix', {position: 'fixed'}],
  ['rel', {position: 'relative'}],
  ['sta', {position: 'static'}],
  ['sti', {position: 'sticky'}],
  [/^top-(\d+)/, ([, d]) => ({top: `${d}px`})],
  [/^left-(\d+)/, ([, d]) => ({left: `${d}px`})],
  [/^bottom-(\d+)/, ([, d]) => ({bottom: `${d}px`})],
  [/^right-(\d+)/, ([, d]) => ({right: `${d}px`})],
]

const spacing = [
  [/^p-(\d+(?:\.\d+)?)$/, ([, d]) => ({padding: `${d * 4}px`})],
  [/^p-(\d+(?:\.\d+)?)px$/, ([, d]) => ({padding: `${d}px`})],
  [/^p-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({padding: `${d}rem`})],
  [/^p-(\d+(?:\.\d+)?)em$/, ([, d]) => ({padding: `${d}em`})],
  [/^p-(\d+(?:\.\d+)?)%$/, ([, d]) => ({padding: `${d}%`})],

  [/^pt-(\d+(?:\.\d+)?)$/, ([, d]) => ({'padding-top': `${d * 4}px`})],
  [/^pt-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'padding-top': `${d}px`})],
  [/^pt-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'padding-top': `${d}rem`})],
  [/^pt-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'padding-top': `${d}em`})],
  [/^pt-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'padding-top': `${d}%`})],

  [/^pl-(\d+(?:\.\d+)?)$/, ([, d]) => ({'padding-left': `${d * 4}px`})],
  [/^pl-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'padding-left': `${d}px`})],
  [/^pl-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'padding-left': `${d}rem`})],
  [/^pl-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'padding-left': `${d}em`})],
  [/^pl-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'padding-left': `${d}%`})],

  [/^pb-(\d+(?:\.\d+)?)$/, ([, d]) => ({'padding-bottom': `${d * 4}px`})],
  [/^pb-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'padding-bottom': `${d}px`})],
  [/^pb-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'padding-bottom': `${d}rem`})],
  [/^pb-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'padding-bottom': `${d}em`})],
  [/^pb-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'padding-bottom': `${d}%`})],

  [/^pr-(\d+(?:\.\d+)?)$/, ([, d]) => ({'padding-right': `${d * 4}px`})],
  [/^pr-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'padding-right': `${d}px`})],
  [/^pr-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'padding-right': `${d}rem`})],
  [/^pr-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'padding-right': `${d}em`})],
  [/^pr-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'padding-right': `${d}%`})],

  [/^px-(\d+(?:\.\d+)?)$/, ([, d]) => ({'padding-left': `${d * 4}px`, 'padding-right': `${d * 4}px`})],
  [/^px-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'padding-left': `${d}px`, 'padding-right': `${d}px`})],
  [/^px-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'padding-left': `${d}rem`, 'padding-right': `${d}rem`})],
  [/^px-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'padding-left': `${d}em`, 'padding-right': `${d}em`})],
  [/^px-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'padding-left': `${d}%`, 'padding-right': `${d}%`})],

  [/^py-(\d+(?:\.\d+)?)$/, ([, d]) => ({'padding-top': `${d * 4}px`, 'padding-bottom': `${d * 4}px`})],
  [/^py-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'padding-top': `${d}px`, 'padding-bottom': `${d}px`})],
  [/^py-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'padding-top': `${d}rem`, 'padding-bottom': `${d}rem`})],
  [/^py-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'padding-top': `${d}em`, 'padding-bottom': `${d}em`})],
  [/^py-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'padding-top': `${d}%`, 'padding-bottom': `${d}%`})],

  [/^m-(\d+(?:\.\d+)?)$/, ([, d]) => ({margin: `${d * 4}px`})],
  [/^m-(\d+(?:\.\d+)?)px$/, ([, d]) => ({margin: `${d}px`})],
  [/^m-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({margin: `${d}rem`})],
  [/^m-(\d+(?:\.\d+)?)em$/, ([, d]) => ({margin: `${d}em`})],
  [/^m-(\d+(?:\.\d+)?)%$/, ([, d]) => ({margin: `${d}%`})],
  ['m-a', {margin: 'auto'}],

  [/^mt-(\d+(?:\.\d+)?)$/, ([, d]) => ({'margin-top': `${d * 4}px`})],
  [/^mt-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'margin-top': `${d}px`})],
  [/^mt-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'margin-top': `${d}rem`})],
  [/^mt-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'margin-top': `${d}em`})],
  [/^mt-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'margin-top': `${d}%`})],
  ['mt-a', {'margin-top': 'auto'}],

  [/^ml-(\d+(?:\.\d+)?)$/, ([, d]) => ({'margin-left': `${d * 4}px`})],
  [/^ml-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'margin-left': `${d}px`})],
  [/^ml-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'margin-left': `${d}rem`})],
  [/^ml-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'margin-left': `${d}em`})],
  [/^ml-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'margin-left': `${d}%`})],
  ['ml-a', {'margin-left': 'auto'}],

  [/^mb-(\d+(?:\.\d+)?)$/, ([, d]) => ({'margin-bottom': `${d * 4}px`})],
  [/^mb-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'margin-bottom': `${d}px`})],
  [/^mb-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'margin-bottom': `${d}rem`})],
  [/^mb-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'margin-bottom': `${d}em`})],
  [/^mb-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'margin-bottom': `${d}%`})],
  ['mb-a', {'margin-bottom': 'auto'}],

  [/^mr-(\d+(?:\.\d+)?)$/, ([, d]) => ({'margin-right': `${d * 4}px`})],
  [/^mr-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'margin-right': `${d}px`})],
  [/^mr-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'margin-right': `${d}rem`})],
  [/^mr-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'margin-right': `${d}em`})],
  [/^mr-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'margin-right': `${d}%`})],
  ['mr-a', {'margin-right': 'auto'}],

  [/^mx-(\d+(?:\.\d+)?)$/, ([, d]) => ({'margin-left': `${d * 4}px`, 'margin-right': `${d * 4}px`})],
  [/^mx-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'margin-left': `${d}px`, 'margin-right': `${d}px`})],
  [/^mx-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'margin-left': `${d}rem`, 'margin-right': `${d}rem`})],
  [/^mx-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'margin-left': `${d}em`, 'margin-right': `${d}em`})],
  [/^mx-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'margin-left': `${d}%`, 'margin-right': `${d}%`})],
  ['mx-a', {'margin-left': 'auto', 'margin-right': 'auto'}],

  [/^my-(\d+(?:\.\d+)?)$/, ([, d]) => ({'margin-top': `${d * 4}px`, 'margin-bottom': `${d * 4}px`})],
  [/^my-(\d+(?:\.\d+)?)px$/, ([, d]) => ({'margin-top': `${d}px`, 'margin-bottom': `${d}px`})],
  [/^my-(\d+(?:\.\d+)?)rem$/, ([, d]) => ({'margin-top': `${d}rem`, 'margin-bottom': `${d}rem`})],
  [/^my-(\d+(?:\.\d+)?)em$/, ([, d]) => ({'margin-top': `${d}em`, 'margin-bottom': `${d}em`})],
  [/^my-(\d+(?:\.\d+)?)%$/, ([, d]) => ({'margin-top': `${d}%`, 'margin-bottom': `${d}%`})],
  ['my-a', {'margin-top': 'auto', 'margin-bottom': 'auto'}],
]

const text = [
  ['t-t--u', {'text-transform': 'uppercase'}],
  ['t-t--c', {'text-transform': 'capitalize'}],
  ['t-t--l', {'text-transform': 'lowercase'}],
  ['ta-l', {'text-align': 'left'}],
  ['ta-r', {'text-align': 'right'}],
  ['ta-c', {'text-align': 'center'}],
  [/^fw-(\d)/, ([_, d]) => ({'font-weight': `${d}00`})],
  ['fs-xs', {'font-size': '0.75em'}],
  ['fs-s', {'font-size': '0.85em'}],
  ['fs-m', {'font-size': '1em'}],
  ['fs-l', {'font-size': '1.15em'}],
  [/^fs-(\d+)px$/, ([, d]) => ({'font-size': `${d}px`})],
  [/^fs-(\d+)em$/, ([, d]) => ({'font-size': `${d}em`})],
  [/^fs-(\d+)rem$/, ([, d]) => ({'font-size': `${d}rem`})],
]

const layering = [
  [/^z-index-(\d+)$/, ([, d]) => ({'z-index': d})]
]

module.exports = [
  ...behaviors,
  ...colors,
  ...layouts,
  ...borderRadius,
  ...position,
  ...spacing,
  ...text,
  ...layering
]
