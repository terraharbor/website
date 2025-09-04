import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { colors } from '../theme/colors';

export default function CTASection() {
  return (
    <Box 
      id="commencer"
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 }, 
        bgcolor: colors.primary.main,
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* Background decoration */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.shade.shade3} 100%)`,
        zIndex: 0
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography 
                variant="h2" 
                sx={{
                  fontWeight: 700,
                  color: colors.neutral.white,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                Ready to secure your{' '}
                <Box component="span" sx={{ 
                  background: `linear-gradient(45deg, ${colors.tint.tint1}, ${colors.neutral.white})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Terraform infrastructures
                </Box>{' '}
                ?
              </Typography>
              <Typography 
                variant="h5" 
                sx={{
                  color: colors.neutral.white,
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.5
                }}
              >
                Join the teams that trust TerraHarbor to manage state files with security and simplicity.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: 3,
              alignItems: { xs: 'center', lg: 'flex-end' }
            }}>
              <Button
                variant="contained"
                href="https://github.com/terraharbor"
                size="large"
                sx={{
                  bgcolor: colors.neutral.white,
                  color: colors.primary.main,
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: `0 8px 32px ${colors.neutral.black}20`,
                  minWidth: 280,
                  '&:hover': { 
                    bgcolor: colors.tint.tint5,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 40px ${colors.neutral.black}30`
                  }
                }}
              >
                Let's Start
              </Button>
              
            
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
