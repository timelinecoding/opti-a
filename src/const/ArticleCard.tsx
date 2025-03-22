import {Card, CardContent, Typography} from "@mui/material";


interface ArticleCardProps {
    handleOpenModal: () => void;
    title: string;
    description: string;
}

export default function ArticleCard({handleOpenModal,
                                        title,
                                        description,
                                    }: ArticleCardProps) {

    return (
        <Card
            sx={{
                backgroundColor: "#1c1f28",  // Dark background to fit the overall theme
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                    backgroundColor: "#262c34", // Slightly lighter background on hover
                },
            }}
        >
            <CardContent>
                <Typography variant="h6" sx={{color: "#ffc000", fontWeight: "bold"}}>
                    {title}
                </Typography>
                <Typography sx={{mt: 1, color: "#b0b3b8"}}>
                    {description}
                </Typography>
                <Typography
                    component="a"
                    onClick={handleOpenModal}
                    sx={{
                        mt: 2,
                        display: "block",
                        color: "#f20062",  // Bright accent color for links
                        "&:hover": {color: "#d10050"},
                    }}
                >
                    Read more
                </Typography>
            </CardContent>
        </Card>
    );
}