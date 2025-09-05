import { Container, Typography, Paper, Box, Avatar, Grid } from '@mui/material';
import { colors } from '../theme/colors';

const personas = [
  {
    role: 'Cloud Architect',
    desc: "Deploys infrastructure with Terraform. Needs a reliable, secure, and versioned backend to manage complex states.",
    avatar: '☁️',
  },
  {
    role: 'Project Administrator',
    desc: "Manages teams, projects, and access tokens. Wants granular access control and complete audit features.",
    avatar: '🗂️',
  },
  {
    role: 'DevOps Engineer',
    desc: "Automates deployments and infrastructure management. Needs a reliable, secure Terraform backend that's easy to integrate into CI/CD pipelines.",
    avatar: '🔧',
  },
];

export default function UsersSection() {
  return (
    <Box 
      id="utilisateurs" 
      sx={{ 
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 }, 
        bgcolor: colors.tint.tint5 
      }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{
              fontWeight: 700,
              color: colors.neutral.black,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            For Whom?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{
              color: colors.neutral.darkGrey,
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Designed to meet the needs of all technical profiles
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {personas.map((persona, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  width: '100%',
                  maxWidth: 320,
                  height: '100%',
                  p: 4,
                  bgcolor: colors.neutral.white,
                  borderRadius: 3,
                  border: `1px solid ${colors.neutral.lightGrey}`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 24px ${colors.neutral.grey}20`,
                    bgcolor: colors.neutral.white
                  }
                }}
              >
                <Avatar 
                  sx={{ 
                    width: 80,
                    height: 80,
                    bgcolor: colors.primary.main,
                    fontSize: '2.5rem',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  {persona.avatar}
                </Avatar>
                
                <Typography 
                  variant="h6" 
                  sx={{
                    fontWeight: 600,
                    color: colors.neutral.black,
                    mb: 2,
                    minHeight: '1.5em'
                  }}
                >
                  {persona.role}
                </Typography>
                
                <Typography 
                  sx={{
                    color: colors.neutral.darkGrey,
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {persona.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
