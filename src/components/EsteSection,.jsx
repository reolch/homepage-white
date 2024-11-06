import React from 'react';
import './AboutSection.css'; // スタイルシートをインポート

const TrainingSection = () => {
  return (
    <section className="training-section">
      <div className="training-content">
        <h2 className="training-title noto-serif-jp-bold">脂肪燃焼痩身マシン</h2>
        <p className="training-description noto-serif-jp-regular">
        熱の伝わりがはやいバイポーラ式ラジオ波を採用することで、短時間で頑固な冷え切った脂肪を芯までほぐし温めることができます。<br />
        また、身体だけではなくお顔も独自の美肌機能、青色LEDライトでお肌をキュッと引き締めます。
        <p className="training-description noto-serif-jp-regular">
        脂肪燃焼ホルモンであるリパーゼを活性化させ中性脂肪を遊離脂肪酸に分解することで、ダイエットをより効率よく進めることができます。
        </p>

        <h2 className="training-title noto-serif-jp-bold">リンパドレナージュ</h2>
        <p className="training-description noto-serif-jp-regular">
          脂肪燃焼痩身マシンでほぐした後に、流れやすくなったリンパ液や老廃物を、オイルを使ったハンドマッサージでアプローチすることにより、施術箇所の老廃物を流し、脂肪燃焼を促します。
          ただのマッサージではなく、国家資格保有者が監修するリンパドレナージュを行うことで、あなたの身体や体質に合わせた施術と至高の時間をお楽しみくださいませ。
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
