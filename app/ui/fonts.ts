import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// console.log(Inter, Lusitana);
//!Font loaders must be called and assigned to a const in the module scope

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
