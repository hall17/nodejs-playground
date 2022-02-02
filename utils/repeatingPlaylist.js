// A playlist is considered a repeating playlist if any of the songs contain a reference to a previous song in the playlist.
// Otherwise, the playlist will end with the last song which points to undefined.

// Implement the method isRepeatingPlaylist that, efficiently with respect to time used, returns true if a playlist is repeating or false if it is not.

// For example, the following code prints "true" as both songs point to each other.

// let first = new Song("Hello");
// let second = new Song("Eye of the tiger");

// first.nextSong = second;
// second.nextSong = first;

// console.log(first.isRepeatingPlaylist());

class Song {
  name
  nextSong

  constructor(name) {
    this.name = name
  }

  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isRepeatingPlaylist() {
    // Your code goes here
    let next = this.nextSong
    console.log(this.nextSong)
    while (next != null) {
      if (next.name === this.name) {
        return true
      }
      next = next.nextSong
    }
    return false
    // else return false
  }
}

let first = new Song('Hello')
let second = new Song('Eye of the tiger')
// let third = new Song("song 3");
// let fourth = new Song("song 4");

first.nextSong = second
second.nextSong = first
// third.nextSong = fourth
// fourth.nextSong = first

console.log(first.isRepeatingPlaylist())
