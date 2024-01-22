const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    const buttons = {
        '.btn': {
            fontSize: '1.625rem',
            padding: '6px 5px 0 5px',
            color: 'white',
            backgroundColor: '#000000',
            borderRadius: '10px',
            fontWeight: '600',
            transition: 'background-color .3s ease',
            '&:hover': {
                backgroundColor: '#4b5563',
            },
        },
        '.btn-cancel': {
            padding: '.5rem 1rem',
            borderRadius: '.25rem',
            fontWeight: '600',
            transition: 'background-color .3s ease',
            backgroundColor: '#9ca3af',
            color: '#ffffff',
            '&:hover': {
                backgroundColor: '#6b7280',
            },
        },
    }

    addComponents(buttons);
})