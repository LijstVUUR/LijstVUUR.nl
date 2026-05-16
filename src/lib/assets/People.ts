import type { Picture } from "@sveltejs/enhanced-img";

const imageMap: Record<string, Picture> = import.meta.glob("/src/lib/assets/people/*/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}", {
  eager: true,
  query: {
    enhanced: true,
  },
  import: "default"
});

const optimisedImage = (str: string) => imageMap[`/src/lib/assets/people${str}`];

// Lists are sorted!
export type Candidate = {
  name: string;
  degree: { nl: string; en: string };
  img_src: Picture;
  linkedin: string | null;
  instagram: string | null;
  utrecht: string | null;
}

export type CouncilList = {
  candidates: Candidate[],
  list_pushers: Candidate[]
}

export const lists: { [key: string]: CouncilList } = {
  u_council: {
    candidates: [
      {
        name: "Puk Donken",
        degree: {
          "nl": "BA Sociologie",
          "en": "BA Sociology"
        },
        img_src: optimisedImage("/u_council/Puk.jpg"),
        linkedin: "https://www.linkedin.com/in/puk-donken-008611211/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Du Nguyen",
        degree: {
          nl: "BA Geschiedenis & BSc Biologie",
          en: "BA History & BSc Biology"
        },
        img_src: optimisedImage("/u_council/Du.jpg"),
        linkedin: "https://www.linkedin.com/in/du-nguyen-1b1a50268/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Paolo Dioni",
        degree: {
          nl: "MSc Theoretische Natuurkunde & MSc Geschiedenis en Filosofie",
          en: "MSc Theoretical Physics & MSc History and Philosophy "
        },
        img_src: optimisedImage("/u_council/Paolo.png"),
        linkedin: "https://www.linkedin.com/in/paolodioni/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Merlijn Verlinden",
        degree: {
          nl: "BSc Interdisciplinaire Sociale Wetenschappen",
          en: "BSc Interdisciplinary Social Sciences"
        },
        img_src: optimisedImage("/u_council/Merlijn Verlinden.jpg"),
        linkedin: "https://www.linkedin.com/in/merlijn-verlinden-605b871a4/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Maurits Wilke",
        degree: {
          nl: "BSc Informatica & BSc Informatiekunde",
          en: "BSc Computer Science & BSc Information Science"
        },
        img_src: optimisedImage("/u_council/Maurits Wilke.jpg"),
        linkedin: "https://www.linkedin.com/in/mauritswilke/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Elisa Dörr",
        degree: {
          nl: "University College Utrecht & BSc Natuur- en Sterrenkunde",
          en: "University College Utrecht & BSc Physics and Astronomy"
        },
        img_src: optimisedImage("/u_council/Elisa Dorr.jpg"),
        linkedin: "https://www.linkedin.com/in/elisa-d%C3%B6rr-668279275/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Bence Bognár",
        degree: {
          nl: "University College Utrecht",
          en: "University College Utrecht"
        },
        img_src: optimisedImage("/u_council/Bence Bognar.jpg"),
        linkedin: null,
        instagram: null,
        utrecht: ""
      },
      {
        name: "Jesse Bosker",
        degree: {
          nl: "BSc Natuur- en Sterrenkunde",
          en: "BSc Physics and Astronomy"
        },
        img_src: optimisedImage("/u_council/Jesse Bosker.jpg"),
        linkedin: "https://www.linkedin.com/in/jessebosker/",
        instagram: null,
        utrecht: ""
      },
      {
        name: "Christina van Beek",
        degree: {
          nl: "BA Musicology",
          en: "BA Musicology"
        },
        img_src: optimisedImage("/u_council/Christina van Beek.jpg"),
        linkedin: "https://www.linkedin.com/in/christina-van-beek-75b53532b/",
        instagram: null,
        utrecht: ""
      }
    ],
    list_pushers: [

    ]
  }
}