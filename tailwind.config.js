/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {

      // ─── Colors ───────────────────────────────────────────────────────────
      colors: {
        // Primitives
        grey:   { 25:'#F7F8F9', 50:'#ECECEC', 100:'#DFDFE0', 200:'#D0D0D1', 300:'#BBBBBB', 400:'#ADADAE', 500:'#99999A', 600:'#8B8B8C', 700:'#6D6D6D', 800:'#545455', 900:'#404041' },
        red:    { 50:'#FDE9ED', 100:'#F8BBC8', 200:'#F59AAE', 300:'#F16C89', 400:'#EE4F72', 500:'#EA234F', 600:'#D52048', 700:'#A61938', 800:'#81132B', 900:'#620F21' },
        pink:   { 50:'#FCEFF4', 100:'#F5CDDC', 200:'#F0B4CB', 300:'#E992B4', 400:'#E57DA5', 500:'#DE5D8F', 600:'#CA5582', 700:'#9E4266', 800:'#7A334F', 900:'#5D273C' },
        yellow: { 50:'#FEF9EB', 100:'#FDECC0', 200:'#FCE2A2', 300:'#FAD578', 400:'#F9CD5D', 500:'#F8C135', 600:'#E2B030', 700:'#B08926', 800:'#886A1D', 900:'#685116' },
        purple: { 50:'#F8EEFF', 100:'#EACBFE', 200:'#E0B2FE', 300:'#D28FFE', 400:'#C979FD', 500:'#BC58FD', 600:'#AB50E6', 700:'#853EB4', 800:'#67308B', 900:'#4F256A' },
        green:  { 50:'#ECF4E7', 100:'#C3DEB3', 200:'#A6CE8F', 300:'#7DB75C', 400:'#64A93C', 500:'#3D940B', 600:'#38870A', 700:'#2B6908', 800:'#225106', 900:'#1A3E05' },
        blue:   { 50:'#E6F0FE', 100:'#B0CFFD', 200:'#8AB8FC', 300:'#5598FA', 400:'#3484F9', 500:'#0165F8', 600:'#015CE2', 700:'#0148B0', 800:'#013888', 900:'#002A68' },
        orange: { 50:'#FDF0E9', 100:'#F8D2BB', 200:'#F5BC9A', 300:'#F19D6C', 400:'#EE8A50', 500:'#EA6D24', 600:'#D56321', 700:'#A64D1A', 800:'#813C14', 900:'#622E0F' },
        base:   { white:'#FFFFFF', black:'#000000' },

        // Semantic aliases
        'color-text': {
          default:     'var(--color-text-default)',
          subtle:      'var(--color-text-subtle)',
          subtler:     'var(--color-text-subtler)',
          inverse:     'var(--color-text-inverse)',
          primary:     'var(--color-text-primary)',
          error:       'var(--color-text-error)',
          warning:     'var(--color-text-warning)',
          success:     'var(--color-text-success)',
          information: 'var(--color-text-information)',
        },
        'color-bg': {
          default:                 'var(--color-background-default)',
          subtle:                  'var(--color-background-subtle)',
          subtler:                 'var(--color-background-subtler)',
          'primary':               'var(--color-background-primary-default)',
          'primary-dark':          'var(--color-background-primary-dark)',
          'primary-soft':          'var(--color-background-primary-subtler)',
          'secondary':             'var(--color-background-secondary-default)',
          'secondary-dark':        'var(--color-background-secondary-dark)',
          'secondary-soft':        'var(--color-background-secondary-subtler)',
          'success':               'var(--color-background-success-default)',
          'success-dark':          'var(--color-background-success-dark)',
          'success-soft':          'var(--color-background-success-subtler)',
          'warning':               'var(--color-background-warning-default)',
          'warning-dark':          'var(--color-background-warning-dark)',
          'warning-soft':          'var(--color-background-warning-subtler)',
          'error':                 'var(--color-background-error-default)',
          'error-dark':            'var(--color-background-error-dark)',
          'error-soft':            'var(--color-background-error-subtler)',
          'information':           'var(--color-background-information-default)',
          'information-dark':      'var(--color-background-information-dark)',
          'information-soft':      'var(--color-background-information-subtler)',
        },
        'color-border': {
          default:     'var(--color-border-default)',
          subtle:      'var(--color-border-subtle)',
          strong:      'var(--color-border-strong)',
          primary:     'var(--color-border-primary)',
          secondary:   'var(--color-border-secondary)',
          success:     'var(--color-border-success)',
          error:       'var(--color-border-error)',
          warning:     'var(--color-border-warning)',
          information: 'var(--color-border-information)',
        },
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      spacing: {
        '0':'0px', '0.5':'2px', '1':'4px', '1.5':'6px', '2':'8px', '3':'12px',
        '4':'16px', '5':'20px', '6':'24px', '7':'28px', '8':'32px', '10':'40px',
        '12':'48px', '14':'56px', '16':'64px', '18':'72px', '20':'80px',
        '24':'96px', '32':'128px', '48':'192px', '64':'256px',
      },

      // ─── Font Family ──────────────────────────────────────────────────────
      fontFamily: {
        serif: ['ChulaCharasNew', 'serif'],
      },

      fontWeight: {
        regular: '400',
        bold: '700',
      },

      // ─── Font Size + Line Height ───────────────────────────────────────────
      fontSize: {
        'desktop-heading-4xl': ['48px', { lineHeight: '64px' }],
        'desktop-heading-3xl': ['40px', { lineHeight: '58px' }],
        'desktop-heading-2xl': ['36px', { lineHeight: '48px' }],
        'desktop-heading-xl':  ['32px', { lineHeight: '40px' }],
        'desktop-heading-lg':  ['28px', { lineHeight: '36px' }],
        'desktop-heading-md':  ['24px', { lineHeight: '30px' }],
        'desktop-body-xl':     ['20px', { lineHeight: '28px' }],
        'desktop-body-lg':     ['18px', { lineHeight: '24px' }],
        'desktop-body-md':     ['16px', { lineHeight: '24px' }],
        'desktop-caption-lg':  ['14px', { lineHeight: '20px' }],
        'desktop-caption-md':  ['12px', { lineHeight: '18px' }],
        'desktop-caption-sm':  ['11px', { lineHeight: '16px' }],
        'mobile-heading-2xl':  ['40px', { lineHeight: '48px' }],
        'mobile-heading-xl':   ['32px', { lineHeight: '40px' }],
        'mobile-heading-lg':   ['28px', { lineHeight: '36px' }],
        'mobile-heading-md':   ['24px', { lineHeight: '30px' }],
        'mobile-body-xl':      ['20px', { lineHeight: '28px' }],
        'mobile-body-lg':      ['18px', { lineHeight: '24px' }],
        'mobile-body-md':      ['16px', { lineHeight: '24px' }],
        'mobile-caption-lg':   ['14px', { lineHeight: '20px' }],
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        'none': '0px', 'sm': '4px', 'md': '8px', 'lg': '12px',
        'xl': '16px', '2xl': '24px', 'full': '9999px',
      },

      // ─── Sizing ───────────────────────────────────────────────────────────
      size: {
        '200':'8px', '300':'12px', '400':'16px', '500':'20px', '600':'24px',
        '800':'32px', '1000':'40px', '1200':'48px', '1500':'400px',
      },

      // ─── Border Width ─────────────────────────────────────────────────────
      borderWidth: {
        '0':'0px', '1':'1px', '2':'2px', '3':'3px', '4':'4px',
      },

    },
  },
  plugins: [],
};
