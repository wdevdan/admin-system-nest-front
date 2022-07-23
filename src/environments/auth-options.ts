const socialLinks = [];

// not using
export const defaultAuthOptions = {
  strategies: [],
  forms: {
      login: {
          redirectDelay: 500,
          strategy: 'email',
          rememberMe: true,
          showMessages: {
              success: true,
              error: true,
          },
          socialLinks: socialLinks, // social links at the bottom of a page
      },
      register: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
              success: true,
              error: true,
          },
          terms: true,
          socialLinks: socialLinks,
      },
      requestPassword: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
              success: true,
              error: true,
          },
          socialLinks: socialLinks,
      },
      resetPassword: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
              success: true,
              error: true,
          },
          socialLinks: socialLinks,
      },
      logout: {
          redirectDelay: 500,
          strategy: 'email',
      },
      validation: {
          password: {
              required: true,
              minLength: 4,
              maxLength: 50,
          },
          email: {
              required: true,
          },
          fullName: {
              required: false,
              minLength: 4,
              maxLength: 50,
          },
      },
  },
};
