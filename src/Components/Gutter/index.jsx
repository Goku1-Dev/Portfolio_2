import "./index.scss";

export const Gutter = ({ children }) => {
    return (
        <div className="gutter">
            <div className="children">{children}</div>
        </div>
    );
};

export default Gutter;