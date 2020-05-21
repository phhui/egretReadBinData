var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//*这个文件是自动生成的，不要手动修改
var template_def;
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTreasureBase = (function (_super) {
        __extends(TbTreasureBase, _super);
        function TbTreasureBase() {
            return _super.call(this) || this;
        }
        TbTreasureBase.getTb = function () {
            return TbTreasureBase.vec;
        };
        TbTreasureBase.getTmplt = function (id) {
            if (null == TbTreasureBase.dic)
                TbTreasureBase.dic = TplBase.toDictionary(TbTreasureBase.getTb());
            return TbTreasureBase.dic[id];
        };
        Object.defineProperty(TbTreasureBase.prototype, "arr2_prop", {
            get: function () { return this._arr2_prop != null ? this._arr2_prop : this._arr2_prop = this.strToArray2(this._str_prop); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTreasureBase.prototype, "arr2_prop_add_5", {
            get: function () { return this._arr2_prop_add_5 != null ? this._arr2_prop_add_5 : this._arr2_prop_add_5 = this.strToArray2(this._str_prop_add_5); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTreasureBase.prototype, "arr2_prop_add_10", {
            get: function () { return this._arr2_prop_add_10 != null ? this._arr2_prop_add_10 : this._arr2_prop_add_10 = this.strToArray2(this._str_prop_add_10); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTreasureBase.prototype, "arr2_prop_add_15", {
            get: function () { return this._arr2_prop_add_15 != null ? this._arr2_prop_add_15 : this._arr2_prop_add_15 = this.strToArray2(this._str_prop_add_15); },
            enumerable: true,
            configurable: true
        });
        ;
        TbTreasureBase.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.icon = bytes.readUTFString();
            this._str_prop = bytes.readUTFString();
            this._str_prop_add_5 = bytes.readUTFString();
            this._str_prop_add_10 = bytes.readUTFString();
            this._str_prop_add_15 = bytes.readUTFString();
        };
        TbTreasureBase.XLSNAME = "B_【Risk】宝物.xlsx";
        TbTreasureBase.TBLNAME = "tb_treasure_base";
        return TbTreasureBase;
    }(TplBase));
    template_def.TbTreasureBase = TbTreasureBase;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTreasureUplevel = (function (_super) {
        __extends(TbTreasureUplevel, _super);
        function TbTreasureUplevel() {
            return _super.call(this) || this;
        }
        TbTreasureUplevel.getTb = function () {
            return TbTreasureUplevel.vec;
        };
        TbTreasureUplevel.getTmplt = function (id) {
            if (null == TbTreasureUplevel.dic)
                TbTreasureUplevel.dic = TplBase.toDictionary(TbTreasureUplevel.getTb());
            return TbTreasureUplevel.dic[id];
        };
        Object.defineProperty(TbTreasureUplevel.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbTreasureUplevel.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_cost = bytes.readUTFString();
            this.hp_percent = bytes.readInt();
            this.interchange_cost = bytes.readInt();
        };
        TbTreasureUplevel.XLSNAME = "B_【Risk】宝物.xlsx";
        TbTreasureUplevel.TBLNAME = "tb_treasure_uplevel";
        return TbTreasureUplevel;
    }(TplBase));
    template_def.TbTreasureUplevel = TbTreasureUplevel;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBag = (function (_super) {
        __extends(TbBag, _super);
        function TbBag() {
            return _super.call(this) || this;
        }
        TbBag.getTb = function () {
            return TbBag.vec;
        };
        TbBag.getTmplt = function (id) {
            if (null == TbBag.dic)
                TbBag.dic = TplBase.toDictionary(TbBag.getTb());
            return TbBag.dic[id];
        };
        Object.defineProperty(TbBag.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbBag.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.capacity = bytes.readInt();
            this._str_cost = bytes.readUTFString();
        };
        TbBag.XLSNAME = "B_【Risk】背包表.xlsx";
        TbBag.TBLNAME = "tb_bag";
        return TbBag;
    }(TplBase));
    template_def.TbBag = TbBag;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBagZiyuan = (function (_super) {
        __extends(TbBagZiyuan, _super);
        function TbBagZiyuan() {
            return _super.call(this) || this;
        }
        TbBagZiyuan.getTb = function () {
            return TbBagZiyuan.vec;
        };
        TbBagZiyuan.getTmplt = function (id) {
            if (null == TbBagZiyuan.dic)
                TbBagZiyuan.dic = TplBase.toDictionary(TbBagZiyuan.getTb());
            return TbBagZiyuan.dic[id];
        };
        TbBagZiyuan.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.item_id = bytes.readInt();
            this.type = bytes.readInt();
        };
        TbBagZiyuan.XLSNAME = "B_【Risk】背包表.xlsx";
        TbBagZiyuan.TBLNAME = "tb_bag_ziyuan";
        return TbBagZiyuan;
    }(TplBase));
    template_def.TbBagZiyuan = TbBagZiyuan;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBagHanghai = (function (_super) {
        __extends(TbBagHanghai, _super);
        function TbBagHanghai() {
            return _super.call(this) || this;
        }
        TbBagHanghai.getTb = function () {
            return TbBagHanghai.vec;
        };
        TbBagHanghai.getTmplt = function (id) {
            if (null == TbBagHanghai.dic)
                TbBagHanghai.dic = TplBase.toDictionary(TbBagHanghai.getTb());
            return TbBagHanghai.dic[id];
        };
        TbBagHanghai.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.item_id = bytes.readInt();
        };
        TbBagHanghai.XLSNAME = "B_【Risk】背包表.xlsx";
        TbBagHanghai.TBLNAME = "tb_bag_hanghai";
        return TbBagHanghai;
    }(TplBase));
    template_def.TbBagHanghai = TbBagHanghai;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBagSet = (function (_super) {
        __extends(TbBagSet, _super);
        function TbBagSet() {
            return _super.call(this) || this;
        }
        TbBagSet.getTb = function () {
            return TbBagSet.vec;
        };
        TbBagSet.getTmplt = function (id) {
            if (null == TbBagSet.dic)
                TbBagSet.dic = TplBase.toDictionary(TbBagSet.getTb());
            return TbBagSet.dic[id];
        };
        TbBagSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.materials_limit = bytes.readInt();
            this.wujiang_limit = bytes.readInt();
        };
        TbBagSet.XLSNAME = "B_【Risk】背包表.xlsx";
        TbBagSet.TBLNAME = "tb_bag_set";
        return TbBagSet;
    }(TplBase));
    template_def.TbBagSet = TbBagSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbScene = (function (_super) {
        __extends(TbScene, _super);
        function TbScene() {
            return _super.call(this) || this;
        }
        TbScene.getTb = function () {
            return TbScene.vec;
        };
        TbScene.getTmplt = function (id) {
            if (null == TbScene.dic)
                TbScene.dic = TplBase.toDictionary(TbScene.getTb());
            return TbScene.dic[id];
        };
        Object.defineProperty(TbScene.prototype, "arr_foreground", {
            get: function () { return this._arr_foreground != null ? this._arr_foreground : this._arr_foreground = this.strToArray(this._str_foreground); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbScene.prototype, "arr_distance", {
            get: function () { return this._arr_distance != null ? this._arr_distance : this._arr_distance = this.strToArray(this._str_distance); },
            enumerable: true,
            configurable: true
        });
        ;
        TbScene.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.road = bytes.readUTFString();
            this.backdrop = bytes.readUTFString();
            this._str_foreground = bytes.readUTFString();
            this._str_distance = bytes.readUTFString();
        };
        TbScene.XLSNAME = "C_【Risk】场景表.xlsx";
        TbScene.TBLNAME = "tb_scene";
        return TbScene;
    }(TplBase));
    template_def.TbScene = TbScene;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbItem = (function (_super) {
        __extends(TbItem, _super);
        function TbItem() {
            return _super.call(this) || this;
        }
        TbItem.getTb = function () {
            return TbItem.vec;
        };
        TbItem.getTmplt = function (id) {
            if (null == TbItem.dic)
                TbItem.dic = TplBase.toDictionary(TbItem.getTb());
            return TbItem.dic[id];
        };
        Object.defineProperty(TbItem.prototype, "arr_using_effect", {
            get: function () { return this._arr_using_effect != null ? this._arr_using_effect : this._arr_using_effect = this.strToArray(this._str_using_effect); },
            enumerable: true,
            configurable: true
        });
        ;
        TbItem.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.type = bytes.readInt();
            this.bag_type = bytes.readInt();
            this.quality = bytes.readInt();
            this.icon = bytes.readUTFString();
            this.max_overlap = bytes.readInt();
            this._str_using_effect = bytes.readUTFString();
            this.arrange = bytes.readInt();
            this.time_limit = bytes.readInt();
            this.daily_limit = bytes.readInt();
            this.goods_id = bytes.readInt();
            this.link = bytes.readInt();
        };
        TbItem.XLSNAME = "D_【Risk】道具表（新）.xlsx";
        TbItem.TBLNAME = "tb_item";
        return TbItem;
    }(TplBase));
    template_def.TbItem = TbItem;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBox = (function (_super) {
        __extends(TbBox, _super);
        function TbBox() {
            return _super.call(this) || this;
        }
        TbBox.getTb = function () {
            return TbBox.vec;
        };
        TbBox.getTmplt = function (id) {
            if (null == TbBox.dic)
                TbBox.dic = TplBase.toDictionary(TbBox.getTb());
            return TbBox.dic[id];
        };
        Object.defineProperty(TbBox.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbBox.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_cost = bytes.readUTFString();
        };
        TbBox.XLSNAME = "D_【Risk】道具表（新）.xlsx";
        TbBox.TBLNAME = "tb_box";
        return TbBox;
    }(TplBase));
    template_def.TbBox = TbBox;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbGoods = (function (_super) {
        __extends(TbGoods, _super);
        function TbGoods() {
            return _super.call(this) || this;
        }
        TbGoods.getTb = function () {
            return TbGoods.vec;
        };
        TbGoods.getTmplt = function (id) {
            if (null == TbGoods.dic)
                TbGoods.dic = TplBase.toDictionary(TbGoods.getTb());
            return TbGoods.dic[id];
        };
        Object.defineProperty(TbGoods.prototype, "arr2_items", {
            get: function () { return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbGoods.prototype, "arr2_first_reward", {
            get: function () { return this._arr2_first_reward != null ? this._arr2_first_reward : this._arr2_first_reward = this.strToArray2(this._str_first_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbGoods.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.type = bytes.readInt();
            this.info = bytes.readUTFString();
            this._str_items = bytes.readUTFString();
            this.item_id = bytes.readInt();
            this.num = bytes.readInt();
            this.money_type = bytes.readInt();
            this.price = bytes.readFloat();
            this.index = bytes.readInt();
            this._str_first_reward = bytes.readUTFString();
            this.first_rank = bytes.readInt();
            this.buy_limit_type = bytes.readInt();
            this.buy_limit_num = bytes.readInt();
        };
        TbGoods.XLSNAME = "D_【Risk】道具表（新）.xlsx";
        TbGoods.TBLNAME = "tb_goods";
        return TbGoods;
    }(TplBase));
    template_def.TbGoods = TbGoods;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbExchange = (function (_super) {
        __extends(TbExchange, _super);
        function TbExchange() {
            return _super.call(this) || this;
        }
        TbExchange.getTb = function () {
            return TbExchange.vec;
        };
        TbExchange.getTmplt = function (id) {
            if (null == TbExchange.dic)
                TbExchange.dic = TplBase.toDictionary(TbExchange.getTb());
            return TbExchange.dic[id];
        };
        Object.defineProperty(TbExchange.prototype, "arr2_items", {
            get: function () { return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbExchange.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbExchange.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.type = bytes.readInt();
            this.info = bytes.readUTFString();
            this._str_items = bytes.readUTFString();
            this._str_cost = bytes.readUTFString();
            this.index = bytes.readInt();
        };
        TbExchange.XLSNAME = "D_【Risk】道具表（新）.xlsx";
        TbExchange.TBLNAME = "tb_exchange";
        return TbExchange;
    }(TplBase));
    template_def.TbExchange = TbExchange;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDungeonBase = (function (_super) {
        __extends(TbDungeonBase, _super);
        function TbDungeonBase() {
            return _super.call(this) || this;
        }
        TbDungeonBase.getTb = function () {
            return TbDungeonBase.vec;
        };
        TbDungeonBase.getTmplt = function (id) {
            if (null == TbDungeonBase.dic)
                TbDungeonBase.dic = TplBase.toDictionary(TbDungeonBase.getTb());
            return TbDungeonBase.dic[id];
        };
        Object.defineProperty(TbDungeonBase.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbDungeonBase.prototype, "arr2_show_reward", {
            get: function () { return this._arr2_show_reward != null ? this._arr2_show_reward : this._arr2_show_reward = this.strToArray2(this._str_show_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbDungeonBase.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.type = bytes.readInt();
            this.level = bytes.readInt();
            this.hp_limit = bytes.readInt();
            this.name = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.fight_id = bytes.readInt();
            this._str_cost = bytes.readUTFString();
            this._str_show_reward = bytes.readUTFString();
        };
        TbDungeonBase.XLSNAME = "F_【Risk】副本表.xlsx";
        TbDungeonBase.TBLNAME = "tb_dungeon_base";
        return TbDungeonBase;
    }(TplBase));
    template_def.TbDungeonBase = TbDungeonBase;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDungeonSet = (function (_super) {
        __extends(TbDungeonSet, _super);
        function TbDungeonSet() {
            return _super.call(this) || this;
        }
        TbDungeonSet.getTb = function () {
            return TbDungeonSet.vec;
        };
        TbDungeonSet.getTmplt = function (id) {
            if (null == TbDungeonSet.dic)
                TbDungeonSet.dic = TplBase.toDictionary(TbDungeonSet.getTb());
            return TbDungeonSet.dic[id];
        };
        Object.defineProperty(TbDungeonSet.prototype, "arr_buy_cost", {
            get: function () { return this._arr_buy_cost != null ? this._arr_buy_cost : this._arr_buy_cost = this.strToArray(this._str_buy_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbDungeonSet.prototype, "arr_alliance_buy_cost", {
            get: function () { return this._arr_alliance_buy_cost != null ? this._arr_alliance_buy_cost : this._arr_alliance_buy_cost = this.strToArray(this._str_alliance_buy_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbDungeonSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_buy_cost = bytes.readUTFString();
            this.challenge_num = bytes.readInt();
            this.alliance_challenge_num = bytes.readInt();
            this._str_alliance_buy_cost = bytes.readUTFString();
        };
        TbDungeonSet.XLSNAME = "F_【Risk】副本表.xlsx";
        TbDungeonSet.TBLNAME = "tb_dungeon_set";
        return TbDungeonSet;
    }(TplBase));
    template_def.TbDungeonSet = TbDungeonSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAllianceDungeon = (function (_super) {
        __extends(TbAllianceDungeon, _super);
        function TbAllianceDungeon() {
            return _super.call(this) || this;
        }
        TbAllianceDungeon.getTb = function () {
            return TbAllianceDungeon.vec;
        };
        TbAllianceDungeon.getTmplt = function (id) {
            if (null == TbAllianceDungeon.dic)
                TbAllianceDungeon.dic = TplBase.toDictionary(TbAllianceDungeon.getTb());
            return TbAllianceDungeon.dic[id];
        };
        Object.defineProperty(TbAllianceDungeon.prototype, "arr2_kill_reward", {
            get: function () { return this._arr2_kill_reward != null ? this._arr2_kill_reward : this._arr2_kill_reward = this.strToArray2(this._str_kill_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAllianceDungeon.prototype, "arr2_lose_reward", {
            get: function () { return this._arr2_lose_reward != null ? this._arr2_lose_reward : this._arr2_lose_reward = this.strToArray2(this._str_lose_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAllianceDungeon.prototype, "arr2_box_reward", {
            get: function () { return this._arr2_box_reward != null ? this._arr2_box_reward : this._arr2_box_reward = this.strToArray2(this._str_box_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAllianceDungeon.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.fight_id = bytes.readInt();
            this.desc = bytes.readUTFString();
            this.show_wujiang = bytes.readInt();
            this._str_kill_reward = bytes.readUTFString();
            this._str_lose_reward = bytes.readUTFString();
            this._str_box_reward = bytes.readUTFString();
        };
        TbAllianceDungeon.XLSNAME = "F_【Risk】副本表.xlsx";
        TbAllianceDungeon.TBLNAME = "tb_alliance_dungeon";
        return TbAllianceDungeon;
    }(TplBase));
    template_def.TbAllianceDungeon = TbAllianceDungeon;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbGonggao = (function (_super) {
        __extends(TbGonggao, _super);
        function TbGonggao() {
            return _super.call(this) || this;
        }
        TbGonggao.getTb = function () {
            return TbGonggao.vec;
        };
        TbGonggao.getTmplt = function (id) {
            if (null == TbGonggao.dic)
                TbGonggao.dic = TplBase.toDictionary(TbGonggao.getTb());
            return TbGonggao.dic[id];
        };
        Object.defineProperty(TbGonggao.prototype, "arr_type", {
            get: function () { return this._arr_type != null ? this._arr_type : this._arr_type = this.strToArray(this._str_type); },
            enumerable: true,
            configurable: true
        });
        ;
        TbGonggao.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_type = bytes.readUTFString();
        };
        TbGonggao.XLSNAME = "G_【Risk】公告表.xlsx";
        TbGonggao.TBLNAME = "tb_gonggao";
        return TbGonggao;
    }(TplBase));
    template_def.TbGonggao = TbGonggao;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbStrategy = (function (_super) {
        __extends(TbStrategy, _super);
        function TbStrategy() {
            return _super.call(this) || this;
        }
        TbStrategy.getTb = function () {
            return TbStrategy.vec;
        };
        TbStrategy.getTmplt = function (id) {
            if (null == TbStrategy.dic)
                TbStrategy.dic = TplBase.toDictionary(TbStrategy.getTb());
            return TbStrategy.dic[id];
        };
        TbStrategy.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.content = bytes.readUTFString();
            this.praise = bytes.readInt();
        };
        TbStrategy.XLSNAME = "G_【Risk】攻略表（不用）.xlsx";
        TbStrategy.TBLNAME = "tb_strategy";
        return TbStrategy;
    }(TplBase));
    template_def.TbStrategy = TbStrategy;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbHud = (function (_super) {
        __extends(TbHud, _super);
        function TbHud() {
            return _super.call(this) || this;
        }
        TbHud.getTb = function () {
            return TbHud.vec;
        };
        TbHud.getTmplt = function (id) {
            if (null == TbHud.dic)
                TbHud.dic = TplBase.toDictionary(TbHud.getTb());
            return TbHud.dic[id];
        };
        TbHud.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.icon = bytes.readUTFString();
            this.pos = bytes.readInt();
            this.rank = bytes.readInt();
            this.system_id = bytes.readInt();
        };
        TbHud.XLSNAME = "H_【Risk】HUD表.xlsx";
        TbHud.TBLNAME = "tb_hud";
        return TbHud;
    }(TplBase));
    template_def.TbHud = TbHud;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbActiveConfig = (function (_super) {
        __extends(TbActiveConfig, _super);
        function TbActiveConfig() {
            return _super.call(this) || this;
        }
        TbActiveConfig.getTb = function () {
            return TbActiveConfig.vec;
        };
        TbActiveConfig.getTmplt = function (id) {
            if (null == TbActiveConfig.dic)
                TbActiveConfig.dic = TplBase.toDictionary(TbActiveConfig.getTb());
            return TbActiveConfig.dic[id];
        };
        Object.defineProperty(TbActiveConfig.prototype, "arr2_time", {
            get: function () { return this._arr2_time != null ? this._arr2_time : this._arr2_time = this.strToArray2(this._str_time); },
            enumerable: true,
            configurable: true
        });
        ;
        TbActiveConfig.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_time = bytes.readUTFString();
            this.exist_time = bytes.readInt();
        };
        TbActiveConfig.XLSNAME = "H_【Risk】活动表.xlsx";
        TbActiveConfig.TBLNAME = "tb_active_config";
        return TbActiveConfig;
    }(TplBase));
    template_def.TbActiveConfig = TbActiveConfig;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbOperatorReward = (function (_super) {
        __extends(TbOperatorReward, _super);
        function TbOperatorReward() {
            return _super.call(this) || this;
        }
        TbOperatorReward.getTb = function () {
            return TbOperatorReward.vec;
        };
        TbOperatorReward.getTmplt = function (id) {
            if (null == TbOperatorReward.dic)
                TbOperatorReward.dic = TplBase.toDictionary(TbOperatorReward.getTb());
            return TbOperatorReward.dic[id];
        };
        Object.defineProperty(TbOperatorReward.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbOperatorReward.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.plat = bytes.readInt();
            this.mail_id = bytes.readInt();
            this._str_reward = bytes.readUTFString();
            this.disappear = bytes.readInt();
        };
        TbOperatorReward.XLSNAME = "H_【Risk】活动表.xlsx";
        TbOperatorReward.TBLNAME = "tb_operator_reward";
        return TbOperatorReward;
    }(TplBase));
    template_def.TbOperatorReward = TbOperatorReward;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbActivitySet = (function (_super) {
        __extends(TbActivitySet, _super);
        function TbActivitySet() {
            return _super.call(this) || this;
        }
        TbActivitySet.getTb = function () {
            return TbActivitySet.vec;
        };
        TbActivitySet.getTmplt = function (id) {
            if (null == TbActivitySet.dic)
                TbActivitySet.dic = TplBase.toDictionary(TbActivitySet.getTb());
            return TbActivitySet.dic[id];
        };
        Object.defineProperty(TbActivitySet.prototype, "arr2_shouchong", {
            get: function () { return this._arr2_shouchong != null ? this._arr2_shouchong : this._arr2_shouchong = this.strToArray2(this._str_shouchong); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbActivitySet.prototype, "arr2_shoucang", {
            get: function () { return this._arr2_shoucang != null ? this._arr2_shoucang : this._arr2_shoucang = this.strToArray2(this._str_shoucang); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbActivitySet.prototype, "arr2_daily_fenxiang_reward", {
            get: function () { return this._arr2_daily_fenxiang_reward != null ? this._arr2_daily_fenxiang_reward : this._arr2_daily_fenxiang_reward = this.strToArray2(this._str_daily_fenxiang_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbActivitySet.prototype, "arr2_daily_yaoqing_reward", {
            get: function () { return this._arr2_daily_yaoqing_reward != null ? this._arr2_daily_yaoqing_reward : this._arr2_daily_yaoqing_reward = this.strToArray2(this._str_daily_yaoqing_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbActivitySet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_shouchong = bytes.readUTFString();
            this._str_shoucang = bytes.readUTFString();
            this.daily_fenxiang_num = bytes.readInt();
            this._str_daily_fenxiang_reward = bytes.readUTFString();
            this.daily_yaoqing_num = bytes.readInt();
            this._str_daily_yaoqing_reward = bytes.readUTFString();
            this.fenxiang_add_num = bytes.readInt();
        };
        TbActivitySet.XLSNAME = "H_【Risk】活动表.xlsx";
        TbActivitySet.TBLNAME = "tb_activity_set";
        return TbActivitySet;
    }(TplBase));
    template_def.TbActivitySet = TbActivitySet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbYiyuanBox = (function (_super) {
        __extends(TbYiyuanBox, _super);
        function TbYiyuanBox() {
            return _super.call(this) || this;
        }
        TbYiyuanBox.getTb = function () {
            return TbYiyuanBox.vec;
        };
        TbYiyuanBox.getTmplt = function (id) {
            if (null == TbYiyuanBox.dic)
                TbYiyuanBox.dic = TplBase.toDictionary(TbYiyuanBox.getTb());
            return TbYiyuanBox.dic[id];
        };
        TbYiyuanBox.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
        };
        TbYiyuanBox.XLSNAME = "H_【Risk】活动表.xlsx";
        TbYiyuanBox.TBLNAME = "tb_yiyuan_box";
        return TbYiyuanBox;
    }(TplBase));
    template_def.TbYiyuanBox = TbYiyuanBox;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTianjiangBox = (function (_super) {
        __extends(TbTianjiangBox, _super);
        function TbTianjiangBox() {
            return _super.call(this) || this;
        }
        TbTianjiangBox.getTb = function () {
            return TbTianjiangBox.vec;
        };
        TbTianjiangBox.getTmplt = function (id) {
            if (null == TbTianjiangBox.dic)
                TbTianjiangBox.dic = TplBase.toDictionary(TbTianjiangBox.getTb());
            return TbTianjiangBox.dic[id];
        };
        Object.defineProperty(TbTianjiangBox.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTianjiangBox.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbTianjiangBox.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_cost = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
        };
        TbTianjiangBox.XLSNAME = "H_【Risk】活动表.xlsx";
        TbTianjiangBox.TBLNAME = "tb_tianjiang_box";
        return TbTianjiangBox;
    }(TplBase));
    template_def.TbTianjiangBox = TbTianjiangBox;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbFenxiangAdd = (function (_super) {
        __extends(TbFenxiangAdd, _super);
        function TbFenxiangAdd() {
            return _super.call(this) || this;
        }
        TbFenxiangAdd.getTb = function () {
            return TbFenxiangAdd.vec;
        };
        TbFenxiangAdd.getTmplt = function (id) {
            if (null == TbFenxiangAdd.dic)
                TbFenxiangAdd.dic = TplBase.toDictionary(TbFenxiangAdd.getTb());
            return TbFenxiangAdd.dic[id];
        };
        Object.defineProperty(TbFenxiangAdd.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbFenxiangAdd.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.days = bytes.readInt();
            this._str_reward = bytes.readUTFString();
        };
        TbFenxiangAdd.XLSNAME = "H_【Risk】活动表.xlsx";
        TbFenxiangAdd.TBLNAME = "tb_fenxiang_add";
        return TbFenxiangAdd;
    }(TplBase));
    template_def.TbFenxiangAdd = TbFenxiangAdd;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbYaoqingAdd = (function (_super) {
        __extends(TbYaoqingAdd, _super);
        function TbYaoqingAdd() {
            return _super.call(this) || this;
        }
        TbYaoqingAdd.getTb = function () {
            return TbYaoqingAdd.vec;
        };
        TbYaoqingAdd.getTmplt = function (id) {
            if (null == TbYaoqingAdd.dic)
                TbYaoqingAdd.dic = TplBase.toDictionary(TbYaoqingAdd.getTb());
            return TbYaoqingAdd.dic[id];
        };
        Object.defineProperty(TbYaoqingAdd.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbYaoqingAdd.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.num = bytes.readInt();
            this._str_reward = bytes.readUTFString();
        };
        TbYaoqingAdd.XLSNAME = "H_【Risk】活动表.xlsx";
        TbYaoqingAdd.TBLNAME = "tb_yaoqing_add";
        return TbYaoqingAdd;
    }(TplBase));
    template_def.TbYaoqingAdd = TbYaoqingAdd;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbFleetProbe = (function (_super) {
        __extends(TbFleetProbe, _super);
        function TbFleetProbe() {
            return _super.call(this) || this;
        }
        TbFleetProbe.getTb = function () {
            return TbFleetProbe.vec;
        };
        TbFleetProbe.getTmplt = function (id) {
            if (null == TbFleetProbe.dic)
                TbFleetProbe.dic = TplBase.toDictionary(TbFleetProbe.getTb());
            return TbFleetProbe.dic[id];
        };
        Object.defineProperty(TbFleetProbe.prototype, "arr_show_reward", {
            get: function () { return this._arr_show_reward != null ? this._arr_show_reward : this._arr_show_reward = this.strToArray(this._str_show_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbFleetProbe.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbFleetProbe.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.type = bytes.readInt();
            this.depth = bytes.readInt();
            this._str_show_reward = bytes.readUTFString();
            this.show_num = bytes.readUTFString();
            this.need_time = bytes.readInt();
            this._str_cost = bytes.readUTFString();
        };
        TbFleetProbe.XLSNAME = "H_【Risk】海港.xlsx";
        TbFleetProbe.TBLNAME = "tb_fleet_probe";
        return TbFleetProbe;
    }(TplBase));
    template_def.TbFleetProbe = TbFleetProbe;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbFleetNum = (function (_super) {
        __extends(TbFleetNum, _super);
        function TbFleetNum() {
            return _super.call(this) || this;
        }
        TbFleetNum.getTb = function () {
            return TbFleetNum.vec;
        };
        TbFleetNum.getTmplt = function (id) {
            if (null == TbFleetNum.dic)
                TbFleetNum.dic = TplBase.toDictionary(TbFleetNum.getTb());
            return TbFleetNum.dic[id];
        };
        Object.defineProperty(TbFleetNum.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbFleetNum.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_cost = bytes.readUTFString();
        };
        TbFleetNum.XLSNAME = "H_【Risk】海港.xlsx";
        TbFleetNum.TBLNAME = "tb_fleet_num";
        return TbFleetNum;
    }(TplBase));
    template_def.TbFleetNum = TbFleetNum;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSeaModule = (function (_super) {
        __extends(TbSeaModule, _super);
        function TbSeaModule() {
            return _super.call(this) || this;
        }
        TbSeaModule.getTb = function () {
            return TbSeaModule.vec;
        };
        TbSeaModule.getTmplt = function (id) {
            if (null == TbSeaModule.dic)
                TbSeaModule.dic = TplBase.toDictionary(TbSeaModule.getTb());
            return TbSeaModule.dic[id];
        };
        TbSeaModule.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.need_nautics = bytes.readInt();
            this.type = bytes.readInt();
            this.num_cost = bytes.readInt();
            this.need_time = bytes.readInt();
            this.event_id = bytes.readInt();
            this.cost = bytes.readInt();
            this.middle_res = bytes.readUTFString();
            this.superstratum_res = bytes.readUTFString();
        };
        TbSeaModule.XLSNAME = "H_【Risk】航海.xlsx";
        TbSeaModule.TBLNAME = "tb_sea_module";
        return TbSeaModule;
    }(TplBase));
    template_def.TbSeaModule = TbSeaModule;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbNauticsLevel = (function (_super) {
        __extends(TbNauticsLevel, _super);
        function TbNauticsLevel() {
            return _super.call(this) || this;
        }
        TbNauticsLevel.getTb = function () {
            return TbNauticsLevel.vec;
        };
        TbNauticsLevel.getTmplt = function (id) {
            if (null == TbNauticsLevel.dic)
                TbNauticsLevel.dic = TplBase.toDictionary(TbNauticsLevel.getTb());
            return TbNauticsLevel.dic[id];
        };
        TbNauticsLevel.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.recover_time = bytes.readInt();
            this.recover_max = bytes.readInt();
        };
        TbNauticsLevel.XLSNAME = "H_【Risk】航海.xlsx";
        TbNauticsLevel.TBLNAME = "tb_nautics_level";
        return TbNauticsLevel;
    }(TplBase));
    template_def.TbNauticsLevel = TbNauticsLevel;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbPirateReset = (function (_super) {
        __extends(TbPirateReset, _super);
        function TbPirateReset() {
            return _super.call(this) || this;
        }
        TbPirateReset.getTb = function () {
            return TbPirateReset.vec;
        };
        TbPirateReset.getTmplt = function (id) {
            if (null == TbPirateReset.dic)
                TbPirateReset.dic = TplBase.toDictionary(TbPirateReset.getTb());
            return TbPirateReset.dic[id];
        };
        Object.defineProperty(TbPirateReset.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbPirateReset.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.reset_level = bytes.readInt();
            this.level_min = bytes.readInt();
            this._str_cost = bytes.readUTFString();
        };
        TbPirateReset.XLSNAME = "H_【Risk】航海.xlsx";
        TbPirateReset.TBLNAME = "tb_pirate_reset";
        return TbPirateReset;
    }(TplBase));
    template_def.TbPirateReset = TbPirateReset;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSeaSet = (function (_super) {
        __extends(TbSeaSet, _super);
        function TbSeaSet() {
            return _super.call(this) || this;
        }
        TbSeaSet.getTb = function () {
            return TbSeaSet.vec;
        };
        TbSeaSet.getTmplt = function (id) {
            if (null == TbSeaSet.dic)
                TbSeaSet.dic = TplBase.toDictionary(TbSeaSet.getTb());
            return TbSeaSet.dic[id];
        };
        Object.defineProperty(TbSeaSet.prototype, "arr_pirate_event_id", {
            get: function () { return this._arr_pirate_event_id != null ? this._arr_pirate_event_id : this._arr_pirate_event_id = this.strToArray(this._str_pirate_event_id); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbSeaSet.prototype, "arr2_max_cost", {
            get: function () { return this._arr2_max_cost != null ? this._arr2_max_cost : this._arr2_max_cost = this.strToArray2(this._str_max_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbSeaSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.yulei_time = bytes.readInt();
            this._str_pirate_event_id = bytes.readUTFString();
            this._str_max_cost = bytes.readUTFString();
            this.max_add = bytes.readInt();
            this.max_add_num = bytes.readInt();
        };
        TbSeaSet.XLSNAME = "H_【Risk】航海.xlsx";
        TbSeaSet.TBLNAME = "tb_sea_set";
        return TbSeaSet;
    }(TplBase));
    template_def.TbSeaSet = TbSeaSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSkill = (function (_super) {
        __extends(TbSkill, _super);
        function TbSkill() {
            return _super.call(this) || this;
        }
        TbSkill.getTb = function () {
            return TbSkill.vec;
        };
        TbSkill.getTmplt = function (id) {
            if (null == TbSkill.dic)
                TbSkill.dic = TplBase.toDictionary(TbSkill.getTb());
            return TbSkill.dic[id];
        };
        Object.defineProperty(TbSkill.prototype, "arr_initiative_level", {
            get: function () { return this._arr_initiative_level != null ? this._arr_initiative_level : this._arr_initiative_level = this.strToArray(this._str_initiative_level); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbSkill.prototype, "arr_defense_level", {
            get: function () { return this._arr_defense_level != null ? this._arr_defense_level : this._arr_defense_level = this.strToArray(this._str_defense_level); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbSkill.prototype, "arr_dodge_levlel", {
            get: function () { return this._arr_dodge_levlel != null ? this._arr_dodge_levlel : this._arr_dodge_levlel = this.strToArray(this._str_dodge_levlel); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbSkill.prototype, "arr_attack_level", {
            get: function () { return this._arr_attack_level != null ? this._arr_attack_level : this._arr_attack_level = this.strToArray(this._str_attack_level); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbSkill.prototype, "arr_combination_general", {
            get: function () { return this._arr_combination_general != null ? this._arr_combination_general : this._arr_combination_general = this.strToArray(this._str_combination_general); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbSkill.prototype, "arr_every_general", {
            get: function () { return this._arr_every_general != null ? this._arr_every_general : this._arr_every_general = this.strToArray(this._str_every_general); },
            enumerable: true,
            configurable: true
        });
        ;
        TbSkill.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.info = bytes.readUTFString();
            this.icon = bytes.readUTFString();
            this.type_info = bytes.readUTFString();
            this.trigger_prob = bytes.readInt();
            this.trigger_num = bytes.readInt();
            this.damage_type = bytes.readInt();
            this._str_initiative_level = bytes.readUTFString();
            this._str_defense_level = bytes.readUTFString();
            this._str_dodge_levlel = bytes.readUTFString();
            this._str_attack_level = bytes.readUTFString();
            this.is_combination = bytes.readInt();
            this._str_combination_general = bytes.readUTFString();
            this._str_every_general = bytes.readUTFString();
            this.show_type = bytes.readInt();
            this.effect = bytes.readInt();
        };
        TbSkill.XLSNAME = "J_【Risk】技能表（新）.xlsx";
        TbSkill.TBLNAME = "tb_skill";
        return TbSkill;
    }(TplBase));
    template_def.TbSkill = TbSkill;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSkillAnim = (function (_super) {
        __extends(TbSkillAnim, _super);
        function TbSkillAnim() {
            return _super.call(this) || this;
        }
        TbSkillAnim.getTb = function () {
            return TbSkillAnim.vec;
        };
        TbSkillAnim.getTmplt = function (id) {
            if (null == TbSkillAnim.dic)
                TbSkillAnim.dic = TplBase.toDictionary(TbSkillAnim.getTb());
            return TbSkillAnim.dic[id];
        };
        TbSkillAnim.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.jinengming = bytes.readUTFString();
            this.sfcjtx = bytes.readUTFString();
            this.sfqtx = bytes.readUTFString();
            this.sfdz = bytes.readUTFString();
            this.sftx = bytes.readUTFString();
            this.adftx = bytes.readUTFString();
            this.cjdz = bytes.readUTFString();
            this.adfdz = bytes.readUTFString();
            this.sbdz = bytes.readUTFString();
            this.zjjstx = bytes.readUTFString();
        };
        TbSkillAnim.XLSNAME = "J_【Risk】技能表（新）.xlsx";
        TbSkillAnim.TBLNAME = "tb_skill_anim";
        return TbSkillAnim;
    }(TplBase));
    template_def.TbSkillAnim = TbSkillAnim;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSkillAction = (function (_super) {
        __extends(TbSkillAction, _super);
        function TbSkillAction() {
            return _super.call(this) || this;
        }
        TbSkillAction.getTb = function () {
            return TbSkillAction.vec;
        };
        TbSkillAction.getTmplt = function (id) {
            if (null == TbSkillAction.dic)
                TbSkillAction.dic = TplBase.toDictionary(TbSkillAction.getTb());
            return TbSkillAction.dic[id];
        };
        TbSkillAction.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.dongzuoming = bytes.readUTFString();
            this.dzsj = bytes.readInt();
            this.dzsjbdz = bytes.readInt();
            this.jsddsj = bytes.readInt();
            this.jssjbdz = bytes.readInt();
            this.guiwei = bytes.readInt();
            this.ydfx = bytes.readInt();
            this.ydjl = bytes.readInt();
            this.ydbdz = bytes.readInt();
            this.bdsj = bytes.readFloat();
            this.pyjdsjz = bytes.readInt();
            this.zhendongX = bytes.readInt();
            this.zhendongY = bytes.readInt();
            this.zhenpin = bytes.readInt();
            this.ksbsys = bytes.readInt();
            this.bianse = bytes.readInt();
            this.ksbstm = bytes.readFloat();
            this.bstm = bytes.readFloat();
            this.rwkstmd = bytes.readFloat();
            this.rwtmd = bytes.readFloat();
            this.bsgc = bytes.readInt();
            this.tqgd = bytes.readInt();
            this.tqbdz = bytes.readInt();
            this.tdlx = bytes.readInt();
            this.mrcx = bytes.readInt();
            this.zhuanshen = bytes.readInt();
            this.zspl = bytes.readInt();
            this.biaoqing = bytes.readUTFString();
            this.bqyydx = bytes.readInt();
            this.hxdz = bytes.readUTFString();
        };
        TbSkillAction.XLSNAME = "J_【Risk】技能表（新）.xlsx";
        TbSkillAction.TBLNAME = "tb_skill_action";
        return TbSkillAction;
    }(TplBase));
    template_def.TbSkillAction = TbSkillAction;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSceneEffect = (function (_super) {
        __extends(TbSceneEffect, _super);
        function TbSceneEffect() {
            return _super.call(this) || this;
        }
        TbSceneEffect.getTb = function () {
            return TbSceneEffect.vec;
        };
        TbSceneEffect.getTmplt = function (id) {
            if (null == TbSceneEffect.dic)
                TbSceneEffect.dic = TplBase.toDictionary(TbSceneEffect.getTb());
            return TbSceneEffect.dic[id];
        };
        TbSceneEffect.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.mingcheng = bytes.readUTFString();
            this.scjrsj = bytes.readInt();
            this.tjcsj = bytes.readInt();
            this.mbsc = bytes.readInt();
            this.sctmd = bytes.readFloat();
            this.tjrsj = bytes.readInt();
            this.tudengdai = bytes.readInt();
            this.scjcsj = bytes.readInt();
            this.zhongxintu = bytes.readUTFString();
            this.tdtmd = bytes.readInt();
        };
        TbSceneEffect.XLSNAME = "J_【Risk】技能表（新）.xlsx";
        TbSceneEffect.TBLNAME = "tb_scene_effect";
        return TbSceneEffect;
    }(TplBase));
    template_def.TbSceneEffect = TbSceneEffect;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSoundEffect = (function (_super) {
        __extends(TbSoundEffect, _super);
        function TbSoundEffect() {
            return _super.call(this) || this;
        }
        TbSoundEffect.getTb = function () {
            return TbSoundEffect.vec;
        };
        TbSoundEffect.getTmplt = function (id) {
            if (null == TbSoundEffect.dic)
                TbSoundEffect.dic = TplBase.toDictionary(TbSoundEffect.getTb());
            return TbSoundEffect.dic[id];
        };
        TbSoundEffect.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.fx_name = bytes.readUTFString();
            this.sound = bytes.readUTFString();
            this.duration = bytes.readInt();
            this.effect_up = bytes.readUTFString();
            this.effect_down = bytes.readUTFString();
        };
        TbSoundEffect.XLSNAME = "J_【Risk】技能表（新）.xlsx";
        TbSoundEffect.TBLNAME = "tb_sound_effect";
        return TbSoundEffect;
    }(TplBase));
    template_def.TbSoundEffect = TbSoundEffect;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbColiseumReward = (function (_super) {
        __extends(TbColiseumReward, _super);
        function TbColiseumReward() {
            return _super.call(this) || this;
        }
        TbColiseumReward.getTb = function () {
            return TbColiseumReward.vec;
        };
        TbColiseumReward.getTmplt = function (id) {
            if (null == TbColiseumReward.dic)
                TbColiseumReward.dic = TplBase.toDictionary(TbColiseumReward.getTb());
            return TbColiseumReward.dic[id];
        };
        Object.defineProperty(TbColiseumReward.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbColiseumReward.prototype, "arr2_reward_add", {
            get: function () { return this._arr2_reward_add != null ? this._arr2_reward_add : this._arr2_reward_add = this.strToArray2(this._str_reward_add); },
            enumerable: true,
            configurable: true
        });
        ;
        TbColiseumReward.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.win_add = bytes.readInt();
            this._str_reward = bytes.readUTFString();
            this._str_reward_add = bytes.readUTFString();
        };
        TbColiseumReward.XLSNAME = "J_【Risk】竞技场.xlsx";
        TbColiseumReward.TBLNAME = "tb_coliseum_reward";
        return TbColiseumReward;
    }(TplBase));
    template_def.TbColiseumReward = TbColiseumReward;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbColiseumSet = (function (_super) {
        __extends(TbColiseumSet, _super);
        function TbColiseumSet() {
            return _super.call(this) || this;
        }
        TbColiseumSet.getTb = function () {
            return TbColiseumSet.vec;
        };
        TbColiseumSet.getTmplt = function (id) {
            if (null == TbColiseumSet.dic)
                TbColiseumSet.dic = TplBase.toDictionary(TbColiseumSet.getTb());
            return TbColiseumSet.dic[id];
        };
        Object.defineProperty(TbColiseumSet.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbColiseumSet.prototype, "arr_ranked_fight_id", {
            get: function () { return this._arr_ranked_fight_id != null ? this._arr_ranked_fight_id : this._arr_ranked_fight_id = this.strToArray(this._str_ranked_fight_id); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbColiseumSet.prototype, "arr2_ranked_cd_cost", {
            get: function () { return this._arr2_ranked_cd_cost != null ? this._arr2_ranked_cd_cost : this._arr2_ranked_cd_cost = this.strToArray2(this._str_ranked_cd_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbColiseumSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.num = bytes.readInt();
            this.time = bytes.readInt();
            this._str_cost = bytes.readUTFString();
            this._str_ranked_fight_id = bytes.readUTFString();
            this.ranked_num = bytes.readInt();
            this.ranked_cd = bytes.readInt();
            this._str_ranked_cd_cost = bytes.readUTFString();
        };
        TbColiseumSet.XLSNAME = "J_【Risk】竞技场.xlsx";
        TbColiseumSet.TBLNAME = "tb_coliseum_set";
        return TbColiseumSet;
    }(TplBase));
    template_def.TbColiseumSet = TbColiseumSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbRankedReward = (function (_super) {
        __extends(TbRankedReward, _super);
        function TbRankedReward() {
            return _super.call(this) || this;
        }
        TbRankedReward.getTb = function () {
            return TbRankedReward.vec;
        };
        TbRankedReward.getTmplt = function (id) {
            if (null == TbRankedReward.dic)
                TbRankedReward.dic = TplBase.toDictionary(TbRankedReward.getTb());
            return TbRankedReward.dic[id];
        };
        Object.defineProperty(TbRankedReward.prototype, "arr_rank", {
            get: function () { return this._arr_rank != null ? this._arr_rank : this._arr_rank = this.strToArray(this._str_rank); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbRankedReward.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbRankedReward.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_rank = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
        };
        TbRankedReward.XLSNAME = "J_【Risk】竞技场.xlsx";
        TbRankedReward.TBLNAME = "tb_ranked_reward";
        return TbRankedReward;
    }(TplBase));
    template_def.TbRankedReward = TbRankedReward;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangEmploySet = (function (_super) {
        __extends(TbWujiangEmploySet, _super);
        function TbWujiangEmploySet() {
            return _super.call(this) || this;
        }
        TbWujiangEmploySet.getTb = function () {
            return TbWujiangEmploySet.vec;
        };
        TbWujiangEmploySet.getTmplt = function (id) {
            if (null == TbWujiangEmploySet.dic)
                TbWujiangEmploySet.dic = TplBase.toDictionary(TbWujiangEmploySet.getTb());
            return TbWujiangEmploySet.dic[id];
        };
        Object.defineProperty(TbWujiangEmploySet.prototype, "arr2_zuanshi_once_priority", {
            get: function () { return this._arr2_zuanshi_once_priority != null ? this._arr2_zuanshi_once_priority : this._arr2_zuanshi_once_priority = this.strToArray2(this._str_zuanshi_once_priority); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangEmploySet.prototype, "arr2_zuanshi_ten_priority", {
            get: function () { return this._arr2_zuanshi_ten_priority != null ? this._arr2_zuanshi_ten_priority : this._arr2_zuanshi_ten_priority = this.strToArray2(this._str_zuanshi_ten_priority); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangEmploySet.prototype, "arr2_shengdian_cost", {
            get: function () { return this._arr2_shengdian_cost != null ? this._arr2_shengdian_cost : this._arr2_shengdian_cost = this.strToArray2(this._str_shengdian_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWujiangEmploySet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.money_init = bytes.readInt();
            this.friend_cost = bytes.readInt();
            this._str_zuanshi_once_priority = bytes.readUTFString();
            this._str_zuanshi_ten_priority = bytes.readUTFString();
            this.zuanshi_once = bytes.readInt();
            this.zuanshi_ten = bytes.readInt();
            this._str_shengdian_cost = bytes.readUTFString();
        };
        TbWujiangEmploySet.XLSNAME = "J_【Risk】酒馆.xlsx";
        TbWujiangEmploySet.TBLNAME = "tb_wujiang_employ_set";
        return TbWujiangEmploySet;
    }(TplBase));
    template_def.TbWujiangEmploySet = TbWujiangEmploySet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBlackMarket = (function (_super) {
        __extends(TbBlackMarket, _super);
        function TbBlackMarket() {
            return _super.call(this) || this;
        }
        TbBlackMarket.getTb = function () {
            return TbBlackMarket.vec;
        };
        TbBlackMarket.getTmplt = function (id) {
            if (null == TbBlackMarket.dic)
                TbBlackMarket.dic = TplBase.toDictionary(TbBlackMarket.getTb());
            return TbBlackMarket.dic[id];
        };
        Object.defineProperty(TbBlackMarket.prototype, "arr2_need_item", {
            get: function () { return this._arr2_need_item != null ? this._arr2_need_item : this._arr2_need_item = this.strToArray2(this._str_need_item); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbBlackMarket.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbBlackMarket.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_need_item = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
        };
        TbBlackMarket.XLSNAME = "J_【Risk】集市.xlsx";
        TbBlackMarket.TBLNAME = "tb_black_market";
        return TbBlackMarket;
    }(TplBase));
    template_def.TbBlackMarket = TbBlackMarket;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBlackMarketSet = (function (_super) {
        __extends(TbBlackMarketSet, _super);
        function TbBlackMarketSet() {
            return _super.call(this) || this;
        }
        TbBlackMarketSet.getTb = function () {
            return TbBlackMarketSet.vec;
        };
        TbBlackMarketSet.getTmplt = function (id) {
            if (null == TbBlackMarketSet.dic)
                TbBlackMarketSet.dic = TplBase.toDictionary(TbBlackMarketSet.getTb());
            return TbBlackMarketSet.dic[id];
        };
        Object.defineProperty(TbBlackMarketSet.prototype, "arr_cost", {
            get: function () { return this._arr_cost != null ? this._arr_cost : this._arr_cost = this.strToArray(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbBlackMarketSet.prototype, "arr_cost_2", {
            get: function () { return this._arr_cost_2 != null ? this._arr_cost_2 : this._arr_cost_2 = this.strToArray(this._str_cost_2); },
            enumerable: true,
            configurable: true
        });
        ;
        TbBlackMarketSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_cost = bytes.readUTFString();
            this._str_cost_2 = bytes.readUTFString();
        };
        TbBlackMarketSet.XLSNAME = "J_【Risk】集市.xlsx";
        TbBlackMarketSet.TBLNAME = "tb_black_market_set";
        return TbBlackMarketSet;
    }(TplBase));
    template_def.TbBlackMarketSet = TbBlackMarketSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbMysticalMarket = (function (_super) {
        __extends(TbMysticalMarket, _super);
        function TbMysticalMarket() {
            return _super.call(this) || this;
        }
        TbMysticalMarket.getTb = function () {
            return TbMysticalMarket.vec;
        };
        TbMysticalMarket.getTmplt = function (id) {
            if (null == TbMysticalMarket.dic)
                TbMysticalMarket.dic = TplBase.toDictionary(TbMysticalMarket.getTb());
            return TbMysticalMarket.dic[id];
        };
        Object.defineProperty(TbMysticalMarket.prototype, "arr2_need_item", {
            get: function () { return this._arr2_need_item != null ? this._arr2_need_item : this._arr2_need_item = this.strToArray2(this._str_need_item); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbMysticalMarket.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbMysticalMarket.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_need_item = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
        };
        TbMysticalMarket.XLSNAME = "J_【Risk】集市.xlsx";
        TbMysticalMarket.TBLNAME = "tb_mystical_market";
        return TbMysticalMarket;
    }(TplBase));
    template_def.TbMysticalMarket = TbMysticalMarket;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAllianceSet = (function (_super) {
        __extends(TbAllianceSet, _super);
        function TbAllianceSet() {
            return _super.call(this) || this;
        }
        TbAllianceSet.getTb = function () {
            return TbAllianceSet.vec;
        };
        TbAllianceSet.getTmplt = function (id) {
            if (null == TbAllianceSet.dic)
                TbAllianceSet.dic = TplBase.toDictionary(TbAllianceSet.getTb());
            return TbAllianceSet.dic[id];
        };
        Object.defineProperty(TbAllianceSet.prototype, "arr2_establish_cost", {
            get: function () { return this._arr2_establish_cost != null ? this._arr2_establish_cost : this._arr2_establish_cost = this.strToArray2(this._str_establish_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAllianceSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.num_max = bytes.readInt();
            this.aide_num = bytes.readInt();
            this._str_establish_cost = bytes.readUTFString();
            this.hp_init = bytes.readInt();
        };
        TbAllianceSet.XLSNAME = "L_【Risk】联盟.xlsx";
        TbAllianceSet.TBLNAME = "tb_alliance_set";
        return TbAllianceSet;
    }(TplBase));
    template_def.TbAllianceSet = TbAllianceSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAreaInfo = (function (_super) {
        __extends(TbAreaInfo, _super);
        function TbAreaInfo() {
            return _super.call(this) || this;
        }
        TbAreaInfo.getTb = function () {
            return TbAreaInfo.vec;
        };
        TbAreaInfo.getTmplt = function (id) {
            if (null == TbAreaInfo.dic)
                TbAreaInfo.dic = TplBase.toDictionary(TbAreaInfo.getTb());
            return TbAreaInfo.dic[id];
        };
        Object.defineProperty(TbAreaInfo.prototype, "arr_show_drop_wujiang", {
            get: function () { return this._arr_show_drop_wujiang != null ? this._arr_show_drop_wujiang : this._arr_show_drop_wujiang = this.strToArray(this._str_show_drop_wujiang); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAreaInfo.prototype, "arr_wujiang_ids", {
            get: function () { return this._arr_wujiang_ids != null ? this._arr_wujiang_ids : this._arr_wujiang_ids = this.strToArray(this._str_wujiang_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAreaInfo.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.name = bytes.readUTFString();
            this.fight_limit = bytes.readInt();
            this.icon = bytes.readUTFString();
            this.star = bytes.readInt();
            this.exp = bytes.readInt();
            this.gold_coin = bytes.readInt();
            this._str_show_drop_wujiang = bytes.readUTFString();
            this.music = bytes.readUTFString();
            this.scene_id = bytes.readInt();
            this._str_wujiang_ids = bytes.readUTFString();
            this.max_id = bytes.readInt();
        };
        TbAreaInfo.XLSNAME = "M_【Risk】冒险关卡表.xlsx";
        TbAreaInfo.TBLNAME = "tb_area_info";
        return TbAreaInfo;
    }(TplBase));
    template_def.TbAreaInfo = TbAreaInfo;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAdventureMaze = (function (_super) {
        __extends(TbAdventureMaze, _super);
        function TbAdventureMaze() {
            return _super.call(this) || this;
        }
        TbAdventureMaze.getTb = function () {
            return TbAdventureMaze.vec;
        };
        TbAdventureMaze.getTmplt = function (id) {
            if (null == TbAdventureMaze.dic)
                TbAdventureMaze.dic = TplBase.toDictionary(TbAdventureMaze.getTb());
            return TbAdventureMaze.dic[id];
        };
        Object.defineProperty(TbAdventureMaze.prototype, "arr_wujiang_ids", {
            get: function () { return this._arr_wujiang_ids != null ? this._arr_wujiang_ids : this._arr_wujiang_ids = this.strToArray(this._str_wujiang_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureMaze.prototype, "arr_event_ids", {
            get: function () { return this._arr_event_ids != null ? this._arr_event_ids : this._arr_event_ids = this.strToArray(this._str_event_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureMaze.prototype, "arr_strategy", {
            get: function () { return this._arr_strategy != null ? this._arr_strategy : this._arr_strategy = this.strToArray(this._str_strategy); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureMaze.prototype, "arr_show_drop", {
            get: function () { return this._arr_show_drop != null ? this._arr_show_drop : this._arr_show_drop = this.strToArray(this._str_show_drop); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureMaze.prototype, "arr_show_drop_wujiang", {
            get: function () { return this._arr_show_drop_wujiang != null ? this._arr_show_drop_wujiang : this._arr_show_drop_wujiang = this.strToArray(this._str_show_drop_wujiang); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAdventureMaze.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.name = bytes.readUTFString();
            this.area_id = bytes.readInt();
            this.pass_id = bytes.readInt();
            this.music = bytes.readUTFString();
            this.scene_id = bytes.readInt();
            this._str_wujiang_ids = bytes.readUTFString();
            this.icon = bytes.readUTFString();
            this.first_time = bytes.readInt();
            this.other_time = bytes.readInt();
            this.event_time = bytes.readInt();
            this.event_id = bytes.readInt();
            this._str_event_ids = bytes.readUTFString();
            this.exp = bytes.readInt();
            this.gold_coin = bytes.readInt();
            this._str_strategy = bytes.readUTFString();
            this.gobattle_max = bytes.readInt();
            this._str_show_drop = bytes.readUTFString();
            this._str_show_drop_wujiang = bytes.readUTFString();
            this.special_weapon = bytes.readInt();
        };
        TbAdventureMaze.XLSNAME = "M_【Risk】冒险关卡表.xlsx";
        TbAdventureMaze.TBLNAME = "tb_adventure_maze";
        return TbAdventureMaze;
    }(TplBase));
    template_def.TbAdventureMaze = TbAdventureMaze;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAdventureSet = (function (_super) {
        __extends(TbAdventureSet, _super);
        function TbAdventureSet() {
            return _super.call(this) || this;
        }
        TbAdventureSet.getTb = function () {
            return TbAdventureSet.vec;
        };
        TbAdventureSet.getTmplt = function (id) {
            if (null == TbAdventureSet.dic)
                TbAdventureSet.dic = TplBase.toDictionary(TbAdventureSet.getTb());
            return TbAdventureSet.dic[id];
        };
        Object.defineProperty(TbAdventureSet.prototype, "arr2_drop_add_cost", {
            get: function () { return this._arr2_drop_add_cost != null ? this._arr2_drop_add_cost : this._arr2_drop_add_cost = this.strToArray2(this._str_drop_add_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureSet.prototype, "arr2_fighting_cost", {
            get: function () { return this._arr2_fighting_cost != null ? this._arr2_fighting_cost : this._arr2_fighting_cost = this.strToArray2(this._str_fighting_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureSet.prototype, "arr2_coordinates", {
            get: function () { return this._arr2_coordinates != null ? this._arr2_coordinates : this._arr2_coordinates = this.strToArray2(this._str_coordinates); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAdventureSet.prototype, "arr2_first_box_reward", {
            get: function () { return this._arr2_first_box_reward != null ? this._arr2_first_box_reward : this._arr2_first_box_reward = this.strToArray2(this._str_first_box_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAdventureSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.drop_max = bytes.readInt();
            this._str_drop_add_cost = bytes.readUTFString();
            this.drop_add_num = bytes.readInt();
            this.drop_add_max = bytes.readInt();
            this.earn_time = bytes.readInt();
            this.fast_fighting = bytes.readInt();
            this._str_fighting_cost = bytes.readUTFString();
            this._str_coordinates = bytes.readUTFString();
            this.first_box_time = bytes.readInt();
            this.unfirst_box_time = bytes.readInt();
            this._str_first_box_reward = bytes.readUTFString();
            this.box_reward_multiple = bytes.readInt();
        };
        TbAdventureSet.XLSNAME = "M_【Risk】冒险关卡表.xlsx";
        TbAdventureSet.TBLNAME = "tb_adventure_set";
        return TbAdventureSet;
    }(TplBase));
    template_def.TbAdventureSet = TbAdventureSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbRandomName = (function (_super) {
        __extends(TbRandomName, _super);
        function TbRandomName() {
            return _super.call(this) || this;
        }
        TbRandomName.getTb = function () {
            return TbRandomName.vec;
        };
        TbRandomName.getTmplt = function (id) {
            if (null == TbRandomName.dic)
                TbRandomName.dic = TplBase.toDictionary(TbRandomName.getTb());
            return TbRandomName.dic[id];
        };
        TbRandomName.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.xing = bytes.readUTFString();
            this.ming = bytes.readUTFString();
        };
        TbRandomName.XLSNAME = "M_【Risk】名字库.xlsx";
        TbRandomName.TBLNAME = "tb_random_name";
        return TbRandomName;
    }(TplBase));
    template_def.TbRandomName = TbRandomName;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbQuestBase = (function (_super) {
        __extends(TbQuestBase, _super);
        function TbQuestBase() {
            return _super.call(this) || this;
        }
        TbQuestBase.getTb = function () {
            return TbQuestBase.vec;
        };
        TbQuestBase.getTmplt = function (id) {
            if (null == TbQuestBase.dic)
                TbQuestBase.dic = TplBase.toDictionary(TbQuestBase.getTb());
            return TbQuestBase.dic[id];
        };
        Object.defineProperty(TbQuestBase.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbQuestBase.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.desc = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
            this.type = bytes.readInt();
            this.value = bytes.readInt();
            this.num = bytes.readInt();
            this.link = bytes.readInt();
            this.is_fenxiang = bytes.readBoolean();
        };
        TbQuestBase.XLSNAME = "R_【Risk】任务.xlsx";
        TbQuestBase.TBLNAME = "tb_quest_base";
        return TbQuestBase;
    }(TplBase));
    template_def.TbQuestBase = TbQuestBase;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDailySign = (function (_super) {
        __extends(TbDailySign, _super);
        function TbDailySign() {
            return _super.call(this) || this;
        }
        TbDailySign.getTb = function () {
            return TbDailySign.vec;
        };
        TbDailySign.getTmplt = function (id) {
            if (null == TbDailySign.dic)
                TbDailySign.dic = TplBase.toDictionary(TbDailySign.getTb());
            return TbDailySign.dic[id];
        };
        Object.defineProperty(TbDailySign.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbDailySign.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.mon = bytes.readInt();
            this.num = bytes.readInt();
            this._str_reward = bytes.readUTFString();
        };
        TbDailySign.XLSNAME = "R_【Risk】日常.xlsx";
        TbDailySign.TBLNAME = "tb_daily_sign";
        return TbDailySign;
    }(TplBase));
    template_def.TbDailySign = TbDailySign;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDailySet = (function (_super) {
        __extends(TbDailySet, _super);
        function TbDailySet() {
            return _super.call(this) || this;
        }
        TbDailySet.getTb = function () {
            return TbDailySet.vec;
        };
        TbDailySet.getTmplt = function (id) {
            if (null == TbDailySet.dic)
                TbDailySet.dic = TplBase.toDictionary(TbDailySet.getTb());
            return TbDailySet.dic[id];
        };
        Object.defineProperty(TbDailySet.prototype, "arr2_money_set", {
            get: function () { return this._arr2_money_set != null ? this._arr2_money_set : this._arr2_money_set = this.strToArray2(this._str_money_set); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbDailySet.prototype, "arr2_exp_set", {
            get: function () { return this._arr2_exp_set != null ? this._arr2_exp_set : this._arr2_exp_set = this.strToArray2(this._str_exp_set); },
            enumerable: true,
            configurable: true
        });
        ;
        TbDailySet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.sign_best_reward = bytes.readInt();
            this.money_init = bytes.readInt();
            this.exp_init = bytes.readInt();
            this.money_point_up = bytes.readInt();
            this.exp_point_up = bytes.readInt();
            this._str_money_set = bytes.readUTFString();
            this._str_exp_set = bytes.readUTFString();
        };
        TbDailySet.XLSNAME = "R_【Risk】日常.xlsx";
        TbDailySet.TBLNAME = "tb_daily_set";
        return TbDailySet;
    }(TplBase));
    template_def.TbDailySet = TbDailySet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDailyLiveness = (function (_super) {
        __extends(TbDailyLiveness, _super);
        function TbDailyLiveness() {
            return _super.call(this) || this;
        }
        TbDailyLiveness.getTb = function () {
            return TbDailyLiveness.vec;
        };
        TbDailyLiveness.getTmplt = function (id) {
            if (null == TbDailyLiveness.dic)
                TbDailyLiveness.dic = TplBase.toDictionary(TbDailyLiveness.getTb());
            return TbDailyLiveness.dic[id];
        };
        Object.defineProperty(TbDailyLiveness.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbDailyLiveness.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.icon = bytes.readUTFString();
            this.type = bytes.readInt();
            this.num = bytes.readInt();
            this._str_reward = bytes.readUTFString();
            this.liveness = bytes.readInt();
            this.link = bytes.readInt();
        };
        TbDailyLiveness.XLSNAME = "R_【Risk】日常.xlsx";
        TbDailyLiveness.TBLNAME = "tb_daily_liveness";
        return TbDailyLiveness;
    }(TplBase));
    template_def.TbDailyLiveness = TbDailyLiveness;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDailyLivenessReward = (function (_super) {
        __extends(TbDailyLivenessReward, _super);
        function TbDailyLivenessReward() {
            return _super.call(this) || this;
        }
        TbDailyLivenessReward.getTb = function () {
            return TbDailyLivenessReward.vec;
        };
        TbDailyLivenessReward.getTmplt = function (id) {
            if (null == TbDailyLivenessReward.dic)
                TbDailyLivenessReward.dic = TplBase.toDictionary(TbDailyLivenessReward.getTb());
            return TbDailyLivenessReward.dic[id];
        };
        Object.defineProperty(TbDailyLivenessReward.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbDailyLivenessReward.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.liveness = bytes.readInt();
            this._str_reward = bytes.readUTFString();
        };
        TbDailyLivenessReward.XLSNAME = "R_【Risk】日常.xlsx";
        TbDailyLivenessReward.TBLNAME = "tb_daily_liveness_reward";
        return TbDailyLivenessReward;
    }(TplBase));
    template_def.TbDailyLivenessReward = TbDailyLivenessReward;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbHonor = (function (_super) {
        __extends(TbHonor, _super);
        function TbHonor() {
            return _super.call(this) || this;
        }
        TbHonor.getTb = function () {
            return TbHonor.vec;
        };
        TbHonor.getTmplt = function (id) {
            if (null == TbHonor.dic)
                TbHonor.dic = TplBase.toDictionary(TbHonor.getTb());
            return TbHonor.dic[id];
        };
        Object.defineProperty(TbHonor.prototype, "arr2_step_set", {
            get: function () { return this._arr2_step_set != null ? this._arr2_step_set : this._arr2_step_set = this.strToArray2(this._str_step_set); },
            enumerable: true,
            configurable: true
        });
        ;
        TbHonor.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.desc = bytes.readUTFString();
            this.type = bytes.readInt();
            this._str_step_set = bytes.readUTFString();
            this.rank = bytes.readInt();
        };
        TbHonor.XLSNAME = "R_【Risk】荣誉.xlsx";
        TbHonor.TBLNAME = "tb_honor";
        return TbHonor;
    }(TplBase));
    template_def.TbHonor = TbHonor;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbBadge = (function (_super) {
        __extends(TbBadge, _super);
        function TbBadge() {
            return _super.call(this) || this;
        }
        TbBadge.getTb = function () {
            return TbBadge.vec;
        };
        TbBadge.getTmplt = function (id) {
            if (null == TbBadge.dic)
                TbBadge.dic = TplBase.toDictionary(TbBadge.getTb());
            return TbBadge.dic[id];
        };
        Object.defineProperty(TbBadge.prototype, "arr2_prop", {
            get: function () { return this._arr2_prop != null ? this._arr2_prop : this._arr2_prop = this.strToArray2(this._str_prop); },
            enumerable: true,
            configurable: true
        });
        ;
        TbBadge.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.res = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.type = bytes.readInt();
            this.value = bytes.readInt();
            this.time_limit = bytes.readInt();
            this._str_prop = bytes.readUTFString();
            this.s_rank = bytes.readInt();
            this.c_rank = bytes.readInt();
        };
        TbBadge.XLSNAME = "R_【Risk】荣誉.xlsx";
        TbBadge.TBLNAME = "tb_badge";
        return TbBadge;
    }(TplBase));
    template_def.TbBadge = TbBadge;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbEventBase = (function (_super) {
        __extends(TbEventBase, _super);
        function TbEventBase() {
            return _super.call(this) || this;
        }
        TbEventBase.getTb = function () {
            return TbEventBase.vec;
        };
        TbEventBase.getTmplt = function (id) {
            if (null == TbEventBase.dic)
                TbEventBase.dic = TplBase.toDictionary(TbEventBase.getTb());
            return TbEventBase.dic[id];
        };
        Object.defineProperty(TbEventBase.prototype, "arr2_fighting_cost", {
            get: function () { return this._arr2_fighting_cost != null ? this._arr2_fighting_cost : this._arr2_fighting_cost = this.strToArray2(this._str_fighting_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbEventBase.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbEventBase.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbEventBase.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.event_type = bytes.readInt();
            this.fighting_id = bytes.readInt();
            this._str_fighting_cost = bytes.readUTFString();
            this._str_cost = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
        };
        TbEventBase.XLSNAME = "S_【Risk】事件表.xlsx";
        TbEventBase.TBLNAME = "tb_event_base";
        return TbEventBase;
    }(TplBase));
    template_def.TbEventBase = TbEventBase;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTujian = (function (_super) {
        __extends(TbTujian, _super);
        function TbTujian() {
            return _super.call(this) || this;
        }
        TbTujian.getTb = function () {
            return TbTujian.vec;
        };
        TbTujian.getTmplt = function (id) {
            if (null == TbTujian.dic)
                TbTujian.dic = TplBase.toDictionary(TbTujian.getTb());
            return TbTujian.dic[id];
        };
        TbTujian.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.wujiang_id = bytes.readInt();
            this.rank = bytes.readInt();
        };
        TbTujian.XLSNAME = "T_【Risk】图鉴表.xlsx";
        TbTujian.TBLNAME = "tb_tujian";
        return TbTujian;
    }(TplBase));
    template_def.TbTujian = TbTujian;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangBase = (function (_super) {
        __extends(TbWujiangBase, _super);
        function TbWujiangBase() {
            return _super.call(this) || this;
        }
        TbWujiangBase.getTb = function () {
            return TbWujiangBase.vec;
        };
        TbWujiangBase.getTmplt = function (id) {
            if (null == TbWujiangBase.dic)
                TbWujiangBase.dic = TplBase.toDictionary(TbWujiangBase.getTb());
            return TbWujiangBase.dic[id];
        };
        Object.defineProperty(TbWujiangBase.prototype, "arr_combo_skill", {
            get: function () { return this._arr_combo_skill != null ? this._arr_combo_skill : this._arr_combo_skill = this.strToArray(this._str_combo_skill); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangBase.prototype, "arr2_fire_reward", {
            get: function () { return this._arr2_fire_reward != null ? this._arr2_fire_reward : this._arr2_fire_reward = this.strToArray2(this._str_fire_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangBase.prototype, "arr2_exchange_cost", {
            get: function () { return this._arr2_exchange_cost != null ? this._arr2_exchange_cost : this._arr2_exchange_cost = this.strToArray2(this._str_exchange_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWujiangBase.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.talk = bytes.readUTFString();
            this.race = bytes.readUTFString();
            this.sex = bytes.readInt();
            this.job = bytes.readUTFString();
            this.quality = bytes.readInt();
            this.hp = bytes.readInt();
            this.hp_up = bytes.readInt();
            this.type = bytes.readInt();
            this.skill = bytes.readInt();
            this._str_combo_skill = bytes.readUTFString();
            this.wakeup_num = bytes.readInt();
            this.res = bytes.readUTFString();
            this.is_album = bytes.readBoolean();
            this._str_fire_reward = bytes.readUTFString();
            this._str_exchange_cost = bytes.readUTFString();
            this.treasure_id = bytes.readInt();
            this.flicker_type = bytes.readInt();
        };
        TbWujiangBase.XLSNAME = "W_【Risk】武将表（新）.xlsx";
        TbWujiangBase.TBLNAME = "tb_wujiang_base";
        return TbWujiangBase;
    }(TplBase));
    template_def.TbWujiangBase = TbWujiangBase;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangLevel = (function (_super) {
        __extends(TbWujiangLevel, _super);
        function TbWujiangLevel() {
            return _super.call(this) || this;
        }
        TbWujiangLevel.getTb = function () {
            return TbWujiangLevel.vec;
        };
        TbWujiangLevel.getTmplt = function (id) {
            if (null == TbWujiangLevel.dic)
                TbWujiangLevel.dic = TplBase.toDictionary(TbWujiangLevel.getTb());
            return TbWujiangLevel.dic[id];
        };
        TbWujiangLevel.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.exp_add_0 = bytes.readFloat();
            this.exp_add_1 = bytes.readFloat();
            this.exp_add_2 = bytes.readFloat();
            this.exp_add_3 = bytes.readFloat();
            this.exp_add_4 = bytes.readFloat();
            this.exp_add_5 = bytes.readFloat();
            this.exp_add_6 = bytes.readFloat();
            this.exp_add_7 = bytes.readFloat();
            this.exp_add_8 = bytes.readFloat();
            this.exp_add_9 = bytes.readFloat();
        };
        TbWujiangLevel.XLSNAME = "W_【Risk】武将表（新）.xlsx";
        TbWujiangLevel.TBLNAME = "tb_wujiang_level";
        return TbWujiangLevel;
    }(TplBase));
    template_def.TbWujiangLevel = TbWujiangLevel;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangWakeup = (function (_super) {
        __extends(TbWujiangWakeup, _super);
        function TbWujiangWakeup() {
            return _super.call(this) || this;
        }
        TbWujiangWakeup.getTb = function () {
            return TbWujiangWakeup.vec;
        };
        TbWujiangWakeup.getTmplt = function (id) {
            if (null == TbWujiangWakeup.dic)
                TbWujiangWakeup.dic = TplBase.toDictionary(TbWujiangWakeup.getTb());
            return TbWujiangWakeup.dic[id];
        };
        Object.defineProperty(TbWujiangWakeup.prototype, "arr2_wakeup_cost", {
            get: function () { return this._arr2_wakeup_cost != null ? this._arr2_wakeup_cost : this._arr2_wakeup_cost = this.strToArray2(this._str_wakeup_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangWakeup.prototype, "arr2_wakeup_damping", {
            get: function () { return this._arr2_wakeup_damping != null ? this._arr2_wakeup_damping : this._arr2_wakeup_damping = this.strToArray2(this._str_wakeup_damping); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWujiangWakeup.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_wakeup_cost = bytes.readUTFString();
            this.need_level = bytes.readInt();
            this.wakeup_init = bytes.readInt();
            this.wakeup_add = bytes.readInt();
            this._str_wakeup_damping = bytes.readUTFString();
            this.interchange_cost = bytes.readInt();
        };
        TbWujiangWakeup.XLSNAME = "W_【Risk】武将表（新）.xlsx";
        TbWujiangWakeup.TBLNAME = "tb_wujiang_wakeup";
        return TbWujiangWakeup;
    }(TplBase));
    template_def.TbWujiangWakeup = TbWujiangWakeup;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangForge = (function (_super) {
        __extends(TbWujiangForge, _super);
        function TbWujiangForge() {
            return _super.call(this) || this;
        }
        TbWujiangForge.getTb = function () {
            return TbWujiangForge.vec;
        };
        TbWujiangForge.getTmplt = function (id) {
            if (null == TbWujiangForge.dic)
                TbWujiangForge.dic = TplBase.toDictionary(TbWujiangForge.getTb());
            return TbWujiangForge.dic[id];
        };
        Object.defineProperty(TbWujiangForge.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWujiangForge.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.fight_per = bytes.readInt();
            this.prob = bytes.readInt();
            this.add_prob = bytes.readInt();
            this._str_cost = bytes.readUTFString();
            this.interchange_cost = bytes.readInt();
        };
        TbWujiangForge.XLSNAME = "W_【Risk】武将表（新）.xlsx";
        TbWujiangForge.TBLNAME = "tb_wujiang_forge";
        return TbWujiangForge;
    }(TplBase));
    template_def.TbWujiangForge = TbWujiangForge;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangForgeExtra = (function (_super) {
        __extends(TbWujiangForgeExtra, _super);
        function TbWujiangForgeExtra() {
            return _super.call(this) || this;
        }
        TbWujiangForgeExtra.getTb = function () {
            return TbWujiangForgeExtra.vec;
        };
        TbWujiangForgeExtra.getTmplt = function (id) {
            if (null == TbWujiangForgeExtra.dic)
                TbWujiangForgeExtra.dic = TplBase.toDictionary(TbWujiangForgeExtra.getTb());
            return TbWujiangForgeExtra.dic[id];
        };
        Object.defineProperty(TbWujiangForgeExtra.prototype, "arr2_money", {
            get: function () { return this._arr2_money != null ? this._arr2_money : this._arr2_money = this.strToArray2(this._str_money); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWujiangForgeExtra.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_money = bytes.readUTFString();
        };
        TbWujiangForgeExtra.XLSNAME = "W_【Risk】武将表（新）.xlsx";
        TbWujiangForgeExtra.TBLNAME = "tb_wujiang_forge_extra";
        return TbWujiangForgeExtra;
    }(TplBase));
    template_def.TbWujiangForgeExtra = TbWujiangForgeExtra;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWujiangSet = (function (_super) {
        __extends(TbWujiangSet, _super);
        function TbWujiangSet() {
            return _super.call(this) || this;
        }
        TbWujiangSet.getTb = function () {
            return TbWujiangSet.vec;
        };
        TbWujiangSet.getTmplt = function (id) {
            if (null == TbWujiangSet.dic)
                TbWujiangSet.dic = TplBase.toDictionary(TbWujiangSet.getTb());
            return TbWujiangSet.dic[id];
        };
        Object.defineProperty(TbWujiangSet.prototype, "arr2_break_cost", {
            get: function () { return this._arr2_break_cost != null ? this._arr2_break_cost : this._arr2_break_cost = this.strToArray2(this._str_break_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangSet.prototype, "arr2_change_cost", {
            get: function () { return this._arr2_change_cost != null ? this._arr2_change_cost : this._arr2_change_cost = this.strToArray2(this._str_change_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWujiangSet.prototype, "arr2_change_set", {
            get: function () { return this._arr2_change_set != null ? this._arr2_change_set : this._arr2_change_set = this.strToArray2(this._str_change_set); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWujiangSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.break_condition = bytes.readInt();
            this.treasure_condition = bytes.readInt();
            this.break_hp_per = bytes.readInt();
            this._str_break_cost = bytes.readUTFString();
            this._str_change_cost = bytes.readUTFString();
            this._str_change_set = bytes.readUTFString();
            this.interchange_money = bytes.readInt();
            this.interchange_break_num = bytes.readInt();
            this.interchange_change_value = bytes.readInt();
        };
        TbWujiangSet.XLSNAME = "W_【Risk】武将表（新）.xlsx";
        TbWujiangSet.TBLNAME = "tb_wujiang_set";
        return TbWujiangSet;
    }(TplBase));
    template_def.TbWujiangSet = TbWujiangSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbStoryBase = (function (_super) {
        __extends(TbStoryBase, _super);
        function TbStoryBase() {
            return _super.call(this) || this;
        }
        TbStoryBase.getTb = function () {
            return TbStoryBase.vec;
        };
        TbStoryBase.getTmplt = function (id) {
            if (null == TbStoryBase.dic)
                TbStoryBase.dic = TplBase.toDictionary(TbStoryBase.getTb());
            return TbStoryBase.dic[id];
        };
        Object.defineProperty(TbStoryBase.prototype, "arr_touch_value", {
            get: function () { return this._arr_touch_value != null ? this._arr_touch_value : this._arr_touch_value = this.strToArray(this._str_touch_value); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbStoryBase.prototype, "arr_blank_set", {
            get: function () { return this._arr_blank_set != null ? this._arr_blank_set : this._arr_blank_set = this.strToArray(this._str_blank_set); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbStoryBase.prototype, "arr_finger_set", {
            get: function () { return this._arr_finger_set != null ? this._arr_finger_set : this._arr_finger_set = this.strToArray(this._str_finger_set); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbStoryBase.prototype, "arr_click_area", {
            get: function () { return this._arr_click_area != null ? this._arr_click_area : this._arr_click_area = this.strToArray(this._str_click_area); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbStoryBase.prototype, "arr_click_effect", {
            get: function () { return this._arr_click_effect != null ? this._arr_click_effect : this._arr_click_effect = this.strToArray(this._str_click_effect); },
            enumerable: true,
            configurable: true
        });
        ;
        TbStoryBase.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.follow_id = bytes.readInt();
            this.touch_type = bytes.readInt();
            this._str_touch_value = bytes.readUTFString();
            this.dlg_wujiang = bytes.readInt();
            this.dlg_name = bytes.readUTFString();
            this.dlg_content = bytes.readUTFString();
            this.dlg_y = bytes.readInt();
            this._str_blank_set = bytes.readUTFString();
            this._str_finger_set = bytes.readUTFString();
            this._str_click_area = bytes.readUTFString();
            this.click_type = bytes.readInt();
            this._str_click_effect = bytes.readUTFString();
            this.delay_time = bytes.readInt();
        };
        TbStoryBase.XLSNAME = "X_【Risk】新手引导表.xlsx";
        TbStoryBase.TBLNAME = "tb_story_base";
        return TbStoryBase;
    }(TplBase));
    template_def.TbStoryBase = TbStoryBase;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSysOpen = (function (_super) {
        __extends(TbSysOpen, _super);
        function TbSysOpen() {
            return _super.call(this) || this;
        }
        TbSysOpen.getTb = function () {
            return TbSysOpen.vec;
        };
        TbSysOpen.getTmplt = function (id) {
            if (null == TbSysOpen.dic)
                TbSysOpen.dic = TplBase.toDictionary(TbSysOpen.getTb());
            return TbSysOpen.dic[id];
        };
        Object.defineProperty(TbSysOpen.prototype, "arr_child_sys", {
            get: function () { return this._arr_child_sys != null ? this._arr_child_sys : this._arr_child_sys = this.strToArray(this._str_child_sys); },
            enumerable: true,
            configurable: true
        });
        ;
        TbSysOpen.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.prompt = bytes.readUTFString();
            this.open_info = bytes.readUTFString();
            this.conquer_id = bytes.readInt();
            this.is_show_open = bytes.readBoolean();
            this.is_show_btn = bytes.readBoolean();
            this.link = bytes.readUTFString();
            this._str_child_sys = bytes.readUTFString();
        };
        TbSysOpen.XLSNAME = "X_【Risk】系统开启表.xlsx";
        TbSysOpen.TBLNAME = "tb_sys_open";
        return TbSysOpen;
    }(TplBase));
    template_def.TbSysOpen = TbSysOpen;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbGameset = (function (_super) {
        __extends(TbGameset, _super);
        function TbGameset() {
            return _super.call(this) || this;
        }
        TbGameset.getTb = function () {
            return TbGameset.vec;
        };
        TbGameset.getTmplt = function (id) {
            if (null == TbGameset.dic)
                TbGameset.dic = TplBase.toDictionary(TbGameset.getTb());
            return TbGameset.dic[id];
        };
        Object.defineProperty(TbGameset.prototype, "arr2_role_ids", {
            get: function () { return this._arr2_role_ids != null ? this._arr2_role_ids : this._arr2_role_ids = this.strToArray2(this._str_role_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbGameset.prototype, "arr2_friend_once_reward", {
            get: function () { return this._arr2_friend_once_reward != null ? this._arr2_friend_once_reward : this._arr2_friend_once_reward = this.strToArray2(this._str_friend_once_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbGameset.prototype, "arr2_friend_challenge_win", {
            get: function () { return this._arr2_friend_challenge_win != null ? this._arr2_friend_challenge_win : this._arr2_friend_challenge_win = this.strToArray2(this._str_friend_challenge_win); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbGameset.prototype, "arr2_friend_challenge_lose", {
            get: function () { return this._arr2_friend_challenge_lose != null ? this._arr2_friend_challenge_lose : this._arr2_friend_challenge_lose = this.strToArray2(this._str_friend_challenge_lose); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbGameset.prototype, "arr_friend_fight_ids", {
            get: function () { return this._arr_friend_fight_ids != null ? this._arr_friend_fight_ids : this._arr_friend_fight_ids = this.strToArray(this._str_friend_fight_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        TbGameset.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_role_ids = bytes.readUTFString();
            this.initial_battle = bytes.readInt();
            this.friend_max = bytes.readInt();
            this._str_friend_once_reward = bytes.readUTFString();
            this.friend_point_max = bytes.readInt();
            this.friend_mail = bytes.readInt();
            this._str_friend_challenge_win = bytes.readUTFString();
            this._str_friend_challenge_lose = bytes.readUTFString();
            this._str_friend_fight_ids = bytes.readUTFString();
        };
        TbGameset.XLSNAME = "Y_【Risk】游戏设置表.xlsx";
        TbGameset.TBLNAME = "tb_gameset";
        return TbGameset;
    }(TplBase));
    template_def.TbGameset = TbGameset;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbMail = (function (_super) {
        __extends(TbMail, _super);
        function TbMail() {
            return _super.call(this) || this;
        }
        TbMail.getTb = function () {
            return TbMail.vec;
        };
        TbMail.getTmplt = function (id) {
            if (null == TbMail.dic)
                TbMail.dic = TplBase.toDictionary(TbMail.getTb());
            return TbMail.dic[id];
        };
        Object.defineProperty(TbMail.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbMail.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.mail_name = bytes.readUTFString();
            this.mail_content = bytes.readUTFString();
            this.sender = bytes.readUTFString();
            this._str_reward = bytes.readUTFString();
        };
        TbMail.XLSNAME = "Y_【Risk】邮件表.xlsx";
        TbMail.TBLNAME = "tb_mail";
        return TbMail;
    }(TplBase));
    template_def.TbMail = TbMail;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSpecialWeapon = (function (_super) {
        __extends(TbSpecialWeapon, _super);
        function TbSpecialWeapon() {
            return _super.call(this) || this;
        }
        TbSpecialWeapon.getTb = function () {
            return TbSpecialWeapon.vec;
        };
        TbSpecialWeapon.getTmplt = function (id) {
            if (null == TbSpecialWeapon.dic)
                TbSpecialWeapon.dic = TplBase.toDictionary(TbSpecialWeapon.getTb());
            return TbSpecialWeapon.dic[id];
        };
        Object.defineProperty(TbSpecialWeapon.prototype, "arr_upstar_id", {
            get: function () { return this._arr_upstar_id != null ? this._arr_upstar_id : this._arr_upstar_id = this.strToArray(this._str_upstar_id); },
            enumerable: true,
            configurable: true
        });
        ;
        TbSpecialWeapon.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this.lock_desc = bytes.readUTFString();
            this.desc = bytes.readUTFString();
            this.icon = bytes.readUTFString();
            this.quality = bytes.readInt();
            this.lock_type = bytes.readInt();
            this.lock_value = bytes.readInt();
            this.link = bytes.readInt();
            this._str_upstar_id = bytes.readUTFString();
        };
        TbSpecialWeapon.XLSNAME = "Z_【Risk】专属武器.xlsx";
        TbSpecialWeapon.TBLNAME = "tb_special_weapon";
        return TbSpecialWeapon;
    }(TplBase));
    template_def.TbSpecialWeapon = TbSpecialWeapon;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSpecialWeaponUpstar = (function (_super) {
        __extends(TbSpecialWeaponUpstar, _super);
        function TbSpecialWeaponUpstar() {
            return _super.call(this) || this;
        }
        TbSpecialWeaponUpstar.getTb = function () {
            return TbSpecialWeaponUpstar.vec;
        };
        TbSpecialWeaponUpstar.getTmplt = function (id) {
            if (null == TbSpecialWeaponUpstar.dic)
                TbSpecialWeaponUpstar.dic = TplBase.toDictionary(TbSpecialWeaponUpstar.getTb());
            return TbSpecialWeaponUpstar.dic[id];
        };
        Object.defineProperty(TbSpecialWeaponUpstar.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbSpecialWeaponUpstar.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.weapon_id = bytes.readInt();
            this.star = bytes.readInt();
            this.add_hp = bytes.readInt();
            this.skill_id = bytes.readInt();
            this._str_cost = bytes.readUTFString();
            this.add_exp = bytes.readInt();
            this.crit_add_exp = bytes.readInt();
            this.max_exp = bytes.readInt();
        };
        TbSpecialWeaponUpstar.XLSNAME = "Z_【Risk】专属武器.xlsx";
        TbSpecialWeaponUpstar.TBLNAME = "tb_special_weapon_upstar";
        return TbSpecialWeaponUpstar;
    }(TplBase));
    template_def.TbSpecialWeaponUpstar = TbSpecialWeaponUpstar;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbSpecialWeaponForge = (function (_super) {
        __extends(TbSpecialWeaponForge, _super);
        function TbSpecialWeaponForge() {
            return _super.call(this) || this;
        }
        TbSpecialWeaponForge.getTb = function () {
            return TbSpecialWeaponForge.vec;
        };
        TbSpecialWeaponForge.getTmplt = function (id) {
            if (null == TbSpecialWeaponForge.dic)
                TbSpecialWeaponForge.dic = TplBase.toDictionary(TbSpecialWeaponForge.getTb());
            return TbSpecialWeaponForge.dic[id];
        };
        Object.defineProperty(TbSpecialWeaponForge.prototype, "arr2_cost", {
            get: function () { return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        TbSpecialWeaponForge.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.name = bytes.readUTFString();
            this.need_num = bytes.readInt();
            this.hp_add = bytes.readInt();
            this._str_cost = bytes.readUTFString();
        };
        TbSpecialWeaponForge.XLSNAME = "Z_【Risk】专属武器.xlsx";
        TbSpecialWeaponForge.TBLNAME = "tb_special_weapon_forge";
        return TbSpecialWeaponForge;
    }(TplBase));
    template_def.TbSpecialWeaponForge = TbSpecialWeaponForge;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWeekSet = (function (_super) {
        __extends(TbWeekSet, _super);
        function TbWeekSet() {
            return _super.call(this) || this;
        }
        TbWeekSet.getTb = function () {
            return TbWeekSet.vec;
        };
        TbWeekSet.getTmplt = function (id) {
            if (null == TbWeekSet.dic)
                TbWeekSet.dic = TplBase.toDictionary(TbWeekSet.getTb());
            return TbWeekSet.dic[id];
        };
        Object.defineProperty(TbWeekSet.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWeekSet.prototype, "arr_mail_ids", {
            get: function () { return this._arr_mail_ids != null ? this._arr_mail_ids : this._arr_mail_ids = this.strToArray(this._str_mail_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWeekSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_reward = bytes.readUTFString();
            this._str_mail_ids = bytes.readUTFString();
            this.bag_wujiag_limit = bytes.readInt();
            this.arena_add = bytes.readInt();
            this.fast_fight_add = bytes.readInt();
            this.view_add = bytes.readInt();
            this.pirate_num_down = bytes.readInt();
        };
        TbWeekSet.XLSNAME = "Z_【Risk】周卡.xlsx";
        TbWeekSet.TBLNAME = "tb_week_set";
        return TbWeekSet;
    }(TplBase));
    template_def.TbWeekSet = TbWeekSet;
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbFighting = (function (_super) {
        __extends(TbFighting, _super);
        function TbFighting() {
            return _super.call(this) || this;
        }
        TbFighting.getTb = function () {
            return TbFighting.vec;
        };
        TbFighting.getTmplt = function (id) {
            if (null == TbFighting.dic)
                TbFighting.dic = TplBase.toDictionary(TbFighting.getTb());
            return TbFighting.dic[id];
        };
        Object.defineProperty(TbFighting.prototype, "arr_wujiang_ids", {
            get: function () { return this._arr_wujiang_ids != null ? this._arr_wujiang_ids : this._arr_wujiang_ids = this.strToArray(this._str_wujiang_ids); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbFighting.prototype, "arr2_prop", {
            get: function () { return this._arr2_prop != null ? this._arr2_prop : this._arr2_prop = this.strToArray2(this._str_prop); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbFighting.prototype, "arr_skill", {
            get: function () { return this._arr_skill != null ? this._arr_skill : this._arr_skill = this.strToArray(this._str_skill); },
            enumerable: true,
            configurable: true
        });
        ;
        TbFighting.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTFString();
            this._str_wujiang_ids = bytes.readUTFString();
            this.scene = bytes.readUTFString();
            this.music = bytes.readUTFString();
            this._str_prop = bytes.readUTFString();
            this._str_skill = bytes.readUTFString();
        };
        TbFighting.XLSNAME = "Z_【Risk】战斗表.xlsx";
        TbFighting.TBLNAME = "tb_fighting";
        return TbFighting;
    }(TplBase));
    template_def.TbFighting = TbFighting;
})(template_def || (template_def = {}));
function getTableClassMap() { return { "tb_treasure_base": template_def.TbTreasureBase, "tb_treasure_uplevel": template_def.TbTreasureUplevel, "tb_bag": template_def.TbBag, "tb_bag_ziyuan": template_def.TbBagZiyuan, "tb_bag_hanghai": template_def.TbBagHanghai, "tb_bag_set": template_def.TbBagSet, "tb_scene": template_def.TbScene, "tb_item": template_def.TbItem, "tb_box": template_def.TbBox, "tb_goods": template_def.TbGoods, "tb_exchange": template_def.TbExchange, "tb_dungeon_base": template_def.TbDungeonBase, "tb_dungeon_set": template_def.TbDungeonSet, "tb_alliance_dungeon": template_def.TbAllianceDungeon, "tb_gonggao": template_def.TbGonggao, "tb_strategy": template_def.TbStrategy, "tb_hud": template_def.TbHud, "tb_active_config": template_def.TbActiveConfig, "tb_operator_reward": template_def.TbOperatorReward, "tb_activity_set": template_def.TbActivitySet, "tb_yiyuan_box": template_def.TbYiyuanBox, "tb_tianjiang_box": template_def.TbTianjiangBox, "tb_fenxiang_add": template_def.TbFenxiangAdd, "tb_yaoqing_add": template_def.TbYaoqingAdd, "tb_fleet_probe": template_def.TbFleetProbe, "tb_fleet_num": template_def.TbFleetNum, "tb_sea_module": template_def.TbSeaModule, "tb_nautics_level": template_def.TbNauticsLevel, "tb_pirate_reset": template_def.TbPirateReset, "tb_sea_set": template_def.TbSeaSet, "tb_skill": template_def.TbSkill, "tb_skill_anim": template_def.TbSkillAnim, "tb_skill_action": template_def.TbSkillAction, "tb_scene_effect": template_def.TbSceneEffect, "tb_sound_effect": template_def.TbSoundEffect, "tb_coliseum_reward": template_def.TbColiseumReward, "tb_coliseum_set": template_def.TbColiseumSet, "tb_ranked_reward": template_def.TbRankedReward, "tb_wujiang_employ_set": template_def.TbWujiangEmploySet, "tb_black_market": template_def.TbBlackMarket, "tb_black_market_set": template_def.TbBlackMarketSet, "tb_mystical_market": template_def.TbMysticalMarket, "tb_alliance_set": template_def.TbAllianceSet, "tb_area_info": template_def.TbAreaInfo, "tb_adventure_maze": template_def.TbAdventureMaze, "tb_adventure_set": template_def.TbAdventureSet, "tb_random_name": template_def.TbRandomName, "tb_quest_base": template_def.TbQuestBase, "tb_daily_sign": template_def.TbDailySign, "tb_daily_set": template_def.TbDailySet, "tb_daily_liveness": template_def.TbDailyLiveness, "tb_daily_liveness_reward": template_def.TbDailyLivenessReward, "tb_honor": template_def.TbHonor, "tb_badge": template_def.TbBadge, "tb_event_base": template_def.TbEventBase, "tb_tujian": template_def.TbTujian, "tb_wujiang_base": template_def.TbWujiangBase, "tb_wujiang_level": template_def.TbWujiangLevel, "tb_wujiang_wakeup": template_def.TbWujiangWakeup, "tb_wujiang_forge": template_def.TbWujiangForge, "tb_wujiang_forge_extra": template_def.TbWujiangForgeExtra, "tb_wujiang_set": template_def.TbWujiangSet, "tb_story_base": template_def.TbStoryBase, "tb_sys_open": template_def.TbSysOpen, "tb_gameset": template_def.TbGameset, "tb_mail": template_def.TbMail, "tb_special_weapon": template_def.TbSpecialWeapon, "tb_special_weapon_upstar": template_def.TbSpecialWeaponUpstar, "tb_special_weapon_forge": template_def.TbSpecialWeaponForge, "tb_week_set": template_def.TbWeekSet, "tb_fighting": template_def.TbFighting }; }
//# sourceMappingURL=tmplts.js.map