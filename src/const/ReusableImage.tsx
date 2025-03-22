import { Box } from "@mui/material";

interface ImageProps {
    src: string;
    alt: string;
}

const ReusableImage: React.FC<ImageProps> = ({ src, alt }) => {
    return (
        <Box sx={{ mt: 4, textAlign: "center" }}>
            <img
                src={src}
                alt={alt}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
            />
        </Box>
    );
};

export default ReusableImage;
