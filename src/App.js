import useToken from "antd/es/theme/useToken";
import "./App.css";
import {
  Button,
  Input,
  Select,
  Radio,
  Checkbox,
  Table,
  ConfigProvider,
  Space,
  Switch,
  theme,
} from "antd";
function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "green",
            colorTextBase:"green"
          },

          components : {
            Checkbox :{

              colorPrimary: "purple",
            }
          }
        }}
      >
        <Space direction="vertical" size={12}>
          <Button type="primary">Theme Button</Button>
          <Radio>Radio Green Theme </Radio>
          <ConfigProvider
            theme={{
              inherit: false,
            }}
          >
            <Radio>Radio without theme</Radio>
          </ConfigProvider>

          <ConfigProvider
            theme={{
              inherit: true,
              token : {
           colorPrimary:'purple'
            }}}
          >
            <Radio>Radio purple theme</Radio>
          </ConfigProvider>
<Switch checkedChildren="ON" unCheckedChildren="OFF" />
          <Checkbox>Checkbox</Checkbox>
          <Input placeholder="write here ..." />
          <Select
            placeholder="select"
            options={[
              { label: "option1", value: "options1" },
              { label: "option2", value: "options2" },
              { label: "option3", value: "options3" },
            ]}
          ></Select>

          <Table
            columns={[{ title: "Column", dataIndex: "col" }]}
            dataSource={[{ col: "value1" }]}
          />

          <Para />
        </Space>
      </ConfigProvider>
    </div>
  );
}


function Para() {

  const {token} = theme.useToken();
  return <h3 style={{color : token.colorPrimary}} >H3 using Token theme </h3>

}
export default App;
