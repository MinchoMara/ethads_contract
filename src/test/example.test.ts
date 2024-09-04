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

  it("Client : Register client", async () => {
    const client1 = users[3];
    const client2 = users[4];

    const tx1 = await adManager
      .connect(client1)
      .registerClient(0, "https://ipfs.io/ipfs/QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN", "test 1", "test info", {
        value: ethers.utils.parseEther("1.0"),
      });
    // contract에 console해서 이더 수량 파악하기
    const receipt1 = await tx1.wait();

    const tx2 = await adManager
      .connect(client2)
      .registerClient(0, "https://ipfs.io/ipfs/QmZULkCELmmk5XNfCgTnCyFgAVxBRBXyDHGGMVoLFLiXEN", "test 1", "test info", {
        value: ethers.utils.parseEther("1.0"),
      });
    // contract에 console해서 이더 수량 파악하기
    const receipt2 = await tx2.wait();

    console.log(receipt1.events);
    const event = receipt1.events?.find((event) => event.event === "AdRegistered");
    if (event) {
      console.log("Event data:", event.args);
    }
  });

  it("View : get client", async () => {
    const tx = await adManager.getClientInfo(0);
    console.log(`getClient Info`);
    console.log(`${tx}`);
  });

  it("Publisher : Allow client", async () => {
    // allow ad 1
    const publisher = users[0];
    console.log(`publisher : ${publisher.address}`);
    const tx = await adManager.connect(publisher).allowAd(0, users[3].address);

    const receipt1 = await tx.wait();

    const event = receipt1.events?.find((event) => event.event === "AdRegistered");
    if (event) {
      console.log("Event data:", event.args);
    }
  });

  after(async () => {
    await network.provider.send("evm_revert", [initialSnapshotId]);
  });
});
