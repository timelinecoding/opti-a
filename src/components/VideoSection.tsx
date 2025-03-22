import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle"; // You can use an icon for the play button

export default function VideoSection() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <Box sx={{ mt: 12, textAlign: "center" }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#ffc000",
                    letterSpacing: 2,
                    "@media (max-width: 600px)": {
                        fontSize: "1.5rem",
                        fontFamily: "cursive",
                    },
                }}
            >
                Featured Video
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Box sx={{ position: "relative", width: "100%", maxWidth: 800 }}>
                    {!showVideo ? (
                        <Box
                            sx={{
                                position: "relative",
                                cursor: "pointer",
                                width: "100%",
                                borderRadius: 8,
                            }}
                            onClick={() => setShowVideo(true)}
                        >
                            <img
                                src="/opti-A_thumbnail.jpeg"
                                alt="Video Thumbnail"
                                style={{
                                    width: "100%",
                                    borderRadius: 8,
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    fontSize: 50,
                                }}
                            >
                                <PlayCircleIcon fontSize="inherit" />
                            </Box>
                        </Box>
                    ) : (
                        <iframe
                            src="https://www.youtube.com/embed/kkZ5bO0Tx64?autoplay=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                width: "100%",
                                height: "450px",
                                borderRadius: 8,
                                border: "none",
                            }}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
}
