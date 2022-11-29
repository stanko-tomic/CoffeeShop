import { getAllSlugs, getPostData } from "../../lib/coffeedata";
import Coffee from "../../components/Coffee";
import { AnimatePresence } from "framer-motion";
import Featured from "../../components/Featured";

export default function CoffeePreview({ postData }) {
  return (
    <div>
      <AnimatePresence
        initial={false}
        mode="wait"
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
