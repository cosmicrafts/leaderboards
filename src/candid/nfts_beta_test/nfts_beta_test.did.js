export const idlFactory = ({ IDL }) => {
  const NFTCode = IDL.Record({ 'id' : IDL.Nat, 'code' : IDL.Text });
  const NFTType__1 = IDL.Record({
    'code' : NFTCode,
    'shipName' : IDL.Text,
    'faction' : IDL.Text,
    'batch' : IDL.Nat,
  });
  const CodesList = IDL.Vec(NFTType__1);
  const BetaPlayerId = IDL.Principal;
  const BetaPlayerData = IDL.Record({
    'id' : IDL.Principal,
    'allowed' : IDL.Nat,
    'faction' : IDL.Nat,
    'wallet' : IDL.Text,
  });
  const BetaPlayerNFTs = IDL.Record({
    'nftsCodes' : IDL.Vec(NFTCode),
    'nftChar' : NFTCode,
  });
  const NFTType = IDL.Record({
    'code' : NFTCode,
    'shipName' : IDL.Text,
    'faction' : IDL.Text,
    'batch' : IDL.Nat,
  });
  const NFTsBeta = IDL.Service({
    'addBetaPlayer' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Bool], []),
    'addCharsCodes' : IDL.Func([CodesList], [IDL.Bool], []),
    'addCodes' : IDL.Func([CodesList], [IDL.Bool], []),
    'adminAddBetaPlayer' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Principal],
        [IDL.Bool],
        [],
      ),
    'approveUser' : IDL.Func([BetaPlayerId], [IDL.Bool], []),
    'checkPlayerAdded' : IDL.Func([], [IDL.Bool], ['query']),
    'deleteAllCodes' : IDL.Func([], [IDL.Bool], []),
    'deleteUser' : IDL.Func([IDL.Principal], [IDL.Opt(BetaPlayerData)], []),
    'deleteUserCodes' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(BetaPlayerNFTs)],
        [],
      ),
    'getAllCodes' : IDL.Func([], [IDL.Opt(BetaPlayerNFTs)], ['query']),
    'getAllCodesAv' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, NFTType))],
        ['query'],
      ),
    'getAllCodesCh' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, NFTType))],
        ['query'],
      ),
    'getAllCodesNum' : IDL.Func([], [IDL.Nat], ['query']),
    'getAllUsers' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(BetaPlayerId, BetaPlayerData))],
        ['query'],
      ),
    'getAllUsersNum' : IDL.Func([], [IDL.Nat], ['query']),
    'getBetaData' : IDL.Func([], [IDL.Text], []),
    'getBetaPlayer' : IDL.Func([], [IDL.Opt(BetaPlayerData)], ['query']),
    'getUserData' : IDL.Func(
        [BetaPlayerId],
        [IDL.Vec(IDL.Tuple(IDL.Opt(BetaPlayerData), IDL.Opt(BetaPlayerNFTs)))],
        ['query'],
      ),
    'whoAmI' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return NFTsBeta;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
