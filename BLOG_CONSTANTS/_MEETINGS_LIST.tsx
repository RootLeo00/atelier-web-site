import { MdPreview } from "react-icons/md";
import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { CATERINA } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: CATERINA,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@CATERINA_nalwala",
    }
}
 */

// clear this article list and add your own
const MEETINGS_LIST: iArticle[] = [
  {
    path: "/pages/meetings/siberia.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Siberia",
      tags: "incontro, russian literature",
      thumbnail: "/images/siberia.png",
      shortIntro: "Nel viaggio culturale in Siberia ci hanno accompagnato molti libri, tra di essi quello presentato da Lorenza Moro: Vladimir K. Arsen’ev, Dersu Uzala. Il piccolo uomo delle grandi pianure.",
      category: "meetings",
    },
    seo: {
      title: "Siberia",
      description: "These are the steps to setup your blog",
      keywords: "incontro, russian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/portogruaro_1_feb.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Trieste - a partire da Italo Svevo, Senilità",
      tags: "incontro, italian literature",
      thumbnail: "/images/trieste.jpeg",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Trieste - a partire da Italo Svevo, Senilità",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/portogruaro_7_feb.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Magreb",
      tags: "incontro, italian literature",
      thumbnail: "/images/magreb.jpg",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Magreb",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/portogruaro_15_feb.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Ferrara",
      tags: "incontro, italian literature",
      thumbnail: "/images/ferrara.jpg",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Ferrara",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/svizzera-per-grazia.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Svizzera",
      tags: "incontro, italian literature",
      thumbnail: "/images/svizzera.jpg",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Svizzera",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/firenze.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Firenze",
      tags: "incontro, italian literature",
      thumbnail: "/images/firenze.jpg",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Firenze",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/15_feb_2018.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Firenze",
      tags: "incontro, italian literature",
      thumbnail: "/images/firenze2.jpeg",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Firenze",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/presentazione_almanacco.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Almanacco",
      tags: "incontro, italian literature",
      thumbnail: "/images/almanacco.png",
      shortIntro: "intro",
      category: "meetings",
    },
    seo: {
      title: "Firenze",
      description: "",
      keywords: "incontro, italian literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
  {
    path: "/pages/meetings/2016_3_nov.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "3/11/2016",
      articleTitle: "New York",
      tags: "incontro, american literature",
      thumbnail: "/images/new_york.jpg",
      shortIntro: "Uno sguardo sull'America: New York",
      category: "meetings",
    },
    seo: {
      title: "Firenze",
      description: "",
      keywords: "incontro, american literature",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },
];

export const SORTED_MEETINGS_BY_DATE = MEETINGS_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
