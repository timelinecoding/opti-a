import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import Presentation from "../components/Presentation.tsx";
import Article from "../components/Article.tsx";
import VideoSection from "../components/VideoSection.tsx";
import { TeamSection } from "../components/TeamSection.tsx";

const colors = {
    primary: "#f20062",
    primaryHover: "#d10050",
    background: "#14171e",
    cardBackground: "#1c1f28",
    accent: "#ffc000",
    textMuted: "rgba(255, 255, 255, 0.75)",
};

const SectionTitle = ({ title }: { title: string }) => (
    <Typography variant="h4" sx={{
        fontWeight: "bold", textTransform: "uppercase", color: colors.accent, letterSpacing: 2,
        fontFamily: "Roboto Slab",
        "@media (max-width: 600px)": {
            fontSize: '1.5rem',
        },
    }}>
        {title}
    </Typography>
);

const teamMembers = [
    {
        name: "Ayodeji Alli-Smith",
        linkedin: "https://www.linkedin.com/in/smith-ayo",
        photoUrl: "/smith.png",  // Replace with actual photo URL
    },
    {
        name: "Dean Terneu",
        linkedin: "https://de.linkedin.com/in/dean-terneu-134841226",
        photoUrl: "/dean.jpeg",  // Replace with actual photo URL
    },
    {
        name: "Inês Bastos",
        linkedin: "https://be.linkedin.com/in/ines-costa-bastos",
        photoUrl: "/ines.jpg",  // Replace with actual photo URL
    },
];



const Home = () => {
    const isMobile = useMediaQuery("(max-width:600px)");


    return (
        <Box
            sx={{
                minHeight: "auto",
                maxWidth: '100vw',
                backgroundColor: colors.background,
                color: "white",
                textAlign: "center",
                margin: '0 auto',
                padding: '1em',
                overflowY: 'hidden'
            }}>
            <Paper
                sx={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.background}, transparent)`,
                    borderRadius: 2,
                    overflow: "hidden",
                    mb: 8,
                }}
            >
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            color: colors.textMuted,
                            textAlign: "center",
                            fontSize: "3.5rem",
                            fontFamily: "Roboto Slab",
                            "@media (max-width: 600px)": {
                                fontSize: "2.5rem",
                            },
                        }}
                    >
                        {isMobile ? (
                            <>
                                Welcome <br />
                                to <br />
                                Opti-A
                            </>
                        ) : (
                            "Welcome to Opti-A"
                        )}
                    </Typography>
                    <Typography sx={{ mt: 2, color: colors.textMuted }}>Agentic Solution to Optimization Problems</Typography>
                </Box>
            </Paper>

            <Box
                sx={{
                    mt: 8,
                    backgroundColor: colors.cardBackground,
                    borderRadius: 2,
                    padding: 4,
                    justifyContent: "center",
                }}
            >

                <SectionTitle title="About Us" />
                <Typography sx={{ mt: 2, color: colors.textMuted }}>
                    As a team of three final-year students of Applied Computer Science specializing in AI, we developed Opti-A over the course of six weeks as part of our subject TheLab. During this project, we explored the performance of Agentic LLMs in converting natural language optimization problems into mathematical models.
                </Typography>
            </Box>
            <VideoSection />

            <Article />

            <Presentation />


            <TeamSection title="Meet the Team" teamMembers={teamMembers} />


            {/* Footer */}
            <Box sx={{ mt: 8, opacity: 0.6 }}>
                &copy; 2025 Opti-A. All rights reserved.
            </Box>

            <Button
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    backgroundColor: "#f20062",
                    color: "white",
                    borderRadius: "50%",
                    width: 48,
                    height: 48,
                    boxShadow: 3,
                    "&:hover": { backgroundColor: "#d10050" },
                    // Responsive design for smaller screens
                    "@media (max-width: 600px)": {
                        width: 20,
                        height: 40,
                        bottom: 12,
                        borderRadius: "50%",
                    },
                }}
                onClick={() => window.scrollTo(0, 0)}
            >
                ↑
            </Button>

        </Box>
    );
};

export default Home;