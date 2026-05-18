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

export type Lists = {
  u_council: CouncilList,
  humanities: CouncilList,
  science: CouncilList,
  social_science: CouncilList,
  lego: CouncilList
}

export const lists: Lists = {
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
          nl: "MSc Theoretical Physics & MSc History and Philosophy of Science",
          en: "MSc Theoretical Physics & MSc History and Philosophy of Science"
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
  },
  humanities: {
    candidates: [
      {
        name: "Minne van der Mast",
        degree: {
          nl: "BA Liberal Arts & Sciences",
          en: "BA Liberal Arts & Sciences"
        },
        img_src: optimisedImage("/humanities/Minne van der Mast.jpg"),
        linkedin: "https://www.linkedin.com/in/minne-van-der-mast-41a4a1219/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Eliza Geensen",
        degree: {
          nl: "BA Communicatie- en Informatiewetenschappen",
          en: "BA Communication and Information Sciences"
        },
        img_src: optimisedImage("/humanities/Eliza Geensen.jpg"),
        linkedin: "https://www.linkedin.com/in/elisa-geensen/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Bas Broekhuizen",
        degree: {
          nl: "MA Modern and Contemporary History",
          en: "MA Modern and Contemporary History"
        },
        img_src: optimisedImage("/humanities/Bas Broekhuizen.jpg"),
        linkedin: "https://www.linkedin.com/in/bas-broekhuizen-1b0314265/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Chloe Lawrey",
        degree: {
          nl: "BA Literatuurwetenschap",
          en: "BA Literary Studies"
        },
        img_src: optimisedImage("/humanities/Chloe Lawrey.jpg"),
        linkedin: null,
        instagram: null,
        utrecht: null
      },

      {
        name: "Kiki Spaan",
        degree: {
          nl: "BA Kunstgeschiedenis",
          en: "BA Art History"
        },
        img_src: optimisedImage("/humanities/Kiki Spaan.jpg"),
        linkedin: "https://www.linkedin.com/in/kiki-ling-spaan-47207b253/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Thirza Bier",
        degree: {
          nl: "BA Literatuurwetenschap",
          en: "BA Literary Studies"
        },
        img_src: optimisedImage("/humanities/Thirza Bier.jpeg"),
        linkedin: null,
        instagram: null,
        utrecht: null
      },

      {
        name: "Sander Schukkink",
        degree: {
          nl: "BA Geschiedenis",
          en: "BA History"
        },
        img_src: optimisedImage("/humanities/Sander Schukkink.jpg"),
        linkedin: null,
        instagram: null,
        utrecht: null
      },

      {
        name: "Menno Govaers",
        degree: {
          nl: "MA Applied Ethics",
          en: "MA Applied Ethics"
        },
        img_src: optimisedImage("/humanities/Menno Govaers.jpg"),
        linkedin: "https://www.linkedin.com/in/mennogovaers/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Eline Post",
        degree: {
          nl: "MA Gender Studies",
          en: "MA Gender Studies"
        },
        img_src: optimisedImage("/humanities/Eline Post.jpg"),
        linkedin: "https://www.linkedin.com/in/eline-post-83823b240/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Lucia Komen",
        degree: {
          nl: "MA Neerlandistiek",
          en: "MA Dutch Studies"
        },
        img_src: optimisedImage("/humanities/Lucia Komen.jpg"),
        linkedin: "https://www.linkedin.com/in/lucia-komen-95ba8233a/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Sophie Jansen",
        degree: {
          nl: "BA Engelse Taal en Cultuur",
          en: "BA English Language and Culture"
        },
        img_src: optimisedImage("/humanities/Sophie Jansen.jpeg"),
        linkedin: "https://www.linkedin.com/in/sophie-jansen-223b97198/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Adam Krid",
        degree: {
          nl: "BA Geschiedenis",
          en: "BA History"
        },
        img_src: optimisedImage("/humanities/Adam Krid.jpg"),
        linkedin: "https://www.linkedin.com/in/adam-krid-a39b87207/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Daniel van Burgsteden",
        degree: {
          nl: "BSc Politics, Philosophy and Economics",
          en: "BSc Politics, Philosophy and Economics"
        },
        img_src: optimisedImage("/humanities/Daniel van Burgsteden.jpg"),
        linkedin: "https://www.linkedin.com/in/daniel-van-burgsteden-93a4b3313/",
        instagram: null,
        utrecht: null
      }
    ],
    list_pushers: []
  },
  science: {
    candidates: [
      {
        name: "Sara van Oevelen",
        degree: {
          nl: "MSc History and Philosophy of Science",
          en: "MSc History and Philosophy of Science"
        },
        img_src: optimisedImage("/beta/Sara van Oevelen.jpg"),
        linkedin: "https://www.linkedin.com/in/sara-van-oevelen-b88750356/",
        instagram: null,
        utrecht: null
      },
      {
        name: "Dio Peters",
        degree: {
          nl: "BSc Molecular and Biophysical Life Sciences",
          en: "BSc Molecular and Biophysical Life Sciences"
        },
        img_src: optimisedImage("/beta/Dio Peters.jpg"),
        linkedin: null,
        instagram: null,
        utrecht: null
      }
    ],
    list_pushers: []
  },
  social_science: {
    candidates: [
      {
        name: "Fernande de Graaf",
        degree: {
          nl: "BSc Interdisciplinaire sociale wetenschap",
          en: "BSc Interdisciplinary Social Science"
        },
        img_src: optimisedImage("/social_science/Fernande de Graaf.jpg"),
        linkedin: "https://www.linkedin.com/in/fernande-de-graaf-1574153a0/",
        instagram: null,
        utrecht: null
      },
      {
        name: "Daan van Veen",
        degree: {
          nl: "BSc Interdisciplinaire sociale wetenschap",
          en: "BSc Interdisciplinary Social Science"
        },
        img_src: optimisedImage("/social_science/Daan van Veen.jpg"),
        linkedin: "https://www.linkedin.com/in/daan-van-veen-4b29732b8/",
        instagram: null,
        utrecht: null
      },
      {
        name: "Soleiman Soleimankheel",
        degree: {
          nl: "BSc Interdisciplinaire sociale wetenschap",
          en: "BSc Interdisciplinary Social Science"
        },
        img_src: optimisedImage("/social_science/Soleiman Soleimankheel.JPG"),
        linkedin: "https://www.linkedin.com/in/soleiman-soleimankheel-31263920b/",
        instagram: null,
        utrecht: null
      },

      {
        name: "Mark Bergmeijer",
        degree: {
          nl: "BSc Interdisciplinaire sociale wetenschap",
          en: "BSc Interdisciplinary Social Science"
        },
        img_src: optimisedImage("/social_science/Mark Bergmeijer.jpg"),
        linkedin: "https://www.linkedin.com/in/mark-bergmeijer-1ba1392b7/",
        instagram: null,
        utrecht: null
      }
    ],
    list_pushers: []
  },
  lego: {
    candidates: [
      {
        name: "Kurt Verweel",
        degree: {
          nl: "BSc Bestuurs- en organisatiewetenschap",
          en: "BSc Governance"
        },
        img_src: optimisedImage("/lego/Kurt Verweel.jpg"),
        linkedin: "https://www.linkedin.com/in/kurt-verweel-228237228/",
        instagram: null,
        utrecht: null
      }
    ],
    list_pushers: []
  }
}