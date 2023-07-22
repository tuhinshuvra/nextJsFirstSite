import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>NextJs Home</title>
        <meta name="Home" description="This is nextJs Home page" ></meta>
      </Head>
      <h2>This is Next.js HomePage</h2>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
};