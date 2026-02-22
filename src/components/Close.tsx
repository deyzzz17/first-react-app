interface Props {
  onClose: () => void;
}

function Close({ onClose }: Props) {
  return (
    <button
      className="btn-close"
      data-bs-dismiss="alert"
      onClick={onClose}
    ></button>
  );
}

export default Close;
