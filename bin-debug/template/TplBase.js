var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var template;
(function (template) {
    var TplBase = (function () {
        // protected getString(bytes:ByteArray):string {
        //     return bytes.readMultiByte(bytes.readUnsignedShort(), "utf-8");
        // }
        function TplBase() {
        }
        TplBase.prototype.fromByteArray = function (bytes) {
        };
        TplBase.prototype.initialize = function () {
        };
        TplBase.prototype.parseVal = function (any) {
            var val;
            if (any == "")
                val = any;
            if (TplBase.regExpInt.test(any))
                val = parseInt(any);
            else if (TplBase.regExpFloat.test(any))
                val = parseFloat(any);
            else
                val = any;
            return val;
        };
        TplBase.prototype.strToArray = function (input) {
            var rslt = [];
            if (input == "")
                return rslt;
            var split = input.split(",");
            for (var idx = 0; idx < split.length; idx++) {
                var any = split[idx];
                var val = this.parseVal(any);
                rslt.push(val);
            }
            return rslt;
        };
        TplBase.prototype.strToArray2 = function (input) {
            //var input = '{2,5},{3,1},{4,3},{5,1}';
            var rslt = [];
            if (input == "")
                return rslt;
            var array2 = input.match(new RegExp(/\{.*?\}/g));
            if (array2 == null)
                return rslt;
            for (var i = 0; i < array2.length; i++) {
                var strArray1 = array2[i];
                var s = strArray1.replace("{", "").replace("}", ""); //remove brace
                var array1 = [];
                var strings = s.split(",");
                for (var j = 0; j < strings.length; j++) {
                    var obj = strings[j];
                    //obj.match(new RegExp(/[0-9]+/))
                    var val = this.parseVal(obj);
                    array1.push(val);
                }
                rslt.push(array1);
            }
            return rslt;
        };
        TplBase.toDictionary = function (array) {
            var dic = {};
            if (array.length > 0) {
                for (var j = 0; j < array.length; j++) {
                    var tbRow = array[j];
                    dic[tbRow["ID"]] = tbRow;
                }
            }
            return dic;
        };
        TplBase.regExpInt = new RegExp(/^\s*[+-]*[0-9]+\s*$/);
        TplBase.regExpFloat = new RegExp(/^\s*[+-]*[0-9\.]+[0-9\.]\s*$/);
        return TplBase;
    }());
    template.TplBase = TplBase;
    __reflect(TplBase.prototype, "template.TplBase");
})(template || (template = {}));
//# sourceMappingURL=TplBase.js.map