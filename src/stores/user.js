import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    acceptTerms: false,
    acceptPrivacy: false,
    readPrivacyText: false,
  }),
  actions: {
    updateFirstName(value) {
      this.firstName = value;
    },
    updateLastName(value) {
      this.lastName = value;
    },
    
  },
});
