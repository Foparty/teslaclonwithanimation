"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import { sidelinks } from "@/components/Navbar/sidelinks";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const headerRef = useRef(null);
  const listItemRef = useRef([]);
  const menuBackDropRef = useRef(null);

  useEffect(() => {
    const headerEl = headerRef.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          headerEl.style.color = color;
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => observer.observe(section));

    // Clean up the observer when the component unmounts
    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const listItemElements = listItemRef.current;
    const menuBackDrop = menuBackDropRef.current;

    listItemElements.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    function handleMouseEnter(event) {
      const { left, top, width, height } = event.target.getBoundingClientRect();

      menuBackDrop.style.setProperty("--left", `${left}px`);
      menuBackDrop.style.setProperty("--top", `${top}px`);
      menuBackDrop.style.setProperty("--width", `${width}px`);
      menuBackDrop.style.setProperty("--height", `${height}px`);

      menuBackDrop.style.opacity = "1";
      menuBackDrop.style.visibility = "visible";
    }

    function handleMouseLeave() {
      menuBackDrop.style.opacity = "0";
      menuBackDrop.style.visibility = "hidden";
    }
  }, []);

  const handleToggle = () => {
    setToggleNav((prev) => setToggleNav(!prev));
  };
  return (
    <>
      <div className={styles.nav} ref={headerRef}>
        <div className={styles.logocontainer}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <nav className={styles.centernav}>
          <Link ref={(el) => (listItemRef.current[0] = el)} href={"#models"}>
            Model S
          </Link>
          <Link ref={(el) => (listItemRef.current[1] = el)} href={"#models"}>
            Model 3
          </Link>
          <Link ref={(el) => (listItemRef.current[2] = el)} href={"#models"}>
            Model X
          </Link>
          <Link ref={(el) => (listItemRef.current[3] = el)} href={"#models"}>
            Model Y
          </Link>
          <Link ref={(el) => (listItemRef.current[4] = el)} href={"#models"}>
            Solar Roof
          </Link>
          <Link ref={(el) => (listItemRef.current[5] = el)} href={"#models"}>
            Solar Panels
          </Link>
          <Link ref={(el) => (listItemRef.current[6] = el)} href={"#models"}>
            Powerwall
          </Link>
        </nav>
        <nav className={styles.rightnav}>
          <Link ref={(el) => (listItemRef.current[7] = el)} href={"#models"}>
            Shop
          </Link>
          <Link ref={(el) => (listItemRef.current[8] = el)} href={"#models"}>
            Account
          </Link>

          <button
            ref={(el) => (listItemRef.current[9] = el)}
            className={styles.menu}
            onClick={handleToggle}
          >
            Menu
          </button>
        </nav>
        <div className={styles.backdrop} ref={menuBackDropRef}></div>
      </div>
      <div className={`${styles.side} ${toggleNav ? "open" : "close"}`}>
        <div className={"background"} onClick={handleToggle}></div>
        <nav className={"sidenav"}>
          <button className={styles.closebutton} onClick={handleToggle}>
            ✖️
          </button>
          {sidelinks.map((item) => (
            <Link className={styles.sidebutton} key={item.id} href={item.url}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
