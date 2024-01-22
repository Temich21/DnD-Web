const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    const navigation = {
        '.navText': {
            textAlign: 'center',
            color: 'white',
            fontSize: '1.5rem',
            textDecoration: 'none',
        },
        '.navActiveText': {
            textAlign: 'center',
            color: 'yellow',
            fontSize: '1.5rem',
            textDecoration: 'none',
        },
    }

    addComponents(navigation);
})