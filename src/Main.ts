class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.runGame,this);
        RES.loadConfig("default.res.json", "resource/");
    }

    private runGame() {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.parseData,this);
        RES.loadGroup("preload");
    }
    private parseData(){
        var baImage: egret.ByteArray = new egret.ByteArray(RES.getRes("tpl_bin"));
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
            }else {
                bytes.position += block_size;
            }
        }
    }
}