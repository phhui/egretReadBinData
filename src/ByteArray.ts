class ByteArray extends egret.ByteArray {
    constructor(data?: any) {
    super(data);
    }
    get uint8Array():any{
        return this._bytes;
    }
    get pos(): number {
        return this.position;
    }
    set pos(value: number) {
        this.position = value;
    }
    public writeBoolean(value: boolean): void {
        this.writeByte(value ? 1 : 0);
    }
    public writeShort2(value: number): void {
        this.writeShort(value);
    }
    public writeInt2(value: number): void {
        this.writeInt(value);
    }
    public writeUnsignedInt2(value: number): void {
        this.writeUnsignedInt(value);
    }
    public writeFloat2(value: number): void {
        this.writeFloat(value);
    }
    public writeDouble2(value: number): void {
        this.writeDouble(value);
    }
    public writeMultiByte2(value: string, charSet: string): void {
        this.writeUTFBytes(value);
    }
    public writeUTF2(value: string): void {
        this.writeUTF(value);
    }
    public writeBytes2(src_bytes: ByteArray, src_offset: number = 0, src_len: number = 0): void {
        var src = src_bytes;
        this.writeBytes(src, src_offset, src_len);
    }
    public static writeBytes(dst: egret.ByteArray, bytes: ByteArray, offset: number = 0, length: number = 0): void {
        dst.writeBytes(bytes, offset, length);
    }
    public readBoolean(): boolean {
        return this.readByte() == 1 ? true : false;
    }
    public readUnsignedByte2(): number {
        return this.readUnsignedByte();
    }
    public readShort2(): number {
        return this.readShort()
    }
    public readUnsigned16(): number {
        return this.readUnsignedShort()
    }
    public readInt2(): number {
        return this.readInt()
    }
    public readUnsignedInt2(): number {
        return this.readUnsignedInt()
    }
    public readFloat2(): number {
        return this.readFloat()
    }
    public readDouble2(): number {
        return this.readDouble()
    }
    public readMultiByte(length: number, charSet: string): string {
        return this.readUTFBytes(length);
    }
    public readUTF2(): string {
        return this.readUTF();
    }
    public readBytes(bytes: ByteArray, offset: number = 0, length: number = 0): void {
        throw new Error("Method not implemented");
    }
}