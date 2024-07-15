import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 flex gap-4">
        <Link href="/play">遊戲玩法</Link>
        <Link href="/mode">遊戲模式</Link>
        <Link href="/multi">多人模式</Link>
        <Link href="/history">版本歷史</Link>
      </div>
      <h1 className="text-4xl mb-4">介紹</h1>
      <div className="flex flex-col">
        <p>
          《Minecraft》（英語：Minecraft，中國大陸譯作「我的世界」）是微軟旗下Mojang
          Studios開發的沙盒遊戲。遊戲中，玩家能在一個3D世界內與方塊或生物進行互動。遊戲中的特色功能包括探索世界、採集資源、合成物品及生存冒險等。《Minecraft》有多種模式：生存模式中，玩家必須維持生命並開採資源以打造自己的世界；創造模式中，玩家擁有無限的資源並可自由地創作建築。
          《Minecraft》最早由瑞典遊戲設計師馬庫斯·佩爾松（遊戲名為Notch[18]）開發，之後由其成立的Mojang
          AB開發，主機版則與4J
          Studios合作開發。遊戲最初使用Java語言編寫，其Alpha版本在2010年6月30日公開發佈，經逐步更新之後正式版本1.0.0於2011年11月18日發佈。Android版和iOS版分別於2011年10月7日及11月17日發售。2012年5月9日，Mojang透過Xbox
          Live Arcade向Xbox
          360使用者發售《Minecraft》。2013年12月17日及2014年9月4日，遊戲亦先後登錄PlayStation
          3、PlayStation 4、PlayStation 5平台。Xbox
          One版本於同年9月5日發佈。PlayStation
          Vita版本亦於2014年10月14日起開售。Windows
          Phone版本於同年10月10日開始銷售[19]。2015年12月17日，Wii
          U版本發售。2017年5月11日，任天堂Switch版本發售。2018年9月20日，新任天堂3DS版本在全球發售。
        </p>
        <img
          src="/image/right.png"
          alt="logo"
          className="w-[50%] self-center"
        />
      </div>
    </main>
  );
}
