import RootLayout from "../../components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
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