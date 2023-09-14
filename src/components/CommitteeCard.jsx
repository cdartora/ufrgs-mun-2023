import TopicButton from "./TopicButton";

function CommitteeCard({ committee, isOdd }) {
  const { title, imgUrl, summary, topicA, topicB } = committee;

  return (
    <div className="pb-20">
      <div
        className={
          "flex items-end justify-start w-full " +
          (isOdd ? "flex-row-reverse text-right" : "text-left")
        }
      >
        <div className="flex flex-col text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5">
          <span className="font-extrabold">{title[0]}</span>
          <span className="font-light">{title[1]}</span>
        </div>
        <img
          src={imgUrl}
          className="w-72"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>
      <div>
        <pre className="font-light  text-darkTone text-justify">{summary}</pre>
      </div>
    </div>
  );
}

export default CommitteeCard;
