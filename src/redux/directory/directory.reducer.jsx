const INITIAL_STATE = {
  sections: [
    {
      title: 'light',
      imageUrl: 'https://i.ibb.co/gSXmm1b/light4.jpg',
      id: 1,
      linkUrl: 'shop/light'
    },
    {
      title: 'medium',
      imageUrl: 'https://i.ibb.co/ySBPgLm/medium1.jpg',
      id: 2,
      linkUrl: 'shop/medium'
    },
    {
      title: 'dark',
      imageUrl: 'https://i.ibb.co/hcsffJC/dark.jpg',
      id: 3,
      linkUrl: 'shop/dark'
    },
    {
      title: 'arabica',
      imageUrl: 'https://i.ibb.co/5cqsQ5B/ARABICA.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/arabica'
    },
    {
      title: 'robusta',
      imageUrl: 'https://i.ibb.co/3rR48ZR/ROBUSTA.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/robusta'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer