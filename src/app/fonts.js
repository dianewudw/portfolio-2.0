import {Inter, Shrikhand, Federant, Gentium_Book_Plus, Poppins, Abril_Fatface} from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const shrikhand = Shrikhand({
    weight:['400'],
    style:['normal'],
    subsets:['latin'],
    display: 'auto',
})

export const federant = Federant({
    weight:['400'],
    style:['normal'],
    subsets:['latin'],
    display: 'auto',
})

export const gentiumBookPlus = Gentium_Book_Plus({
    weight:['400', '700'],
    style:['normal','italic'],
    subsets:['latin'],
    display: 'auto',
})

export const poppins = Poppins({
    weight:['100', '200','300', '700'],
    style:['normal','italic'],
    subsets:['latin'],
    display: 'auto',
})

export const abrilFatface = Abril_Fatface({
    weight:['400'],
    style:['normal'],
    subsets:['latin'],
    display: 'auto',
})
