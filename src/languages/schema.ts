export interface Language {
  titles: {
    main: string,
    portfolio: string,
  },
  home_text: string,
  notFound: {
    subtitle: string,
    back: string,
  },
  links: {
    github: string,
    /** @deprecated not used */
    telegram: string,
    npm: string,
  },
  routes: {
    main: string,
    portfolio: string,
    life: string,
  },
  portfolio: {
    frontend: string,
    cli: string,
    apps: string,
    games: string,
    backend: string,
  },
  /** @deprecated not used right now. May be used later if I add tooltips. */
  badges: {
    npm: string,
    github: {
      stars: string,
      downloads: string,
    },
  },
  randomFacts: {
    title: string,
    texts: {
      countries: (humanizedCountries: string) => typeof humanizedCountries,
      coding: [string, string, string],
      gaming: [string, string, string],
      watchingFilms: [string],
      photos: [string]
    }
  },
  countries: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ],
  life: {
    story: string,
    education: string,
    texts: {
      links: {
        steam: string,
        instagram: string,
        mustapp: string,
        practicum: string,
        ibdp: string,
      },
      education: {
        practicum: {
          dates: string,
          faculty: string,
          project: string,
          diploma: string,
        },
        ibdp: {
          dates: string,
          faculty: string,
          project: string,
        },
      },
    },
  },
  listLastWord: string,
}
