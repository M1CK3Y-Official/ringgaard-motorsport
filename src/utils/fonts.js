import { Geist } from 'next/font/google'

export const geistFont = Geist({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geist',
});

