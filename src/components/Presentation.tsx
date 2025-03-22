import { Box, Button, Typography } from "@mui/material";
import { SectionTitle } from "../const/SectionTitle.tsx";
import { colors } from "../const/Colors.tsx";
import { useState } from "react";

const buttonStyles = {
    backgroundColor: colors.primary,
    color: "white",
    px: 3,
    py: 1.5,
    "&:hover": {
        backgroundColor: colors.primaryHover,
    },
};

export default function Presentation() {
    const [previewVisible, setPreviewVisible] = useState(false);

    const handlePreviewClick = () => {
        setPreviewVisible(true);
    };

    const handleCancelPreview = () => {
        setPreviewVisible(false);
    };

    return (
        <Box
            sx={{
                mt: 8,
                backgroundColor: colors.cardBackground,
                borderRadius: 2, // Optional: Add rounded corners for the background
                padding: 4,
                justifyContent: "center"
            }}
        >
            <SectionTitle title="Presentation Slides" />
            <Typography sx={{ mt: 2, color: colors.textMuted }}>
                Download our presentation slides to explore our vision and designs in more detail.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                    onClick={handlePreviewClick}
                    sx={buttonStyles}
                >
                    Preview Slides
                </Button>
                <Button
                    component="a"
                    href="/Opti_a_Presentation.pdf"
                    download
                    sx={buttonStyles}
                >
                    Download Slides
                </Button>
            </Box>

            {/* Conditional PDF Preview */}
            {previewVisible && (
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", position: "relative", overflow: "auto", // Add scrollbars if needed
                }}>
                    <iframe
                        src="/Opti_a_Presentation.pdf"
                        width="800"
                        height="600"

                        style={{ border: "1px solid" }}
                    />
                    <Button
                        onClick={handleCancelPreview}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.8)"
                            }
                        }}
                    >
                        X
                    </Button>
                </Box>
            )}
        </Box>
    );
}
