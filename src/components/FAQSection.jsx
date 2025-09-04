import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colors } from '../theme/colors';

const faqs = [
  { 
    q: 'Why use TerraHarbor instead of AWS S3, for example?', 
    a: 'TerraHarbor offers advanced governance with granular access control, full audit, smart versioning, and automatic encryption. Unlike other remote backends, you get a dedicated interface and features designed specifically for Terraform.' 
  },
  { 
    q: 'How does encryption work?', 
    a: 'We use AES-256-GCM with automatic key management. Each state file is encrypted individually with a unique key derived from your Terraform configuration, ensuring maximum security.' 
  },
  { 
    q: 'Can I deploy automatically?', 
    a: 'Absolutely! TerraHarbor is designed to integrate seamlessly into your CI/CD pipelines. Deploy with Docker, or with our official Helm charts with minimal configuration.' 
  },
  {
    q: 'What is the compatibility with Terraform?',
    a: 'TerraHarbor implements the standard Terraform HTTP Backend API, ensuring full compatibility with all Terraform versions. No changes to your existing Terraform code are required.'
  }
];

export default function FAQSection() {
  return (
    <Box 
      id="faq" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 }, 
        bgcolor: colors.neutral.white 
      }}>
      <Container maxWidth="md">
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
            Frequently Asked Questions
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
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              elevation={0}
              sx={{ 
                mb: 2,
                bgcolor: colors.tint.tint5,
                border: `1px solid ${colors.neutral.lightGrey}`,
                borderRadius: 2,
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                  bgcolor: colors.neutral.white,
                  borderColor: colors.primary.main,
                  boxShadow: `0 4px 12px ${colors.neutral.grey}20`
                }
              }}
            >
              <AccordionSummary 
                expandIcon={
                  <ExpandMoreIcon sx={{ color: colors.primary.main }} />
                }
                sx={{
                  py: 2,
                  px: 3,
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{
                    fontWeight: 600,
                    color: colors.neutral.black,
                    fontSize: '1.1rem'
                  }}
                >
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography 
                  sx={{
                    color: colors.neutral.darkGrey,
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}
                >
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
