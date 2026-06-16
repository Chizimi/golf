import { useState } from 'react';
import './App.css';
import heroImage from './assets/生成AI作成ゴルフ画像.png';
import PrivacyPolicy from './PrivacyPolicy';

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ゴルフ成長記</h1>
        <div className="hero-container">
          <img src={heroImage} alt="Golf Field" className="hero-image" />
        </div>
      </header>

      <main className="app-main">
        <section className="intro">
          <p>
            このブログは、私の日々の<strong>ゴルフ成長記録</strong>をつづる場所です。
            初心者向けの<strong>練習メニュー</strong>を試行錯誤しながら、
            まずは<strong>3ヶ月でゴルフを上達させる方法</strong>を見つけるのが今の目標。
            いつかは<strong>100切り</strong>を達成できるよう、一歩ずつ進んでいきたいと思っています。
          </p>
        </section>

        <section className="records-section">
          <h2>最新情報</h2>
          <div className="card">
            <div className="card-header">
              <span className="date">2026/06/15</span>
              <span className="tag">打ちっ放し</span>
            </div>
            <p className="card-content">
              <strong>打ちっ放し</strong>練習場にて、本日は<strong>ドライバー</strong>を重点的に打ち込みました。
              最高<strong>飛距離</strong>は180yd！<strong>ゴルフ初心者</strong>の壁である200ydまであと少しです。<br /><br />
              
              練習では特に、<strong>スイング</strong>の安定に欠かせない<strong>重心の位置</strong>と、スムーズな<strong>腰の回転（腰の動き）</strong>に注意を払いました。
              <strong>ドライバーが飛ばない</strong>原因を一つずつ解消していくことで、少しずつ芯を捉える手応えを感じています。
              次は200ydの大台を目指して、さらなる<strong>上達のコツ</strong>を掴んでいきたいです。
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="date">2026/06/14</span>
              <span className="tag">ラウンド</span>
            </div>
            <p className="card-content">
              ついにコースデビューしてきました！結果はスコア156。
              目標の<strong>100切り</strong>まではまだ距離がありますが、自分にとっては大きな第一歩です。<br /><br />
              
              当日は<strong>ドライバーが飛ばない</strong>といった悩みへの<strong>対策</strong>も考えながら挑みましたが、練習よりは振れていた気がします。
              ただ、弾道が低くなってしまったのは、<strong>スイングが安定しない</strong>初心者ならではの課題かもしれません。<br />
              
              <strong>アイアン</strong>については、<strong>ダフりの原因</strong>を意識して振ることで、120ydを真っ直ぐ飛ばせる場面もあり手応えを感じました。
              しかし、グリーンに近づくほど力加減が難しくなり、<strong>アプローチの寄せ方の基本</strong>や、
              <strong>パターの距離感の練習方法</strong>をもっと見直す必要がありそうです。<br /><br />
              
              後半、自分の<strong>スコアが伸びない理由</strong>が少し分かった気がします。
              飛距離も大事ですが、今後はショートゲームでの<strong>上達のコツ</strong>を掴めるよう頑張ります。
            </p>
            <div className="record-image-placeholder">
              ここに初ラウンドの写真を挿入予定
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="date">2026/06/10</span>
              <span className="tag">練習</span>
            </div>
            <p className="card-content">
              アイアンでの<strong>ダフりの原因</strong>を探りながらの打ち込み練習（100球）。
              フォームを安定させて、<strong>スイングが安定しない</strong>癖を直していきたい。
              飛距離は120ヤード程度。
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="date">2026/06/11</span>
              <span className="tag">打ちっ放し</span>
            </div>
            <p className="card-content">
              アイアンの打ち込み（130yd）に加えて、ドライバーの初打ちに挑戦。
              <strong>初心者が悩むスライスの直し方</strong>を動画で見ましたが、いざ打つと本当に難しい。
              飛距離を出すための<strong>ドライバー対策</strong>は、今後の重要な課題になりそうです。
            </p>
          </div>
          <div className="card empty-state">
            <p>さらに過去の記録はありません。</p>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-links">
          <button className="footer-link" onClick={() => setShowPrivacy(true)}>
            プライバシーポリシー
          </button>
        </div>
        <p>&copy; 2026 ゴルフ成長記</p>
      </footer>
    </div>
  );
}
