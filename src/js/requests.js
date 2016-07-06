import {client_id} from './secrets.js'
import $ from 'jquery'

var baseURL = 'https://api.soundcloud.com/'

function getImages() {
  $(".art").on("click", function(){
    var player = $("#player")
    player[0].src = `${this.id}?client_id=${client_id}`
  })
}

function listResults(results) {
  var resultsList = $(".results")
  results.forEach(function(result) {
    var resutslHTML = `<li class="result">
                        <img id="${result.stream}" class="art" src="${result.art}">
                        <a href="${result.artist_url}">${result.artist}</a>
                        <a href="${result.track_uri}">${result.title}</a>
                      </li>`
    resultsList.append(resutslHTML)
  })
  getImages()
}

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