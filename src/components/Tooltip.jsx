export default function Tooltip({ x, y, children }) {
    if (!children) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: y,
                left: x,
                padding: "6px 10px",
                background: "#222",
                color: "white",
                borderRadius: "6px",
                pointerEvents: "none",
                fontSize: "12px",
                maxWidth: "220px",
                lineHeight: "1.3",
                zIndex: 9999,
            }}
        >
            {children}
        </div>
    );
}
