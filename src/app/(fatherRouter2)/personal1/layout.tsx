export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header> 头部共享的组件 </header>
      {children}
    </div>
  );
}
