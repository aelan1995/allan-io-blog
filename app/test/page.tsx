export default function TestPage({
  searchParams,
}: {
  searchParams?: { foo?: string };
}) {
  const foo = searchParams?.foo ?? "none";
  return <div className="text-white">Foo: {foo}</div>;
}
