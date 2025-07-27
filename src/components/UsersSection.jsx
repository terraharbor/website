import { Container, Typography, Paper, Box, Avatar, Grid } from '@mui/material';
import { colors } from '../theme/colors';

const personas = [
  {
    role: 'Cloud Architect',
    desc: "Déploie l'infrastructure avec Terraform. Besoin d'un backend fiable, sécurisé et versionné pour gérer les states complexes.",
    avatar: '☁️',
  },
  {
    role: 'Project Admin',
    desc: "Gère les équipes, projets et tokens d'accès. Veut du contrôle d'accès granulaire et des fonctionnalités d'audit complètes.",
    avatar: '🗂️',
  },
  {
    role: 'DevOps Engineer',
    desc: "Automatise les déploiements et la gestion des infrastructures. A besoin d'un backend Terraform fiable, sécurisé et facile à intégrer dans les pipelines CI/CD.",
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
            Pour qui&nbsp;?
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
            Conçu pour répondre aux besoins de tous les profils techniques
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
