import React from 'react';
import './AboutSection.css'; // スタイルシートをインポート

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title noto-serif-jp-bold">About Us</h2>
        <p className="about-description noto-serif-jp-regular">
          whiteは宮崎初、<br />
          『パーソナルトレーニング』『痩身エステ』『整体院』を組み合わせた<br />
          ひとつの場所で完結する痩身エステサロンです。
        </p>
        <p className="about-description noto-serif-jp-regular">
          お客様一人ひとりの目標や目的、運動レベルに合わせた<br />
          トレーニング指導、骨盤矯正、痩身エステのサービス、<br />
          至高の時間を提供いたします。<br />

          お客様が美を追求できる空間を創ります。
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
