import { getAllSlugs, getPostData } from "../../lib/coffeedata";
import Link from "next/link";
import Coffee from "../../components/Coffee";
import Nav from "../../components/Nav";
import { AnimatePresence } from "framer-motion";
import Featured from "../../components/Featured";

export default function CoffeePreview({ postData }) {
  return (
    <div>
      <Nav />
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Coffee data={postData} />
      </AnimatePresence>
      <Featured />
    </div>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
