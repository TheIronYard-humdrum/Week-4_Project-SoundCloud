import {client_id} from './secrets.js'
import $ from 'jquery'
import {listResults} from './populate.js'

var baseURL = 'https://api.soundcloud.com/'

function getTracks() {
  var search = $("#search-input")[0].value;
  var tracks = $.ajax({
  url: `${baseURL}tracks?q=${search}&client_id=${client_id}`
}).then(function(tracks) {
    var results = [];
    tracks.forEach(function(track) {
        var result = {
          art: track.artwork_url,
          id: track.id,
          stream: track.stream_url,
          artist: track.user.username,
          artist_url: track.user.uri,
          track_uri: track.uri,
          title: track.title
        }
        results.push(result)
      })
    listResults(results)
    })
}

export {getTracks}