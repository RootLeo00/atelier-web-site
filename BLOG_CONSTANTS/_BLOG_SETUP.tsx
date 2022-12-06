import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const CATERINA: IAuthor = {
    name: "Caterina Leonelli",
    designation: "Software Engineer",
    bio: "I am a Computer Science student at the University of Bologna, Italy. I am passionate about programming and I love to learn new things",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/nmayur'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/mayur-nalwala/'
        },
    ]
}



// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Atelier di Lettura';
export const WEBSITE_URL: string = 'https://atelierdilettura.it/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Atelier di Lettura',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Incontri',
            // type: 'dropdown',
            path: '/blog?category=meetings',
        },
        {
            label: 'Libri di Culto',
            path: '/blog?category=books'
        },
        {
            label: 'Chi siamo',
            path: '/about-us'
        },
        {
            label: 'Contattaci',
            path: '/contact-us'
        },
        {
            label: 'About this site',
            path: '/about-this-site',
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Incontri',
            // type: 'dropdown',
            path: '/blog?category=meetings'
        },
        {
            label: 'Libri di Culto',
            path: '/blog?category=books'
        },
        {
            label: 'Chi siamo',
            path: '/about-us'
        },
        {
            label: 'Contattaci',
            path: '/contact-us'
        },
        {
            label: 'About this site',
            path: '/about-this-site',
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.github.com/',
            icon: <AiFillGithub />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Atelier di Lettura",
    description: "A simple blog template using NextJS and Typescript.",
    keywords: "Blog, atelier, lettura, nextjs, typescript, tailwindcss, github",
    url: WEBSITE_URL,
    author: `${CATERINA.name}`,
    // twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}