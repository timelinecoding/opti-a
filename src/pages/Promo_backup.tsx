// import {useState} from "react";
// import {Box, Button, Card, CardContent, Grid, Modal, Paper, Typography} from "@mui/material";
//
// // SectionTitle component for consistency
// const SectionTitle = ({title}: { title: string }) => (
//     <Typography variant="h4" sx={{fontWeight: "bold", textTransform: "uppercase", color: "#ffc000", letterSpacing: 2}}>
//         {title}
//     </Typography>
// );
//
// const StyledCard = ({title, description, link}: { title: string; description: string; link: string }) => (
//     <Card
//         sx={{
//             backgroundColor: "#1c1f28",
//             p: 2,
//             borderRadius: 2,
//             boxShadow: 3,
//             transition: "transform 0.3s ease-in-out",
//             "&:hover": {transform: "scale(1.05)", boxShadow: 6},
//         }}
//     >
//         <CardContent>
//             <Typography variant="h6" sx={{color: "#ffc000", fontWeight: "bold"}}>
//                 {title}
//             </Typography>
//             <Typography sx={{mt: 1, opacity: 0.75}}>{description}</Typography>
//             <Typography
//                 component="a"
//                 href={link}
//                 sx={{mt: 2, display: "block", color: "#f20062", "&:hover": {color: "#d10050"}}}
//             >
//                 Read more
//             </Typography>
//         </CardContent>
//     </Card>
// );
//
// const TeamMember = ({name, role}: { name: string; role: string }) => (
//     <StyledCard title={name} description={role} link="#"/>
// );
//
// const Home = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//
//     return (
//         <Box sx={{minHeight: "100vh", backgroundColor: "#14171e", color: "white", p: 6, textAlign: "center"}}>
//             {/* Hero Section */}
//             <Paper
//                 sx={{
//                     position: "relative",
//                     width: "100%",
//                     height: 300,
//                     background: "linear-gradient(to right, #f20062, #14171e, transparent)",
//                     borderRadius: 2,
//                     overflow: "hidden",
//                     mb: 8,
//                 }}
//             >
//                 <Box sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
//                     <Typography variant="h3" sx={{fontWeight: "bold"}}>
//                         Welcome to the Darker Side
//                     </Typography>
//                     <Typography sx={{mt: 2}}>Embrace the mystery, elevate your experience.</Typography>
//                 </Box>
//             </Paper>
//
//             {/* About Section */}
//             <SectionTitle title="About Us"/>
//             <Typography sx={{mt: 2, opacity: 0.8}}>
//                 Darker Side is a creative space where dark aesthetics and minimalism come together to offer a truly
//                 immersive experience.
//             </Typography>
//
//             {/* Featured Articles */}
//             <Box sx={{mt: 8}}>
//                 <SectionTitle title="Featured Articles"/>
//                 <Grid container spacing={4} sx={{mt: 4}}>
//                     <Grid item xs={12} md={4}>
//                         <StyledCard title="The Art of Dark Design"
//                                     description="Explore how dark design elevates user experience."
//                                     link="/blog/dark-design"/>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <StyledCard title="Mystery in Minimalism"
//                                     description="Discover how minimalism plays a key role in creating a mysterious ambiance."
//                                     link="/blog/minimalism"/>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <StyledCard title="The Evolution of Dark Themes"
//                                     description="A deep dive into how dark themes have evolved over time."
//                                     link="/blog/dark-themes"/>
//                     </Grid>
//                 </Grid>
//             </Box>
//
//             {/* Presentation Slides */}
//             <Box sx={{mt: 8}}>
//                 <SectionTitle title="Presentation Slides"/>
//                 <Typography sx={{mt: 2, opacity: 0.8}}>
//                     Download our presentation slides to explore our vision and designs in more detail.
//                 </Typography>
//                 <Box sx={{mt: 4, display: "flex", justifyContent: "center", gap: 2}}>
//                     <Button onClick={() => setIsModalOpen(true)} sx={{
//                         backgroundColor: "#f20062",
//                         color: "white",
//                         px: 3,
//                         py: 1.5,
//                         "&:hover": {backgroundColor: "#d10050"}
//                     }}>
//                         Preview Slides
//                     </Button>
//                     <Button
//                         component="a"
//                         href="/path/to/slides.pptx"
//                         download
//                         sx={{
//                             backgroundColor: "#f20062",
//                             color: "white",
//                             px: 3,
//                             py: 1.5,
//                             "&:hover": {backgroundColor: "#d10050"}
//                         }}
//                     >
//                         Download Slides
//                     </Button>
//                 </Box>
//             </Box>
//
//             {/* Modal */}
//             <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         backgroundColor: "#1c1f28",
//                         p: 4,
//                         borderRadius: 2,
//                         width: "80%",
//                         maxWidth: 800,
//                         boxShadow: 24,
//                     }}
//                 >
//                     <Button onClick={() => setIsModalOpen(false)}
//                             sx={{color: "#f20062", fontWeight: "bold", float: "right"}}>
//                         X
//                     </Button>
//                     <iframe
//                         width="100%"
//                         height="400"
//                         src="https://docs.google.com/presentation/d/e/2PACX-1vTJlLbMC-pGRRttfnXmT6YzQ1XyJZyI-BXMb-BB-xxj_Ub6kIMt7dglFqGxxsBxmwzA4fuBPLcqT2Ub7/embed?start=true&loop=true&delayms=5000"
//                         frameBorder="0"
//                         allowFullScreen
//                     ></iframe>
//                 </Box>
//             </Modal>
//
//             {/* Meet the Team */}
//             <Box sx={{mt: 8}}>
//                 <SectionTitle title="Meet the Team"/>
//                 <Grid container spacing={4} sx={{mt: 4}}>
//                     <Grid item xs={12} md={4}>
//                         <TeamMember name="John Doe" role="Lead Designer"/>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <TeamMember name="Jane Smith" role="Lead Developer"/>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <TeamMember name="Sam Lee" role="Project Manager"/>
//                     </Grid>
//                 </Grid>
//             </Box>
//
//             {/* Footer */}
//             <Box sx={{mt: 8, opacity: 0.6}}>
//                 &copy; 2025 Darker Side. All rights reserved.
//                 <Box sx={{mt: 2}}>
//                     <Typography component="a" href="/terms"
//                                 sx={{mx: 1, textDecoration: "underline", cursor: "pointer"}}>
//                         Terms of Service
//                     </Typography>
//                     |
//                     <Typography component="a" href="/privacy"
//                                 sx={{mx: 1, textDecoration: "underline", cursor: "pointer"}}>
//                         Privacy Policy
//                     </Typography>
//                 </Box>
//             </Box>
//
//             {/* Scroll-to-Top Button */}
//             <Button
//                 sx={{
//                     position: "fixed",
//                     bottom: 16,
//                     right: 16,
//                     backgroundColor: "#f20062",
//                     color: "white",
//                     borderRadius: "50%",
//                     width: 48,
//                     height: 48,
//                     boxShadow: 3,
//                     "&:hover": {backgroundColor: "#d10050"},
//                 }}
//                 onClick={() => window.scrollTo(0, 0)}
//             >
//                 ↑
//             </Button>
//         </Box>
//     );
// };
//
// export default Home;