export default interface CryptoProvider {
    encrypt(data: string): Promise<string>;
    compare(data: string, encryptPassword: string): Promise<boolean>;
}