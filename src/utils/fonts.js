import { Poppins } from 'next/font/google'

export const poppinsFont = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

