console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(newAlbum);
  return collection[collection.length-1];
}

console.log(addToCollection (myCollection, `Faith`, `George Michael`, 1988));
console.log(addToCollection (myCollection, `Spice`, `Spice Girls`, 1997));
console.log(addToCollection (myCollection, `Millennium`, `Backstreet Boys`, 1999));
console.log(addToCollection (myCollection, `The Eminem Show`, `Eminem`, 2002));
console.log(addToCollection (myCollection, `Recovery`, `Eminem`, 2010));
console.log(addToCollection (myCollection, `Fearless`, `Taylor Swift`, 2009));

console.log(myCollection);


function showCollection (collection) {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist}, from year ${album.yearPublished}`)
  }
}

showCollection (myCollection);

// Getting a "ReferenceError" while testing



function findByArtist (collection, artist) {
  let results = [];
  for (let album of collection) {
    if (album.artist === artist){
      results.push(album);
    }
  }
  return results;
}

console.log(findByArtist(myCollection, `Eminem`));
console.log(findByArtist(myCollection, `Spice Girls`));
console.log(findByArtist(myCollection, `Chappell Roan`));



function search (collection, searchCriteria) {
  let results = [];
  for (let album of collection) {
    if (album.artist === searchCriteria.artist && album.yearPublished === searchCriteria.yearPublished){
      results.push(album);
    }
    else if (Object.keys(searchCriteria).length === 0 || searchCriteria === undefined || searchCriteria.artist === `` || searchCriteria.yearPublished === ``){
      return collection;
    }
  }
  return results;
}

let testSearch = {
  artist: `Taylor Swift`,
  yearPublished: `Fearless`
}

console.log(search(myCollection, testSearch));








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
