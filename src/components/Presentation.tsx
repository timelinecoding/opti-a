import { Box, Button, Typography } from "@mui/material";
import { SectionTitle } from "../const/SectionTitle.tsx";
import { colors } from "../const/Colors.tsx";

interface PresentationProps {
    setIsModalOpen: (arg0: boolean) => void;
}

const buttonStyles = {
    backgroundColor: colors.primary,
    color: "white",
    px: 3,
    py: 1.5,
    "&:hover": {
        backgroundColor: colors.primaryHover,
    },
};

export default function Presentation({ setIsModalOpen }: PresentationProps) {
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
                    onClick={() => setIsModalOpen(true)}
                    sx={buttonStyles}
                >
                    Preview Slides
                </Button>
                <Button
                    component="a"
                    href="/path/to/slides.pptx"
                    download
                    sx={buttonStyles}
                >
                    Download Slides
                </Button>
            </Box>
        </Box>
    );
}
