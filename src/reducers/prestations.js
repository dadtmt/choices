import { CHOOSE_PRESTATION } from "../actions/actions"

const initialState = [
  {
    id: 1,
    name: "Maquillage",
    image: "",
    description: "",
    gender: "F",
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
            title: "Uniforme et 'Effet bonne mine', sur tout le visage",
            options: []
          },
          {
            id: 2,
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
    name: "Coiffure",
    image: "",
    description: "",
    gender: "F",
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
    name: "Vernis",
    image: "",
    description: "",
    gender: "F",
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
    id: 4,
    name: "Coiffure",
    image: "",
    description: "",
    gender: "M",
    preparations: [
      {
        id: 1,
        selected: false,
        titlePreparation: "Coupe 1",
        duration: {
          minutes: 20
        },
        price: 16,
        choices: [
          {
            id: 1,
            title: "Coupe et stylling",
            options: []
          }
        ]
      },
      {
        id: 2,
        selected: false,
        titlePreparation: "Coupe 2",
        duration: {
          minutes: 20
        },
        price: 16,
        choices: [
          {
            id: 1,
            title: "Coupe et stylling",
            options: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Barbe",
    image: "",
    description: "",
    gender: "M",
    preparations: [
      {
        id: 1,
        selected: false,
        titlePreparation: "Barbe 1",
        duration: {
          minutes: 20
        },
        price: 16
      },
      {
        id: 2,
        selected: false,
        titlePreparation: "Barbe 2",
        duration: {
          minutes: 20
        },
        price: 16
      }
    ]
  }
]

const prestations = (prevState = initialState, action) => {
  if (action.type === CHOOSE_PRESTATION) {
    return prevState.map(prestation => ({
      ...prestation,
      preparations: prestation.preparations.map(preparation => ({
        ...preparation,
        selected:
          prestation.id === action.prestationId
            ? preparation.id === action.preparationId
              ? !preparation.selected
              : false
            : preparation.selected
      }))
    }))
  }
  return prevState
}

export default prestations
