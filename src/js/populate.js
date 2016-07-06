import $ from 'jquery'
import {client_id} from './secrets.js'

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

export {listResults}