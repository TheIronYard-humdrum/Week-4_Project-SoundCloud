import $ from 'jquery'
import _ from 'lodash'
import {client_id as key} from './secrets.js'

let client_id = `client_id=${key}`

function playSong(event) {
  let player = $("audio")
  player[0].src = event.target.classList[0]
  player[0].src += "?" + client_id
  let image = $('.main-image')
  image[0].src = event.target.src

}

function populate(tracks) {
  $(".results-container").removeClass('off')
  $(".results-container").empty();
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
                          <h6>${track.artist}</h6>
                        </div>
                      </div>
                    </li>`
    $(".results-container").append(trackHTML);
  });
  $(".artwork").on('click', playSong);
}

function populateAuto(tracks) {
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
                          <h6>${track.artist}</h6>
                        </div>
                      </div>
                    </li>`
    $(".auto-feed-results").append(trackHTML);
  });
  $(".artwork").on('click', playSong);
}

export {populate, populateAuto}

// <h5><span class="fixed">Album__ </span></h5>