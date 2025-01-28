/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const fs = require('fs');

const noiseBitmap = fs.readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            
            colors: {
                neutral: colors.neutral
                
                
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                black: {
                    ...require('daisyui/src/theming/themes')['black'],
                    // primary: '#FF38ED',
                    // 'primary-content': '#1f1f1f',
                    // secondary: '#C06C84',
                    // info: '#F67280',
                    // 'info-content': '#1f1f1f',
                    // backgroundColor: '#181717'
                    
                }
            },
            "dark",
        ]
    },
    plugins: [require('daisyui')]
};
