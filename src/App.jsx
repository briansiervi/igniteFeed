import { Post } from "./components/Post";
import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Brian"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt omnis, iure delectus quae rem eaque iste commodi non id consequatur odit autem reiciendis eius harum ad porro suscipit similique."
          />
          <Post author="Gabriel" content="Teste" />
        </main>
      </div>
    </>
  );
}
