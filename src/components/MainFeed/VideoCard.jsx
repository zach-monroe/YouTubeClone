const VideoCard = ({ thumb, videoId, title, desc }) => {
  return <div className="video-card">
    <div>
      <a href={`www.youtube/watch?v=${videoId}`}>
        <img src={thumb} /></a>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>

  </div>
}

export default VideoCard
