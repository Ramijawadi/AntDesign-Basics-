
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
<ConfigProvider theme={{

  inherit: false 
}}>

     <Radio>Radio without theme</Radio>
     </ConfigProvider>
     <Checkbox>Checkbox</Checkbox>
     <Input placeholder='write here ...' />
     <Select placeholder='select' options={[
{label:"option1", 
value:'options1'},
{label:"option2", 
value:'options2'},
{label:"option3", 
value:'options3'},


     ]}  ></Select>


<Table columns={[{ title:"Column",  dataIndex:'col'}]} dataSource={[{col: "value1"}]} />

        </Space>     

     </ConfigProvider>
    </div>
  );
}

export default App;
