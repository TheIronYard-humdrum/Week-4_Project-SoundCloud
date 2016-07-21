import $ from 'jquery'
import _ from 'lodash'
import {getTracks, getAutoFeed} from './getFunctions.js'

$(document).ready(function() {
    $(document).scrollTop(0);
    getAutoFeed();
});

$('#submit').on('click', getTracks)
