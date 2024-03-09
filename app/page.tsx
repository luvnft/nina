"use client";
import { NoRampOneClick } from "norampkit";

export default function Page() {
  return (
    <>
      <main>
        <div className="text-3xl font-bold text-center mt-8">
          <h1>📍M.L.K DRIVE LNE✨</h1>
          <div className="flex justify-center p-12">
            <img src="https://i.imgur.com/JZUtn8S.jpg" alt="MLK DRIVE LNE" width="500" height="500" />
          </div>
          <div className="flex justify-center">
            <NoRampOneClick priceId="price_0cmL3s1FESwuav5AnoI0a1" /> {/* Create price in your dashboard or using our API */}
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-medium">💰 Price: $11 USD</p>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-medium">🟪 Block: Polygon</p>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-medium"> 📜 History: Own a MLK DRIVE LNE title deed,
            one of the rarest ATL5D LNEs with only 44 in the world. 🔎 #🍑🅰️👑 to find the LNElord.</p>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-medium">
             ▶️ Follow <a href="https://www.tiktok.com/@w3bars" target="_blank"><b>@W3BARS</b></a>
               and use this <a href="https://www.tiktok.com/t/ZPR3jSWVk/" target="_blank"><b>LRG</b></a> 
               TikTok Effect to play Tokenopoly.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}