// The following are episodes for Arrested Development. 

const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];
//final episode

const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };

//Adds the final episode onto the object
const addToPlaylist = episodes.concat(finaleEpisode)

//Removes episodes from the object
const removeFromPlaylist = function(playlist, episode){
  return playlist.filter(function(ep){
    return ep !== episode;
  });
};

//Plays next episode in the array
const getNextEpisodeInPlaylist = function(playlist) {
  console.log('The next Episode is' + playlist[0].title);
};


//reassign function
const binge = function(playlist){
// List current episode
  console.log("You're watching" + playlist[0].title);
// List new episode 
  var newList = removeFromPlaylist(playlist, playlist[0]);
// If episode equals zero then it will log 'next episode'
  if (newList.length === 0) {
    console.log('');
  }else {
    getNextEpisodeInPlaylist(newList);
    binge(newList);
  }

};
//Calls the function
binge(addToPlaylist);