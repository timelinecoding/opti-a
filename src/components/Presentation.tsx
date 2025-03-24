import { Box, Button, Typography, Modal, useMediaQuery, useTheme } from "@mui/material";
import { SectionTitle } from "../const/SectionTitle.tsx";
import { colors } from "../const/Colors.tsx";
import { useState } from "react";

const buttonStyles = {
    backgroundColor: colors.primary,
    color: "white",
    px: 3,
    py: 1.5,
    "&:hover": {
        "&:hover": {backgroundColor: "#796d0a", color: 'white'},
    },
};

export default function Presentation() {
    const [previewVisible, setPreviewVisible] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handlePreviewClick = () => setPreviewVisible(true);

    const handleCancelPreview = () => setPreviewVisible(false);

    return (
        <Box
            sx={{
                mt: 8,
                backgroundColor: colors.cardBackground,
                borderRadius: 2,
                padding: 4,
                justifyContent: "center",
            }}
        >
            <SectionTitle title="Presentation Slides" />
            <Typography sx={{ mt: 2, color: colors.textMuted }}>
                Download our presentation slides to explore our vision and designs in more detail.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                <Button onClick={handlePreviewClick} sx={buttonStyles}>
                    Preview Slides
                </Button>
                <Button component="a" href="/OptiA_Presentation.pdf" download sx={buttonStyles}>
                    Download Slides
                </Button>
            </Box>

            {/* Conditional PDF Preview or Mobile Message */}
            <Modal open={previewVisible} onClose={handleCancelPreview}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: isMobile ? "90%" : "80%",
                        backgroundColor: colors.cardBackground,
                        boxShadow: 24,
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    {isMobile ? (
                        <Box
                            sx={{
                                backgroundColor: '#333', // Darker background color
                                color: '#fff', // White text for contrast
                                borderRadius: 2, // Rounded corners
                                padding: 2, // Padding for spacing
                                boxShadow: 3, // Light shadow for depth
                                maxWidth: 400, // Max width for the box
                                mx: 'auto', // Centering the box horizontally
                            }}
                        >
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: colors.accent,
                            }}>
                                Preview Disabled on Mobile
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                                For the best experience, please download the slides or view them on a desktop.
                            </Typography>
                            <Button
                                onClick={handleCancelPreview}
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#555', // Darker button color
                                    color: '#fff', // White text for button
                                    '&:hover': {
                                        backgroundColor: '#444', // Darker shade on hover
                                    },
                                }}
                            >
                                Close
                            </Button>
                        </Box>

                    ) : (
                        <Box sx={{ position: "relative" }}>
                            <iframe
                                src="/OptiA_Presentation.pdf"
                                width="100%"
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
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    },
                                }}
                            >
                                X
                            </Button>
                        </Box>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}
