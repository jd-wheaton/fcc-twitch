export class Init {
  load() {
    if (localStorage.getItem('users') === null || localStorage.getItem('users') === undefined) {

      const users = [
        {
          name: 'Deathproof99',
          game: '',
          logo: '',
          status: '',
          url: ''
        },
        {
          name: 'FreeCodeCamp',
          game: '',
          logo: '',
          status: '',
          url: ''
        }
      ];
    localStorage.setItem('users', JSON.stringify(users));
    } else {
      console.log('Loading data...');
    }
  }
}
