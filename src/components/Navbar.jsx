import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { colors } from '../theme/colors';

const sections = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'fonctionnalites', label: 'Fonctionnalités' },
  { id: 'utilisateurs', label: 'Utilisateurs' },
  { id: 'faq', label: 'FAQ' },
];

export default function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: colors.neutral.white,
        borderBottom: `1px solid ${colors.neutral.lightGrey}`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        py: 1.5,
        maxWidth: '1200px',
        width: '100%',
        mx: 'auto'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img 
            src={`${import.meta.env.BASE_URL}logo3.jpg`} 
            alt="TerraHarbor Logo" 
            width={60} 
            height={60}
            style={{ borderRadius: '8px' }}
          />
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              color: colors.neutral.black,
              letterSpacing: '-0.025em'
            }}
          >
            TerraHarbor
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6 }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              href={`#${section.id}`}
              sx={{ 
                color: colors.neutral.darkGrey, 
                textTransform: 'none', 
                fontWeight: 750,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: colors.tint.tint5,
                  color: colors.neutral.black
                }
              }}
            >
              {section.label}
            </Button>
          ))}
        </Box>

        <Button
          variant="contained"
          href="#commencer"
          sx={{ 
            textTransform: 'none',
            bgcolor: colors.primary.main,
            color: colors.neutral.white,
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            boxShadow: 'none',
            '&:hover': { 
              bgcolor: colors.shade.shade3,
              boxShadow: `0 4px 12px ${colors.primary.main}40`
            }
          }}
        >
          Démarrer
        </Button>
      </Toolbar>
    </AppBar>
  );
}
