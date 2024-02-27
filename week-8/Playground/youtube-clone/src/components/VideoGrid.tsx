import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to get rich in your 20s with One income stream",
    thumb: "thumb.png",
    image: "yt.png",
    author: "Rayyan Uddin",
    views: "20Mil",
    timestamp: "13 days ago",
  },
  {
    title: "Some X Title",
    thumb: "thumb.png",
    image: "yt.png",
    author: "SomebOdy Else",
    views: "13K",
    timestamp: "1 hour ago",
  },
  {
    title: "y things to DO",
    thumb: "thumb.png",
    image: "yt.png",
    author: "Zombie Youtuber",
    views: "-120K",
    timestamp: "15 Years ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <VideoCard
          title={video.title}
          thumb={video.thumb}
          image={video.image}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
};
