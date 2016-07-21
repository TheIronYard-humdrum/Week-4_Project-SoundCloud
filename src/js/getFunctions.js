import $ from 'jquery'
import _ from 'lodash'
import {client_id as key} from './secrets.js'
import {populate, populateAuto} from './populations.js'

let baseURL = "https://api.soundcloud.com"
let tracksURL = `/tracks?`
let client_id = `client_id=${key}&`
let addSearch = `q=`
let search = ``

function getTracks (event) {
  event.preventDefault();
  let search = $("#search").val();
  var tracks = $.ajax({
    url: `${baseURL}${tracksURL}${client_id}${addSearch}${search}`
  }).then(function(tracks){
    var results = []
    tracks.forEach(function (result) {
      result = {
        artwork: result.artwork_url,
        duration: result.duration,
        id: result.id,
        likes: result.likes_count,
        streamURL: result.stream_url,
        title: result.title,
        trackURL: result.uri,
        artist: result.user.username,
        artistURL: result.user.uri,
      }
      results.push(result)
    })
    populate(results)
  });
}

function getAutoFeed() {
  let search = $("#search").val();
  var tracks = $.ajax({
    url: `${baseURL}${tracksURL}${client_id}limit=10`
  }).then(function(tracks){
    var results = []
    tracks.forEach(function (result) {
      result = {
        artwork: result.artwork_url,
        duration: result.duration,
        id: result.id,
        likes: result.likes_count,
        streamURL: result.stream_url,
        title: result.title,
        trackURL: result.uri,
        artist: result.user.username,
        artistURL: result.user.uri,
      }
      results.push(result)
    })
    populateAuto(results)
  });
}

export {getTracks, getAutoFeed}