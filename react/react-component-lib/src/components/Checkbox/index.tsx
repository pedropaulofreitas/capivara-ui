interface ICheckbox {
  name: string;
  value: string;
  isDisabled?: boolean;
  onChange: (s: string) => void;
}

const Checkbox: React.FC<ICheckbox> = ({
  name,
  value,
  onChange,
  isDisabled = false,
}) => {
  return (
    <div>
      <label className="checkbox">
        <input
          type="checkbox"
          onClick={() => onChange(value)}
          disabled={isDisabled}
        />
        <span className="ml-1">{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
