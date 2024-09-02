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

  it("Publisher : Register ad", async () => {
    const tx1 = await adManager
      .connect(users[0])
      .registerAd(
        "https://ipfs.io/ipfs/QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN",
        "project project",
        "Arbitrum Sepolia",
        "Center",
        300,
        500,
        1,
        30,
        50000,
        1 * (10 ^ 18),
      );
    console.log(`publisher : ${users[0].address}`);
    const tx2 = await adManager
      .connect(users[1])
      .registerAd(
        "https://ipfs.io/ipfs/QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN",
        "project 2",
        "Arbitrum Sepolia",
        "Center",
        400,
        500,
        1,
        30,
        5000,
        1 * (10 ^ 18),
      );

    const receipt1 = await tx1.wait();

    console.log(`receipt1.events`);
    const event = receipt1.events?.find((event) => event.event === "AdRegistered");
    if (event) {
      console.log("Event data:", event.args);
    }
  });

  it("View : get all ad info", async () => {
    const tx = await adManager.getAllAdInfo();
    console.log(tx);
  });

  after(async () => {
    await network.provider.send("evm_revert", [initialSnapshotId]);
  });
});
