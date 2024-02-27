export function VideoCard(props: any) {
  return (
    <div className="p-4">
      <img src={props.image} alt="Some text" className="rounded-lg"></img>
      <div className="grid grid-cols-12">
        <div className="col-span-2 pt-5">
          <img src={props.thumb} className="rounded-full w-15 h-15 pl-5" />
        </div>

        <div className="col-span-10 pt-5 pl-4">
          <div className=" text-xl">{props.title}</div>
          <div className=" text-base text-gray-400">{props.author}</div>
          <div className=" text-base text-gray-500">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
