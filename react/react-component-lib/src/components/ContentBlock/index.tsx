const ContentBlock: React.FC = ({ children, ...rest }) => {
    return (
        <div className="block" {...rest}>
            {children}
        </div>
    );
};

export default ContentBlock;
