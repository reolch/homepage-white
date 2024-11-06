import React from 'react';
import './AboutSection.css'; // スタイルシートをインポート

const TrainingSection = () => {
  return (
    <section className="training-section">
      <div className="training-content">
        <h2 className="training-title noto-serif-jp-bold">ウェイトトレーニング</h2>
        <p className="training-description noto-serif-jp-regular">
        理想の身体をつくる為には、重りを使ったウェイトトレーニングが最も効果的です。<br />
        </p>
        <p className="training-description noto-serif-jp-regular">
        下半身を中心としたトレーニングを取り入れ、大筋群を効果的に鍛えることで、基礎代謝が上がり、痩せやすい身体を手に入れることができます。
        </p>

        <h2 className="training-title noto-serif-jp-bold">有酸素運動</h2>
        <p className="training-description noto-serif-jp-regular">
          地方在住の方は、普段の生活から車移動が多く、有酸素運動をする機会が少ないため、都市部在住の方に比べて一日の消費カロリーが少ない傾向にあります。
        </p>
        <p className="training-description noto-serif-jp-regular">
          当サロンでは、有酸素運動を取り入れることで、体脂肪率を効率よく落とすことができ、また日常生活で疲労しにくいスタイリッシュな身体をつくります。
        </p>

        <h2 className="training-title noto-serif-jp-bold">HIIT</h2>
        <p className="training-description noto-serif-jp-regular">
        1セット20〜30秒のインターバルトレーニングを約2分から4分間連続して行うことで、従来の有酸素運動の約9倍もの脂肪燃焼効果を得ることができます。
        </p>
        <p className="training-description noto-serif-jp-regular">
          また、体内のミトコンドリアの量が増え、基礎代謝が上がることで太りづらい身体を作り上げることができます。
        </p>
      </div>
    </section>
  );
};

export default TrainingSection;
