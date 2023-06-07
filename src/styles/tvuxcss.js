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
  [/^c:(.*?)$/, ([, c]) => ({color: c})],
  [/^bc:(.*?)$/, ([, bc]) => ({'background-color': bc})],
]

const layouts = [
  /* sizing */
  [/^h-(\d+)px/, ([, d]) => ({height: `${d}px`})],
  [/^w-(\d+)px/, ([, d]) => ({width: `${d}px`})],

  [/^min-h-(\d+)px/, ([, d]) => ({['min-height']: `${d}px`})],
  [/^min-w-(\d+)px/, ([, d]) => ({['min-width']: `${d}px`})],

  [/^max-h-(\d+)px/, ([, d]) => ({['max-height']: `${d}px`})],
  [/^max-w-(\d+)px/, ([, d]) => ({['max-width']: `${d}px`})],

  [/^h-(\d+)$/, ([, d]) => ({height: `${d}%`})],
  [/^w-(\d+)$/, ([, d]) => ({width: `${d}%`})],

  ['h-100vh', {height: '100vh'}],
  ['w-100vw', {width: '100vw'}],

  /* overflow */
  ['ovf-h', {overflow: 'hidden'}],
  ['ovf-x-s', {'overflow-x': 'scroll'}],
  ['ovf-x-h', {'overflow-x': 'hidden'}],
  ['ovf-y-s', {'overflow-y': 'scroll'}],
  ['ovf-y-h', {'overflow-y': 'hidden'}],
  ['hide-scroll-bar', {'-ms-overflow-style': 'none', /* IE, Edge */ 'scrollbar-width': 'none'  /* Firefox */}],
  ['hide-scroll-bar::-webkit-scrollbar', {display: 'none'}], /* Chrome, Safari and Opera, doesn't support by UnoCSS */

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
  [/^gtc-(\w+)-(\w+)$/, ([, w1, w2]) => ({'grid-template-columns': `${w1} ${w2}`})],
  [/^gtc-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3]) => ({'grid-template-columns': `${w1} ${w2} ${w3}`})],
  [/^gtc-(\w+)-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3, w4]) => ({'grid-template-columns': `${w1} ${w2} ${w3} ${w4}`})],
  [/^gtc-(\w+)-(\w+)-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3, w4, w5]) => ({'grid-template-columns': `${w1} ${w2} ${w3} ${w4} ${w5}`})],
  [/^gtc-(\w+)-(\w+)-(\w+)-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3, w4, w5, w6]) => ({'grid-template-columns': `${w1} ${w2} ${w3} ${w4} ${w5} ${w6}`})],
  [/^gtr-(\w+)-(\w+)$/, ([, w1, w2]) => ({'grid-template-rows': `${w1} ${w2}`})],
  [/^gtr-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3]) => ({'grid-template-rows': `${w1} ${w2} ${w3}`})],
  [/^gtr-(\w+)-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3, w4]) => ({'grid-template-rows': `${w1} ${w2} ${w3} ${w4}`})],
  [/^gtr-(\w+)-(\w+)-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3, w4, w5]) => ({'grid-template-rows': `${w1} ${w2} ${w3} ${w4} ${w5}`})],
  [/^gtr-(\w+)-(\w+)-(\w+)-(\w+)-(\w+)-(\w+)$/, ([, w1, w2, w3, w4, w5, w6]) => ({'grid-template-rows': `${w1} ${w2} ${w3} ${w4} ${w5} ${w6}`})],
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
  [/^pt-(\d+)$/, ([, d]) => ({'padding-top': `${d * 4}px`})],
  [/^pl-(\d+)$/, ([, d]) => ({'padding-left': `${d * 4}px`})],
  [/^pb-(\d+)$/, ([, d]) => ({'padding-bottom': `${d * 4}px`})],
  [/^pr-(\d+)$/, ([, d]) => ({'padding-right': `${d * 4}px`})],
  [/^px-(\d+)$/, ([, d]) => ({'padding-left': `${d * 4}px`, 'padding-right': `${d * 4}px`})],
  [/^py-(\d+)$/, ([, d]) => ({'padding-top': `${d * 4}px`, 'padding-bottom': `${d * 4}px`})],

  [/^mt-(\d+)$/, ([, d]) => ({'margin-top': `${d * 4}px`})],
  [/^ml-(\d+)$/, ([, d]) => ({'margin-left': `${d * 4}px`})],
  [/^mb-(\d+)$/, ([, d]) => ({'margin-bottom': `${d * 4}px`})],
  [/^mr-(\d+)$/, ([, d]) => ({'margin-right': `${d * 4}px`})],
  [/^mx-(\d+)$/, ([, d]) => ({'margin-left': `${d * 4}px`, 'margin-right': `${d * 4}px`})],
  [/^my-(\d+)$/, ([, d]) => ({'margin-top': `${d * 4}px`, 'margin-bottom': `${d * 4}px`})],
  ['mx-a', {'margin-left': 'auto', 'margin-right': 'auto'}],
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

export default [
  ...behaviors,
  ...colors,
  ...layouts,
  ...borderRadius,
  ...position,
  ...spacing,
  ...text,
  ...layering
]
