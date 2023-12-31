import {
  accesories,
  accesoriessm,
  model3,
  model3sm,
  models,
  modelssm,
  modelx,
  modelxsm,
  modely,
  modelysm,
  solarpanels,
  solarpanelssm,
  solarroof,
  solarroofsm,
} from "@/public";

export const data = [
  {
    id: 1,
    title: "Experience Tesla",
    subtitle: "Schedule a Demo Drive Today",
    subtitlelink: "To see a version with a the text content fading CLICK HERE",
    url: "/animation",
    color: "white",
    video:
      "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4",
    buttons: [
      {
        id: 1,
        title: "Demo Drive",
        style: "outline",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Model 3",
    subtitlelink: "Starting at $32,740",
    url: "#",
    color: "#2a2a2a",
    warn: "After Federal Tax Credit",
    imgbig: model3,
    imgsm: model3sm,
    buttons: [
      {
        id: 1,
        title: "Order Now",
        style: "graybtn",
        url: "#",
      },
      {
        id: 2,
        title: "Demo Drive",
        style: "lightbtn",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Model Y",
    subtitlelink: "Starting at $39,990",
    url: "#",
    color: "#2a2a2a",
    warn: "After Federal Tax Credit",
    imgbig: modely,
    imgsm: modelysm,
    buttons: [
      {
        id: 1,
        title: "Order Now",
        style: "graybtn",
        url: "#",
      },
      {
        id: 2,
        title: "Demo Drive",
        style: "lightbtn",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Model S",
    subtitlelink: "View Inventory",
    url: "#",
    color: "#2a2a2a",
    imgbig: models,
    imgsm: modelssm,
    buttons: [
      {
        id: 1,
        title: "Order Now",
        style: "graybtn",
        url: "#",
      },
      {
        id: 2,
        title: "Demo Drive",
        style: "lightbtn",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Model X",
    subtitlelink: "View Inventory",
    url: "#",
    color: "#2a2a2a",
    imgbig: modelx,
    imgsm: modelxsm,
    buttons: [
      {
        id: 1,
        title: "Order Now",
        style: "graybtn",
        url: "#",
      },
      {
        id: 2,
        title: "Demo Drive",
        style: "lightbtn",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Solar Panels",
    subtitlelink: "Schedule a Virtual Consultation",
    url: "#",
    color: "#2a2a2a",
    imgbig: solarpanels,
    imgsm: solarpanelssm,
    buttons: [
      {
        id: 1,
        title: "Order Now",
        style: "graybtn",
        url: "#",
      },
      {
        id: 2,
        title: "Learn More",
        style: "lightbtn",
        url: "#",
      },
    ],
  },
  {
    id: 7,
    title: "Solar Roof",
    subtitle: "Produce Clean Energy From your Roof",
    color: "#2a2a2a",
    imgbig: solarroof,
    imgsm: solarroofsm,
    buttons: [
      {
        id: 1,
        title: "Order Now",
        style: "graybtn",
        url: "#",
      },
      {
        id: 2,
        title: "Learn More",
        style: "lightbtn",
        url: "#",
      },
    ],
  },
  {
    id: 8,
    title: "Accesories",
    color: "#2a2a2a",
    imgbig: accesories,
    imgsm: accesoriessm,
    buttons: [
      {
        id: 1,
        title: "Shop Now",
        style: "darkbtn",
        url: "#",
      },
    ],
  },
];
