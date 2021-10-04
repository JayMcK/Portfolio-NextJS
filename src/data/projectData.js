const webProjects = [
  {
    title: "Flow Living",
    liveLink: "https://flowliving.vercel.app/",
    ghLink: "https://github.com/JayMcK/FlowLiving-NextJS",
    imageSmall: "/assets/flowLiving.jpg",
    imageLarge: "/assets/flowLivingLarge.png",
    alt: "flow living website link",
    designLink:
      "https://www.mediafire.com/file/7kanthotibmr5qr/flow-living-design.pdf/file",
    details:
      "Flow Living is a Single Page Web Application, designed using Figma. Initially developed using create-react-app then migrated to Next.js for SEO Optimization and Server Side Rendering. Material UI was used extensively throughout this project.",
  },
  {
    title: "Fox Tree Kids",
    liveLink: "https://fox-tree-kids-nextjs.vercel.app/",
    ghLink: "https://github.com/JayMcK/FoxTreeKids-NextJS",
    imageSmall: "/assets/foxTreeKids.jpg",
    imageLarge: "/assets/foxTreeKidsLarge.png",
    alt: "fox tree kids website link",
    designLink:
      "https://www.mediafire.com/file/gmgub7ivav6hl62/fox-tree-kids-design.pdf/file",
    details:
      "Fox Tree Kids is a Single Page Web Application, designed using Figma. Initially developed using create-react-app then migrated to Next.js for SEO Optimization and Server Side Rendering. Material UI was used extensively throughout this project.",
  },
];

const APIProjects = [
  {
    title: "Indigo",
    liveLink: "https://indigo-kappa.vercel.app/",
    ghLink: "https://github.com/JayMcK/indigo",
    imageSmall: "/assets/indigoSmall.jpg",
    imageLarge: "/assets/indigoLarge.jpg",
    alt: "indigo website link",
    designLink:
      "https://www.mediafire.com/file/sv7gpo1qheoxa0t/indigo-design.pdf/file",
    details:
      "Indigo is a Single Page Web Application, designed using Figma. Indigo is a movie information website, developed using OMDb's API; allowing the user to browse movie titles. Material UI was used extensively throughout this project.",
  },
  {
    title: "Crib Cocktails",
    liveLink: "https://crib-cocktails.vercel.app/",
    ghLink: "https://github.com/JayMcK/crib-cocktails",
    imageSmall: "/assets/cribCocktailsSmall.jpg",
    imageLarge: "/assets/cribCocktailsLarge.jpg",
    alt: "crib cocktails website link",
    designLink:
      "https://www.mediafire.com/file/xi3zlkkjz2j4pvu/crib-cocktails-design.pdf/file",
    details:
      "Crib Cocktails is a Single Page Web Application, designed using Figma. Indigo is a cocktail recipe information website, developed using thecocktaildb's API; allowing the user to search for cocktail recipe's by first letter, name or random pick. Material UI was used extensively throughout this project.",
  },
];

const techStackIcons = [
  { name: "react", src: "/assets/reactIcon.svg", alt: "react js icon" },
  { name: "next", src: "/assets/nextIcon.svg", alt: "next js icon" },
  {
    name: "material",
    src: "/assets/materialIcon.svg",
    alt: "material ui icon",
  },
  {
    name: "javascript",
    src: "/assets/javascriptIcon.svg",
    alt: "javascript icon",
  },
  { name: "html", src: "/assets/htmlIcon.svg", alt: "html5 icon" },
  { name: "css", src: "/assets/cssIcon.svg", alt: "css3 icon" },
];

export function getWebProjects() {
  return webProjects;
}

export function getAPIProjects() {
  return APIProjects;
}

export function getTechStackIconsFull() {
  return techStackIcons;
}
export function getTechStackIconsPart() {
  return techStackIcons.filter((tech) => tech.name !== "next");
}
