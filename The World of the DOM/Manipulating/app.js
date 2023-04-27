// document.querySelector("h1")
// <h1>​Silkie Chickens​</h1>​
// const h1 = document.querySelector("h1")
// undefined
// console.dir(h1)
// h1

// document.querySelector("p").innerText
// 'The Silkie (sometimes spelled Silky) is a breed of chicken named for its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are often exhibited in poultry shows, and appear in various colors. In addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet, should be handled with care.'
// document.querySelector("p").innerText = "lolololol"
// 'lolololol'

//textContent- includes everything
//innerText - it is sensitive to what it's showing at the moment

// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks){
//     link.innerText = "I AM A LINK!!!"
// }

// document.querySelector("h1").innerText = "<i>kfjdhsh</i>"
// '<i>kfjdhsh</i>'

// document.querySelector("h1").innerText
// 'Silkie Chickens'
// document.querySelector("h1").innerHTML
// 'Silkie Chickens'

// document.querySelector("h1").innerHTML = "<i>kfjdhsh</i>"

//innerHTML - is the only one we can use to add elements inside (not innerText nor textContent)
// document.querySelector("h1").innerHTML += "<sup>kfjdhsh</sup>"
// '<i>kfjdhsh</i><sup>kfjdhsh</sup>'

//Pickles Exercise
// document.querySelector('span').innerText='Disgusting';

//Attributes
// document.querySelector("#banner")
// <img id=​"banner" src=​"https:​/​/​images.unsplash.com/​photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt>​
// document.querySelector("#banner").id
// 'banner'
// document.querySelector("#banner").id = "whoops"
// 'whoops'
// document.querySelector("#whoops").id = "banner"
// 'banner'

// document.querySelector("a").href
// 'file:///C:/wiki/List_of_chicken_breeds'
// document.querySelector("a").title
// 'List of chicken breeds'
// const firstLink = document.querySelector("a")
// undefined
// firstLink.href
// 'file:///C:/wiki/List_of_chicken_breeds'
// firstLink.getAttribute("href")
// '/wiki/List_of_chicken_breeds'
// firstLink.getAttribute("id")
// null
// firstLink.getAttribute("title")
// 'List of chicken breeds'
// firstLink.setAttribute("href", "http://www.google.com")
// undefined

// document.querySelector("input")
// <input type=​"checkbox" role=​"button" id=​"toctogglecheckbox" class=​"toctogglecheckbox" style=​"display:​none">​
// document.querySelector('input[type="text"]')
// <input type=​"text">​
// const input = document.querySelector('input[type="text"]')
// undefined

//Manipulating Attributes Practice
// const image = document.querySelector("img")
// image.setAttribute("src", "https://devsprouthosting.com/images/chicken.jpg")
// image.setAttribute("alt", "chicken")

//Changing Styles

