import { FiCoffee } from "react-icons/fi";
import { GiDonut } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";

const posts = [
  {
    id: 1,
    title: "Hot Chocolate",
    coverImage: "/bozic.png",
    content:
      "Specijalna ponuda samo za Zimske blagdane! Mlijeko kuhano na pari sa sirupima s okusom vanilije i čokolade. Preliveno zaslađenim šlagom i preljevom s okusom čokolade. Bozicni klasik napravljen da zasladi vaše raspoloženje. Idealan poklon za blagdane",
    price: "2",
    slug: "hot-chocolate",
    featureOne: {
      title: "Čokolada",
      desc: "Najukusnija čokolada za najljepše blagdane",
    },
    featureTwo: {
      title: "Svijeze",
      desc: "Uvijek svjeze napravljeno sa ljubavlju",
    },
    featureThree: {
      title: "Kolačić",
      desc: "Uz svaku kupovinu dobiješ kolačić",
    },
  },
  {
    id: 2,
    title: "Hot Coffee",
    coverImage: "/generic.png",
    content:
      "Ukusna kava prelivene vrućom vodom stvara lagani sloj pjene koji kulminira u ovoj predivno bogatoj šalici s dubinom i nijansama.",
    price: "2.50",
    slug: "hot-coffee",
    featureOne: {
      title: "Kava",
      desc: "Topla kava sa najukusnijim sastojcima",
    },
    featureTwo: {
      title: "Svijeze",
      desc: "Uvijek svjeze napravljeno sa ljubavlju",
    },
    featureThree: {
      title: "Kolačić",
      desc: "Uz svaku kupovinu dobiješ kolačić",
    },
  },
  {
    id: 3,
    title: "Spooky Coffee",
    coverImage: "/halloween.png",
    content:
      "Za najjezivije vrijeme u godini uzivaj sa Bel Gusto Spooky Coffee. Naš prepoznatljivi espresso i mlijeko na pari s proslavljenom kombinacijom okusa bundeve i cimeta. Uživajte u njemu prelivenom šlagom i pravim začinima za pitu od bundeve. Uz gratis dobivas i spooky cookie!",
    price: "2.50",
    slug: "spooky-coffee",
    featureOne: {
      title: "Limited",
      desc: "U ograničenim zalihama, spooky",
    },
    featureTwo: {
      title: "Svijeze",
      desc: "Uvijek svjeze napravljeno sa ljubavlju",
    },
    featureThree: {
      title: "Kolačić",
      desc: "Uz svaku kupovinu dobiješ spooky kolačić",
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
