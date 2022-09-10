export default function ToolBadge(props: { name: string }) {
  return (
    <div className="bg-orange-400 w-fit rounded-full mr-2">
      <span className="font-bold text-xs px-3 py-2 text-white">
        {props.name}
      </span>
    </div>
  );
}
