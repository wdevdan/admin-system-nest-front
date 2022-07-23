const environment = {
  production: false,

  API_PATH: 'http://localhost:3000/', // '/api/' - to use only proxy
  BASE_URL: 'http://localhost:3000/',

  ROLES: [
    { id: 0, name: 'Guest', role: 'guest' },

    { id: 69, name: 'Manager', role: 'manager' },

    { id: 3, name: 'Administrador', role: 'admin' },
    { id: 2, name: 'User - Manager', role: 'user' },
    { id: 1, name: 'Customer', role: 'customer' },
  ],
};

module.exports = environment;
