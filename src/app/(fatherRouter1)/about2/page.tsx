async function About() {
  async function getData() {
    const response = await fetch(
      "https://api-v2.xdclass.net/api/rank/v1/hot_product"
    );

    if (!response.ok) throw new Error("未找到");

    const toJson = await response.json();

    if (!toJson.data) throw new Error("404");

    return toJson.data;
  }

  const data = await getData();
  const title = data[0].productTitle;
  return (
    <div className="min-h-screen">
      关于的页面2
      <div>{title}</div>
    </div>
  );
}
export default About;
