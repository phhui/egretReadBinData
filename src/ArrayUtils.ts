import TplBase = template.TplBase;
class ArrayUtils {
    public static isEqual($arrayA: Array<any>, $arrayB: Array<any>): boolean {
        var isMatch: boolean = true;
        if ($arrayA.length == $arrayB.length) {
            for (var i: number = 0; i < $arrayA.length; i++) {
                if ($arrayA[i] != $arrayB[i]) {
                    isMatch = false;
                    break;
                }
            }
        } else {
            isMatch = false;
        }
        return isMatch;
    }

    public static indexOf(array: Array<any>, fieldName: string, value: any): number {
        if (array == null) {
            return -1;
        }
        for (var idx: number = 0; idx < array.length; idx++) {
            var itm = array[idx];
            if (itm[fieldName] == value) {
                return idx;
            }
        }
        return -1;
    }

    public static findByFields<T>(array: Array<T>, fields: Array<string>, values: Array<any>): number {
        for (var i = 0; i < array.length; i++) {
            var obj = array[i];
            var equal: boolean = true;
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
    }

    public static copy<T>(dst: Array<T>, src: Array<T>) {
        for (var idx: number = 0; idx < src.length; ++idx) {
            dst.push(src[idx]);
        }
    }

    public static buffer2hex(buffer: ArrayBuffer): string {
        var view = new Uint8Array(buffer);
        var begin = 0;
        var end = buffer.byteLength;

        var out = new Array(end - begin);
        var b;
        while (begin < end) {
            b = view[begin++];
            if (b < 0x10)
                out.push("0" + b.toString(16));
            else out.push(b.toString(16));
        }
        var s = out.join(' ');
        return s;
    }


    public static removeAt(cnt: Array<any>, idx: number): void {
        cnt.splice(idx, 1);
    }

    public static fillList(bytes: ByteArray, targetDic: Array<any>, DataType: any, keyNames: String = "id"): void {
        var count: number = bytes.readUnsignedInt();
        for (var idx: number = 0; idx < count; idx++) {
            var obj: TplBase = new DataType();
            obj.fromByteArray(bytes);
            targetDic.push(obj);
        }
    }
}