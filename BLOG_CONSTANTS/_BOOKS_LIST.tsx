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
const BOOKS_LIST: iArticle[] = [
  {
    path: "/pages/books/io-sono-achille.tsx",
    featureArticle: true,
    preview: {
      author: CATERINA,
      date: "",
      articleTitle: "Io sono Achille",
      tags: "libri-di-culto, mitologia-greca",
      thumbnail: "/images/io-sono-achille.jpeg",
      shortIntro: "Sergio Bolzonello ha dichiarato la sua preferenza per il libro di David Malouf, Io sono Achille",
      category: "books",
    },
    seo: {
      title: "Io sono Achille",
      description: "These are the steps to setup your blog",
      keywords: "libri-di-culto, mitologia-greca",
      ogImage: "",
      twitterHandle: "",
      author: CATERINA.name,
    },
  },

];

export const SORTED_BOOKS_BY_DATE = BOOKS_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);


