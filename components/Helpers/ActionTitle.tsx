interface IActionTitleProp {
  textValue: string;
}

// TODO: Fix the interfaces naming violation. Might have forgotten to put 'I' the names

const ActionTitle = ({ textValue }: IActionTitleProp) => {
  return (
    <div>
      <h1>
        <span className="action-title">
            {textValue}
        </span>
      </h1>
      <style jsx>{`
        .action-title {
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 47px;
          margin: 5px;
        }
      `}</style>
    </div>
  );
};

export default ActionTitle