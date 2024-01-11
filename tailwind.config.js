module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
      },
      fontFamily: {
        display: ['Roboto'],
      },
      backgroundSize: {
        '50%': '50%',
        '100%': '100%',
      },
      colors: {
        'custom-orange': '#F8765E',
        'light-blue': '#9BDBE7',
        'dark-blue': '#031D5B',
        'text-grey-blue': '#5B6C94',
        'custom-gray': '#CDCDCD',
      },
      backgroundImage: {
        'flags-svg': "url('svg/quotes.svg')",
        'flags-small-svg': "url('svg/quotes_small.svg')",
        'orange-tree-svg': "url('svg/orange_tree.svg')",
        'orange-phone-svg': "url('svg/orange_phone.svg')",
        'little-quotes-o': "url('svg/little_quotes_o.svg')",
        'little-quotes-w': "url('svg/little_quotes_w.svg')",
        'gradient-right': 'linear-gradient(to right, #ffffff 50%, #f8765e 50%)',
      },
      borderRadius: {
        DEFAULT: '20px',
      },
      fontSize: {
        'custom-16/26': ['16px', '26px'],
        'custom-16/32': ['16px', '32px'],
        'custom-17/20': ['17px', '20px'],
        'custom-18/26': ['18px', '26px'],
        'custom-18/36': ['18px', '36px'],
        'custom-20/26': ['20px', '26px'],
        'custom-26/45': ['26px', '45px'],
        'custom-26/58': ['26px', '58px'],
        'custom-30/40': ['30px', '40px'],
        'custom-34/45': ['34px', '45px'],
        'custom-48/60': ['48px', '60px'],
      },
      dropShadow: {
        'custom-input': 'box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.30) inset',
      },
      spacing: {
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '72px': '72px',
        '106px': '106px',
        '118px': '118px',
        '140px': '140px',
        '124px': '124px',
        '226px': '226px',
        '274px': '274px',
      },
      margin: {
        '20px': '20px',
        '30px': '30px',
        '135px': '135px',
      },
      maxHeight: {
        '660px': '660px',
        '500px': '500px',
      },
    },
  },
  plugins: [],
};
