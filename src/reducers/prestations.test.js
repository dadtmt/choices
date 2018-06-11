import { makeChoosePrestation } from "../actions/actions"
import prestations from "./prestations"

describe("prestations", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        selected: false,
        name: "Maquillage",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                selected: false,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            titlePreparation: "Maquillage ultime",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        selected: false,
        name: "Coiffure",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        selected: false,
        name: "Coupe femmes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupes classiques",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Coupes très stylisées",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changement de look (exemple: carré plongeant sur cheveux longs)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        selected: false,
        name: "Vernis",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        selected: false,
        name: "Hommes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coupe et coiffage",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Coupe et stylling",
                options: []
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Barbe",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Taille de barbe simple",
                options: []
              }
            ]
          }
        ]
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(prestations(prevState, anyAction)).toEqual(prevState)
  })
})

describe("prestations", () => {
  it("should return id2 with selected true", () => {
    const prevState = [
      {
        id: 1,
        selected: false,
        name: "Maquillage",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                selected: false,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            titlePreparation: "Maquillage ultime",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        selected: false,
        name: "Coiffure",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        selected: false,
        name: "Coupe femmes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupes classiques",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Coupes très stylisées",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changement de look (exemple: carré plongeant sur cheveux longs)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        selected: false,
        name: "Vernis",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        selected: false,
        name: "Hommes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coupe et coiffage",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Coupe et stylling",
                options: []
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Barbe",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Taille de barbe simple",
                options: []
              }
            ]
          }
        ]
      }
    ]

    const expectedState = [
      {
        id: 1,
        selected: false,
        name: "Maquillage",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                selected: false,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            titlePreparation: "Maquillage ultime",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        selected: true,
        name: "Coiffure",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        selected: false,
        name: "Coupe femmes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupes classiques",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Coupes très stylisées",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changement de look (exemple: carré plongeant sur cheveux longs)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        selected: false,
        name: "Vernis",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        selected: false,
        name: "Hommes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            selected: false,
            titlePreparation: "Coupe et coiffage",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Coupe et stylling",
                options: []
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Barbe",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                selected: false,
                title: "Taille de barbe simple",
                options: []
              }
            ]
          }
        ]
      }
    ]

    const action = makeChoosePrestation(2)

    expect(prestations(prevState, action)).toEqual(expectedState)
  })
})
