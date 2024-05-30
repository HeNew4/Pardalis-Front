import { Rubik } from 'next/font/google';
import './globals.css';
import NavBar from './_components/NavBar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
    title: 'Pardalis',
    description: 'Una nueva forma de aprender ingles',
};

export default function RootLayout({ children }) {
    return (
        <html lang='es'>
            <body className={rubik.className}>
              {children}
            </body>
        </html>
    );
}
