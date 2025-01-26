export default interface UseCase<ENTRY,EXIT> {
    excute(entry: ENTRY): Promise<EXIT>;
}