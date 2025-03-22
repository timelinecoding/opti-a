import {Typography} from "@mui/material";
import {colors} from "./Colors.tsx";


export const SectionTitle = ({ title } : {title: string }) => (
    <Typography variant="h4" sx={{ fontWeight: "bold", textTransform: "uppercase", color: colors.accent, letterSpacing: 2,
        fontFamily: "Roboto Slab",
        "@media (max-width: 600px)": {
        fontSize: '1.5rem',
    },
    }}>
        {title}
    </Typography>
);
