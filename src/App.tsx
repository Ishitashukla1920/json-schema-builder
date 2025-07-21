import React from 'react';
import { ConfigProvider } from 'antd';
import SchemaBuilder from './components/SchemaBuilder/SchemaBuilder';
import 'antd/dist/reset.css';
import './App.css';

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <div className="App">
        <SchemaBuilder />
      </div>
    </ConfigProvider>
  );
};

export default App;
