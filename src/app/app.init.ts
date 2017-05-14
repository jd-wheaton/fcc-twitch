export class Init {
  load() {
    if (localStorage.getItem('users') === null || localStorage.getItem('users') === undefined) {

      const users = [
        {
          name: 'freecodecamp'
        },
        {
          name: 'deathproof99'
        },
        {
          name: 'kajhit'
        }
      ];
    localStorage.setItem('users', JSON.stringify(users));
    } else {
      console.log('Loading users...');
    }
  }
}
