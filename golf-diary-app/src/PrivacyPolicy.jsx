import './App.css';

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <button className="back-button" onClick={onBack}>← 戻る</button>
        <h1>プライバシーポリシー</h1>
      </header>
      
      <main className="privacy-content">
        <section>
          <h2>1. 収集する情報</h2>
          <p>本アプリは、ユーザーが入力した練習記録やスコアなどの情報を収集します。これらのデータは、ユーザーのデバイス内にのみ保存され、外部サーバーに送信されることはありません。</p>
        </section>

        <section>
          <h2>2. 情報の利用目的</h2>
          <p>収集した情報は、以下の目的でのみ利用します。</p>
          <ul>
            <li>アプリ内での記録表示と管理</li>
            <li>ユーザー体験の向上</li>
          </ul>
        </section>

        <section>
          <h2>3. 情報の管理</h2>
          <p>本アプリは、ユーザーのプライバシーを尊重し、収集した情報を適切に管理します。法令に基づく場合を除き、第三者に提供することはありません。</p>
        </section>

        <section>
          <h2>4. お問い合わせ</h2>
          <p>プライバシーポリシーに関するお問い合わせは、アプリ内のお問い合わせフォームまたは開発者までご連絡ください。</p>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 ゴルフ成長記</p>
      </footer>
    </div>
  );
}
