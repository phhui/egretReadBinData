//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbHelp extends TplBase {
        public static XLSNAME:String = "B_【H5】帮助表.xlsx";
        public static TBLNAME:String = "tb_help";
        //include "../../inls/TbHelpInl.as";

        public static vec:Array<TbHelp>;
        public static getTb():Array<TbHelp> {
            return TbHelp.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbHelp {
            if (null==TbHelp.dic)
                TbHelp.dic=TplBase.toDictionary(TbHelp.getTb());

            return TbHelp.dic[id];
        }
        public ID:number; //ID
        public tilte:string; //标题
        public content:string; //帮助内容
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.tilte=bytes.readUTF();
             this.content=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbTips extends TplBase {
        public static XLSNAME:String = "B_【H5】帮助表.xlsx";
        public static TBLNAME:String = "tb_tips";
        //include "../../inls/TbTipsInl.as";

        public static vec:Array<TbTips>;
        public static getTb():Array<TbTips> {
            return TbTips.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbTips {
            if (null==TbTips.dic)
                TbTips.dic=TplBase.toDictionary(TbTips.getTb());

            return TbTips.dic[id];
        }
        public ID:number; //ID
        public content:string; //提示内容
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.content=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbTelephone extends TplBase {
        public static XLSNAME:String = "D_【H5】电话表.xlsx";
        public static TBLNAME:String = "tb_telephone";
        //include "../../inls/TbTelephoneInl.as";

        public static vec:Array<TbTelephone>;
        public static getTb():Array<TbTelephone> {
            return TbTelephone.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbTelephone {
            if (null==TbTelephone.dic)
                TbTelephone.dic=TplBase.toDictionary(TbTelephone.getTb());

            return TbTelephone.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        public qinmilv:number; //亲密度等级
        public title:string; //小结标题
        private _str_call:string ;
        private _arr_call:Array<any> ;
        public get arr_call():Array<any> {return this._arr_call != null ? this._arr_call : this._arr_call = this.strToArray(this._str_call)};
        private _str_dialogue:string ;
        private _arr_dialogue:Array<any> ;
        public get arr_dialogue():Array<any> {return this._arr_dialogue != null ? this._arr_dialogue : this._arr_dialogue = this.strToArray(this._str_dialogue)};
        private _str_answer:string ;
        private _arr2_answer:Array<any> ;
        public get arr2_answer():Array<any> {return this._arr2_answer != null ? this._arr2_answer : this._arr2_answer = this.strToArray2(this._str_answer)};
        private _str_award:string ;
        private _arr2_award:Array<any> ;
        public get arr2_award():Array<any> {return this._arr2_award != null ? this._arr2_award : this._arr2_award = this.strToArray2(this._str_award)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this.qinmilv=bytes.readInt();
             this.title=bytes.readUTF();
             this._str_call=bytes.readUTF();
             this._str_dialogue=bytes.readUTF();
             this._str_answer=bytes.readUTF();
             this._str_award=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbTelephoneAnswer extends TplBase {
        public static XLSNAME:String = "D_【H5】电话表.xlsx";
        public static TBLNAME:String = "tb_telephone_answer";
        //include "../../inls/TbTelephoneAnswerInl.as";

        public static vec:Array<TbTelephoneAnswer>;
        public static getTb():Array<TbTelephoneAnswer> {
            return TbTelephoneAnswer.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbTelephoneAnswer {
            if (null==TbTelephoneAnswer.dic)
                TbTelephoneAnswer.dic=TplBase.toDictionary(TbTelephoneAnswer.getTb());

            return TbTelephoneAnswer.dic[id];
        }
        public ID:number; //ID
        public answer:string; //回复
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.answer=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbItem extends TplBase {
        public static XLSNAME:String = "D_【H5】道具表.xlsx";
        public static TBLNAME:String = "tb_item";
        //include "../../inls/TbItemInl.as";

        public static vec:Array<TbItem>;
        public static getTb():Array<TbItem> {
            return TbItem.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbItem {
            if (null==TbItem.dic)
                TbItem.dic=TplBase.toDictionary(TbItem.getTb());

            return TbItem.dic[id];
        }
        public ID:number; //ID
        public name:string; //道具名
        public desc:string; //描述
        public type:number; //道具类型
        private _str_effect:string ;
        private _arr_effect:Array<any> ;
        public get arr_effect():Array<any> {return this._arr_effect != null ? this._arr_effect : this._arr_effect = this.strToArray(this._str_effect)};
        public icon:string; //道具图标
        public max_overlap:number; //最多堆叠数
        public daily_limit:number; //使用限制
        public link:number; //使用链接
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.name=bytes.readUTF();
             this.desc=bytes.readUTF();
             this.type=bytes.readInt();
             this._str_effect=bytes.readUTF();
             this.icon=bytes.readUTF();
             this.max_overlap=bytes.readInt();
             this.daily_limit=bytes.readInt();
             this.link=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbBox extends TplBase {
        public static XLSNAME:String = "D_【H5】道具表.xlsx";
        public static TBLNAME:String = "tb_box";
        //include "../../inls/TbBoxInl.as";

        public static vec:Array<TbBox>;
        public static getTb():Array<TbBox> {
            return TbBox.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbBox {
            if (null==TbBox.dic)
                TbBox.dic=TplBase.toDictionary(TbBox.getTb());

            return TbBox.dic[id];
        }
        public ID:number; //宝箱ID
        private _str_reward_fix:string ;
        private _arr2_reward_fix:Array<any> ;
        public get arr2_reward_fix():Array<any> {return this._arr2_reward_fix != null ? this._arr2_reward_fix : this._arr2_reward_fix = this.strToArray2(this._str_reward_fix)};
        private _str_reward_random:string ;
        private _arr2_reward_random:Array<any> ;
        public get arr2_reward_random():Array<any> {return this._arr2_reward_random != null ? this._arr2_reward_random : this._arr2_reward_random = this.strToArray2(this._str_reward_random)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this._str_reward_fix=bytes.readUTF();
             this._str_reward_random=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbShop extends TplBase {
        public static XLSNAME:String = "D_【H5】道具表.xlsx";
        public static TBLNAME:String = "tb_shop";
        //include "../../inls/TbShopInl.as";

        public static vec:Array<TbShop>;
        public static getTb():Array<TbShop> {
            return TbShop.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbShop {
            if (null==TbShop.dic)
                TbShop.dic=TplBase.toDictionary(TbShop.getTb());

            return TbShop.dic[id];
        }
        public ID:number; //商品ID
        public type:number; //商店类型
        public beizhu1:string; //商品名称
        public info:string; //商品说明
        public icon:string; //道具图标
        private _str_items:string ;
        private _arr2_items:Array<any> ;
        public get arr2_items():Array<any> {return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items)};
        public money_type:number; //购入货币类型
        public price:number; //单价
        public index:number; //商品排序
        private _str_first_reward:string ;
        private _arr2_first_reward:Array<any> ;
        public get arr2_first_reward():Array<any> {return this._arr2_first_reward != null ? this._arr2_first_reward : this._arr2_first_reward = this.strToArray2(this._str_first_reward)};
        public buy_limit_type:number; //限购类型
        public buy_limit_num:number; //限购数量
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.type=bytes.readInt();
             this.beizhu1=bytes.readUTF();
             this.info=bytes.readUTF();
             this.icon=bytes.readUTF();
             this._str_items=bytes.readUTF();
             this.money_type=bytes.readInt();
             this.price=bytes.readFloat();
             this.index=bytes.readInt();
             this._str_first_reward=bytes.readUTF();
             this.buy_limit_type=bytes.readInt();
             this.buy_limit_num=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbExchange extends TplBase {
        public static XLSNAME:String = "D_【H5】道具表.xlsx";
        public static TBLNAME:String = "tb_exchange";
        //include "../../inls/TbExchangeInl.as";

        public static vec:Array<TbExchange>;
        public static getTb():Array<TbExchange> {
            return TbExchange.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbExchange {
            if (null==TbExchange.dic)
                TbExchange.dic=TplBase.toDictionary(TbExchange.getTb());

            return TbExchange.dic[id];
        }
        public ID:number; //兑换ID
        public type:number; //兑换类型
        public info:string; //兑换说明
        private _str_items:string ;
        private _arr2_items:Array<any> ;
        public get arr2_items():Array<any> {return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items)};
        private _str_cost:string ;
        private _arr2_cost:Array<any> ;
        public get arr2_cost():Array<any> {return this._arr2_cost != null ? this._arr2_cost : this._arr2_cost = this.strToArray2(this._str_cost)};
        public index:number; //排序
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.type=bytes.readInt();
             this.info=bytes.readUTF();
             this._str_items=bytes.readUTF();
             this._str_cost=bytes.readUTF();
             this.index=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbNotice extends TplBase {
        public static XLSNAME:String = "G_【H5】公告表.xlsx";
        public static TBLNAME:String = "tb_notice";
        //include "../../inls/TbNoticeInl.as";

        public static vec:Array<TbNotice>;
        public static getTb():Array<TbNotice> {
            return TbNotice.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbNotice {
            if (null==TbNotice.dic)
                TbNotice.dic=TplBase.toDictionary(TbNotice.getTb());

            return TbNotice.dic[id];
        }
        public ID:number; //ID
        public notice_name:string; //公告标题
        public notice_content:string; //公告内容
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this.notice_name=bytes.readUTF();
             this.notice_content=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbWork extends TplBase {
        public static XLSNAME:String = "G_【H5】工作表.xlsx";
        public static TBLNAME:String = "tb_work";
        //include "../../inls/TbWorkInl.as";

        public static vec:Array<TbWork>;
        public static getTb():Array<TbWork> {
            return TbWork.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbWork {
            if (null==TbWork.dic)
                TbWork.dic=TplBase.toDictionary(TbWork.getTb());

            return TbWork.dic[id];
        }
        public ID:number; //ID
        public name:string; //工作内容
        public icon:string; //背景图
        public icon2:string; //工作中的背景图
        public time:number; //工作时间
        private _str_advance:string ;
        private _arr_advance:Array<any> ;
        public get arr_advance():Array<any> {return this._arr_advance != null ? this._arr_advance : this._arr_advance = this.strToArray(this._str_advance)};
        public next:number; //下一档
        public fail:number; //工作提升失败
        private _str_reward:string ;
        private _arr2_reward:Array<any> ;
        public get arr2_reward():Array<any> {return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.name=bytes.readUTF();
             this.icon=bytes.readUTF();
             this.icon2=bytes.readUTF();
             this.time=bytes.readInt();
             this._str_advance=bytes.readUTF();
             this.next=bytes.readInt();
             this.fail=bytes.readInt();
             this._str_reward=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbWorkEnergy extends TplBase {
        public static XLSNAME:String = "G_【H5】工作表.xlsx";
        public static TBLNAME:String = "tb_work_energy";
        //include "../../inls/TbWorkEnergyInl.as";

        public static vec:Array<TbWorkEnergy>;
        public static getTb():Array<TbWorkEnergy> {
            return TbWorkEnergy.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbWorkEnergy {
            if (null==TbWorkEnergy.dic)
                TbWorkEnergy.dic=TplBase.toDictionary(TbWorkEnergy.getTb());

            return TbWorkEnergy.dic[id];
        }
        public ID:number; //ID
        private _str_enroll:string ;
        private _arr_enroll:Array<any> ;
        public get arr_enroll():Array<any> {return this._arr_enroll != null ? this._arr_enroll : this._arr_enroll = this.strToArray(this._str_enroll)};
        public time_enroll:number; //持续时间
        public work_reward:number; //工作次数奖励
        public love_reward:number; //恋爱次数奖励
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this._str_enroll=bytes.readUTF();
             this.time_enroll=bytes.readInt();
             this.work_reward=bytes.readInt();
             this.love_reward=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbRoom extends TplBase {
        public static XLSNAME:String = "G_【H5】闺房表.xlsx";
        public static TBLNAME:String = "tb_room";
        //include "../../inls/TbRoomInl.as";

        public static vec:Array<TbRoom>;
        public static getTb():Array<TbRoom> {
            return TbRoom.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbRoom {
            if (null==TbRoom.dic)
                TbRoom.dic=TplBase.toDictionary(TbRoom.getTb());

            return TbRoom.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        public touch:string; //触摸回复
        public touch_recovery:string; //语音
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this.touch=bytes.readUTF();
             this.touch_recovery=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbChangeClothes extends TplBase {
        public static XLSNAME:String = "H_【H5】换装表.xlsx";
        public static TBLNAME:String = "tb_change_clothes";
        //include "../../inls/TbChangeClothesInl.as";

        public static vec:Array<TbChangeClothes>;
        public static getTb():Array<TbChangeClothes> {
            return TbChangeClothes.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbChangeClothes {
            if (null==TbChangeClothes.dic)
                TbChangeClothes.dic=TplBase.toDictionary(TbChangeClothes.getTb());

            return TbChangeClothes.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        private _str_unlock:string ;
        private _arr_unlock:Array<any> ;
        public get arr_unlock():Array<any> {return this._arr_unlock != null ? this._arr_unlock : this._arr_unlock = this.strToArray(this._str_unlock)};
        public name:string; //时装名
        public icon:string; //时装图标
        public clothes:string; //解锁时装
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this._str_unlock=bytes.readUTF();
             this.name=bytes.readUTF();
             this.icon=bytes.readUTF();
             this.clothes=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbQiandao extends TplBase {
        public static XLSNAME:String = "H_【H5】活动表.xlsx";
        public static TBLNAME:String = "tb_qiandao";
        //include "../../inls/TbQiandaoInl.as";

        public static vec:Array<TbQiandao>;
        public static getTb():Array<TbQiandao> {
            return TbQiandao.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbQiandao {
            if (null==TbQiandao.dic)
                TbQiandao.dic=TplBase.toDictionary(TbQiandao.getTb());

            return TbQiandao.dic[id];
        }
        public ID:number; //ID
        private _str_reward:string ;
        private _arr_reward:Array<any> ;
        public get arr_reward():Array<any> {return this._arr_reward != null ? this._arr_reward : this._arr_reward = this.strToArray(this._str_reward)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this._str_reward=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbHongbao extends TplBase {
        public static XLSNAME:String = "H_【H5】活动表.xlsx";
        public static TBLNAME:String = "tb_hongbao";
        //include "../../inls/TbHongbaoInl.as";

        public static vec:Array<TbHongbao>;
        public static getTb():Array<TbHongbao> {
            return TbHongbao.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbHongbao {
            if (null==TbHongbao.dic)
                TbHongbao.dic=TplBase.toDictionary(TbHongbao.getTb());

            return TbHongbao.dic[id];
        }
        public ID:number; //ID
        private _str_lower_limit:string ;
        private _arr_lower_limit:Array<any> ;
        public get arr_lower_limit():Array<any> {return this._arr_lower_limit != null ? this._arr_lower_limit : this._arr_lower_limit = this.strToArray(this._str_lower_limit)};
        private _str_upper_limit:string ;
        private _arr_upper_limit:Array<any> ;
        public get arr_upper_limit():Array<any> {return this._arr_upper_limit != null ? this._arr_upper_limit : this._arr_upper_limit = this.strToArray(this._str_upper_limit)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this._str_lower_limit=bytes.readUTF();
             this._str_upper_limit=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbActiveTimeLimit extends TplBase {
        public static XLSNAME:String = "H_【H5】活动表.xlsx";
        public static TBLNAME:String = "tb_active_time_limit";
        //include "../../inls/TbActiveTimeLimitInl.as";

        public static vec:Array<TbActiveTimeLimit>;
        public static getTb():Array<TbActiveTimeLimit> {
            return TbActiveTimeLimit.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbActiveTimeLimit {
            if (null==TbActiveTimeLimit.dic)
                TbActiveTimeLimit.dic=TplBase.toDictionary(TbActiveTimeLimit.getTb());

            return TbActiveTimeLimit.dic[id];
        }
        public ID:number; //ID
        private _str_items:string ;
        private _arr2_items:Array<any> ;
        public get arr2_items():Array<any> {return this._arr2_items != null ? this._arr2_items : this._arr2_items = this.strToArray2(this._str_items)};
        public money_type:number; //购入货币类型
        public price:number; //单价
        public buy_limit_type:number; //限购类型
        public buy_limit_num:number; //限购数量
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this._str_items=bytes.readUTF();
             this.money_type=bytes.readInt();
             this.price=bytes.readFloat();
             this.buy_limit_type=bytes.readInt();
             this.buy_limit_num=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbLove extends TplBase {
        public static XLSNAME:String = "L_【H5】恋爱表.xlsx";
        public static TBLNAME:String = "tb_love";
        //include "../../inls/TbLoveInl.as";

        public static vec:Array<TbLove>;
        public static getTb():Array<TbLove> {
            return TbLove.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbLove {
            if (null==TbLove.dic)
                TbLove.dic=TplBase.toDictionary(TbLove.getTb());

            return TbLove.dic[id];
        }
        public ID:number; //ID
        public name:string; //恋爱内容
        public icon:string; //背景图
        public icon2:string; //恋爱中的背景图
        private _str_cost:string ;
        private _arr_cost:Array<any> ;
        public get arr_cost():Array<any> {return this._arr_cost != null ? this._arr_cost : this._arr_cost = this.strToArray(this._str_cost)};
        public time:number; //恋爱时间
        private _str_advance:string ;
        private _arr_advance:Array<any> ;
        public get arr_advance():Array<any> {return this._arr_advance != null ? this._arr_advance : this._arr_advance = this.strToArray(this._str_advance)};
        public next:number; //下一档
        public fail:number; //恋爱提升失败
        private _str_reward:string ;
        private _arr2_reward:Array<any> ;
        public get arr2_reward():Array<any> {return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.name=bytes.readUTF();
             this.icon=bytes.readUTF();
             this.icon2=bytes.readUTF();
             this._str_cost=bytes.readUTF();
             this.time=bytes.readInt();
             this._str_advance=bytes.readUTF();
             this.next=bytes.readInt();
             this.fail=bytes.readInt();
             this._str_reward=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbRandomName extends TplBase {
        public static XLSNAME:String = "M_【H5】名字库.xlsx";
        public static TBLNAME:String = "tb_random_name";
        //include "../../inls/TbRandomNameInl.as";

        public static vec:Array<TbRandomName>;
        public static getTb():Array<TbRandomName> {
            return TbRandomName.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbRandomName {
            if (null==TbRandomName.dic)
                TbRandomName.dic=TplBase.toDictionary(TbRandomName.getTb());

            return TbRandomName.dic[id];
        }
        public ID:number; //ID
        public xing:string; //姓
        public ming:string; //名
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this.xing=bytes.readUTF();
             this.ming=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbPic extends TplBase {
        public static XLSNAME:String = "S_【H5】视频表.xlsx";
        public static TBLNAME:String = "tb_pic";
        //include "../../inls/TbPicInl.as";

        public static vec:Array<TbPic>;
        public static getTb():Array<TbPic> {
            return TbPic.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbPic {
            if (null==TbPic.dic)
                TbPic.dic=TplBase.toDictionary(TbPic.getTb());

            return TbPic.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        private _str_unlock:string ;
        private _arr_unlock:Array<any> ;
        public get arr_unlock():Array<any> {return this._arr_unlock != null ? this._arr_unlock : this._arr_unlock = this.strToArray(this._str_unlock)};
        public picid:string; //解锁图片
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this._str_unlock=bytes.readUTF();
             this.picid=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbVideo extends TplBase {
        public static XLSNAME:String = "S_【H5】视频表.xlsx";
        public static TBLNAME:String = "tb_video";
        //include "../../inls/TbVideoInl.as";

        public static vec:Array<TbVideo>;
        public static getTb():Array<TbVideo> {
            return TbVideo.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbVideo {
            if (null==TbVideo.dic)
                TbVideo.dic=TplBase.toDictionary(TbVideo.getTb());

            return TbVideo.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        private _str_unlock:string ;
        private _arr_unlock:Array<any> ;
        public get arr_unlock():Array<any> {return this._arr_unlock != null ? this._arr_unlock : this._arr_unlock = this.strToArray(this._str_unlock)};
        public thumbnail:string; //缩略图
        public videoid:string; //解锁视频
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this._str_unlock=bytes.readUTF();
             this.thumbnail=bytes.readUTF();
             this.videoid=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbMemory extends TplBase {
        public static XLSNAME:String = "S_【H5】视频表.xlsx";
        public static TBLNAME:String = "tb_memory";
        //include "../../inls/TbMemoryInl.as";

        public static vec:Array<TbMemory>;
        public static getTb():Array<TbMemory> {
            return TbMemory.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbMemory {
            if (null==TbMemory.dic)
                TbMemory.dic=TplBase.toDictionary(TbMemory.getTb());

            return TbMemory.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        public qinmilv:number; //亲密度等级
        public thumbnail:string; //缩略图
        public memoryid:string; //解锁回忆
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this.qinmilv=bytes.readInt();
             this.thumbnail=bytes.readUTF();
             this.memoryid=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbHead extends TplBase {
        public static XLSNAME:String = "T_【H5】头像表.xlsx";
        public static TBLNAME:String = "tb_head";
        //include "../../inls/TbHeadInl.as";

        public static vec:Array<TbHead>;
        public static getTb():Array<TbHead> {
            return TbHead.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbHead {
            if (null==TbHead.dic)
                TbHead.dic=TplBase.toDictionary(TbHead.getTb());

            return TbHead.dic[id];
        }
        public ID:number; //ID
        public head:string; //头像
        public wechat_head:string; //微信头像
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.head=bytes.readUTF();
             this.wechat_head=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbDollMachine extends TplBase {
        public static XLSNAME:String = "T_【H5】淘货表.xlsx";
        public static TBLNAME:String = "tb_doll_machine";
        //include "../../inls/TbDollMachineInl.as";

        public static vec:Array<TbDollMachine>;
        public static getTb():Array<TbDollMachine> {
            return TbDollMachine.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbDollMachine {
            if (null==TbDollMachine.dic)
                TbDollMachine.dic=TplBase.toDictionary(TbDollMachine.getTb());

            return TbDollMachine.dic[id];
        }
        public ID:number; //ID
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbGuide extends TplBase {
        public static XLSNAME:String = "X_【H5】新手引导表.xlsx";
        public static TBLNAME:String = "tb_guide";
        //include "../../inls/TbGuideInl.as";

        public static vec:Array<TbGuide>;
        public static getTb():Array<TbGuide> {
            return TbGuide.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbGuide {
            if (null==TbGuide.dic)
                TbGuide.dic=TplBase.toDictionary(TbGuide.getTb());

            return TbGuide.dic[id];
        }
        public ID:number; //ID
        public qinmilv:number; //亲密度等级
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.qinmilv=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbGameSet extends TplBase {
        public static XLSNAME:String = "Y_【H5】游戏设置表.xlsx";
        public static TBLNAME:String = "tb_game_set";
        //include "../../inls/TbGameSetInl.as";

        public static vec:Array<TbGameSet>;
        public static getTb():Array<TbGameSet> {
            return TbGameSet.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbGameSet {
            if (null==TbGameSet.dic)
                TbGameSet.dic=TplBase.toDictionary(TbGameSet.getTb());

            return TbGameSet.dic[id];
        }
        public ID:number; //游戏设置ID
        public value1:number; //参数1
        private _str_value2:string ;
        private _arr_value2:Array<any> ;
        public get arr_value2():Array<any> {return this._arr_value2 != null ? this._arr_value2 : this._arr_value2 = this.strToArray(this._str_value2)};
        private _str_value3:string ;
        private _arr2_value3:Array<any> ;
        public get arr2_value3():Array<any> {return this._arr2_value3 != null ? this._arr2_value3 : this._arr2_value3 = this.strToArray2(this._str_value3)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this.value1=bytes.readInt();
             this._str_value2=bytes.readUTF();
             this._str_value3=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbMail extends TplBase {
        public static XLSNAME:String = "Y_【H5】邮件表.xlsx";
        public static TBLNAME:String = "tb_mail";
        //include "../../inls/TbMailInl.as";

        public static vec:Array<TbMail>;
        public static getTb():Array<TbMail> {
            return TbMail.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbMail {
            if (null==TbMail.dic)
                TbMail.dic=TplBase.toDictionary(TbMail.getTb());

            return TbMail.dic[id];
        }
        public ID:number; //邮件ID
        public mail_name:string; //邮件标题
        public mail_content:string; //邮件内容
        public sender:string; //发件者
        private _str_reward:string ;
        private _arr2_reward:Array<any> ;
        public get arr2_reward():Array<any> {return this._arr2_reward != null ? this._arr2_reward : this._arr2_reward = this.strToArray2(this._str_reward)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readUnsignedInt();
             this.mail_name=bytes.readUTF();
             this.mail_content=bytes.readUTF();
             this.sender=bytes.readUTF();
             this._str_reward=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorInformation extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播信息表.xlsx";
        public static TBLNAME:String = "tb_anchor_information";
        //include "../../inls/TbAnchorInformationInl.as";

        public static vec:Array<TbAnchorInformation>;
        public static getTb():Array<TbAnchorInformation> {
            return TbAnchorInformation.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorInformation {
            if (null==TbAnchorInformation.dic)
                TbAnchorInformation.dic=TplBase.toDictionary(TbAnchorInformation.getTb());

            return TbAnchorInformation.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        public name:string; //主播名字
        private _str_pic:string ;
        private _arr_pic:Array<any> ;
        public get arr_pic():Array<any> {return this._arr_pic != null ? this._arr_pic : this._arr_pic = this.strToArray(this._str_pic)};
        public story:string; //故事名
        public outline:string; //故事梗概
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this.name=bytes.readUTF();
             this._str_pic=bytes.readUTF();
             this.story=bytes.readUTF();
             this.outline=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchor extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor";
        //include "../../inls/TbAnchorInl.as";

        public static vec:Array<TbAnchor>;
        public static getTb():Array<TbAnchor> {
            return TbAnchor.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchor {
            if (null==TbAnchor.dic)
                TbAnchor.dic=TplBase.toDictionary(TbAnchor.getTb());

            return TbAnchor.dic[id];
        }
        public ID:number; //ID
        public name:string; //主播名
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.name=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorQinmilv extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor_qinmilv";
        //include "../../inls/TbAnchorQinmilvInl.as";

        public static vec:Array<TbAnchorQinmilv>;
        public static getTb():Array<TbAnchorQinmilv> {
            return TbAnchorQinmilv.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorQinmilv {
            if (null==TbAnchorQinmilv.dic)
                TbAnchorQinmilv.dic=TplBase.toDictionary(TbAnchorQinmilv.getTb());

            return TbAnchorQinmilv.dic[id];
        }
        public ID:number; //ID
        public qinmilv:number; //升级所需亲密度
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.qinmilv=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorSet extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor_set";
        //include "../../inls/TbAnchorSetInl.as";

        public static vec:Array<TbAnchorSet>;
        public static getTb():Array<TbAnchorSet> {
            return TbAnchorSet.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorSet {
            if (null==TbAnchorSet.dic)
                TbAnchorSet.dic=TplBase.toDictionary(TbAnchorSet.getTb());

            return TbAnchorSet.dic[id];
        }
        public ID:number; //ID
        public anchorid:number; //主播编号
        public qinmilv:number; //亲密度等级
        public pyqid:number; //朋友圈编号
        public wxid:number; //微信编号
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.anchorid=bytes.readInt();
             this.qinmilv=bytes.readInt();
             this.pyqid=bytes.readInt();
             this.wxid=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorPyq extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor_pyq";
        //include "../../inls/TbAnchorPyqInl.as";

        public static vec:Array<TbAnchorPyq>;
        public static getTb():Array<TbAnchorPyq> {
            return TbAnchorPyq.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorPyq {
            if (null==TbAnchorPyq.dic)
                TbAnchorPyq.dic=TplBase.toDictionary(TbAnchorPyq.getTb());

            return TbAnchorPyq.dic[id];
        }
        public ID:number; //ID
        public mood:string; //心情
        private _str_icon:string ;
        private _arr_icon:Array<any> ;
        public get arr_icon():Array<any> {return this._arr_icon != null ? this._arr_icon : this._arr_icon = this.strToArray(this._str_icon)};
        public before_comment:number; //玩家评论前
        private _str_comment:string ;
        private _arr2_comment:Array<any> ;
        public get arr2_comment():Array<any> {return this._arr2_comment != null ? this._arr2_comment : this._arr2_comment = this.strToArray2(this._str_comment)};
        private _str_award:string ;
        private _arr2_award:Array<any> ;
        public get arr2_award():Array<any> {return this._arr2_award != null ? this._arr2_award : this._arr2_award = this.strToArray2(this._str_award)};
        private _str_answer:string ;
        private _arr2_answer:Array<any> ;
        public get arr2_answer():Array<any> {return this._arr2_answer != null ? this._arr2_answer : this._arr2_answer = this.strToArray2(this._str_answer)};
        public after_comment:number; //玩家评论后
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.mood=bytes.readUTF();
             this._str_icon=bytes.readUTF();
             this.before_comment=bytes.readInt();
             this._str_comment=bytes.readUTF();
             this._str_award=bytes.readUTF();
             this._str_answer=bytes.readUTF();
             this.after_comment=bytes.readInt();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorPyqComment extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor_pyq_comment";
        //include "../../inls/TbAnchorPyqCommentInl.as";

        public static vec:Array<TbAnchorPyqComment>;
        public static getTb():Array<TbAnchorPyqComment> {
            return TbAnchorPyqComment.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorPyqComment {
            if (null==TbAnchorPyqComment.dic)
                TbAnchorPyqComment.dic=TplBase.toDictionary(TbAnchorPyqComment.getTb());

            return TbAnchorPyqComment.dic[id];
        }
        public ID:number; //ID
        public comment:string; //评论
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.comment=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorWx extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor_wx";
        //include "../../inls/TbAnchorWxInl.as";

        public static vec:Array<TbAnchorWx>;
        public static getTb():Array<TbAnchorWx> {
            return TbAnchorWx.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorWx {
            if (null==TbAnchorWx.dic)
                TbAnchorWx.dic=TplBase.toDictionary(TbAnchorWx.getTb());

            return TbAnchorWx.dic[id];
        }
        public ID:number; //ID
        private _str_chat:string ;
        private _arr2_chat:Array<any> ;
        public get arr2_chat():Array<any> {return this._arr2_chat != null ? this._arr2_chat : this._arr2_chat = this.strToArray2(this._str_chat)};
        private _str_award:string ;
        private _arr2_award:Array<any> ;
        public get arr2_award():Array<any> {return this._arr2_award != null ? this._arr2_award : this._arr2_award = this.strToArray2(this._str_award)};
        private _str_answer:string ;
        private _arr_answer:Array<any> ;
        public get arr_answer():Array<any> {return this._arr_answer != null ? this._arr_answer : this._arr_answer = this.strToArray(this._str_answer)};
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this._str_chat=bytes.readUTF();
             this._str_award=bytes.readUTF();
             this._str_answer=bytes.readUTF();
        }
    }
}

//*这个文件是自动生成的，不要手动修改
module template_def {
    import TplBase = template.TplBase;


    export class TbAnchorWxChat extends TplBase {
        public static XLSNAME:String = "Z_【H5】主播表.xlsx";
        public static TBLNAME:String = "tb_anchor_wx_chat";
        //include "../../inls/TbAnchorWxChatInl.as";

        public static vec:Array<TbAnchorWxChat>;
        public static getTb():Array<TbAnchorWxChat> {
            return TbAnchorWxChat.vec;
        }

        private static dic:Object;
        public static getTmplt(id:number):TbAnchorWxChat {
            if (null==TbAnchorWxChat.dic)
                TbAnchorWxChat.dic=TplBase.toDictionary(TbAnchorWxChat.getTb());

            return TbAnchorWxChat.dic[id];
        }
        public ID:number; //ID
        public chat:string; //聊天
        public voice:number; //语音
        constructor() {
            super();
        }

        public fromByteArray(bytes: ByteArray): void {
            super.fromByteArray(bytes);
                         this.ID=bytes.readInt();
             this.chat=bytes.readUTF();
             this.voice=bytes.readInt();
        }
    }
}
function getTableClassMap():any{return {"tb_help" : template_def.TbHelp,"tb_tips" : template_def.TbTips,"tb_telephone" : template_def.TbTelephone,"tb_telephone_answer" : template_def.TbTelephoneAnswer,"tb_item" : template_def.TbItem,"tb_box" : template_def.TbBox,"tb_shop" : template_def.TbShop,"tb_exchange" : template_def.TbExchange,"tb_notice" : template_def.TbNotice,"tb_work" : template_def.TbWork,"tb_work_energy" : template_def.TbWorkEnergy,"tb_room" : template_def.TbRoom,"tb_change_clothes" : template_def.TbChangeClothes,"tb_qiandao" : template_def.TbQiandao,"tb_hongbao" : template_def.TbHongbao,"tb_active_time_limit" : template_def.TbActiveTimeLimit,"tb_love" : template_def.TbLove,"tb_random_name" : template_def.TbRandomName,"tb_pic" : template_def.TbPic,"tb_video" : template_def.TbVideo,"tb_memory" : template_def.TbMemory,"tb_head" : template_def.TbHead,"tb_doll_machine" : template_def.TbDollMachine,"tb_guide" : template_def.TbGuide,"tb_game_set" : template_def.TbGameSet,"tb_mail" : template_def.TbMail,"tb_anchor_information" : template_def.TbAnchorInformation,"tb_anchor" : template_def.TbAnchor,"tb_anchor_qinmilv" : template_def.TbAnchorQinmilv,"tb_anchor_set" : template_def.TbAnchorSet,"tb_anchor_pyq" : template_def.TbAnchorPyq,"tb_anchor_pyq_comment" : template_def.TbAnchorPyqComment,"tb_anchor_wx" : template_def.TbAnchorWx,"tb_anchor_wx_chat" : template_def.TbAnchorWxChat}}