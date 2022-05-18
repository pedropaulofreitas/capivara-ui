const Box: React.FC = ({ children, ...rest}) => {
    return (
        <div className="box" {...rest}>
            {children}
        </div>
    );
};

export default Box;
