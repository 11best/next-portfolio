export default function ToolBadge(props: { name: string }) {
  return (
    <div className="bg-orange-300 w-fit rounded-full mr-2 mt-2">
      <span className="font-bold text-xs px-3 text-white">{props.name}</span>
    </div>
  );
}
