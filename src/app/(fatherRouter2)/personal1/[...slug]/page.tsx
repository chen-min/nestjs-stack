export default function Page({ params }: { params: { slug: string[] } }) {
  return <div className="min-h-screen">当前动态路径: {params.slug}</div>;
}
