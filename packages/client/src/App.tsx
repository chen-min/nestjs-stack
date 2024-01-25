import { xd } from "@lowcode/share";
import { Button } from "antd";

function App() {
  return (
    <div>
      <Button type="primary">点击</Button>
      <div className="text-red-800">{xd}</div>
    </div>
  );
}

export default App;
