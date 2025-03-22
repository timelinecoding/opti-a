import { Box, Typography } from "@mui/material";

export default function VideoSection() {
    return (
        <Box sx={{ mt: 12, textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#ffc000", letterSpacing: 2 }}>
                Featured Video
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Box sx={{ position: "relative", paddingTop: "40%", width: "100%", maxWidth: 800 }}>
                    <video
                        controls
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            // height: "100%",
                            borderRadius: 8
                        }}
                    >
                        <source src="/opti-A_subtitles.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
            </Box>
        </Box>
    );
}
