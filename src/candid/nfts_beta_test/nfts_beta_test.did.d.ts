import type { Principal } from '@dfinity/principal';
export interface BetaPlayerData {
  'id' : Principal,
  'allowed' : bigint,
  'faction' : bigint,
  'wallet' : string,
}
export type BetaPlayerId = Principal;
export interface BetaPlayerNFTs {
  'nftsCodes' : Array<NFTCode>,
  'nftChar' : NFTCode,
}
export type CodesList = Array<NFTType__1>;
export interface NFTCode { 'id' : bigint, 'code' : string }
export interface NFTType {
  'code' : NFTCode,
  'shipName' : string,
  'faction' : string,
  'batch' : bigint,
}
export interface NFTType__1 {
  'code' : NFTCode,
  'shipName' : string,
  'faction' : string,
  'batch' : bigint,
}
export interface NFTsBeta {
  'addBetaPlayer' : (arg_0: string, arg_1: bigint) => Promise<boolean>,
  'addCharsCodes' : (arg_0: CodesList) => Promise<boolean>,
  'addCodes' : (arg_0: CodesList) => Promise<boolean>,
  'adminAddBetaPlayer' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: Principal,
    ) => Promise<boolean>,
  'approveUser' : (arg_0: BetaPlayerId) => Promise<boolean>,
  'checkPlayerAdded' : () => Promise<boolean>,
  'deleteAllCodes' : () => Promise<boolean>,
  'deleteUser' : (arg_0: Principal) => Promise<[] | [BetaPlayerData]>,
  'deleteUserCodes' : (arg_0: Principal) => Promise<[] | [BetaPlayerNFTs]>,
  'getAllCodes' : () => Promise<[] | [BetaPlayerNFTs]>,
  'getAllCodesAv' : () => Promise<Array<[bigint, NFTType]>>,
  'getAllCodesCh' : () => Promise<Array<[bigint, NFTType]>>,
  'getAllCodesNum' : () => Promise<bigint>,
  'getAllUsers' : () => Promise<Array<[BetaPlayerId, BetaPlayerData]>>,
  'getAllUsersNum' : () => Promise<bigint>,
  'getBetaData' : () => Promise<string>,
  'getBetaPlayer' : () => Promise<[] | [BetaPlayerData]>,
  'getUserData' : (arg_0: BetaPlayerId) => Promise<
      Array<[[] | [BetaPlayerData], [] | [BetaPlayerNFTs]]>
    >,
  'whoAmI' : () => Promise<Principal>,
}
export interface _SERVICE extends NFTsBeta {}
