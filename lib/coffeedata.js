import { FiCoffee } from "react-icons/fi";
import { GiDonut } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";

const posts = [
  {
    id: 1,
    title: "Midnight Frappucino",
    coverImage: "/testcup.png",
    content:
      "The Midnight Mint Mocha Frappuccino features extra dark cocoa blended with Frappuccino Roast Coffee.",
    price: "8.60",
    slug: "midnight-frappucino",
    featureOne: {
      title: "Lest",
      desc: "Lorem ipsum dolor sit.",
    },
    featureTwo: {
      title: "Test",
      desc: "Lorem ipsum dolor sit.",
    },
    featureThree: {
      title: "Rest",
      desc: "Lorem ipsum dolor sit.",
    },
  },
  {
    id: 2,
    title: "Lorem, ipsum.",
    coverImage: "/gay-cup.png",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, temporibus. Lorem ipsum dolor sit amet.",
    price: "10.60",
    slug: "lorem-ipsum",
    featureOne: {
      title: "Gest",
      desc: "Lorem ipsum dolor sit.",
    },
    featureTwo: {
      title: "Best",
      desc: "Lorem ipsum dolor sit.",
    },
    featureThree: {
      title: "Dest",
      desc: "Lorem ipsum dolor sit.",
    },
  },
];

export function getAllCoffee() {
  return posts;
}

export function getAllSlugs() {
  let slugs = [];
  getAllCoffee().map((post) => {
    slugs.push(`/coffee/${post.slug}`);
  });
  return slugs;
}

export function getPostData(slug) {
  let post = null;
  getAllCoffee().map((item) => {
    if (item.slug === slug) {
      post = item;
      return;
    }
  });
  return post;
}
