import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { colors } from '../theme/colors';
// Import MUI icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const features = [
  { 
    title: 'Stockage Sécurisé', 
    desc: 'Chiffrement AES-256-GCM avec gestion automatique des clés.',
    icon: <LockOutlinedIcon sx={{ fontSize: 32, color: colors.primary.main, mb: 1 }} />
  },
  { 
    title: 'Versioning & Diff', 
    desc: 'Suivi des versions automatique, comparaison visuelle et restauration en un clic.',
    icon: <HistoryEduOutlinedIcon sx={{ fontSize: 32, color: colors.primary.main, mb: 1 }} />
  },
  { 
    title: 'Contrôle d\'accès', 
    desc: 'Droits granulaires configurables par projet, utilisateur ou équipe avec audit complet.',
    icon: <VpnKeyOutlinedIcon sx={{ fontSize: 32, color: colors.primary.main, mb: 1 }} />
  },
  { 
    title: 'Audit et Historique', 
    desc: 'Journalisation complète des actions et traçabilité des accès aux fichiers state.',
    icon: <ListAltOutlinedIcon sx={{ fontSize: 32, color: colors.primary.main, mb: 1 }} />
  },
  { 
    title: 'API REST Complète', 
    desc: 'Endpoints Terraform officiels avec authentification JWT et documentation interactive.',
    icon: <ApiOutlinedIcon sx={{ fontSize: 32, color: colors.primary.main, mb: 1 }} />
  },
  { 
    title: 'Interface Moderne', 
    desc: 'Dashboard React intuitif pour gérer projets, équipes et permissions facilement.',
    icon: <DashboardOutlinedIcon sx={{ fontSize: 32, color: colors.primary.main, mb: 1 }} />
  },
];

export default function FeaturesSection() {
  return (
    <Box 
      id="fonctionnalites" 
      sx={{ 
        py: { xs: 4, md: 6 }, 
        bgcolor: colors.neutral.white 
      }}
    >
      <Container maxWidth="lg" sx={{ maxWidth: '1200px' }}>
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
            Pourquoi utiliser TerraHarbor ?
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
            Tout ce dont vous avez besoin pour gérer vos infrastructures Terraform en toute sécurité
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={3} 
          rowSpacing={0}       // reduce vertical space between rows
          columnSpacing={3}    // keep horizontal spacing nice and wide
          justifyContent="center" 
          alignItems="stretch"
        >
          {features.map((feature, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} // 4 per row on md+ screens
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card 
                elevation={0} 
                sx={{ 
                  width: { xs: '100%', sm: '100%', md: '100%' }, // let Grid control width
                  maxWidth: 300, // optional: limit max width for aesthetics
                  minWidth: 0,
                  height: '80%',
                  minHeight: 190,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  bgcolor: colors.tint.tint5,
                  borderRadius: 3,
                  p: 2,
                  border: `1px solid ${colors.neutral.lightGrey}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 24px ${colors.neutral.grey}20`,
                    borderColor: colors.primary.main
                  }
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 0.5 }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      color: colors.neutral.black,
                      mb: 2
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    sx={{
                      color: colors.neutral.darkGrey,
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
