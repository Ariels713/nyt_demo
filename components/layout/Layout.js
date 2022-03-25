import Navigaiton from "./Navigaiton";

export default function Layout({ children }) {
  return (
    <>
      <Navigaiton />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
