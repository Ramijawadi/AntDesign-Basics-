
import './App.css';
import { Button , Input ,Select , Radio , Checkbox , Table , ConfigProvider, Space } from 'antd'
function App() {
  return (
    <div className="App">
      <ConfigProvider  theme={{

token : {

  colorPrimary:"green",
},

      }}>
        <Space direction='vertical' size={12}>
     <Button type='primary'>Theme Button</Button>
     <Radio>Radio</Radio>
     <Checkbox>Checkbox</Checkbox>
        </Space>     

     </ConfigProvider>
    </div>
  );
}

export default App;
