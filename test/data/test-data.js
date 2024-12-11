const getDateSevenDaysFromNow = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7); 
  
  const month = currentDate.toLocaleString('en-US', { month: 'short' });
  const day = currentDate.getDate();

  return `${month} ${day}`;
};

module.exports = {
  movie: {
    id: "9eb27e1f-8591-4bce-bdc8-9bcc2cac445f",
    title: "Napoleon",
    rating: "R",
    language: "English",
    length: '158',
    description:
      "An epic that details the chequered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
    director: "Ridley Scott",
    startDate: "2024-10-29",
    endDate: "2024-12-28",
    trailerUrl: "https://www.youtube.com/embed/OAZWXUkrjPc?si=RZe3NjEOfTuO_q6p",
    writers: [
      {
        id: "efc19971-c4dd-4f25-b032-f0fce3315917",
        name: "David Scarpa",
      },
    ],
    genres: [
      { id: "3d1335da-cc64-4b3d-b9ac-ed70e046ada2", name: "Historical" },
      { id: "517e5390-3f36-469d-8413-c885f4173353", name: "Action" },
      { id: "e1e3dc02-3f3f-46ae-b41e-a0c342cb0cdc", name: "Adventure" },
      { id: "44220bba-924c-4b4d-939c-b9d5c1ca7bfe", name: "Biography" },
      { id: "14a662d8-5bcd-40c1-8f58-9c516b9ca35f", name: "Epic" },
    ],
    performers: [
      {
        id: "9ab82243-f0ac-4061-80b9-fb829dd95505",
        name: "Joaquin Phoenix",
        role: "Napoleon Bonaparte",
      },
      {
        id: "540294c9-0720-4032-83fd-c9165f626f7a",
        name: "Tahar Rahim",
        role: "Paul Barras",
      },
    ],
    images: [
      {
        id: "85d5e660-359d-4426-a3e9-22397807882a",
        movie: "9eb27e1f-8591-4bce-bdc8-9bcc2cac445f",
        isCoverImage: true,
        url: "https://i.postimg.cc/W3SBMywK/napoleon.jpg",
      },
    ],
    ratings: [
      {
        id: "ce812b23-e886-4286-8f19-954dd9cefe4c",
        name: "IMDB Rating",
        rating: "6.4",
        movie: "9eb27e1f-8591-4bce-bdc8-9bcc2cac445f",
      },
      {
        id: "5a561555-b0b2-407c-b548-af75de38d510",
        name: "Rotten Tomatoes",
        rating: "58%",
        movie: "9eb27e1f-8591-4bce-bdc8-9bcc2cac445f",
      },
    ],
    projections: [
      {
        id: "745e79e4-f854-4046-9a57-cde5f9bb5ff0",
        projectionTimes: [
          { id: "60d11cbb-f634-4166-ab03-3f148bc5d37f", time: "12:00:00" },
          { id: "538698d6-508d-41b7-81f5-86dd222ebcd7", time: "16:00:00" },
          { id: "78681d58-d80b-4197-962a-004712086414", time: "18:00:00" },
          { id: "a37367ff-689e-4746-a962-a0d3b512bbf0", time: "20:00:00" },
        ],
      },
    ],
  },

  filters: [
    { name: 'All Cities', option: 'Tuzla' },
    { name: 'All Venues', option: 'Cinestar' },
    { name: 'All Genres', option: 'Action' },
    { name: 'All Projection Times', option: '18:00:00' },
  ],
  date: getDateSevenDaysFromNow(),
};
