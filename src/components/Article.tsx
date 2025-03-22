import { Box, Button, Modal, Typography } from "@mui/material";
import { SectionTitle } from "../const/SectionTitle.tsx";
import { useState } from "react";
import ArticleCard from "../const/ArticleCard.tsx";

export default function Article() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Box sx={{ mt: 8 }}>
            <SectionTitle title="Featured Article" />

            {/* Article Card */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <ArticleCard
                    title="The Art of Dark Design"
                    description="Explore insights on the art of dark design."
                    handleOpenModal={handleOpenModal}
                />
            </Box>

            {/* View Article Button */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                    onClick={handleOpenModal}
                    sx={{
                        backgroundColor: "#f20062",
                        color: "white",
                        px: 3,
                        py: 1.5,
                        "&:hover": { backgroundColor: "#d10050" },
                    }}
                >
                    View Article
                </Button>
            </Box>

            {/* Modal */}
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#1c1f28",
                        p: 4,
                        borderRadius: 2,
                        width: "80%",
                        maxWidth: 800,
                        boxShadow: 24,
                    }}
                >
                    <Button
                        onClick={handleCloseModal}
                        sx={{ color: "#f20062", fontWeight: "bold", float: "right" }}
                    >
                        X
                    </Button>
                    <Typography variant="h5" sx={{ color: "#ffc000", fontWeight: "bold" }}>
                        The Art of Dark Design
                    </Typography>
                    <Typography sx={{ mt: 2, opacity: 0.8 }}>
                        Dark design isn’t just about color; it’s about creating an immersive user experience that feels
                        mysterious and sophisticated. This article explores the intricacies of dark design and how it
                        elevates the overall visual appeal and usability of modern digital interfaces.
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}
