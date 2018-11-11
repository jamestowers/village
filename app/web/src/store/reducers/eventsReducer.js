const INITIAL_STATE = {
  items: {
    1: {
      id: 1,
      title: 'Spicy jalapeno et minim esse',
      image: 'https://source.unsplash.com/collection/190727/900x900',
      description: 'Dolor ullamco in, landjaeger flank fatback qui aute cillum tongue cupim sirloin occaecat strip steak. Cillum alcatra ham kielbasa salami duis, veniam ullamco in kevin short loin sed ham hock. Tongue cupidatat qui nisi boudin salami pancetta mollit, pork chop proident aute strip steak. Esse pork belly in, pastrami fugiat elit flank strip steak sirloin eiusmod ut. Ut sint irure velit ham dolore corned beef.Ball tip salami id, nulla shank anim ground round labore turkey eu pariatur ut shoulder strip steak cupim.Leberkas voluptate kevin exercitation adipisicing boudin ad officia cupim pig prosciutto ut tempor bresaola.Pastrami boudin flank voluptate qui.Flank commodo et, corned beef ea bresaola short loin in ut sunt est.Ex tri-tip tongue biltong ut spare ribs eiusmod shankle pastrami sed pork loin landjaeger drumstick.',
      price: 'Free',
      location: 'The Old House at Home',
      startAt: '2018-10-02 18:30:00',
      startAtFormatted: '2 days to go',
      endAt: '2018-10-02 23:00:00',
    },
    2: {
      id: 2,
      title: 'Cupidatat in cow andouille irure corned',
      image: 'https://source.unsplash.com/collection/190727/900x900',
      description: 'Cupidatat in cow andouille irure corned beef culpa in sirloin lorem. Cillum alcatra ham kielbasa salami duis, veniam ullamco in kevin short loin sed ham hock. Tongue cupidatat qui nisi boudin salami pancetta mollit, pork chop proident aute strip steak. Esse pork belly in, pastrami fugiat elit flank strip steak sirloin eiusmod ut. Ut sint irure velit ham dolore corned beef.Ball tip salami id, nulla shank anim ground round labore turkey eu pariatur ut shoulder strip steak cupim.Leberkas voluptate kevin exercitation adipisicing boudin ad officia cupim pig prosciutto ut tempor bresaola.Pastrami boudin flank voluptate qui.Flank commodo et, corned beef ea bresaola short loin in ut sunt est.Ex tri-tip tongue biltong ut spare ribs eiusmod shankle pastrami sed pork loin landjaeger drumstick.',
      price: '£5',
      location: 'St. Mary\'s Church',
      startAt: '2018-10-04 18:30:00',
      startAtFormatted: '8 days to go',
      endAt: '2018-10-04 23:00:00',
    },
    3: {
      id: 3,
      title: 'Fatback qui aute cillum tongue cupim sirloin occaecat strip steak.',
      image: 'https://source.unsplash.com/collection/190727/900x900',
      description: 'Cillum alcatra ham kielbasa salami duis, veniam ullamco in kevin short loin sed ham hock. Tongue cupidatat qui nisi boudin salami pancetta mollit, pork chop proident aute strip steak. Esse pork belly in, pastrami fugiat elit flank strip steak sirloin eiusmod ut. Ut sint irure velit ham dolore corned beef.Ball tip salami id, nulla shank anim ground round labore turkey eu pariatur ut shoulder strip steak cupim.Leberkas voluptate kevin exercitation adipisicing boudin ad officia cupim pig prosciutto ut tempor bresaola.Pastrami boudin flank voluptate qui.Flank commodo et, corned beef ea bresaola short loin in ut sunt est.Ex tri-tip tongue biltong ut spare ribs eiusmod shankle pastrami sed pork loin landjaeger drumstick. Cupidatat in cow andouille irure corned beef culpa in sirloin lorem. Dolor ullamco in, landjaeger flank fatback qui aute cillum tongue cupim sirloin occaecat strip steak. ',
      price: 'Free',
      location: 'The Old House at Home',
      startAt: '2018-10-04 18:30:00',
      startAtFormatted: '12 days to go',
      endAt: '2018-10-04 23:00:00',
    }
  },
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default postReducer
