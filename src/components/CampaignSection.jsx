import React from 'react';
import './CampaignSection.css'; // スタイルシートのインポート

const CampaignSection = () => {
  return (
    <section className="campaign-section">
      <div className="campaign-content">
        <h2 className="campaign-title noto-serif-jp-bold">新規入会キャンペーン</h2>
        <p className="campaign-description noto-serif-jp-regular">
          今ならエステの新規入会で、特別なキャンペーンをご用意しています。<br />
          美しさと健康を手に入れるチャンスをお見逃しなく！
        </p>
        <p className="campaign-price noto-serif-jp-bold">
          初回限定価格 ￥22,000~
        </p>
        <ul className="campaign-benefits noto-serif-jp-regular">
          <li>🌟 初回トリートメント無料体験</li>
          <li>💎 2回目以降のトリートメントが20%オフ</li>
          <li>🎁 入会時に美容グッズをプレゼント</li>
        </ul>
        <a href="/signup" className="btn btn-primary noto-serif-jp-regular">今すぐ申し込む</a>
      </div>
    </section>
  );
};

export default CampaignSection;
