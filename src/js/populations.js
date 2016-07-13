import $ from 'jquery'
import _ from 'lodash'
import {client_id as key} from './secrets.js'

let client_id = `client_id=${key}`

function playSong(event) {
  console.log(event.target)
  let player = $("audio")
  player[0].src = event.target.classList[0]
  player[0].src += "?" + client_id
  console.log(player)

}

function populate(tracks) {
  tracks.forEach(function (track) {
    let trackHTML = `<li class="track">
                      <div class="artwork">
                        <img class="${track.streamURL}" src=${track.artwork}>
                      </div>
                      <div class="info">
                        <div class="title">
                          <h4>${track.title}</h4>
                        </div>
                        <div class="artist">
                          <h6><span class="fixed">${track.artist}</span></h6>
                        </div>
                      </div>
                    </li>`
    $(".results-container").append(trackHTML)
  });
  $(".artwork").on('click', playSong)
}




export {populate}

// <h5><span class="fixed">Album__ </span></h5>