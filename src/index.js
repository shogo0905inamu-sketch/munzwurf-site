import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * React 18の新しいRoot APIを使用してアプリケーションをレンダリングします。
 * src/App.js をメインコンポーネントとして読み込みます。
 */

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Ensure your public/index.html has <div id='root'></div>");
}
