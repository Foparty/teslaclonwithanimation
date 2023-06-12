import styles from "./LandingSection.module.css";
import Image from "next/image";
import Link from "next/link";

const LandingSection = ({ data }) => {
  return (
    <section
      className={styles.section}
      data-header-color={data.color}
      style={{ color: data.color }}
    >
      {data?.video && (
        <video
          preload={"auto"}
          playsInline={true}
          autoPlay
          muted
          loop
          className={styles.video}
        >
          <source src={data.video} />
        </video>
      )}
      {data?.imgbig && (
        <Image
          className={styles.imgbig}
          src={data.imgbig}
          alt={`tesla ${data.title} image`}
          fill={true}
        />
      )}
      {data?.imgsm && (
        <Image
          className={styles.imgsm}
          src={data.imgsm}
          alt={`tesla ${data.title} image`}
          fill={true}
        />
      )}

      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.titleblock}>
            <h2 className={styles.title}>{data.title}</h2>

            {data?.subtitlelink && (
              <Link href={data.url} className={styles.subtitlelink}>
                {data.subtitlelink}
              </Link>
            )}
            {data?.subtitle && (
              <p className={styles.subtitle}>{data.subtitle}</p>
            )}

            {data.warn && <p className={styles.warn}>{data.warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data?.buttons.map((item) => (
              <Link
                key={item.id}
                className={`${styles.button} ${item.style}`}
                href={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingSection;
