export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-blue-100 p-20">{children}</div>;
}
