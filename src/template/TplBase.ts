module template {
    export class TplBase
        // implements IUnSerialize
    {
        public fromByteArray(bytes: ByteArray): void {
        }

        // protected getString(bytes:ByteArray):string {
        //     return bytes.readMultiByte(bytes.readUnsignedShort(), "utf-8");
        // }
        constructor() {
        }

        public initialize(): void {
        }

        private static regExpInt = new RegExp(/^\s*[+-]*[0-9]+\s*$/);
        private static regExpFloat = new RegExp(/^\s*[+-]*[0-9\.]+[0-9\.]\s*$/);

        private parseVal(any: string) {
            var val: any;
            if (any == "")
                val = any;
            if (TplBase.regExpInt.test(any))
                val = parseInt(any);
            else if (TplBase.regExpFloat.test(any))
                val = parseFloat(any);
            else
                val = any;
            return val;
        }

        public strToArray(input: string): Array<any> {
            var rslt: Array<any> = [];
            if (input == "")
                return rslt;

            var split: Array<any> = input.split(",");
            for (var idx: number = 0; idx < split.length; idx++) {
                var any: string = split[idx];
                var val = this.parseVal(any);
                rslt.push(val);
            }
            return rslt;
        }

        public strToArray2(input: string): Array<any> {
            //var input = '{2,5},{3,1},{4,3},{5,1}';
            var rslt: Array<any> = [];
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
        }

        public static toDictionary(array: any[]): Object {
            var dic = {};
            if (array.length > 0) {
                for (var j: number = 0; j < array.length; j++) {
                    var tbRow: Object = array[j];
                    dic[tbRow["ID"]] = tbRow;
                }
            }
            return dic;
        }
    }
}
