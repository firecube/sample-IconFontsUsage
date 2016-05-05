// import { Observable, EventData } from "data/observable";
// import { Page } from "ui/page";
"use strict";
// export function navigatingTo(args: EventData) {
//     var page = <Page>args.object;
//     var vm = new Observable();
//     var topGlyphCode = 0xe903;
//     vm.set("topIcon", String.fromCharCode(topGlyphCode));
//     page.bindingContext = vm;
// }
var observable = require("data/observable");
var frame = require("ui/frame");
function pageLoaded(args) {
    var page = args.object;
    var viewModel = new observable.Observable();
    var glyphs = new Array();
    var charCode = 0xe903;
    for (; charCode <= 0xeaea; charCode++) {
        var glyph = new observable.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs);
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function onTap(args) {
    frame.topmost().navigate({
        moduleName: "sub-pages/sub-page"
    });
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map