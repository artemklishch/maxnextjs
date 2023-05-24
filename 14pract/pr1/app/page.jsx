import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Static import</h1>
        <img src="/kivi.jpeg" alt="Kivi" style={{ maxWidth: "100%" }} />
      </div>

      <div>
        <h1>Image component import 1</h1>
        <Image src="/kivi.jpeg" alt="Kivi" width={1500} height={1500} />
      </div>

      <div>
        <h1>Image component import 1</h1>
        <Image
          src="https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000"
          alt="Kivi"
          width={2000}
          height={1124}
          priority
        />
      </div>
    </main>
  );
}
