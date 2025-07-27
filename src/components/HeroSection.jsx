import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { colors } from '../theme/colors';

export default function HeroSection() {
  return (
    <Box 
      id="accueil" 
      sx={{ 
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 6 },
        pb: { xs: 4, md: 6 },
        bgcolor: colors.tint.tint5,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 2, md: 3 }} 
          alignItems="center"
          direction="row"
          sx={{ minHeight: { md: '300px' } }}
        >
          {/* Text Content - Left Side */}
          <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            // Make the left section a bit less wide
            width: { xs: '100%', md: '36%' },
            maxWidth: { xs: '100%', md: '400px' },
            minWidth: { md: '280px' },
            mx: { xs: 'auto', md: 0 }
          }}>
            <Box 
              sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                px: { xs: 2, md: 0 },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                order: { xs: 1, md: 1 }
              }}
            >
              <Typography 
                variant="h1" 
                sx={{
                  fontWeight: 700,
                  color: colors.neutral.black,
                  mb: 2,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'left' },
                  width: '100%'
                }}
              >
                Stockez et gérez vos{' '}
                <Box component="span" sx={{ color: colors.primary.main }}>
                  Terraform State Files
                </Box>
                {' '}en toute sécurité
              </Typography>

              <Typography 
                variant="h6" 
                sx={{
                  color: colors.neutral.darkGrey,
                  mb: 3,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '100%',
                  textAlign: { xs: 'center', md: 'justify' }
                }}
              >
                Haute disponibilité, chiffrement AES-256, et gouvernance complète 
                pour vos infrastructures cloud.
              </Typography>

              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  href="#commencer"
                  sx={{ 
                    bgcolor: colors.primary.main,
                    color: colors.neutral.white,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': { 
                      bgcolor: colors.shade.shade3,
                      boxShadow: `0 8px 25px ${colors.primary.main}30`
                    }
                  }}
                >
                  Commencer maintenant
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Illustration - Right Side */}
          <Grid item xs={12} md={8}>
            <Box 
              sx={{ 
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                minHeight: { xs: 300, md: 400 },
                mt: { xs: 4, md: 0 },
                px: { md: 2 },
                height: '100%',
                order: { xs: 2, md: 2 }
              }}
            >
              <img 
                src="/hero.png" 
                alt="TerraHarbor Hero" 
                style={{
                  width: '100%',
                  maxWidth: '650px',
                  height: 'auto'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
