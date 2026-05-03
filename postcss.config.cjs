module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '540px',
        'mantine-breakpoint-sm': '640px',
        'mantine-breakpoint-md': '700px',
        'mantine-breakpoint-lg': '900px',
        'mantine-breakpoint-xl': '1200px',
      },
    },
  },
}
