import type { CampsiteConfig } from "../types";

/**
 * Nationalpark Camping Andrelwirt — Rauris / Seidlwinkl, Salzburger Land.
 * Inhalte zu 100 % aus raw/digest abgeleitet (eigene Quelle + campingplatz-salzburg.com +
 * hotel-rauris.com = derselbe Betrieb). Keine Preise in der Quelle → Richtpreise + offene
 * Disclosure. Kein See am Platz → kein `see`. Bilder je einmalig, provenienzgebunden.
 */
const IMG = "/campsites/andrelwirt";

const andrelwirt: CampsiteConfig = {
  name: "Nationalpark Camping Andrelwirt",
  shortName: "Andrelwirt",
  slug: "andrelwirt",
  ort: "Rauris",
  region: "Salzburger Land",
  brandKind: "Nationalpark-Camping",
  regionLong: "Raurisertal · Nationalpark Hohe Tauern · Salzburger Land",

  theme: "schiefer",
  heroVariant: "left",

  claim: "Mitten im Nationalpark Hohe Tauern",
  claimEmphasis: "Hohe Tauern",
  intro:
    "Im Raurisertal, das ganze Jahr geöffnet: ebene Stellplätze in der Bergnatur, dazu Gasthof mit Restaurant, Sauna und Kiosk gleich am Platz — Naturcamping mit dem Komfort einer Hotelanlage.",

  logo: { src: `${IMG}/logo-04b91d8730.png`, alt: "Logo Gasthof Andrelwirt, Rauris" },

  statement: {
    text: "Natur pur und Service total — du campst mitten im Nationalpark und hast den Gasthof gleich nebenan.",
    emphasis: "Service total",
  },

  pillars: [
    {
      title: "Mitten im Nationalpark",
      text: "Der Platz liegt im Herzen des Nationalpark Hohe Tauern, eingerahmt von den Bergen des Seidlwinkltals — Ruhe und Erholung, so weit du schaust.",
      image: { src: `${IMG}/gallery-093e3ab319.webp`, alt: "Campingplatz Andrelwirt im Seidlwinkltal, umrahmt von den Bergen des Nationalpark Hohe Tauern" },
    },
    {
      title: "Gasthof mit Restaurant",
      text: "Der historische Gasthof Andrelwirt steht direkt am Platz: Restaurant, Frühstücksbuffet und der Service einer Hotelanlage — als Selbstversorger oder mit Halbpension.",
      image: { src: `${IMG}/gallery-b00fd2230b.webp`, alt: "Gasthof Andrelwirt in Rauris mit Fassadenmalerei, Gastgarten und Blick auf die Berge im Sommer" },
    },
    {
      title: "Das ganze Jahr geöffnet",
      text: "Ganzjährig für dich da: im Sommer Wiesenstellplätze unter freiem Himmel, im Winter Camping im Schnee mit den verschneiten Hohen Tauern als Kulisse.",
      image: { src: `${IMG}/accommodation-c9b0bd4fd8.webp`, alt: "Wintercamping beim Andrelwirt im verschneiten Raurisertal" },
    },
  ],

  usps: [
    "75 Stellplätze",
    "Ganzjährig geöffnet",
    "Restaurant im Gasthof",
    "Sauna am Platz",
    "Hunde willkommen",
    "E-Bike-Verleih",
  ],

  trust: {
    heading: "Was den Andrelwirt besonders macht",
    headingEmphasis: "besonders",
    intro:
      "Geführt von Familie Mayer rund um den Gasthof Andrelwirt: ein Campingplatz im Nationalpark, der Natur pur mit Hotel-Infrastruktur verbindet — Restaurant, Sauna, Brotservice und kurze Wege, das ganze Jahr.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-7c301c25c2.webp`, alt: "Luftbild: Nationalpark Camping Andrelwirt mit Blick ins Seidlwinkltal, Nationalpark Hohe Tauern" },
  },

  breather: {
    image: { src: `${IMG}/gallery-f3bb3739fd.webp`, alt: "Campingwagen unter blühenden Kirschbäumen im Frühling am Andrelwirt" },
    line: "Frühling im Raurisertal — wenn die Kirschbäume blühen.",
  },

  camping: {
    heading: "Camping am Andrelwirt",
    intro: "Ebene Stellplätze in der Bergnatur, dazu Hotel-Service rund um den Gasthof: alles, was ein entspannter Campingtag im Nationalpark braucht.",
    features: [
      {
        title: "75 Stellplätze",
        text: "Ebene Plätze für Wohnwagen, Wohnmobil und Zelt — mit Strom-, Wasser- und Gasanschluss, ganzjährig nutzbar, auch im Schnee.",
        image: { src: `${IMG}/accommodation-aa27bd3e99.webp`, alt: "Stellplätze des Camping Andrelwirt im Winter vor den verschneiten Bergen" },
      },
      {
        title: "Rezeption & Anmeldung",
        text: "Empfang direkt am Platz: hier checkst du ein, holst Infos zur Region und findest den Kiosk für die kleinen Besorgungen.",
        image: { src: `${IMG}/gallery-ae9348471d.webp`, alt: "Rezeption und Anmeldung des Camping Andrelwirt mit Fahnen im Sommer" },
      },
      {
        title: "Restaurant im Gasthof",
        text: "Im Gasthof Andrelwirt wirst du auf Wunsch verwöhnt — regionale Schmankerln und österreichische Küche in gemütlicher Stube.",
        image: { src: `${IMG}/amenity-6e7c28f93b.webp`, alt: "Gedeckte Tische im Restaurant des Gasthof Andrelwirt" },
      },
      {
        title: "Frühstück & Brotservice",
        text: "Starte mit dem Frühstücksbuffet im Gasthof in den Tag — oder hol dir frische Semmeln über den Brotservice direkt zum Platz.",
        image: { src: `${IMG}/amenity-6db7b4bd6a.webp`, alt: "Frühstück mit Speck, Spiegelei und Tomaten in der Pfanne" },
      },
      {
        title: "Sauna zum Aufwärmen",
        text: "Nach Wanderung oder Skitour wartet die Sauna — Wärme und Erholung, gerade an kühlen Tagen im Raurisertal.",
        image: { src: `${IMG}/amenity-ed507f029c.webp`, alt: "Sauna-Kübel in der Sauna des Camping Andrelwirt, Rauris" },
      },
      {
        title: "Waschen & Trocknen",
        text: "Waschmaschine, Wäschetrockner und Trockenraum gehören dazu — praktisch bei längeren Touren und bei jedem Wetter.",
        image: { src: `${IMG}/gallery-5eef98975e.webp`, alt: "Waschmaschine im Sanitärbereich des Camping Andrelwirt" },
      },
    ],
  },

  kinder: {
    heading: "Platz zum Toben",
    intro: "Der Andrelwirt ist familienfreundlich angelegt — vom Riesentrampolin bis zum Aufenthaltsraum gibt es viel Raum für Kinder, drinnen wie draußen.",
    features: [
      {
        title: "Riesentrampolin",
        text: "Springen, bis die Wolken über dem Tal vorbeiziehen — das Riesentrampolin am Platz ist bei den Kindern hoch im Kurs.",
        image: { src: `${IMG}/kids-d168f3dfca.webp`, alt: "Kinder springen auf dem Riesentrampolin am Camping Andrelwirt im Raurisertal" },
      },
      {
        title: "Spielplatz & Kinderpool",
        text: "Spielplatz im Freien, Kinderpool und Indoorspielplatz für Regentage — am Andrelwirt ist für den Nachwuchs gesorgt, Sommer wie Winter.",
        image: { src: `${IMG}/kids-1666522427.webp`, alt: "Lachende Kinder am Camping Andrelwirt im Raurisertal" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund ums Raurisertal",
    intro: "Berge, Wälder und Brauchtum direkt vor dem Vorzelt — der Nationalpark Hohe Tauern liegt das ganze Jahr über zum Greifen nah.",
    items: [
      {
        title: "E-Biken",
        text: "Mit dem E-Bike hinauf in die Berge: Verleih und Ladestation gibt es direkt am Platz.",
        image: { src: `${IMG}/activity-e149d676a1.webp`, alt: "E-Biker genießt den Gipfelblick über den Hohen Tauern" },
      },
      {
        title: "Wandern",
        text: "Vom Tal bis zu den Gipfeln: das Raurisertal ist ein Wanderparadies im Nationalpark Hohe Tauern.",
        image: { src: `${IMG}/gallery-a1164d52ee.webp`, alt: "Blick auf den Sonnblick im Raurisertal — Wanderparadies im Nationalpark Hohe Tauern" },
      },
      {
        title: "Skitouren & Winter",
        text: "Im Winter wird das Tal zur stillen Schneelandschaft — ideal für Skitouren und Touren durch den verschneiten Wald.",
        image: { src: `${IMG}/gallery-b298f45f58.webp`, alt: "Skitourengeher im verschneiten Raurisertal vor den Hohen Tauern" },
      },
      {
        title: "Brauchtum & Almabtrieb",
        text: "Lebendige Tradition rund ums Tal: vom Bauernherbst bis zum Almabtrieb, wenn die Kühe geschmückt zu Tal ziehen.",
        image: { src: `${IMG}/gallery-1016d6cc9c.webp`, alt: "Kühe auf der Alm im Raurisertal vor der Bergkulisse" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Raurisertal",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 Tauernautobahn bis Bischofshofen, dann auf der B311 nach Taxenbach und ins Raurisertal nach Rauris — beschildert." },
      { title: "Mit der Bahn", text: "Bahnhof Taxenbach-Rauris an der Linie Salzburg–Tirol; weiter mit dem Tälerbus ins Tal." },
      { title: "Mit dem Flugzeug", text: "Flughafen Salzburg, von dort rund eine Stunde mit dem Auto in den Pinzgau und ins Raurisertal." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Andrelwirt",
    headingEmphasis: "Andrelwirt",
    intro: "Frühling unter Kirschblüten, Sommer am Gasthof und die weite Natur des Nationalparks — ein paar Eindrücke vom Platz und dem Tal.",
    tag: "Rauris · Nationalpark Hohe Tauern",
    moreCount: 12,
    images: [
      { src: `${IMG}/amenity-d0dad0dc3d.webp`, alt: "Kiosk des Camping Andrelwirt im Frühling vor den verschneiten Bergen" },
      { src: `${IMG}/gallery-42f9ed693b.webp`, alt: "Schild „Erholungsgebiet — Zutritt nur für Campinggäste“ am Eingang des Platzes" },
      { src: `${IMG}/accommodation-11d37a08d8.webp`, alt: "Der Gasthof Andrelwirt im Sommer im Nationalpark Hohe Tauern" },
      { src: `${IMG}/gallery-a4012df69f.webp`, alt: "Rauriser Urwald mit Moorsee im Nationalpark Hohe Tauern" },
    ],
  },

  booking: {
    heading: "Bereit für dein Naturcamping im Raurisertal?",
    headingEmphasis: "Naturcamping",
    intro: "Wähle Zeitraum und Personen — Familie Mayer meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind derzeit keine Preise angegeben (bitte bestätigen). Pro Nacht, 2 Personen inkl. Strom, zzgl. Ortstaxe.",
    highlight: { title: "Ganzjährig geöffnet", text: "Beim Andrelwirt campst du Sommer wie Winter — mit Restaurant und Sauna am Platz." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 47.228628, lng: 12.994115 },
    tel: "+43 6544 / 6411",
    telHref: "tel:+4365446411",
    mail: "info@andrelwirt.at",
    adresse: "Dorfstraße 19 · 5661 Rauris · Salzburger Land",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Ausstattung", href: "#camping" },
      { label: "Restaurant", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default andrelwirt;