// const h1 = document.querySelector("h1");
// undefined
// h1
// <h1>​Silkie Chickens​</h1>​
// h1.style
// // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}accentColor: ""additiveSymbols: ""alignContent: ""alignItems: ""alignSelf: ""alignmentBaseline: ""all: ""animation: ""animationComposition: ""animationDelay: ""animationDirection: ""animationDuration: ""animationFillMode: ""animationIterationCount: ""animationName: ""animationPlayState: ""animationTimingFunction: ""appRegion: ""appearance: ""ascentOverride: ""aspectRatio: ""backdropFilter: ""backfaceVisibility: ""background: ""backgroundAttachment: ""backgroundBlendMode: ""backgroundClip: ""backgroundColor: ""backgroundImage: ""backgroundOrigin: ""backgroundPosition: ""backgroundPositionX: ""backgroundPositionY: ""backgroundRepeat: ""backgroundRepeatX: ""backgroundRepeatY: ""backgroundSize: ""basePalette: ""baselineShift: ""baselineSource: ""blockSize: ""border: ""borderBlock: ""borderBlockColor: ""borderBlockEnd: ""borderBlockEndColor: ""borderBlockEndStyle: ""borderBlockEndWidth: ""borderBlockStart: ""borderBlockStartColor: ""borderBlockStartStyle: ""borderBlockStartWidth: ""borderBlockStyle: ""borderBlockWidth: ""borderBottom: ""borderBottomColor: ""borderBottomLeftRadius: ""borderBottomRightRadius: ""borderBottomStyle: ""borderBottomWidth: ""borderCollapse: ""borderColor: ""borderEndEndRadius: ""borderEndStartRadius: ""borderImage: ""borderImageOutset: ""borderImageRepeat: ""borderImageSlice: ""borderImageSource: ""borderImageWidth: ""borderInline: ""borderInlineColor: ""borderInlineEnd: ""borderInlineEndColor: ""borderInlineEndStyle: ""borderInlineEndWidth: ""borderInlineStart: ""borderInlineStartColor: ""borderInlineStartStyle: ""borderInlineStartWidth: ""borderInlineStyle: ""borderInlineWidth: ""borderLeft: ""borderLeftColor: ""borderLeftStyle: ""borderLeftWidth: ""borderRadius: ""borderRight: ""borderRightColor: ""borderRightStyle: ""borderRightWidth: ""borderSpacing: ""borderStartEndRadius: ""borderStartStartRadius: ""borderStyle: ""borderTop: ""borderTopColor: ""borderTopLeftRadius: ""borderTopRightRadius: ""borderTopStyle: ""borderTopWidth: ""borderWidth: ""bottom: ""boxShadow: ""boxSizing: ""breakAfter: ""breakBefore: ""breakInside: ""bufferedRendering: ""captionSide: ""caretColor: ""clear: ""clip: ""clipPath: ""clipRule: ""color: ""colorInterpolation: ""colorInterpolationFilters: ""colorRendering: ""colorScheme: ""columnCount: ""columnFill: ""columnGap: ""columnRule: ""columnRuleColor: ""columnRuleStyle: ""columnRuleWidth: ""columnSpan: ""columnWidth: ""columns: ""contain: ""containIntrinsicBlockSize: ""containIntrinsicHeight: ""containIntrinsicInlineSize: ""containIntrinsicSize: ""containIntrinsicWidth: ""container: ""containerName: ""containerType: ""content: ""contentVisibility: ""counterIncrement: ""counterReset: ""counterSet: ""cursor: ""cx: ""cy: ""d: ""descentOverride: ""direction: ""display: ""dominantBaseline: ""emptyCells: ""fallback: ""fill: ""fillOpacity: ""fillRule: ""filter: ""flex: ""flexBasis: ""flexDirection: ""flexFlow: ""flexGrow: ""flexShrink: ""flexWrap: ""float: ""floodColor: ""floodOpacity: ""font: ""fontDisplay: ""fontFamily: ""fontFeatureSettings: ""fontKerning: ""fontOpticalSizing: ""fontPalette: ""fontSize: ""fontStretch: ""fontStyle: ""fontSynthesis: ""fontSynthesisSmallCaps: ""fontSynthesisStyle: ""fontSynthesisWeight: ""fontVariant: ""fontVariantAlternates: ""fontVariantCaps: ""fontVariantEastAsian: ""fontVariantLigatures: ""fontVariantNumeric: ""fontVariationSettings: ""fontWeight: ""forcedColorAdjust: ""gap: ""grid: ""gridArea: ""gridAutoColumns: ""gridAutoFlow: ""gridAutoRows: ""gridColumn: ""gridColumnEnd: ""gridColumnGap: ""gridColumnStart: ""gridGap: ""gridRow: ""gridRowEnd: ""gridRowGap: ""gridRowStart: ""gridTemplate: ""gridTemplateAreas: ""gridTemplateColumns: ""gridTemplateRows: ""height: ""hyphenateCharacter: ""hyphenateLimitChars: ""hyphens: ""imageOrientation: ""imageRendering: ""inherits: ""initialLetter: ""initialValue: ""inlineSize: ""inset: ""insetBlock: ""insetBlockEnd: ""insetBlockStart: ""insetInline: ""insetInlineEnd: ""insetInlineStart: ""isolation: ""justifyContent: ""justifyItems: ""justifySelf: ""left: ""letterSpacing: ""lightingColor: ""lineBreak: ""lineGapOverride: ""lineHeight: ""listStyle: ""listStyleImage: ""listStylePosition: ""listStyleType: ""margin: ""marginBlock: ""marginBlockEnd: ""marginBlockStart: ""marginBottom: ""marginInline: ""marginInlineEnd: ""marginInlineStart: ""marginLeft: ""marginRight: ""marginTop: ""marker: ""markerEnd: ""markerMid: ""markerStart: ""mask: ""maskType: ""mathDepth: ""mathShift: ""mathStyle: ""maxBlockSize: ""maxHeight: ""maxInlineSize: ""maxWidth: ""minBlockSize: ""minHeight: ""minInlineSize: ""minWidth: ""mixBlendMode: ""negative: ""objectFit: ""objectPosition: ""objectViewBox: ""offset: ""offsetDistance: ""offsetPath: ""offsetRotate: ""opacity: ""order: ""orphans: ""outline: ""outlineColor: ""outlineOffset: ""outlineStyle: ""outlineWidth: ""overflow: ""overflowAnchor: ""overflowClipMargin: ""overflowWrap: ""overflowX: ""overflowY: ""overrideColors: ""overscrollBehavior: ""overscrollBehaviorBlock: ""overscrollBehaviorInline: ""overscrollBehaviorX: ""overscrollBehaviorY: ""pad: ""padding: ""paddingBlock: ""paddingBlockEnd: ""paddingBlockStart: ""paddingBottom: ""paddingInline: ""paddingInlineEnd: ""paddingInlineStart: ""paddingLeft: ""paddingRight: ""paddingTop: ""page: ""pageBreakAfter: ""pageBreakBefore: ""pageBreakInside: ""pageOrientation: ""paintOrder: ""perspective: ""perspectiveOrigin: ""placeContent: ""placeItems: ""placeSelf: ""pointerEvents: ""position: ""prefix: ""quotes: ""r: ""range: ""resize: ""right: ""rotate: ""rowGap: ""rubyPosition: ""rx: ""ry: ""scale: ""scrollBehavior: ""scrollMargin: ""scrollMarginBlock: ""scrollMarginBlockEnd: ""scrollMarginBlockStart: ""scrollMarginBottom: ""scrollMarginInline: ""scrollMarginInlineEnd: ""scrollMarginInlineStart: ""scrollMarginLeft: ""scrollMarginRight: ""scrollMarginTop: ""scrollPadding: ""scrollPaddingBlock: ""scrollPaddingBlockEnd: ""scrollPaddingBlockStart: ""scrollPaddingBottom: ""scrollPaddingInline: ""scrollPaddingInlineEnd: ""scrollPaddingInlineStart: ""scrollPaddingLeft: ""scrollPaddingRight: ""scrollPaddingTop: ""scrollSnapAlign: ""scrollSnapStop: ""scrollSnapType: ""scrollbarGutter: ""shapeImageThreshold: ""shapeMargin: ""shapeOutside: ""shapeRendering: ""size: ""sizeAdjust: ""speak: ""speakAs: ""src: ""stopColor: ""stopOpacity: ""stroke: ""strokeDasharray: ""strokeDashoffset: ""strokeLinecap: ""strokeLinejoin: ""strokeMiterlimit: ""strokeOpacity: ""strokeWidth: ""suffix: ""symbols: ""syntax: ""system: ""tabSize: ""tableLayout: ""textAlign: ""textAlignLast: ""textAnchor: ""textCombineUpright: ""textDecoration: ""textDecorationColor: ""textDecorationLine: ""textDecorationSkipInk: ""textDecorationStyle: ""textDecorationThickness: ""textEmphasis: ""textEmphasisColor: ""textEmphasisPosition: ""textEmphasisStyle: ""textIndent: ""textOrientation: ""textOverflow: ""textRendering: ""textShadow: ""textSizeAdjust: ""textTransform: ""textUnderlineOffset: ""textUnderlinePosition: ""top: ""touchAction: ""transform: ""transformBox: ""transformOrigin: ""transformStyle: ""transition: ""transitionDelay: ""transitionDuration: ""transitionProperty: ""transitionTimingFunction: ""translate: ""unicodeBidi: ""unicodeRange: ""userSelect: ""vectorEffect: ""verticalAlign: ""viewTransitionName: ""visibility: ""webkitAlignContent: ""webkitAlignItems: ""webkitAlignSelf: ""webkitAnimation: ""webkitAnimationDelay: ""webkitAnimationDirection: ""webkitAnimationDuration: ""webkitAnimationFillMode: ""webkitAnimationIterationCount: ""webkitAnimationName: ""webkitAnimationPlayState: ""webkitAnimationTimingFunction: ""webkitAppRegion: ""webkitAppearance: ""webkitBackfaceVisibility: ""webkitBackgroundClip: ""webkitBackgroundOrigin: ""webkitBackgroundSize: ""webkitBorderAfter: ""webkitBorderAfterColor: ""webkitBorderAfterStyle: ""webkitBorderAfterWidth: ""webkitBorderBefore: ""webkitBorderBeforeColor: ""webkitBorderBeforeStyle: ""webkitBorderBeforeWidth: ""webkitBorderBottomLeftRadius: ""webkitBorderBottomRightRadius: ""webkitBorderEnd: ""webkitBorderEndColor: ""webkitBorderEndStyle: ""webkitBorderEndWidth: ""webkitBorderHorizontalSpacing: ""webkitBorderImage: ""webkitBorderRadius: ""webkitBorderStart: ""webkitBorderStartColor: ""webkitBorderStartStyle: ""webkitBorderStartWidth: ""webkitBorderTopLeftRadius: ""webkitBorderTopRightRadius: ""webkitBorderVerticalSpacing: ""webkitBoxAlign: ""webkitBoxDecorationBreak: ""webkitBoxDirection: ""webkitBoxFlex: ""webkitBoxOrdinalGroup: ""webkitBoxOrient: ""webkitBoxPack: ""webkitBoxReflect: ""webkitBoxShadow: ""webkitBoxSizing: ""webkitClipPath: ""webkitColumnBreakAfter: ""webkitColumnBreakBefore: ""webkitColumnBreakInside: ""webkitColumnCount: ""webkitColumnGap: ""webkitColumnRule: ""webkitColumnRuleColor: ""webkitColumnRuleStyle: ""webkitColumnRuleWidth: ""webkitColumnSpan: ""webkitColumnWidth: ""webkitColumns: ""webkitFilter: ""webkitFlex: ""webkitFlexBasis: ""webkitFlexDirection: ""webkitFlexFlow: ""webkitFlexGrow: ""webkitFlexShrink: ""webkitFlexWrap: ""webkitFontFeatureSettings: ""webkitFontSmoothing: ""webkitHighlight: ""webkitHyphenateCharacter: ""webkitJustifyContent: ""webkitLineBreak: ""webkitLineClamp: ""webkitLocale: ""webkitLogicalHeight: ""webkitLogicalWidth: ""webkitMarginAfter: ""webkitMarginBefore: ""webkitMarginEnd: ""webkitMarginStart: ""webkitMask: ""webkitMaskBoxImage: ""webkitMaskBoxImageOutset: ""webkitMaskBoxImageRepeat: ""webkitMaskBoxImageSlice: ""webkitMaskBoxImageSource: ""webkitMaskBoxImageWidth: ""webkitMaskClip: ""webkitMaskComposite: ""webkitMaskImage: ""webkitMaskOrigin: ""webkitMaskPosition: ""webkitMaskPositionX: ""webkitMaskPositionY: ""webkitMaskRepeat: ""webkitMaskRepeatX: ""webkitMaskRepeatY: ""webkitMaskSize: ""webkitMaxLogicalHeight: ""webkitMaxLogicalWidth: ""webkitMinLogicalHeight: ""webkitMinLogicalWidth: ""webkitOpacity: ""webkitOrder: ""webkitPaddingAfter: ""webkitPaddingBefore: ""webkitPaddingEnd: ""webkitPaddingStart: ""webkitPerspective: ""webkitPerspectiveOrigin: ""webkitPerspectiveOriginX: ""webkitPerspectiveOriginY: ""webkitPrintColorAdjust: ""webkitRtlOrdering: ""webkitRubyPosition: ""webkitShapeImageThreshold: ""webkitShapeMargin: ""webkitShapeOutside: ""webkitTapHighlightColor: ""webkitTextCombine: ""webkitTextDecorationsInEffect: ""webkitTextEmphasis: ""webkitTextEmphasisColor: ""webkitTextEmphasisPosition: ""webkitTextEmphasisStyle: ""webkitTextFillColor: ""webkitTextOrientation: ""webkitTextSecurity: ""webkitTextSizeAdjust: ""webkitTextStroke: ""webkitTextStrokeColor: ""webkitTextStrokeWidth: ""webkitTransform: ""webkitTransformOrigin: ""webkitTransformOriginX: ""webkitTransformOriginY: ""webkitTransformOriginZ: ""webkitTransformStyle: ""webkitTransition: ""webkitTransitionDelay: ""webkitTransitionDuration: ""webkitTransitionProperty: ""webkitTransitionTimingFunction: ""webkitUserDrag: ""webkitUserModify: ""webkitUserSelect: ""webkitWritingMode: ""whiteSpace: ""widows: ""width: ""willChange: ""wordBreak: ""wordSpacing: ""wordWrap: ""writingMode: ""x: ""y: ""zIndex: ""zoom: ""epubCaptionSide: <value unavailable>epubTextCombine: <value unavailable>epubTextEmphasis: <value unavailable>epubTextEmphasisColor: <value unavailable>epubTextEmphasisStyle: <value unavailable>epubTextOrientation: <value unavailable>epubTextTransform: <value unavailable>epubWordBreak: <value unavailable>epubWritingMode: <value unavailable>cssFloat: ""cssText: ""length: 0parentRule: null[[Prototype]]: CSSStyleDeclaration
// h1.style.color
// ''
//All styles are empty because we added them in the separate CSS file.
//We will be only able to see the styles if they are inline in the HTML file.

