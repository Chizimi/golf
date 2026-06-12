import './App.css';
import heroImage from './assets/生成AI作成ゴルフ画像.png';

export default function App() {
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
          <p>ゴルフの上達を記録するためのダイアリーです。日々の練習やラウンドのスコアを記録していきます！。</p>
        </section>

        <section className="records-section">
          <h2>最新の記録</h2>
          <div className="card">
            <div className="card-header">
              <span className="date">2026/06/10</span>
              <span className="tag">練習</span>
            </div>
            <p className="card-content">アイアンの打ち込み練習。100球。フォームの安定を意識した<br>120ヤード</br>。</p>

          </div>

          <div className="card">
            <div className="card-header">
              <span className="date">2026/06/011</span>
              <span className="tag">うちっぱなし</span>
              <p className="card-content">アイアンの打ち込み(130yd)、ドライバー初うち。ドライバーがとても難しい</p>
            </div>
          </div>
          <div className="card empty-state">
            <p>さらに過去の記録はありません。</p>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 ゴルフ成長記</p>
      </footer>
    </div>
  );
}
