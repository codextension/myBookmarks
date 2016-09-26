/**
 * Created by elie on 26.09.2016.
 */

import { Component, OnInit } from 'angular2/core';
import { LocalBookmarkResolver } from './local-bookmark-resolver';

@Component({
    selector: 'localSettings',
    providers: [LocalBookmarkResolver],
    templateUrl: '../templates/localSettings.html'
})

/// <reference path="./../lib/chrome.d.ts"/>
export class LocalSettings implements OnInit {


    constructor(private localBookmarkResolver:LocalBookmarkResolver) {
    }

    ngOnInit() {
    }
}