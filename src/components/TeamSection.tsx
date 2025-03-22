import { Box } from "@mui/material";
import { TeamCard } from "../const/TeamCard.tsx";
import { SectionTitle } from "../const/SectionTitle.tsx";

interface TeamMember {
    name: string;
    about: string;
    linkedin: string;
    photoUrl: string;  // Add the profile photo URL here
}

interface TeamSectionProps {
    title: string;
    teamMembers: TeamMember[];
}

export const TeamSection = ({ title, teamMembers }: TeamSectionProps) => (
    <Box sx={{ mt: 8 }}>
        <SectionTitle title={title} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", mt: 4 }}>
            {teamMembers.map((member, index) => (
                <Box key={index} sx={{ flex: "1 1 30%", minWidth: 300 }}>
                    <TeamCard
                        title={member.name}
                        about={member.about}
                        linkedin={member.linkedin}
                        photoUrl={member.photoUrl}  // Pass the photoUrl here
                    />
                </Box>
            ))}
        </Box>
    </Box>
);