// const h1 = document.querySelector("h1");
// undefined
// h1.style.color
// 'magenta'

// h1.style.color = "green"
// 'green'
// h1.style.fontSize = "3em"
// '3em'
// h1.style.border = "2px solid pink"
// '2px solid pink'
//All style changes done in JS will be added inline in the HTML file.

// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks){
//     link.style.color = "rgb(0, 108, 134)";
//     link.style.textDecorationColor = "magenta";
//     link.style.textDecorationStyle = "wavy";
// }

// const h1 = document.querySelector("h1");
// undefined
// h1.style.fontSize
// ''
// window.getComputedStyle(h1)
// CSSStyleDeclaration {0: 'accent-color', 1: 'align-content', 2: 'align-items', 3: 'align-self', 4: 'alignment-baseline', 5: 'animation-composition', 6: 'animation-delay', 7: 'animation-direction', 8: 'animation-duration', 9: 'animation-fill-mode', 10: 'animation-iteration-count', 11: 'animation-name', 12: 'animation-play-state', 13: 'animation-timing-function', 14: 'app-region', 15: 'appearance', 16: 'backdrop-filter', 17: 'backface-visibility', 18: 'background-attachment', 19: 'background-blend-mode', 20: 'background-clip', 21: 'background-color', 22: 'background-image', 23: 'background-origin', 24: 'background-position', 25: 'background-repeat', 26: 'background-size', 27: 'baseline-shift', 28: 'baseline-source', 29: 'block-size', 30: 'border-block-end-color', 31: 'border-block-end-style', 32: 'border-block-end-width', 33: 'border-block-start-color', 34: 'border-block-start-style', 35: 'border-block-start-width', 36: 'border-bottom-color', 37: 'border-bottom-left-radius', 38: 'border-bottom-right-radius', 39: 'border-bottom-style', 40: 'border-bottom-width', 41: 'border-collapse', 42: 'border-end-end-radius', 43: 'border-end-start-radius', 44: 'border-image-outset', 45: 'border-image-repeat', 46: 'border-image-slice', 47: 'border-image-source', 48: 'border-image-width', 49: 'border-inline-end-color', 50: 'border-inline-end-style', 51: 'border-inline-end-width', 52: 'border-inline-start-color', 53: 'border-inline-start-style', 54: 'border-inline-start-width', 55: 'border-left-color', 56: 'border-left-style', 57: 'border-left-width', 58: 'border-right-color', 59: 'border-right-style', 60: 'border-right-width', 61: 'border-start-end-radius', 62: 'border-start-start-radius', 63: 'border-top-color', 64: 'border-top-left-radius', 65: 'border-top-right-radius', 66: 'border-top-style', 67: 'border-top-width', 68: 'bottom', 69: 'box-shadow', 70: 'box-sizing', 71: 'break-after', 72: 'break-before', 73: 'break-inside', 74: 'buffered-rendering', 75: 'caption-side', 76: 'caret-color', 77: 'clear', 78: 'clip', 79: 'clip-path', 80: 'clip-rule', 81: 'color', 82: 'color-interpolation', 83: 'color-interpolation-filters', 84: 'color-rendering', 85: 'column-count', 86: 'column-gap', 87: 'column-rule-color', 88: 'column-rule-style', 89: 'column-rule-width', 90: 'column-span', 91: 'column-width', 92: 'contain-intrinsic-block-size', 93: 'contain-intrinsic-height', 94: 'contain-intrinsic-inline-size', 95: 'contain-intrinsic-size', 96: 'contain-intrinsic-width', 97: 'container-name', 98: 'container-type', 99: 'content', …}
// window.getComputedStyle(h1).color
// 'rgb(128, 128, 0)'
// window.getComputedStyle(h1).fontSize
// '32px'
// window.getComputedStyle(h1).fontFamily
// '"Times New Roman"'
// window.getComputedStyle(h1).marginLeft
// '0px'
// window.getComputedStyle(h1).margin
// '21.44px 0px'

//Magical Forest Circle Exercise
// const divContainer = document.querySelector("#container")
// divContainer.style.textAlign = "center"

// const image = document.querySelector("img")
// image.style.width = "150px"
// image.style.borderRadius = "50%"

//Rainbow Text Exercise ********
const r = document.querySelector(span)[0]
const a = document.querySelector(span)[1]
const i = document.querySelector(span)[2]
const n = document.querySelector(span)[3]
const b = document.querySelector(span)[4]
const o = document.querySelector(span)[5]
const w = document.querySelector(span)[6]

r.style.color = "colors[0]"
a.style.color = "colors[1]"
i.style.color = "colors[2]"
n.style.color = "colors[3]"
b.style.color = "colors[4]"
o.style.color = "colors[5]"
w.style.color = "colors[6]"

