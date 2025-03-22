import {Box, Button, Paper, Typography, useMediaQuery} from "@mui/material";
import Presentation from "../components/Presentation.tsx";
import Article from "../components/Article.tsx";
import VideoSection from "../components/VideoSection.tsx";
import {TeamSection} from "../components/TeamSection.tsx";

const colors = {
    primary: "#f20062",
    primaryHover: "#d10050",
    background: "#14171e",
    cardBackground: "#1c1f28",
    accent: "#ffc000",
    textMuted: "rgba(255, 255, 255, 0.75)",
};

const SectionTitle = ({ title } : {title: string }) => (
    <Typography variant="h4" sx={{ fontWeight: "bold", textTransform: "uppercase", color: colors.accent, letterSpacing: 2,
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
        name: "John Doe",
        about: "Lead Developer with a passion for building scalable applications.",
        linkedin: "https://www.linkedin.com/in/johndoe",
        photoUrl: "https://example.com/john-photo.jpg",  // Replace with actual photo URL
    },
    {
        name: "Jane Smith",
        about: "UI/UX Designer focusing on creating intuitive user interfaces.",
        linkedin: "https://www.linkedin.com/in/janesmith",
        photoUrl: "https://example.com/jane-photo.jpg",  // Replace with actual photo URL
    },
    {
        name: "Sam Lee",
        about: "Project Manager with a knack for team collaboration and agile methodologies.",
        linkedin: "https://www.linkedin.com/in/samlee",
        photoUrl: "https://example.com/sam-photo.jpg",  // Replace with actual photo URL
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
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>
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

            <SectionTitle title="About Us" />
            <Typography sx={{ mt: 2, color: colors.textMuted }}>
                Darker Side is a creative space where dark aesthetics and minimalism come together to offer a truly immersive experience.
            </Typography>

            <VideoSection/>

            <Article/>

            <Presentation/>


            <TeamSection title="Meet the Team" teamMembers={teamMembers} />


            {/* Footer */}
            <Box sx={{mt: 8, opacity: 0.6}}>
                &copy; 2025 Opti-A. All rights reserved.
                <Box sx={{mt: 2}}>
                    <Typography component="a" href="/terms"
                                sx={{mx: 1, textDecoration: "underline", cursor: "pointer"}}>
                        Terms of Service
                    </Typography>
                    |
                    <Typography component="a" href="/privacy"
                                sx={{mx: 1, textDecoration: "underline", cursor: "pointer"}}>
                        Privacy Policy
                    </Typography>
                </Box>
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