import $ from 'jquery'
import {getTracks} from "./requests.js"


$('#submit-search').on("click", function(){
  event.preventDefault();
  getTracks();
})





