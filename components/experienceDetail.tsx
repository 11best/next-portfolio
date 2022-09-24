export default function ExperienceDetail(props: {
  start?: boolean;
  end?: boolean;
  companyName: string;
  time: string;
  role: string;
  detail: string;
}) {
  return (
    <>
      <div className="flex">
        <div className="w-[50px] lg:w-[100px] flex justify-center items-center relative">
          <div className="bg-orange-200 rounded-full w-3 h-3"></div>
          {props.start && (
            <div className="bg-orange-200 w-[3px] h-[15px] absolute bottom-0"></div>
          )}
          {props.end && (
            <div className="bg-orange-200 w-[3px] h-[15px] absolute top-0"></div>
          )}
          {!props.start && !props.end && (
            <div className="bg-orange-200 w-[3px] h-[30px] absolute"></div>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-baseline">
          <p className="text-sm lg:text-lg font-semibold text-orange-400">
            {props.companyName}
          </p>
          <p className="md:ml-2 text-sm lg:text-md font-semibold text-slate-400">
            <span className="hidden md:inline">- </span> {props.role}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[100px] flex justify-center items-center">
          {props.end ? (
            <div></div>
          ) : (
            <div className="bg-orange-200 w-[3px] h-full"></div>
          )}
        </div>
        <div className="">
          <span className="text-sm text-slate-400">{props.time}</span>
          <p className="break-word text-sm lg:text-base w-[270px] md:w-[462px] lg:w-[600px]">
            {props.detail}
          </p>
        </div>
      </div>
      {props.end || (
        <div className="w-[50px] lg:w-[100px] h-[30px] flex justify-center items-center">
          <div className="bg-orange-200 w-[3px] h-8"></div>
        </div>
      )}
    </>
  );
}
