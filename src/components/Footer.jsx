import { Box, Container, Grid, Link, Typography, IconButton, Divider, TextField, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscordIcon from '@mui/icons-material/Forum';
import SendIcon from '@mui/icons-material/Send';
import { colors } from '../theme/colors';

const footerSections = [
  {
    title: 'Produit',
    links: [
      { label: 'Guide de démarrage', href: '#guide' },
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Tarifs', href: '#pricing' },
      { label: 'Sécurité', href: '#security' }
    ]
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Support', href: '#' }
    ]
  }
];

const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com/terraharbor', label: 'GitHub' },
  { icon: TwitterIcon, href: 'https://twitter.com/terraharbor', label: 'Twitter' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/terraharbor', label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: colors.secondary.main, color: colors.neutral.white }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Brand section */}
          <Grid item xs={12} lg={3}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <img
                  src="/logob.png"
                  alt="TerraHarbor Logo"
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700,
                    color: colors.neutral.white
                  }}
                >
                  TerraHarbor
                </Typography>
              </Box>
              
              <Typography 
                variant="body1" 
                sx={{
                  color: colors.neutral.lightGrey,
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: 300
                }}
              >
                La solution complète pour gérer vos fichiers Terraform state en toute sécurité. 
                Haute disponibilité, chiffrement et gouvernance inclus.
              </Typography>
              
              {/* Social links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <IconButton 
                      key={index}
                      href={social.href}
                      sx={{
                        color: colors.neutral.lightGrey,
                        bgcolor: `${colors.neutral.white}05`,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: colors.primary.main,
                          color: colors.neutral.white,
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <IconComponent />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={4} lg={2} key={index}>
              <Typography 
                variant="h6" 
                sx={{
                  fontWeight: 600,
                  color: colors.neutral.white,
                  mb: 3
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex}
                    href={link.href} 
                    sx={{
                      color: colors.neutral.lightGrey,
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: colors.primary.main,
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter section */}
          <Grid item xs={12} lg={3}>
            <Typography 
              variant="h6" 
              sx={{
                fontWeight: 600,
                color: colors.neutral.white,
                mb: 3
              }}
            >
              Restez informé
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{
                color: colors.neutral.lightGrey,
                mb: 3,
                lineHeight: 1.6
              }}
            >
              Recevez les dernières actualités et mises à jour de TerraHarbor.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                placeholder="Votre adresse email"
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: `${colors.neutral.white}10`,
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: `${colors.neutral.lightGrey}30`,
                    },
                    '&:hover fieldset': {
                      borderColor: `${colors.neutral.lightGrey}50`,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.primary.main,
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    color: colors.neutral.white,
                    '&::placeholder': {
                      color: colors.neutral.lightGrey,
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: colors.primary.main,
                  borderRadius: 2,
                  minWidth: 'auto',
                  px: 2,
                  '&:hover': {
                    bgcolor: colors.primary.dark || colors.primary.main,
                    transform: 'translateY(-1px)'
                  }
                }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ 
          my: 6, 
          borderColor: `${colors.neutral.lightGrey}20`,
          bgcolor: `${colors.neutral.lightGrey}20`
        }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'flex-start' },
          gap: 2
        }}>
          <Typography 
            variant="body2" 
            sx={{
              color: colors.neutral.grey,
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            © 2025 TerraHarbor – Tous droits réservés.
          </Typography>
          
          <Box sx={{ 
            display: 'flex',
            gap: 4,
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'right' }
          }}>
            <Link 
              href="#privacy" 
              sx={{
                color: colors.neutral.grey,
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: colors.primary.main }
              }}
            >
              Politique de confidentialité
            </Link>
            <Link 
              href="#terms" 
              sx={{
                color: colors.neutral.grey,
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: colors.primary.main }
              }}
            >
              Conditions d'utilisation
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}