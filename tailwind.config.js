module.exports = {
  corePlugins: {
    appearance: false,
    accessibility: false,
    boxShadow: false,
    borderCollapse: false,
    backgroundSize: false,
    backgroundAttachment: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    tableLayout: false,
    tracking: false,
    translate: false,
    fill: false,
    float: false,
    stroke: false,
    skew: false,
    scale: false,
    select: false,
    clear: false,
    opacity: false,
    objectPosition: false,
    objectFit: false,
    pointer: false,
    pointerEvents: false,
    resize: false,
    rotate: false,
    userSelect: false,
  },
  theme: {
    colors: {
      primary: 'var(--main-primary)',
      secondary: 'var(--main-secondary)',
      primaryCopy: 'var(--main-primaryCopy)',
      terminalBlack: '#111',
      terminalGreen: '#68D391',
      terminalText: '#ffff',
      red: '#E53E3E',
      yellow: '#F6E05E',
    },
    screens: {
      sm: { max: '639px' },
      xsm: { max: '320px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      heading: ['Bitter'],
    },
  },
  variants: {},
  plugins: [],
};
