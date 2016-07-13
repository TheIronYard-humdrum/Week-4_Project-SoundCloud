import $ from 'jquery'
import _ from 'lodash'
import {getTracks} from './getFunctions.js'

$(document).ready(function() {
    $(document).scrollTop(0);
});

$('#submit').on('click', getTracks)
