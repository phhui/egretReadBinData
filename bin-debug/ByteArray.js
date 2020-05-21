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
var ByteArray = (function (_super) {
    __extends(ByteArray, _super);
    function ByteArray(data) {
        return _super.call(this, data) || this;
    }
    Object.defineProperty(ByteArray.prototype, "uint8Array", {
        get: function () {
            return this._bytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ByteArray.prototype, "pos", {
        get: function () {
            return this.position;
        },
        set: function (value) {
            this.position = value;
        },
        enumerable: true,
        configurable: true
    });
    ByteArray.prototype.writeBoolean = function (value) {
        this.writeByte(value ? 1 : 0);
    };
    ByteArray.prototype.writeShort2 = function (value) {
        this.writeShort(value);
    };
    ByteArray.prototype.writeInt2 = function (value) {
        this.writeInt(value);
    };
    ByteArray.prototype.writeUnsignedInt2 = function (value) {
        this.writeUnsignedInt(value);
    };
    ByteArray.prototype.writeFloat2 = function (value) {
        this.writeFloat(value);
    };
    ByteArray.prototype.writeDouble2 = function (value) {
        this.writeDouble(value);
    };
    ByteArray.prototype.writeMultiByte2 = function (value, charSet) {
        this.writeUTFBytes(value);
    };
    ByteArray.prototype.writeUTF2 = function (value) {
        this.writeUTF(value);
    };
    ByteArray.prototype.writeBytes2 = function (src_bytes, src_offset, src_len) {
        if (src_offset === void 0) { src_offset = 0; }
        if (src_len === void 0) { src_len = 0; }
        var src = src_bytes;
        this.writeBytes(src, src_offset, src_len);
    };
    ByteArray.writeBytes = function (dst, bytes, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = 0; }
        dst.writeBytes(bytes, offset, length);
    };
    ByteArray.prototype.readBoolean = function () {
        return this.readByte() == 1 ? true : false;
    };
    ByteArray.prototype.readUnsignedByte2 = function () {
        return this.readUnsignedByte();
    };
    ByteArray.prototype.readShort2 = function () {
        return this.readShort();
    };
    ByteArray.prototype.readUnsigned16 = function () {
        return this.readUnsignedShort();
    };
    ByteArray.prototype.readInt2 = function () {
        return this.readInt();
    };
    ByteArray.prototype.readUnsignedInt2 = function () {
        return this.readUnsignedInt();
    };
    ByteArray.prototype.readFloat2 = function () {
        return this.readFloat();
    };
    ByteArray.prototype.readDouble2 = function () {
        return this.readDouble();
    };
    ByteArray.prototype.readMultiByte = function (length, charSet) {
        return this.readUTFBytes(length);
    };
    ByteArray.prototype.readUTF2 = function () {
        return this.readUTF();
    };
    ByteArray.prototype.readBytes = function (bytes, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = 0; }
        throw new Error("Method not implemented");
    };
    return ByteArray;
}(egret.ByteArray));
__reflect(ByteArray.prototype, "ByteArray");
//# sourceMappingURL=ByteArray.js.map