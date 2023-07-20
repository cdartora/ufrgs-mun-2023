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
        <p className="font-light text-sm text-black text-justify">{summary}</p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <TopicButton data={topicA} title="Tópico A" imgUrl={imgUrl} />
          <TopicButton data={topicB} title="Tópico B" imgUrl={imgUrl} />
        </div>
      </div>
    </div>
  );
}

export default CommitteeCard;
