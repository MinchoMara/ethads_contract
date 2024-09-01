import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { setup } from "./setup";
import { AdManager } from "@typechains";
import { ethers, network } from "hardhat";

describe("adManager contract test", () => {
  /* Signer */
  let admin: SignerWithAddress;
  let users: SignerWithAddress[];

  /* 컨트랙트 객체 */
  let adManager: AdManager;

  /* 테스트 스냅샷 */
  let initialSnapshotId: number;
  let snapshotId: number;

  before(async () => {
    /* 테스트에 필요한 컨트랙트 및 Signer 정보를 불러오는 함수 */
    ({ admin, users, adManager } = await setup());
    initialSnapshotId = await network.provider.send("evm_snapshot");
  });

  after(async () => {
    await network.provider.send("evm_revert", [initialSnapshotId]);
  });
});
