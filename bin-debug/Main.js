var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.runGame, this);
        RES.loadConfig("default.res.json", "resource/");
    };
    Main.prototype.runGame = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.parseData, this);
        RES.loadGroup("preload");
    };
    Main.prototype.parseData = function () {
        var baImage = new egret.ByteArray(RES.getRes("tpl_bin"));
        var byteArray = new ByteArray(baImage.buffer);
        var rawInflate = new Zlib.RawInflate(byteArray.uint8Array);
        var decompress = rawInflate.decompress();
        var tableClassMap = getTableClassMap();
        var bytes = new ByteArray(decompress);
        bytes.endian = egret.Endian.BIG_ENDIAN;
        var tbl_cnt = bytes.readUnsignedShort();
        for (var i = 0; i < tbl_cnt; i++) {
            var tbl_name = bytes.readUTF();
            var block_size = bytes.readUnsignedInt();
            var Cls = tableClassMap[tbl_name];
            if (Cls != null) {
                var targetDic = [];
                ArrayUtils.fillList(bytes, targetDic, Cls);
                Cls.vec = targetDic;
            }
            else {
                bytes.position += block_size;
            }
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map