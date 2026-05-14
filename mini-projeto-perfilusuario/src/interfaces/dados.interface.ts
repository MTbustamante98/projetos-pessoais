export interface UserProfile {
  results: [
    {
      gender: string;
      name: { first: string; last: string };
      email: string;
      location: { city: string; country: string };
      picture: { large: string };
    },
  ];
}
