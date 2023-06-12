import styles from "./page.module.css";
import { data } from "@/app/data";
import LandingSection from "@/components/LandingSection/LandingSection";

export default function Home() {
  return (
    <main className={styles.main}>
      {data.map((item) => (
        <LandingSection key={item.id} data={item} />
      ))}
    </main>
  );
}
