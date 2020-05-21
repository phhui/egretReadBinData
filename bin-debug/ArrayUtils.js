var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TplBase = template.TplBase;
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    ArrayUtils.isEqual = function ($arrayA, $arrayB) {
        var isMatch = true;
        if ($arrayA.length == $arrayB.length) {
            for (var i = 0; i < $arrayA.length; i++) {
                if ($arrayA[i] != $arrayB[i]) {
                    isMatch = false;
                    break;
                }
            }
        }
        else {
            isMatch = false;
        }
        return isMatch;
    };
    ArrayUtils.indexOf = function (array, fieldName, value) {
        if (array == null) {
            return -1;
        }
        for (var idx = 0; idx < array.length; idx++) {
            var itm = array[idx];
            if (itm[fieldName] == value) {
                return idx;
            }
        }
        return -1;
    };
    ArrayUtils.findByFields = function (array, fields, values) {
        for (var i = 0; i < array.length; i++) {
            var obj = array[i];
            var equal = true;
            for (var j = 0; j < fields.length; j++) {
                var prop = fields[j];
                var val = values[j];
                if (obj[prop] != val) {
                    equal = false;
                    break;
                }
            }
            if (equal)
                return i;
        }
        return -1;
    };
    ArrayUtils.copy = function (dst, src) {
        for (var idx = 0; idx < src.length; ++idx) {
            dst.push(src[idx]);
        }
    };
    ArrayUtils.buffer2hex = function (buffer) {
        var view = new Uint8Array(buffer);
        var begin = 0;
        var end = buffer.byteLength;
        var out = new Array(end - begin);
        var b;
        while (begin < end) {
            b = view[begin++];
            if (b < 0x10)
                out.push("0" + b.toString(16));
            else
                out.push(b.toString(16));
        }
        var s = out.join(' ');
        return s;
    };
    ArrayUtils.removeAt = function (cnt, idx) {
        cnt.splice(idx, 1);
    };
    ArrayUtils.fillList = function (bytes, targetDic, DataType, keyNames) {
        if (keyNames === void 0) { keyNames = "id"; }
        var count = bytes.readUnsignedInt();
        for (var idx = 0; idx < count; idx++) {
            var obj = new DataType();
            obj.fromByteArray(bytes);
            targetDic.push(obj);
        }
    };
    return ArrayUtils;
}());
__reflect(ArrayUtils.prototype, "ArrayUtils");
//# sourceMappingURL=ArrayUtils.js.map