export default interface UseCase {
    excute(entry: any): Promise<any>;
}