import { Card, CardContent, Typography, Link, Avatar } from "@mui/material";
import { colors } from "./Colors.tsx";

// Define a separate style object for better readability
const cardStyles = {
    container: {
        backgroundColor: colors.cardBackground,
        padding: 2,
        borderRadius: 5,
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
    },
    content: {
        display: "flex",
        flexDirection: "column", // Change the layout to column
        alignItems: "center", // Center content horizontally
        textAlign: "center", // Optional: center text for a clean look
    },
    avatar: {
        width: 72, // Slightly larger avatar to stand out
        height: 72,
        marginBottom: 2, // Space below the avatar
    },
    title: {
        color: colors.accent,
        fontWeight: "bold",
    },
    aboutText: {
        marginTop: 1,
        color: colors.textMuted,
    },
    linkedinLink: {
        marginTop: 2,
        color: "#0e76a8",
        textDecoration: "none",
        fontSize: "0.875rem",
        "&:hover": { color: "#004182" },
    },
};

interface StyledCardProps {
    title: string;
    about: string;
    linkedin: string;
    photoUrl: string; // New prop for the profile photo
}

export const TeamCard = ({ title, about, linkedin, photoUrl }: StyledCardProps) => (
    <Card sx={cardStyles.container}>
        <CardContent sx={cardStyles.content}>
            <Avatar alt={title} src={photoUrl} sx={cardStyles.avatar} />
            <Typography variant="h6" sx={cardStyles.title}>
                {title}
            </Typography>
            <Typography sx={cardStyles.aboutText}>
                {about}
            </Typography>
            <Link href={linkedin} target="_blank" sx={cardStyles.linkedinLink}>
                Connect on LinkedIn
            </Link>
        </CardContent>
    </Card>
);
