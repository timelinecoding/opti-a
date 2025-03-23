import { Box, Button, Modal, Typography } from "@mui/material";
import { SectionTitle } from "../const/SectionTitle.tsx";
import { useState } from "react";
import ArticleCard from "../const/ArticleCard.tsx";
import ReusableImage from "../const/ReusableImage"; // Adjust the import path as necessary

export default function Article() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Box sx={{ mt: 8 }}>
            <SectionTitle title="Featured Article" />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <ArticleCard
                    title="Agentic Optimization"
                    description="Explore insights on the art of dark design."
                    handleOpenModal={handleOpenModal}
                />
            </Box>

            <Box sx={{ mt: 4, textAlign: "center" }}>
                
                <Button component="a" href="/OptiA_Presentation.pdf" download sx={
                    {
                        backgroundColor: "#f20062",
                        color: "white",
                        px: 3,
                        py: 1.5,
                        "&:hover": { backgroundColor: "#d10050" },
                    }
                }>
                    Download Article
                </Button>
            </Box>

            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#1c1f28",
                        p: 3,
                        borderRadius: 2,
                        width: "80%",
                        height: "auto",
                        maxHeight: '80vh',
                        maxWidth: '75vw',
                        boxShadow: 24,
                        overflowY: 'auto',
                        display: "flex",
                        flexDirection: "column",
                        // Responsive design for smaller screens
                        "@media (max-width: 600px)": {
                            maxWidth: '90vw',

                        },
                    }}
                >
                    <Box sx={{ position: "sticky", top: 0, zIndex: 1 }}>
                        <Button
                            onClick={handleCloseModal}
                            sx={{ color: "#f20062", fontWeight: "bold", float: "right" }}
                        >
                            X
                        </Button>
                        <Typography variant="h5" sx={{ color: "#ffc000", fontWeight: "bold" }}>
                            Agentic Optimization
                        </Typography>
                    </Box>
                    <Box sx={{
                        mt: 2, overflowY: "auto", maxHeight: "65vh", p: 2,
                        // Responsive design for smaller screens
                        "@media (max-width: 600px)": {
                            padding: '4px',

                        },
                    }}>
                        <Typography sx={{ opacity: 0.8 }}>
                            <h2>Introduction</h2>
                            <p>
                                Everyone loves camping! But knowing what to pack and balancing necessity with weight limitations can be challenging...
                            </p>

                            {/* Use the reusable image component */}
                            <ReusableImage
                                src="/opti-a_logo.png"
                                alt="Dark Design"
                            />

                            <h2>What is Optimization?</h2>
                            <p>
                                Optimization problems involve finding the best possible solution by maximizing or minimizing an objective while adhering to certain constraints...
                            </p>
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
