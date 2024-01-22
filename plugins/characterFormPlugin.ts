const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    const buttons = {
        '.form': {
            display: 'flex',
            flexDirection: 'column',
            margin: '85px 10px 0 10px',
            backgroundColor: 'rgba(101, 101, 101, 0.7)',
            gap: '25px',
            borderRadius: '20px',
            transition: '1s ease',
        },
        '.content': {
            fontSize: '1.625rem',
            color: 'white',
            display: 'flex',
            alingItems: 'center',
        },
        '.label': {
            paddingLeft: '30px',
            width: '350px'
        },
        '.inputName': {
            width: '350px'
        },
        '.inputLevel': {
            width: '120px',
            '-moz-appearance': 'textfield',
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
        },
        '.options': {
            fontSize: '1.625rem',
            color: 'white',
            backgroundColor: '#000000',
            padding: '6px 5px 0 5px',
            borderRadius: '10px',
        },
        '.bio': {
            display: 'flex',
            flexDirection: 'column',
            alingItems: 'flex-start'
        },
        '.bioText': {
            margin: '0 0 0 30px',
            padding: '8px',
            width: '550px',
            height: '200px',
            fontSize: '1.125rem',
            color: 'white',
            backgroundColor: '#000000',
            borderRadius: '10px',
        },
        '.contentButton': {
            display: 'flex',
            paddingLeft: '30px',
            paddingBottom: '20px',
            gap: '30px'
        },
    }

    addComponents(buttons);
})