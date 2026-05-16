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
        name: "Du Nguyen",
        degree: {
          nl: "BA Geschiedenis & BSc Biologie",
          en: "BA History & BSc Biology"
        },
        img_src: optimisedImage("/u_council/Du.jpg"),
        linkedin: "https://www.linkedin.com/in/du-nguyen-1b1a50268/",
        instagram: null,
        utrecht: ""
      }
    ],
    list_pushers: [

    ]
  }
}