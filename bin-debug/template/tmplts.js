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
//*这个文件是自动生成的，不要手动修改
var template_def;
(function (template_def) {
    var TplBase = template.TplBase;
    var TbHelp = (function (_super) {
        __extends(TbHelp, _super);
        function TbHelp() {
            return _super.call(this) || this;
        }
        TbHelp.getTb = function () {
            return TbHelp.vec;
        };
        TbHelp.getTmplt = function (id) {
            if (null == TbHelp.dic)
                TbHelp.dic = TplBase.toDictionary(TbHelp.getTb());
            return TbHelp.dic[id];
        };
        TbHelp.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.tilte = bytes.readUTF();
            this.content = bytes.readUTF();
        };
        TbHelp.XLSNAME = "B_【H5】帮助表.xlsx";
        TbHelp.TBLNAME = "tb_help";
        return TbHelp;
    }(TplBase));
    template_def.TbHelp = TbHelp;
    __reflect(TbHelp.prototype, "template_def.TbHelp");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTips = (function (_super) {
        __extends(TbTips, _super);
        function TbTips() {
            return _super.call(this) || this;
        }
        TbTips.getTb = function () {
            return TbTips.vec;
        };
        TbTips.getTmplt = function (id) {
            if (null == TbTips.dic)
                TbTips.dic = TplBase.toDictionary(TbTips.getTb());
            return TbTips.dic[id];
        };
        TbTips.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.content = bytes.readUTF();
        };
        TbTips.XLSNAME = "B_【H5】帮助表.xlsx";
        TbTips.TBLNAME = "tb_tips";
        return TbTips;
    }(TplBase));
    template_def.TbTips = TbTips;
    __reflect(TbTips.prototype, "template_def.TbTips");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTelephone = (function (_super) {
        __extends(TbTelephone, _super);
        function TbTelephone() {
            return _super.call(this) || this;
        }
        TbTelephone.getTb = function () {
            return TbTelephone.vec;
        };
        TbTelephone.getTmplt = function (id) {
            if (null == TbTelephone.dic)
                TbTelephone.dic = TplBase.toDictionary(TbTelephone.getTb());
            return TbTelephone.dic[id];
        };
        Object.defineProperty(TbTelephone.prototype, "arr_call", {
            get: function () { return this._arr_call != null ? this._arr_call : this._arr_call = this.strToArray(this._str_call); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTelephone.prototype, "arr_dialogue", {
            get: function () { return this._arr_dialogue != null ? this._arr_dialogue : this._arr_dialogue = this.strToArray(this._str_dialogue); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTelephone.prototype, "arr2_answer", {
            get: function () { return this._arr2_answer != null ? this._arr2_answer : this._arr2_answer = this.strToArray2(this._str_answer); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbTelephone.prototype, "arr2_award", {
            get: function () { return this._arr2_award != null ? this._arr2_award : this._arr2_award = this.strToArray2(this._str_award); },
            enumerable: true,
            configurable: true
        });
        ;
        TbTelephone.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this.qinmilv = bytes.readInt();
            this.title = bytes.readUTF();
            this._str_call = bytes.readUTF();
            this._str_dialogue = bytes.readUTF();
            this._str_answer = bytes.readUTF();
            this._str_award = bytes.readUTF();
        };
        TbTelephone.XLSNAME = "D_【H5】电话表.xlsx";
        TbTelephone.TBLNAME = "tb_telephone";
        return TbTelephone;
    }(TplBase));
    template_def.TbTelephone = TbTelephone;
    __reflect(TbTelephone.prototype, "template_def.TbTelephone");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbTelephoneAnswer = (function (_super) {
        __extends(TbTelephoneAnswer, _super);
        function TbTelephoneAnswer() {
            return _super.call(this) || this;
        }
        TbTelephoneAnswer.getTb = function () {
            return TbTelephoneAnswer.vec;
        };
        TbTelephoneAnswer.getTmplt = function (id) {
            if (null == TbTelephoneAnswer.dic)
                TbTelephoneAnswer.dic = TplBase.toDictionary(TbTelephoneAnswer.getTb());
            return TbTelephoneAnswer.dic[id];
        };
        TbTelephoneAnswer.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.answer = bytes.readUTF();
        };
        TbTelephoneAnswer.XLSNAME = "D_【H5】电话表.xlsx";
        TbTelephoneAnswer.TBLNAME = "tb_telephone_answer";
        return TbTelephoneAnswer;
    }(TplBase));
    template_def.TbTelephoneAnswer = TbTelephoneAnswer;
    __reflect(TbTelephoneAnswer.prototype, "template_def.TbTelephoneAnswer");
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
        Object.defineProperty(TbItem.prototype, "arr_effect", {
            get: function () { return this._arr_effect != null ? this._arr_effect : this._arr_effect = this.strToArray(this._str_effect); },
            enumerable: true,
            configurable: true
        });
        ;
        TbItem.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTF();
            this.desc = bytes.readUTF();
            this.type = bytes.readInt();
            this._str_effect = bytes.readUTF();
            this.icon = bytes.readUTF();
            this.max_overlap = bytes.readInt();
            this.daily_limit = bytes.readInt();
            this.link = bytes.readInt();
        };
        TbItem.XLSNAME = "D_【H5】道具表.xlsx";
        TbItem.TBLNAME = "tb_item";
        return TbItem;
    }(TplBase));
    template_def.TbItem = TbItem;
    __reflect(TbItem.prototype, "template_def.TbItem");
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
        Object.defineProperty(TbBox.prototype, "arr2_reward_fix", {
            get: function () { return this._arr2_reward_fix != null ? this._arr2_reward_fix : this._arr2_reward_fix = this.strToArray2(this._str_reward_fix); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbBox.prototype, "arr2_reward_random", {
            get: function () { return this._arr2_reward_random != null ? this._arr2_reward_random : this._arr2_reward_random = this.strToArray2(this._str_reward_random); },
            enumerable: true,
            configurable: true
        });
        ;
        TbBox.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_reward_fix = bytes.readUTF();
            this._str_reward_random = bytes.readUTF();
        };
        TbBox.XLSNAME = "D_【H5】道具表.xlsx";
        TbBox.TBLNAME = "tb_box";
        return TbBox;
    }(TplBase));
    template_def.TbBox = TbBox;
    __reflect(TbBox.prototype, "template_def.TbBox");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbShop = (function (_super) {
        __extends(TbShop, _super);
        function TbShop() {
            return _super.call(this) || this;
        }
        TbShop.getTb = function () {
            return TbShop.vec;
        };
        TbShop.getTmplt = function (id) {
            if (null == TbShop.dic)
                TbShop.dic = TplBase.toDictionary(TbShop.getTb());
            return TbShop.dic[id];
        };
        Object.defineProperty(TbShop.prototype, "arr2_items", {
            get: function () { return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbShop.prototype, "arr2_first_reward", {
            get: function () { return this._arr2_first_reward != null ? this._arr2_first_reward : this._arr2_first_reward = this.strToArray2(this._str_first_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbShop.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.type = bytes.readInt();
            this.beizhu1 = bytes.readUTF();
            this.info = bytes.readUTF();
            this.icon = bytes.readUTF();
            this._str_items = bytes.readUTF();
            this.money_type = bytes.readInt();
            this.price = bytes.readFloat();
            this.index = bytes.readInt();
            this._str_first_reward = bytes.readUTF();
            this.buy_limit_type = bytes.readInt();
            this.buy_limit_num = bytes.readInt();
        };
        TbShop.XLSNAME = "D_【H5】道具表.xlsx";
        TbShop.TBLNAME = "tb_shop";
        return TbShop;
    }(TplBase));
    template_def.TbShop = TbShop;
    __reflect(TbShop.prototype, "template_def.TbShop");
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
            this.info = bytes.readUTF();
            this._str_items = bytes.readUTF();
            this._str_cost = bytes.readUTF();
            this.index = bytes.readInt();
        };
        TbExchange.XLSNAME = "D_【H5】道具表.xlsx";
        TbExchange.TBLNAME = "tb_exchange";
        return TbExchange;
    }(TplBase));
    template_def.TbExchange = TbExchange;
    __reflect(TbExchange.prototype, "template_def.TbExchange");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbNotice = (function (_super) {
        __extends(TbNotice, _super);
        function TbNotice() {
            return _super.call(this) || this;
        }
        TbNotice.getTb = function () {
            return TbNotice.vec;
        };
        TbNotice.getTmplt = function (id) {
            if (null == TbNotice.dic)
                TbNotice.dic = TplBase.toDictionary(TbNotice.getTb());
            return TbNotice.dic[id];
        };
        TbNotice.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.notice_name = bytes.readUTF();
            this.notice_content = bytes.readUTF();
        };
        TbNotice.XLSNAME = "G_【H5】公告表.xlsx";
        TbNotice.TBLNAME = "tb_notice";
        return TbNotice;
    }(TplBase));
    template_def.TbNotice = TbNotice;
    __reflect(TbNotice.prototype, "template_def.TbNotice");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWork = (function (_super) {
        __extends(TbWork, _super);
        function TbWork() {
            return _super.call(this) || this;
        }
        TbWork.getTb = function () {
            return TbWork.vec;
        };
        TbWork.getTmplt = function (id) {
            if (null == TbWork.dic)
                TbWork.dic = TplBase.toDictionary(TbWork.getTb());
            return TbWork.dic[id];
        };
        Object.defineProperty(TbWork.prototype, "arr_advance", {
            get: function () { return this._arr_advance != null ? this._arr_advance : this._arr_advance = this.strToArray(this._str_advance); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbWork.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWork.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTF();
            this.icon = bytes.readUTF();
            this.icon2 = bytes.readUTF();
            this.time = bytes.readInt();
            this._str_advance = bytes.readUTF();
            this.next = bytes.readInt();
            this.fail = bytes.readInt();
            this._str_reward = bytes.readUTF();
        };
        TbWork.XLSNAME = "G_【H5】工作表.xlsx";
        TbWork.TBLNAME = "tb_work";
        return TbWork;
    }(TplBase));
    template_def.TbWork = TbWork;
    __reflect(TbWork.prototype, "template_def.TbWork");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbWorkEnergy = (function (_super) {
        __extends(TbWorkEnergy, _super);
        function TbWorkEnergy() {
            return _super.call(this) || this;
        }
        TbWorkEnergy.getTb = function () {
            return TbWorkEnergy.vec;
        };
        TbWorkEnergy.getTmplt = function (id) {
            if (null == TbWorkEnergy.dic)
                TbWorkEnergy.dic = TplBase.toDictionary(TbWorkEnergy.getTb());
            return TbWorkEnergy.dic[id];
        };
        Object.defineProperty(TbWorkEnergy.prototype, "arr_enroll", {
            get: function () { return this._arr_enroll != null ? this._arr_enroll : this._arr_enroll = this.strToArray(this._str_enroll); },
            enumerable: true,
            configurable: true
        });
        ;
        TbWorkEnergy.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_enroll = bytes.readUTF();
            this.time_enroll = bytes.readInt();
            this.work_reward = bytes.readInt();
            this.love_reward = bytes.readInt();
        };
        TbWorkEnergy.XLSNAME = "G_【H5】工作表.xlsx";
        TbWorkEnergy.TBLNAME = "tb_work_energy";
        return TbWorkEnergy;
    }(TplBase));
    template_def.TbWorkEnergy = TbWorkEnergy;
    __reflect(TbWorkEnergy.prototype, "template_def.TbWorkEnergy");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbRoom = (function (_super) {
        __extends(TbRoom, _super);
        function TbRoom() {
            return _super.call(this) || this;
        }
        TbRoom.getTb = function () {
            return TbRoom.vec;
        };
        TbRoom.getTmplt = function (id) {
            if (null == TbRoom.dic)
                TbRoom.dic = TplBase.toDictionary(TbRoom.getTb());
            return TbRoom.dic[id];
        };
        TbRoom.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this.touch = bytes.readUTF();
            this.touch_recovery = bytes.readUTF();
        };
        TbRoom.XLSNAME = "G_【H5】闺房表.xlsx";
        TbRoom.TBLNAME = "tb_room";
        return TbRoom;
    }(TplBase));
    template_def.TbRoom = TbRoom;
    __reflect(TbRoom.prototype, "template_def.TbRoom");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbChangeClothes = (function (_super) {
        __extends(TbChangeClothes, _super);
        function TbChangeClothes() {
            return _super.call(this) || this;
        }
        TbChangeClothes.getTb = function () {
            return TbChangeClothes.vec;
        };
        TbChangeClothes.getTmplt = function (id) {
            if (null == TbChangeClothes.dic)
                TbChangeClothes.dic = TplBase.toDictionary(TbChangeClothes.getTb());
            return TbChangeClothes.dic[id];
        };
        Object.defineProperty(TbChangeClothes.prototype, "arr_unlock", {
            get: function () { return this._arr_unlock != null ? this._arr_unlock : this._arr_unlock = this.strToArray(this._str_unlock); },
            enumerable: true,
            configurable: true
        });
        ;
        TbChangeClothes.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this._str_unlock = bytes.readUTF();
            this.name = bytes.readUTF();
            this.icon = bytes.readUTF();
            this.clothes = bytes.readUTF();
        };
        TbChangeClothes.XLSNAME = "H_【H5】换装表.xlsx";
        TbChangeClothes.TBLNAME = "tb_change_clothes";
        return TbChangeClothes;
    }(TplBase));
    template_def.TbChangeClothes = TbChangeClothes;
    __reflect(TbChangeClothes.prototype, "template_def.TbChangeClothes");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbQiandao = (function (_super) {
        __extends(TbQiandao, _super);
        function TbQiandao() {
            return _super.call(this) || this;
        }
        TbQiandao.getTb = function () {
            return TbQiandao.vec;
        };
        TbQiandao.getTmplt = function (id) {
            if (null == TbQiandao.dic)
                TbQiandao.dic = TplBase.toDictionary(TbQiandao.getTb());
            return TbQiandao.dic[id];
        };
        Object.defineProperty(TbQiandao.prototype, "arr_reward", {
            get: function () { return this._arr_reward != null ? this._arr_reward : this._arr_reward = this.strToArray(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbQiandao.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_reward = bytes.readUTF();
        };
        TbQiandao.XLSNAME = "H_【H5】活动表.xlsx";
        TbQiandao.TBLNAME = "tb_qiandao";
        return TbQiandao;
    }(TplBase));
    template_def.TbQiandao = TbQiandao;
    __reflect(TbQiandao.prototype, "template_def.TbQiandao");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbHongbao = (function (_super) {
        __extends(TbHongbao, _super);
        function TbHongbao() {
            return _super.call(this) || this;
        }
        TbHongbao.getTb = function () {
            return TbHongbao.vec;
        };
        TbHongbao.getTmplt = function (id) {
            if (null == TbHongbao.dic)
                TbHongbao.dic = TplBase.toDictionary(TbHongbao.getTb());
            return TbHongbao.dic[id];
        };
        Object.defineProperty(TbHongbao.prototype, "arr_lower_limit", {
            get: function () { return this._arr_lower_limit != null ? this._arr_lower_limit : this._arr_lower_limit = this.strToArray(this._str_lower_limit); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbHongbao.prototype, "arr_upper_limit", {
            get: function () { return this._arr_upper_limit != null ? this._arr_upper_limit : this._arr_upper_limit = this.strToArray(this._str_upper_limit); },
            enumerable: true,
            configurable: true
        });
        ;
        TbHongbao.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_lower_limit = bytes.readUTF();
            this._str_upper_limit = bytes.readUTF();
        };
        TbHongbao.XLSNAME = "H_【H5】活动表.xlsx";
        TbHongbao.TBLNAME = "tb_hongbao";
        return TbHongbao;
    }(TplBase));
    template_def.TbHongbao = TbHongbao;
    __reflect(TbHongbao.prototype, "template_def.TbHongbao");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbActiveTimeLimit = (function (_super) {
        __extends(TbActiveTimeLimit, _super);
        function TbActiveTimeLimit() {
            return _super.call(this) || this;
        }
        TbActiveTimeLimit.getTb = function () {
            return TbActiveTimeLimit.vec;
        };
        TbActiveTimeLimit.getTmplt = function (id) {
            if (null == TbActiveTimeLimit.dic)
                TbActiveTimeLimit.dic = TplBase.toDictionary(TbActiveTimeLimit.getTb());
            return TbActiveTimeLimit.dic[id];
        };
        Object.defineProperty(TbActiveTimeLimit.prototype, "arr2_items", {
            get: function () { return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items); },
            enumerable: true,
            configurable: true
        });
        ;
        TbActiveTimeLimit.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this._str_items = bytes.readUTF();
            this.money_type = bytes.readInt();
            this.price = bytes.readFloat();
            this.buy_limit_type = bytes.readInt();
            this.buy_limit_num = bytes.readInt();
        };
        TbActiveTimeLimit.XLSNAME = "H_【H5】活动表.xlsx";
        TbActiveTimeLimit.TBLNAME = "tb_active_time_limit";
        return TbActiveTimeLimit;
    }(TplBase));
    template_def.TbActiveTimeLimit = TbActiveTimeLimit;
    __reflect(TbActiveTimeLimit.prototype, "template_def.TbActiveTimeLimit");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbLove = (function (_super) {
        __extends(TbLove, _super);
        function TbLove() {
            return _super.call(this) || this;
        }
        TbLove.getTb = function () {
            return TbLove.vec;
        };
        TbLove.getTmplt = function (id) {
            if (null == TbLove.dic)
                TbLove.dic = TplBase.toDictionary(TbLove.getTb());
            return TbLove.dic[id];
        };
        Object.defineProperty(TbLove.prototype, "arr_cost", {
            get: function () { return this._arr_cost != null ? this._arr_cost : this._arr_cost = this.strToArray(this._str_cost); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbLove.prototype, "arr_advance", {
            get: function () { return this._arr_advance != null ? this._arr_advance : this._arr_advance = this.strToArray(this._str_advance); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbLove.prototype, "arr2_reward", {
            get: function () { return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward); },
            enumerable: true,
            configurable: true
        });
        ;
        TbLove.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTF();
            this.icon = bytes.readUTF();
            this.icon2 = bytes.readUTF();
            this._str_cost = bytes.readUTF();
            this.time = bytes.readInt();
            this._str_advance = bytes.readUTF();
            this.next = bytes.readInt();
            this.fail = bytes.readInt();
            this._str_reward = bytes.readUTF();
        };
        TbLove.XLSNAME = "L_【H5】恋爱表.xlsx";
        TbLove.TBLNAME = "tb_love";
        return TbLove;
    }(TplBase));
    template_def.TbLove = TbLove;
    __reflect(TbLove.prototype, "template_def.TbLove");
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
            this.xing = bytes.readUTF();
            this.ming = bytes.readUTF();
        };
        TbRandomName.XLSNAME = "M_【H5】名字库.xlsx";
        TbRandomName.TBLNAME = "tb_random_name";
        return TbRandomName;
    }(TplBase));
    template_def.TbRandomName = TbRandomName;
    __reflect(TbRandomName.prototype, "template_def.TbRandomName");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbPic = (function (_super) {
        __extends(TbPic, _super);
        function TbPic() {
            return _super.call(this) || this;
        }
        TbPic.getTb = function () {
            return TbPic.vec;
        };
        TbPic.getTmplt = function (id) {
            if (null == TbPic.dic)
                TbPic.dic = TplBase.toDictionary(TbPic.getTb());
            return TbPic.dic[id];
        };
        Object.defineProperty(TbPic.prototype, "arr_unlock", {
            get: function () { return this._arr_unlock != null ? this._arr_unlock : this._arr_unlock = this.strToArray(this._str_unlock); },
            enumerable: true,
            configurable: true
        });
        ;
        TbPic.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this._str_unlock = bytes.readUTF();
            this.picid = bytes.readUTF();
        };
        TbPic.XLSNAME = "S_【H5】视频表.xlsx";
        TbPic.TBLNAME = "tb_pic";
        return TbPic;
    }(TplBase));
    template_def.TbPic = TbPic;
    __reflect(TbPic.prototype, "template_def.TbPic");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbVideo = (function (_super) {
        __extends(TbVideo, _super);
        function TbVideo() {
            return _super.call(this) || this;
        }
        TbVideo.getTb = function () {
            return TbVideo.vec;
        };
        TbVideo.getTmplt = function (id) {
            if (null == TbVideo.dic)
                TbVideo.dic = TplBase.toDictionary(TbVideo.getTb());
            return TbVideo.dic[id];
        };
        Object.defineProperty(TbVideo.prototype, "arr_unlock", {
            get: function () { return this._arr_unlock != null ? this._arr_unlock : this._arr_unlock = this.strToArray(this._str_unlock); },
            enumerable: true,
            configurable: true
        });
        ;
        TbVideo.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this._str_unlock = bytes.readUTF();
            this.thumbnail = bytes.readUTF();
            this.videoid = bytes.readUTF();
        };
        TbVideo.XLSNAME = "S_【H5】视频表.xlsx";
        TbVideo.TBLNAME = "tb_video";
        return TbVideo;
    }(TplBase));
    template_def.TbVideo = TbVideo;
    __reflect(TbVideo.prototype, "template_def.TbVideo");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbMemory = (function (_super) {
        __extends(TbMemory, _super);
        function TbMemory() {
            return _super.call(this) || this;
        }
        TbMemory.getTb = function () {
            return TbMemory.vec;
        };
        TbMemory.getTmplt = function (id) {
            if (null == TbMemory.dic)
                TbMemory.dic = TplBase.toDictionary(TbMemory.getTb());
            return TbMemory.dic[id];
        };
        TbMemory.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this.qinmilv = bytes.readInt();
            this.thumbnail = bytes.readUTF();
            this.memoryid = bytes.readUTF();
        };
        TbMemory.XLSNAME = "S_【H5】视频表.xlsx";
        TbMemory.TBLNAME = "tb_memory";
        return TbMemory;
    }(TplBase));
    template_def.TbMemory = TbMemory;
    __reflect(TbMemory.prototype, "template_def.TbMemory");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbHead = (function (_super) {
        __extends(TbHead, _super);
        function TbHead() {
            return _super.call(this) || this;
        }
        TbHead.getTb = function () {
            return TbHead.vec;
        };
        TbHead.getTmplt = function (id) {
            if (null == TbHead.dic)
                TbHead.dic = TplBase.toDictionary(TbHead.getTb());
            return TbHead.dic[id];
        };
        TbHead.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.head = bytes.readUTF();
            this.wechat_head = bytes.readUTF();
        };
        TbHead.XLSNAME = "T_【H5】头像表.xlsx";
        TbHead.TBLNAME = "tb_head";
        return TbHead;
    }(TplBase));
    template_def.TbHead = TbHead;
    __reflect(TbHead.prototype, "template_def.TbHead");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbDollMachine = (function (_super) {
        __extends(TbDollMachine, _super);
        function TbDollMachine() {
            return _super.call(this) || this;
        }
        TbDollMachine.getTb = function () {
            return TbDollMachine.vec;
        };
        TbDollMachine.getTmplt = function (id) {
            if (null == TbDollMachine.dic)
                TbDollMachine.dic = TplBase.toDictionary(TbDollMachine.getTb());
            return TbDollMachine.dic[id];
        };
        TbDollMachine.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
        };
        TbDollMachine.XLSNAME = "T_【H5】淘货表.xlsx";
        TbDollMachine.TBLNAME = "tb_doll_machine";
        return TbDollMachine;
    }(TplBase));
    template_def.TbDollMachine = TbDollMachine;
    __reflect(TbDollMachine.prototype, "template_def.TbDollMachine");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbGuide = (function (_super) {
        __extends(TbGuide, _super);
        function TbGuide() {
            return _super.call(this) || this;
        }
        TbGuide.getTb = function () {
            return TbGuide.vec;
        };
        TbGuide.getTmplt = function (id) {
            if (null == TbGuide.dic)
                TbGuide.dic = TplBase.toDictionary(TbGuide.getTb());
            return TbGuide.dic[id];
        };
        TbGuide.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.qinmilv = bytes.readInt();
        };
        TbGuide.XLSNAME = "X_【H5】新手引导表.xlsx";
        TbGuide.TBLNAME = "tb_guide";
        return TbGuide;
    }(TplBase));
    template_def.TbGuide = TbGuide;
    __reflect(TbGuide.prototype, "template_def.TbGuide");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbGameSet = (function (_super) {
        __extends(TbGameSet, _super);
        function TbGameSet() {
            return _super.call(this) || this;
        }
        TbGameSet.getTb = function () {
            return TbGameSet.vec;
        };
        TbGameSet.getTmplt = function (id) {
            if (null == TbGameSet.dic)
                TbGameSet.dic = TplBase.toDictionary(TbGameSet.getTb());
            return TbGameSet.dic[id];
        };
        Object.defineProperty(TbGameSet.prototype, "arr_value2", {
            get: function () { return this._arr_value2 != null ? this._arr_value2 : this._arr_value2 = this.strToArray(this._str_value2); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbGameSet.prototype, "arr2_value3", {
            get: function () { return this._arr2_value3 != null ? this._arr2_value3 : this._arr2_value3 = this.strToArray2(this._str_value3); },
            enumerable: true,
            configurable: true
        });
        ;
        TbGameSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readUnsignedInt();
            this.value1 = bytes.readInt();
            this._str_value2 = bytes.readUTF();
            this._str_value3 = bytes.readUTF();
        };
        TbGameSet.XLSNAME = "Y_【H5】游戏设置表.xlsx";
        TbGameSet.TBLNAME = "tb_game_set";
        return TbGameSet;
    }(TplBase));
    template_def.TbGameSet = TbGameSet;
    __reflect(TbGameSet.prototype, "template_def.TbGameSet");
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
            this.mail_name = bytes.readUTF();
            this.mail_content = bytes.readUTF();
            this.sender = bytes.readUTF();
            this._str_reward = bytes.readUTF();
        };
        TbMail.XLSNAME = "Y_【H5】邮件表.xlsx";
        TbMail.TBLNAME = "tb_mail";
        return TbMail;
    }(TplBase));
    template_def.TbMail = TbMail;
    __reflect(TbMail.prototype, "template_def.TbMail");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorInformation = (function (_super) {
        __extends(TbAnchorInformation, _super);
        function TbAnchorInformation() {
            return _super.call(this) || this;
        }
        TbAnchorInformation.getTb = function () {
            return TbAnchorInformation.vec;
        };
        TbAnchorInformation.getTmplt = function (id) {
            if (null == TbAnchorInformation.dic)
                TbAnchorInformation.dic = TplBase.toDictionary(TbAnchorInformation.getTb());
            return TbAnchorInformation.dic[id];
        };
        Object.defineProperty(TbAnchorInformation.prototype, "arr_pic", {
            get: function () { return this._arr_pic != null ? this._arr_pic : this._arr_pic = this.strToArray(this._str_pic); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAnchorInformation.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this.name = bytes.readUTF();
            this._str_pic = bytes.readUTF();
            this.story = bytes.readUTF();
            this.outline = bytes.readUTF();
        };
        TbAnchorInformation.XLSNAME = "Z_【H5】主播信息表.xlsx";
        TbAnchorInformation.TBLNAME = "tb_anchor_information";
        return TbAnchorInformation;
    }(TplBase));
    template_def.TbAnchorInformation = TbAnchorInformation;
    __reflect(TbAnchorInformation.prototype, "template_def.TbAnchorInformation");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchor = (function (_super) {
        __extends(TbAnchor, _super);
        function TbAnchor() {
            return _super.call(this) || this;
        }
        TbAnchor.getTb = function () {
            return TbAnchor.vec;
        };
        TbAnchor.getTmplt = function (id) {
            if (null == TbAnchor.dic)
                TbAnchor.dic = TplBase.toDictionary(TbAnchor.getTb());
            return TbAnchor.dic[id];
        };
        TbAnchor.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.name = bytes.readUTF();
        };
        TbAnchor.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchor.TBLNAME = "tb_anchor";
        return TbAnchor;
    }(TplBase));
    template_def.TbAnchor = TbAnchor;
    __reflect(TbAnchor.prototype, "template_def.TbAnchor");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorQinmilv = (function (_super) {
        __extends(TbAnchorQinmilv, _super);
        function TbAnchorQinmilv() {
            return _super.call(this) || this;
        }
        TbAnchorQinmilv.getTb = function () {
            return TbAnchorQinmilv.vec;
        };
        TbAnchorQinmilv.getTmplt = function (id) {
            if (null == TbAnchorQinmilv.dic)
                TbAnchorQinmilv.dic = TplBase.toDictionary(TbAnchorQinmilv.getTb());
            return TbAnchorQinmilv.dic[id];
        };
        TbAnchorQinmilv.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.qinmilv = bytes.readInt();
        };
        TbAnchorQinmilv.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchorQinmilv.TBLNAME = "tb_anchor_qinmilv";
        return TbAnchorQinmilv;
    }(TplBase));
    template_def.TbAnchorQinmilv = TbAnchorQinmilv;
    __reflect(TbAnchorQinmilv.prototype, "template_def.TbAnchorQinmilv");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorSet = (function (_super) {
        __extends(TbAnchorSet, _super);
        function TbAnchorSet() {
            return _super.call(this) || this;
        }
        TbAnchorSet.getTb = function () {
            return TbAnchorSet.vec;
        };
        TbAnchorSet.getTmplt = function (id) {
            if (null == TbAnchorSet.dic)
                TbAnchorSet.dic = TplBase.toDictionary(TbAnchorSet.getTb());
            return TbAnchorSet.dic[id];
        };
        TbAnchorSet.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.anchorid = bytes.readInt();
            this.qinmilv = bytes.readInt();
            this.pyqid = bytes.readInt();
            this.wxid = bytes.readInt();
        };
        TbAnchorSet.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchorSet.TBLNAME = "tb_anchor_set";
        return TbAnchorSet;
    }(TplBase));
    template_def.TbAnchorSet = TbAnchorSet;
    __reflect(TbAnchorSet.prototype, "template_def.TbAnchorSet");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorPyq = (function (_super) {
        __extends(TbAnchorPyq, _super);
        function TbAnchorPyq() {
            return _super.call(this) || this;
        }
        TbAnchorPyq.getTb = function () {
            return TbAnchorPyq.vec;
        };
        TbAnchorPyq.getTmplt = function (id) {
            if (null == TbAnchorPyq.dic)
                TbAnchorPyq.dic = TplBase.toDictionary(TbAnchorPyq.getTb());
            return TbAnchorPyq.dic[id];
        };
        Object.defineProperty(TbAnchorPyq.prototype, "arr_icon", {
            get: function () { return this._arr_icon != null ? this._arr_icon : this._arr_icon = this.strToArray(this._str_icon); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAnchorPyq.prototype, "arr2_comment", {
            get: function () { return this._arr2_comment != null ? this._arr2_comment : this._arr2_comment = this.strToArray2(this._str_comment); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAnchorPyq.prototype, "arr2_award", {
            get: function () { return this._arr2_award != null ? this._arr2_award : this._arr2_award = this.strToArray2(this._str_award); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAnchorPyq.prototype, "arr2_answer", {
            get: function () { return this._arr2_answer != null ? this._arr2_answer : this._arr2_answer = this.strToArray2(this._str_answer); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAnchorPyq.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.mood = bytes.readUTF();
            this._str_icon = bytes.readUTF();
            this.before_comment = bytes.readInt();
            this._str_comment = bytes.readUTF();
            this._str_award = bytes.readUTF();
            this._str_answer = bytes.readUTF();
            this.after_comment = bytes.readInt();
        };
        TbAnchorPyq.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchorPyq.TBLNAME = "tb_anchor_pyq";
        return TbAnchorPyq;
    }(TplBase));
    template_def.TbAnchorPyq = TbAnchorPyq;
    __reflect(TbAnchorPyq.prototype, "template_def.TbAnchorPyq");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorPyqComment = (function (_super) {
        __extends(TbAnchorPyqComment, _super);
        function TbAnchorPyqComment() {
            return _super.call(this) || this;
        }
        TbAnchorPyqComment.getTb = function () {
            return TbAnchorPyqComment.vec;
        };
        TbAnchorPyqComment.getTmplt = function (id) {
            if (null == TbAnchorPyqComment.dic)
                TbAnchorPyqComment.dic = TplBase.toDictionary(TbAnchorPyqComment.getTb());
            return TbAnchorPyqComment.dic[id];
        };
        TbAnchorPyqComment.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.comment = bytes.readUTF();
        };
        TbAnchorPyqComment.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchorPyqComment.TBLNAME = "tb_anchor_pyq_comment";
        return TbAnchorPyqComment;
    }(TplBase));
    template_def.TbAnchorPyqComment = TbAnchorPyqComment;
    __reflect(TbAnchorPyqComment.prototype, "template_def.TbAnchorPyqComment");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorWx = (function (_super) {
        __extends(TbAnchorWx, _super);
        function TbAnchorWx() {
            return _super.call(this) || this;
        }
        TbAnchorWx.getTb = function () {
            return TbAnchorWx.vec;
        };
        TbAnchorWx.getTmplt = function (id) {
            if (null == TbAnchorWx.dic)
                TbAnchorWx.dic = TplBase.toDictionary(TbAnchorWx.getTb());
            return TbAnchorWx.dic[id];
        };
        Object.defineProperty(TbAnchorWx.prototype, "arr2_chat", {
            get: function () { return this._arr2_chat != null ? this._arr2_chat : this._arr2_chat = this.strToArray2(this._str_chat); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAnchorWx.prototype, "arr2_award", {
            get: function () { return this._arr2_award != null ? this._arr2_award : this._arr2_award = this.strToArray2(this._str_award); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(TbAnchorWx.prototype, "arr_answer", {
            get: function () { return this._arr_answer != null ? this._arr_answer : this._arr_answer = this.strToArray(this._str_answer); },
            enumerable: true,
            configurable: true
        });
        ;
        TbAnchorWx.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this._str_chat = bytes.readUTF();
            this._str_award = bytes.readUTF();
            this._str_answer = bytes.readUTF();
        };
        TbAnchorWx.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchorWx.TBLNAME = "tb_anchor_wx";
        return TbAnchorWx;
    }(TplBase));
    template_def.TbAnchorWx = TbAnchorWx;
    __reflect(TbAnchorWx.prototype, "template_def.TbAnchorWx");
})(template_def || (template_def = {}));
//*这个文件是自动生成的，不要手动修改
(function (template_def) {
    var TplBase = template.TplBase;
    var TbAnchorWxChat = (function (_super) {
        __extends(TbAnchorWxChat, _super);
        function TbAnchorWxChat() {
            return _super.call(this) || this;
        }
        TbAnchorWxChat.getTb = function () {
            return TbAnchorWxChat.vec;
        };
        TbAnchorWxChat.getTmplt = function (id) {
            if (null == TbAnchorWxChat.dic)
                TbAnchorWxChat.dic = TplBase.toDictionary(TbAnchorWxChat.getTb());
            return TbAnchorWxChat.dic[id];
        };
        TbAnchorWxChat.prototype.fromByteArray = function (bytes) {
            _super.prototype.fromByteArray.call(this, bytes);
            this.ID = bytes.readInt();
            this.chat = bytes.readUTF();
            this.voice = bytes.readInt();
        };
        TbAnchorWxChat.XLSNAME = "Z_【H5】主播表.xlsx";
        TbAnchorWxChat.TBLNAME = "tb_anchor_wx_chat";
        return TbAnchorWxChat;
    }(TplBase));
    template_def.TbAnchorWxChat = TbAnchorWxChat;
    __reflect(TbAnchorWxChat.prototype, "template_def.TbAnchorWxChat");
})(template_def || (template_def = {}));
function getTableClassMap() { return { "tb_help": template_def.TbHelp, "tb_tips": template_def.TbTips, "tb_telephone": template_def.TbTelephone, "tb_telephone_answer": template_def.TbTelephoneAnswer, "tb_item": template_def.TbItem, "tb_box": template_def.TbBox, "tb_shop": template_def.TbShop, "tb_exchange": template_def.TbExchange, "tb_notice": template_def.TbNotice, "tb_work": template_def.TbWork, "tb_work_energy": template_def.TbWorkEnergy, "tb_room": template_def.TbRoom, "tb_change_clothes": template_def.TbChangeClothes, "tb_qiandao": template_def.TbQiandao, "tb_hongbao": template_def.TbHongbao, "tb_active_time_limit": template_def.TbActiveTimeLimit, "tb_love": template_def.TbLove, "tb_random_name": template_def.TbRandomName, "tb_pic": template_def.TbPic, "tb_video": template_def.TbVideo, "tb_memory": template_def.TbMemory, "tb_head": template_def.TbHead, "tb_doll_machine": template_def.TbDollMachine, "tb_guide": template_def.TbGuide, "tb_game_set": template_def.TbGameSet, "tb_mail": template_def.TbMail, "tb_anchor_information": template_def.TbAnchorInformation, "tb_anchor": template_def.TbAnchor, "tb_anchor_qinmilv": template_def.TbAnchorQinmilv, "tb_anchor_set": template_def.TbAnchorSet, "tb_anchor_pyq": template_def.TbAnchorPyq, "tb_anchor_pyq_comment": template_def.TbAnchorPyqComment, "tb_anchor_wx": template_def.TbAnchorWx, "tb_anchor_wx_chat": template_def.TbAnchorWxChat }; }
//# sourceMappingURL=tmplts.js.map