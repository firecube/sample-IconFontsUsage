// import { Observable, EventData } from "data/observable";
// import { Page } from "ui/page";

// export function navigatingTo(args: EventData) {
//     var page = <Page>args.object;
    
//     var vm = new Observable();

//     var topGlyphCode = 0xe903;
//     vm.set("topIcon", String.fromCharCode(topGlyphCode));
   
//     page.bindingContext = vm;
// }

import observable = require("data/observable");
import pages = require("ui/page");
import frame = require("ui/frame");


export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    var viewModel = new observable.Observable();
    var glyphs = new Array<observable.Observable>();
    var charCode = 0xe903;
    for(; charCode <= 0xeaea; charCode++){
        var glyph = new observable.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);  
    }
    viewModel.set("glyphs", glyphs)
    page.bindingContext = viewModel;
}

export function onTap(args:observable.EventData) {
    frame.topmost().navigate({
        moduleName: "sub-pages/sub-page"
    })
}