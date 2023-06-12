"use client";
import styles from "./AnimationSections.module.css";
import { data } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const observerOptions = {
  root: null,
  rootMargin: "-180px",
  delay: 200,
  treshold: 0.9,
};
const AnimationSections = () => {
  const { ref: secOneRef, inView: isOneVisible } = useInView(observerOptions);
  const { ref: secTwoRef, inView: isTwoVisible } = useInView(observerOptions);
  const { ref: secThreeRef, inView: isThreeVisible } =
    useInView(observerOptions);
  const { ref: secFourRef, inView: isFourVisible } = useInView(observerOptions);
  const { ref: secFiveRef, inView: isFiveVisible } = useInView(observerOptions);
  const { ref: secSixRef, inView: isSixVisible } = useInView(observerOptions);
  const { ref: secSevenRef, inView: isSevenVisible } =
    useInView(observerOptions);
  const { ref: secEightRef, inView: isEightVisible } =
    useInView(observerOptions);
  return (
    <>
      <div className={styles.content}>
        <div
          style={{ color: data[0].color }}
          className={`${styles.grid} ${isOneVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h2 className={styles.title}>{data[0].title}</h2>

            {data[0]?.subtitlelink && (
              <Link href={data[0].url} className={styles.subtitlelink}>
                {data[0].subtitlelink}
              </Link>
            )}
            {data[0]?.subtitle && (
              <p className={styles.subtitle}>{data[0].subtitle}</p>
            )}

            {data[0].warn && <p className={styles.warn}>{data[0].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[0]?.buttons.map((item) => (
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
        <div
          style={{ color: data[1].color }}
          className={`${styles.grid} ${isTwoVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h2 className={styles.title}>{data[1].title}</h2>

            {data[1]?.subtitlelink && (
              <Link href={data[1].url} className={styles.subtitlelink}>
                {data[1].subtitlelink}
              </Link>
            )}
            {data[1]?.subtitle && (
              <p className={styles.subtitle}>{data[1].subtitle}</p>
            )}

            {data[1].warn && <p className={styles.warn}>{data[1].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[1]?.buttons.map((item) => (
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
        <div
          style={{ color: data[2].color }}
          className={`${styles.grid} ${isThreeVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h2 className={styles.title}>{data[2].title}</h2>

            {data[2]?.subtitlelink && (
              <Link href={data[2].url} className={styles.subtitlelink}>
                {data[2].subtitlelink}
              </Link>
            )}
            {data[2]?.subtitle && (
              <p className={styles.subtitle}>{data[2].subtitle}</p>
            )}

            {data[2].warn && <p className={styles.warn}>{data[2].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[2]?.buttons.map((item) => (
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
        <div
          style={{ color: data[3].color }}
          className={`${styles.grid} ${isFourVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h3 className={styles.title}>{data[3].title}</h3>

            {data[3]?.subtitlelink && (
              <Link href={data[3].url} className={styles.subtitlelink}>
                {data[3].subtitlelink}
              </Link>
            )}
            {data[3]?.subtitle && (
              <p className={styles.subtitle}>{data[3].subtitle}</p>
            )}

            {data[3].warn && <p className={styles.warn}>{data[3].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[3]?.buttons.map((item) => (
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
        <div
          style={{ color: data[4].color }}
          className={`${styles.grid} ${isFiveVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h4 className={styles.title}>{data[4].title}</h4>

            {data[4]?.subtitlelink && (
              <Link href={data[4].url} className={styles.subtitlelink}>
                {data[4].subtitlelink}
              </Link>
            )}
            {data[4]?.subtitle && (
              <p className={styles.subtitle}>{data[4].subtitle}</p>
            )}

            {data[4].warn && <p className={styles.warn}>{data[4].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[4]?.buttons.map((item) => (
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
        <div
          style={{ color: data[5].color }}
          className={`${styles.grid} ${isSixVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h5 className={styles.title}>{data[5].title}</h5>

            {data[5]?.subtitlelink && (
              <Link href={data[5].url} className={styles.subtitlelink}>
                {data[5].subtitlelink}
              </Link>
            )}
            {data[5]?.subtitle && (
              <p className={styles.subtitle}>{data[5].subtitle}</p>
            )}

            {data[5].warn && <p className={styles.warn}>{data[5].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[5]?.buttons.map((item) => (
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
        <div
          style={{ color: data[6].color }}
          className={`${styles.grid} ${isSevenVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h6 className={styles.title}>{data[6].title}</h6>

            {data[6]?.subtitlelink && (
              <Link href={data[6].url} className={styles.subtitlelink}>
                {data[6].subtitlelink}
              </Link>
            )}
            {data[6]?.subtitle && (
              <p className={styles.subtitle}>{data[6].subtitle}</p>
            )}

            {data[6].warn && <p className={styles.warn}>{data[6].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[6]?.buttons.map((item) => (
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
        <div
          style={{ color: data[7].color }}
          className={`${styles.grid} ${isEightVisible ? "visible" : "hidden"}`}
        >
          <div className={styles.titleblock}>
            <h7 className={styles.title}>{data[7].title}</h7>

            {data[7]?.subtitlelink && (
              <Link href={data[7].url} className={styles.subtitlelink}>
                {data[7].subtitlelink}
              </Link>
            )}
            {data[7]?.subtitle && (
              <p className={styles.subtitle}>{data[7].subtitle}</p>
            )}

            {data[7].warn && <p className={styles.warn}>{data[7].warn}</p>}
          </div>
          <div className={styles.buttonsblock}>
            {data[7]?.buttons.map((item) => (
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
      <div className={styles.sectionscontainer}>
        <section
          ref={secOneRef}
          className={styles.section}
          data-header-color={data[0].color}
          style={{ color: data[0].color }}
        >
          {data[0]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[0].video} />
            </video>
          )}
          {data[0]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[0].imgbig}
              alt={`tesla ${data[0].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[0]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[0].imgsm}
              alt={`tesla ${data[0].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secTwoRef}
          className={styles.section}
          data-header-color={data[1].color}
          style={{ color: data[1].color }}
        >
          {data[1]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[1].video} />
            </video>
          )}
          {data[1]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[1].imgbig}
              alt={`tesla ${data[1].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[1]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[1].imgsm}
              alt={`tesla ${data[1].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secThreeRef}
          className={styles.section}
          data-header-color={data[2].color}
          style={{ color: data[2].color }}
        >
          {data[2]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[2].video} />
            </video>
          )}
          {data[2]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[2].imgbig}
              alt={`tesla ${data[2].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[2]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[2].imgsm}
              alt={`tesla ${data[2].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secFourRef}
          className={styles.section}
          data-header-color={data[3].color}
          style={{ color: data[3].color }}
        >
          {data[3]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[3].video} />
            </video>
          )}
          {data[3]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[3].imgbig}
              alt={`tesla ${data[3].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[3]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[3].imgsm}
              alt={`tesla ${data[3].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secFiveRef}
          className={styles.section}
          data-header-color={data[4].color}
          style={{ color: data[4].color }}
        >
          {data[4]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[4].video} />
            </video>
          )}
          {data[4]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[4].imgbig}
              alt={`tesla ${data[4].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[4]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[4].imgsm}
              alt={`tesla ${data[4].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secSixRef}
          className={styles.section}
          data-header-color={data[5].color}
          style={{ color: data[5].color }}
        >
          {data[5]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[5].video} />
            </video>
          )}
          {data[5]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[5].imgbig}
              alt={`tesla ${data[5].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[5]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[5].imgsm}
              alt={`tesla ${data[5].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secSevenRef}
          className={styles.section}
          data-header-color={data[6].color}
          style={{ color: data[6].color }}
        >
          {data[6]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[6].video} />
            </video>
          )}
          {data[6]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[6].imgbig}
              alt={`tesla ${data[6].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[6]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[6].imgsm}
              alt={`tesla ${data[6].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
        <section
          ref={secEightRef}
          className={styles.section}
          data-header-color={data[7].color}
          style={{ color: data[7].color }}
        >
          {data[7]?.video && (
            <video
              preload={"auto"}
              playsInline={true}
              autoPlay
              muted
              loop
              className={styles.video}
            >
              <source src={data[7].video} />
            </video>
          )}
          {data[7]?.imgbig && (
            <Image
              className={styles.imgbig}
              src={data[7].imgbig}
              alt={`tesla ${data[7].title} image`}
              width={3000}
              height={2000}
            />
          )}
          {data[7]?.imgsm && (
            <Image
              className={styles.imgsm}
              src={data[7].imgsm}
              alt={`tesla ${data[7].title} image`}
              width={3000}
              height={2000}
            />
          )}
        </section>
      </div>
    </>
  );
};
export default AnimationSections;
